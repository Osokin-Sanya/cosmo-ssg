import React from "react";
import { classList } from "@utils/index";
import { window } from "browser-monads";

import Image from "./Image";

export default function ImageRhomb({ image, alt, className, position }) {
  const imageWrapperRef = React.useRef(null);
  const [{ width, height }, setSize] = React.useState({ width: 0, height: 0 });

  const handleSize = () => {
    // workaround gatsby image
    const image =
      imageWrapperRef.current?.querySelector("img") ||
      imageWrapperRef.current?.firstChild;

    setSize({
      width: image?.offsetWidth || 0,
      height: image?.offsetHeight || 0,
    });
  };

  React.useEffect(() => {
    window.addEventListener("resize", handleSize);
    return () => window.removeEventListener("resize", handleSize);
  }, []);

  React.useEffect(() => {
    if (!imageWrapperRef?.current) return;
    handleSize();
  }, [imageWrapperRef]);

  const size = `${width < height ? width : height}px`;

  return (
    <div className={classList({ [className]: !!className })}>
      <div
        ref={imageWrapperRef}
        className="relative flex items-center justify-center"
      >
        <Image image={image} alt={alt} className="z-10" />
        <div
          style={{ width: size, height: size }}
          className={classList({
            "absolute border border-grey rotate-45": true,
            [position]: !!position,
          })}
        />
      </div>
    </div>
  );
}
