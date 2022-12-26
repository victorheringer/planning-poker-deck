import { useState, useEffect } from "react";

export default function useConnection() {
  const [connected, setNetwork] = useState(window.navigator.onLine);

  const updateNetwork = () => {
    setNetwork(window.navigator.onLine);
  };

  useEffect(() => {
    window.addEventListener("offline", updateNetwork);
    window.addEventListener("online", updateNetwork);

    return () => {
      window.removeEventListener("offline", updateNetwork);
      window.removeEventListener("online", updateNetwork);
    };
  }, []);

  return { connected };
}
