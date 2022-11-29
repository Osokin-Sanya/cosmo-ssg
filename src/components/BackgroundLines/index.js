import React from "react";
import { classList } from "@utils/index";

import "./BackgroundLines.scss";

export default function BackgroundLines({ className, horizontalLines }) {
  const verticalOffset = className?.includes("left") ? "" : "left-[60%]";

  return (
    <>
      <div
        className={classList({
          "line line-vertical -z-10": true,
          [verticalOffset]: !!verticalOffset,
          [className]: !!className,
        })}
      />
      <div
        className={classList({
          "line line-horizontal line-horizontal-1": true,
          [horizontalLines]: !!horizontalLines,
        })}
      />
      <div
        className={classList({
          "line line-horizontal line-horizontal-2": true,
          [horizontalLines]: !!horizontalLines,
        })}
      />
    </>
  );
}
