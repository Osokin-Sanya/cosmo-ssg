import React from "react";
import { classList } from "@utils/index";

export default function AmountVisitors({ text, number, className }) {
  return (
    <div
      className={classList({
        "text-center w-40": true,
        [className]: !!className,
      })}
    >
      <div className="font-num text-64 text-center text-yellow border-b border-grey whitespace-nowrap">
        {number}
      </div>
      <p className="font-base text-18 text-center pt-3">{text}</p>
    </div>
  );
}
