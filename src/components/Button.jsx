import React from "react";
import { classList, NOOP } from "@utils/index";

export default function Button({ text = "button", className, onClick = NOOP }) {
  const hoverCN =
    "hover:shadow-lg hover:shadow-stone-700 hover:opacity-80 duration-300";

  return (
    <button
      className={classList({
        "button rounded w-full max-w-[380px] h-9 sm:h-12 text-18 sm:text-24 bg-yellow text-black": true,
        [hoverCN]: true,
        [className]: !!className,
      })}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
