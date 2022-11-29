import React from "react";
import Button from "./Button";
import SideSquares from "./SideSquares";
import { classList } from "@utils/index";

export default function ActionSection({ text = "Title", className }) {
  return (
    <div
      className={classList({
        "flex flex-col items-center relative gap-y-6 md:gap-y-12 px-3 my-20 md:my-28 2xl:my-40 z-10": true,
        [className]: !!className,
      })}
    >
      <span className="text-16 md:text-24 text-center max-w-xl w-full leading-loose">
        {text}
      </span>
      <Button text="Записатися" />

      <SideSquares
        className="-z-10"
        size="w-12 h-12 md:w-20 md:h-20 xl:w-40 xl:h-40"
        position="top-[-65%] xl:top-0 xl:left-[-10%]"
      />
      <SideSquares
        className="-z-10 rotate-180 xl:rotate-0 xl:justify-end"
        size="w-12 h-12 md:w-20 md:h-20 xl:w-40 xl:h-40"
        position="top-[-65%] xl:top-[40%] flip-y"
      />
    </div>
  );
}
