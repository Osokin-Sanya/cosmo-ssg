import React from "react";
import { Link } from "gatsby";
import { classList } from "@utils/index";

import Rectangle from "@images/rectangle.svg";

export default function ListItem({ text, link, className, classNameIcon }) {
  return (
    <li
      className={classList({
        [className]: !!className,
        "flex items-center": true,
      })}
    >
      <div
        className={classList({
          "flex items-center justify-center w-3 h-3 mr-3": true,
          [classNameIcon]: !!classNameIcon,
        })}
      >
        <Rectangle />
      </div>

      {link ? (
        <Link to={link} className="hover:text-yellow duration-300">
          {text}
        </Link>
      ) : (
        text
      )}
    </li>
  );
}
