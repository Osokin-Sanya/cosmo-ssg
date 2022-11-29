import React from "react";
import { document } from "browser-monads";

const ROOT_ID = "___gatsby";

export default function useLockedBody(initLocked = false) {
  const [locked, setLocked] = React.useState(initLocked);

  React.useEffect(() => {
    if (!locked) return;

    // Save initial body style
    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;

    // Lock body scroll
    document.body.style.overflow = "hidden";

    // Get the scrollBar width
    const root = document.getElementById(ROOT_ID);
    const scrollBarWidth = root ? root.offsetWidth - root.scrollWidth : 0;

    // Avoid width reflow
    if (scrollBarWidth) {
      document.body.style.paddingRight = `${scrollBarWidth}px`;
    }

    return () => {
      document.body.style.overflow = originalOverflow;

      if (scrollBarWidth) {
        document.body.style.paddingRight = originalPaddingRight;
      }
    };
  }, [locked]);

  React.useEffect(() => {
    if (locked !== initLocked) {
      setLocked(initLocked);
    }
  }, [initLocked]);

  return [locked, setLocked];
}
