import React from "react";
import classList from "react-classlist-helper";

export default function VolumeSelect({
  items,
  className,
  onClick,
  selectedIndex = 0,
}) {
  return (
    <div
      className={classList({
        "flex gap-3 sm:gap-5 w-full": true,
        [className]: !!className,
      })}
    >
      {items.map(({ volume }, idx) => (
        <Tag
          key={idx}
          isSelected={idx === selectedIndex}
          volume={volume}
          onClick={() => onClick(idx)}
        />
      ))}
    </div>
  );
}

function Tag({ volume, onClick, isSelected }) {
  return (
    <div
      className={classList({
        "flex items-center border-2 border-grey rounded cursor-pointer": true,
        "hover:text-yellow hover:border-yellow duration-300": true,
        "px-2 sm:px-3 h-9 sm:h-12 text-16 sm:text-24": true,
        "border-yellow bg-grey text-yellow": isSelected,
      })}
      onClick={onClick}
    >
      <span className="font-num mr-1">{volume}</span>
      <span>мл</span>
    </div>
  );
}
