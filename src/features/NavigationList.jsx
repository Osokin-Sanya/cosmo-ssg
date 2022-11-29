import React from "react";
import ListItem from "@components/ListItem";
import { mergeClassList } from "@utils/index";

const NAV_LINKS = [
  {
    link: "/about",
    text: "Про мене",
  },
  {
    link: "/services",
    text: "Послуги",
  },
  {
    link: "/products",
    text: "Магазин",
  },
];

export default function NavigationList({ className }) {
  return (
    <ul
      className={mergeClassList({
        "flex items-center": true,
        [className]: !!className,
      })}
    >
      {NAV_LINKS.map((item, key) => (
        <ListItem
          key={key}
          {...item}
          className="whitespace-nowrap ml-3 lg:ml-8 xl:ml-16"
        />
      ))}
    </ul>
  );
}
