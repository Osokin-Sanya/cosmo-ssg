import React from "react";
import { navigate } from "gatsby";
import { classList } from "@utils/index";
import NavigationList from "../NavigationList";
import { ContactItems } from "./Footer";
import Overlay from "@components/Overlay";

import useLockedBody from "../../hooks/useLockedBody";

import LogoSvg from "@images/logo.svg";

export default function Header() {
  return (
    <nav className="container mx-auto flex justify-between items-center my-2 sm:my-6 px-4">
      <Logo />
      <BurgerMenu className="md:hidden z-50" />
      <NavigationList className="hidden md:flex" />
    </nav>
  );
}

function BurgerMenu({ className }) {
  const [shown, setShown] = useLockedBody();
  const toggle = () => setShown(prev => !prev);

  const lineCN =
    "block absolute h-0.5 w-5 bg-current transform transition duration-300 ease-in-out";

  return (
    <>
      <div className={className} onClick={toggle}>
        <button className="text-white w-10 h-10 relative focus:outline-none">
          <div className="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <span
              className={classList({
                [lineCN]: true,
                "rotate-45": shown,
                "-translate-y-1.5": !shown,
              })}
            />
            <span
              className={classList({
                [lineCN]: true,
                "opacity-0": shown,
              })}
            />
            <span
              className={classList({
                [lineCN]: true,
                "-rotate-45": shown,
                "translate-y-1.5": !shown,
              })}
            />
          </div>
        </button>
      </div>

      <div
        className={classList({
          "top-0 right-0 w-10/12 bg-black fixed h-full z-40 ease-in-out duration-300": true,
          "translate-x-0": shown,
          "translate-x-full": !shown,
        })}
      >
        <div className="flex flex-col justify-between h-full pt-20 sm:pl-5 pb-6">
          <NavigationList className="flex-col items-start text-22 sm:text-24 gap-y-8" />
          <ContactItems className="items-start text-22 sm:text-24 gap-y-2 ml-3" />
        </div>
      </div>

      <Overlay isShown={shown} onClick={toggle} />
    </>
  );
}

function Logo() {
  return (
    <div className="flex cursor-pointer" onClick={() => navigate("/")}>
      <LogoSvg />
    </div>
  );
}
