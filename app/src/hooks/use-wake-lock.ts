import { useState, useEffect } from "react";
import NoSleep from "nosleep.js";

export default function useWakeLock(enable: string) {
  const [isWakeLockEnabled, setIsWakeLockEnabled] = useState(false);
  const [noSleep] = useState(new NoSleep());
  const [sentinel, setSentinel] = useState(null);

  function fallback() {
    function enableNoSleep() {
      document.removeEventListener("click", enableNoSleep, false);
      noSleep.enable();
    }

    document.addEventListener("click", enableNoSleep, false);
  }

  useEffect(() => {
    if (enable !== "enable" || noSleep.isEnabled) {
      noSleep.disable();
      setIsWakeLockEnabled(false);
      return;
    }

    async function requestWakeLock() {
      let wakeLock = null;

      try {
        wakeLock = await (navigator as any).wakeLock.request("screen");
      } finally {
        setSentinel(wakeLock);
      }
    }

    if ("wakeLock" in navigator) {
      setIsWakeLockEnabled(true);
      requestWakeLock();
    } else {
      fallback();
    }
  }, [enable]);

  return { isWakeLockEnabled, sentinel };
}
