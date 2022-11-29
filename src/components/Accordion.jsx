import React from "react";
import { classList } from "@utils/index";

import ArrowIcon from "../images/arrow.svg";

export default function Accordion({ items, className }) {
  const [activeIndex, setActiveIndex] = React.useState(-1);
  const itemsRef = React.useRef([]);

  React.useEffect(() => {
    itemsRef.current = itemsRef.current.slice(0, items.length);
  }, [items]);

  const onItemClick = index =>
    setActiveIndex(activeIndex === index ? -1 : index);

  const getItemStyle = index => {
    return activeIndex === index
      ? { maxHeight: `${itemsRef.current[index].scrollHeight}px` }
      : {};
  };

  const getArrowClassname = index =>
    activeIndex === index ? "-rotate-180" : "";

  const setRef = index => ref => {
    itemsRef.current[index] = ref;
  };

  return (
    <ul
      className={classList({
        "flex flex-col": true,
        [className]: !!className,
      })}
    >
      {items.map(({ title, content }, index) => {
        return (
          <div className="my-2" key={index}>
            <div
              className="flex flex-row items-center p-3 cursor-pointer"
              onClick={() => onItemClick(index)}
            >
              <CoolArrow className={getArrowClassname(index)} />
              {/* <Arrow className={getArrowClassname(index)} /> */}
              <span className="font-base text-18 sm:text-22 md:text-24 text-yellow ml-3">
                {title}
              </span>
            </div>
            <div
              ref={setRef(index)}
              style={getItemStyle(index)}
              className="overflow-hidden max-h-0 duration-500 transition-all"
            >
              <div className="font-base p-3">{content}</div>
            </div>
          </div>
        );
      })}
    </ul>
  );
}

function CoolArrow({ className }) {
  return (
    <div
      className={classList({
        "transform transition-transform duration-500": true,
        [className]: !!className,
      })}
    >
      <svg
        className="fill-current text-white h-6 w-6 transform transition-transform duration-500"
        viewBox="0 0 20 20"
      >
        <path d="M13.962,8.885l-3.736,3.739c-0.086,0.086-0.201,0.13-0.314,0.13S9.686,12.71,9.6,12.624l-3.562-3.56C5.863,8.892,5.863,8.611,6.036,8.438c0.175-0.173,0.454-0.173,0.626,0l3.25,3.247l3.426-3.424c0.173-0.172,0.451-0.172,0.624,0C14.137,8.434,14.137,8.712,13.962,8.885 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.148,17.521,17.521,14.147,17.521,10"></path>
      </svg>
    </div>
  );
}

// TODO: Let's discuss and remove or replace this shit
function Arrow({ className }) {
  return (
    <div
      className={classList({
        "transform transition-transform duration-500": true,
        [className]: !!className,
      })}
    >
      <ArrowIcon className="h-6 w-6 -rotate-90" />
    </div>
  );
}
