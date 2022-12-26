import { useState, useEffect } from "react";
import { copyToClipboard } from "helpers";

export default function useShare(copyShareTimer: number = 3000) {
  const [isCopied, setIsCopied] = useState(false);
  const [shareError, setShareError] = useState(null);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (isCopied) {
      timeout = setTimeout(() => {
        setIsCopied(false);
      }, copyShareTimer);
    }

    return () => clearTimeout(timeout);
  }, [isCopied, copyShareTimer]);

  function share(text: string) {
    if (navigator.share) {
      navigator.share({ url: text }).catch(setShareError);
    } else {
      setIsCopied(true);
      copyToClipboard(text);
    }
  }

  return { isCopied, shareError, share };
}
