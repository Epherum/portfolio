import React, { createContext, useEffect, useState } from "react";

export const SmoothScrollContext = createContext({
  scroll: null,
});

export const SmoothScrollProvider = ({ children, options }) => {
  const [scroll, setScroll] = useState(null);

  useEffect(() => {
    if (!scroll) {
      const delay = 5000; // 5 seconds delay

      const timer = setTimeout(async () => {
        try {
          const LocomotiveScroll = (await import("locomotive-scroll")).default;

          setScroll(
            new LocomotiveScroll({
              el:
                document.querySelector("[data-scroll-container]") ?? undefined,
              ...options,
            })
          );
        } catch (error) {
          throw Error(`[SmoothScrollProvider]: ${error}`);
        }
      }, delay);

      return () => clearTimeout(timer);
    }

    return () => {
      scroll && scroll.destroy();
    };
  }, [scroll]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <SmoothScrollContext.Provider value={{ scroll }}>
      {children}
    </SmoothScrollContext.Provider>
  );
};

SmoothScrollContext.displayName = "SmoothScrollContext";
SmoothScrollProvider.displayName = "SmoothScrollProvider";
