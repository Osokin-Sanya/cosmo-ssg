import React from "react";
import { classList } from "@utils/index";

export default function SideSquares({
  className,
  itemsClassName,
  size,
  position,
}) {
  return (
    <div
      className={classList({
        "absolute flex items-center left-0 right-0 top-0 bottom-0": true,
        [className]: !!className,
      })}
    >
      <div
        className={classList({
          "relative w-20 h-20": true,
          [size]: !!size,
          [position]: !!position,
        })}
      >
        <div
          className={classList({
            "absolute w-20 h-20 rotate-45 border rounded border-grey top-[40%] left-[75%]": true,
            [size]: !!size,
            [itemsClassName]: !!itemsClassName,
          })}
        />
        <div
          className={classList({
            "absolute w-20 h-20 rotate-45 border rounded border-grey": true,
            [size]: !!size,
            [itemsClassName]: !!itemsClassName,
          })}
        />
      </div>
    </div>
  );
}
