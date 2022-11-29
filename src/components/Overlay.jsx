import React from "react";
import { classList, NOOP } from "@utils/index";

export default function Overlay({ isShown, className, onClick = NOOP }) {
  return (
    <div
      className={classList({
        "absolute top-0 bottom-0 left-0 right-0 bg-black transition-opacity duration-300 z-30": true,
        "opacity-80 visible": isShown,
        "opacity-0 invisible": !isShown,
        [className]: !!className,
      })}
      onClick={onClick}
    />
  );
}
