import React from "react";

import Image from "./Image";

import { classList, NOOP } from "@utils/index";
import { DEFAULT_PRICE_INDEX } from "@utils/constants";

export default function ProductCard({
  title,
  image,
  manufacturer,
  prices,
  onClick = NOOP,
}) {
  const price = prices[DEFAULT_PRICE_INDEX].price;
  const animateCN = "transform transition duration-300";

  return (
    <div
      onClick={onClick}
      className={classList({
        "relative grid justify-items-center grid-flow-row group cursor-pointer hover:scale-110": true,
        [animateCN]: true,
      })}
    >
      <Image
        image={image}
        alt={title}
        className="max-w-[7rem] max-h-[200px] min-h-[200px]"
      />
      <span className="text-center text-18 w-11/12 truncate">{title}</span>
      <span className="text-center text-18 text-neutral-400">
        {manufacturer}
      </span>
      <span className="text-center text-yellow">
        <span className="font-num text-24 mr-1">{price}</span>
        <span className="text-22">грн</span>
      </span>

      <div
        className={classList({
          "absolute w-full h-full group-hover:scale-110 group-hover:shadow-2xl": true,
          [animateCN]: true,
        })}
      />
    </div>
  );
}
