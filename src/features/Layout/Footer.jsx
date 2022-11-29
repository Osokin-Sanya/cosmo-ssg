import React from "react";
import NavigationList from "../NavigationList";
import { mergeClassList } from "@utils/index";

import InstagramIcon from "@images/socials-instagram.svg";
import PhoneIcon from "@images/socials-phone.svg";

const CONTACTS = [
  {
    title: "dr.revva",
    link: "https://www.instagram.com/dr.revva/",
    renderIcon: props => <InstagramIcon {...props} />,
  },
  {
    title: "+ 380(96)-286-49-94",
    link: "tel:+380(96)-286-49-94",
    renderIcon: props => <PhoneIcon {...props} />,
  },
];

export default function Footer() {
  return (
    <footer className="container flex items-center justify-center mx-auto my-6 md:flex-col 2xl:flex-row gap-y-6">
      <NavigationList className="justify-center hidden md:flex pr-3 lg:pr-8 xl:pr-16 2xl:pr-0" />
      <ContactItems />
    </footer>
  );
}

export function ContactItems({ className }) {
  return (
    <ul
      className={mergeClassList({
        "flex flex-col md:flex-row items-center gap-y-6": true,
        [className]: !!className,
      })}
    >
      {CONTACTS.map((item, key) => (
        <li
          className="flex items-center hover:text-yellow duration-300 whitespace-nowrap md:ml-6 2xl:ml-16"
          key={key}
        >
          {item.renderIcon({ className: "w-5 md:w-auto" })}
          <a className="ml-3 font-num text-18 sm:text-24" href={item.link}>
            {item.title}
          </a>
        </li>
      ))}
    </ul>
  );
}
