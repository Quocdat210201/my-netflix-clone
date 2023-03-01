import { useEffect, useState } from "react";
export const useViewport = () => {
  const [windowWith, setWindowWith] = useState(
    window.innerWidth || document.documentElement.clientWidth
  );

  useEffect(() => {
    const handleWindowWith = () => {
      const width = window.innerWidth || document.documentElement.clientWidth;
      setWindowWith(width);
    };
    handleWindowWith();
    window.addEventListener("resize", handleWindowWith);
    return () => {
      window.removeEventListener("resize", handleWindowWith);
    };
  }, []);
  return [windowWith]
};
