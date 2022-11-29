import React from "react";
import { classList } from "@utils/index";

import Rectangles from "../images/rectangles.svg";

export default function BaseCaption({ text = "Caption", className }) {
  return (
    <div
      className={classList({
        "flex items-center justify-center w-full": true,
        [className]: !!className,
      })}
    >
      <Rectangles className="ml-2" />
      <h2 className="text-center mx-2 sm:mx-5 text-22 sm:text-24 md:text-48 text-yellow leading-normal sm:leading-relaxed">
        {text}
      </h2>
      <Rectangles className="mr-2" />
    </div>
  );
}
