import React from "react";
import Slider from "react-slick";

import Arrow from "../../images/arrow.svg";

import "./Carousel.scss";

const defaultSettings = {
  dots: false,
  autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 600,
  autoplaySpeed: 4_000,
  arrows: true,
  pauseOnHover: false,
  pauseOnDotsHover: false,
  pauseOnFocus: false,
};

const PAUSE_TIME = 5_000;

export default function Carousel({ children, ...props }) {
  if (!children) throw new Error("Pass children");

  const settings = { ...defaultSettings, ...props };

  const timer = React.useRef(null);
  const slider = React.useRef(null);

  const pause = () => {
    if (timer.current) clearTimeout(timer.current);

    slider.current.slickPause();

    timer.current = setTimeout(() => {
      clearTimeout(timer.current);
      slider?.current?.slickPlay();
      timer.current = null;
    }, PAUSE_TIME);
  };

  return (
    <Slider
      {...settings}
      ref={slider}
      swipeEvent={pause}
      // TODO: Use correct icon for this case
      // nextArrow={<NextArrow />}
      // prevArrow={<PrevArrow />}
      arrows={false}
      adaptiveHeight={true}
    >
      {children}
    </Slider>
  );
}

function NextArrow() {
  return (
    <div className="arrow right-0">
      <Arrow />
    </div>
  );
}

function PrevArrow() {
  return (
    <div className="arrow left-0">
      <Arrow />
    </div>
  );
}
