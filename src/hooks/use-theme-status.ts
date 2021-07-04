import { useState, useEffect } from "react";

const META_QUERY = "meta[name=theme-color]";

export default function useThemeStatus(color: string) {
  const [themeColor, setThemeColor] = useState(color);
  const [meta] = useState<Element | null>(document.querySelector(META_QUERY));

  useEffect(() => {
    meta?.setAttribute("content", themeColor);
  }, [themeColor]);

  return { themeColor, setThemeColor };
}
