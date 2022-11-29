import React from "react";
import { useState } from "react";
import { classList } from "@utils/index";

import "./ContentSwitcher.scss";

export function ContentSwitcher({ items, className }) {
  const [index, setIndex] = useState(0);

  return (
    <div
      className={classList({
        "flex flex-col items-center": true,
        [className]: !!className,
      })}
    >
      <div className="flex justify-around max-w-xl w-full mt-16 mb-12">
        {items.map((item, idx) => {
          return (
            <button
              key={idx}
              className={classList({
                "switcher-btn text-18 sm:text-22 md:text-24 text-yellow relative": true,
                active: index === idx,
              })}
              onClick={() => setIndex(idx)}
            >
              {item.title}
            </button>
          );
        })}
      </div>
      {items[index]?.content}
    </div>
  );
}
