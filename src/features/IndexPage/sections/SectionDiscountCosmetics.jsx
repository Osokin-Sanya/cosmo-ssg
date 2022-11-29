import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import BackgroundLines from "@components/BackgroundLines";
import Button from "@components/Button";

const DISCOUNT_COSMETICS_SRC = "../../../images/discount-сosmetics.png";
const DISCOUNT_COSMETICS_ALT = "Discounts on professional cosmetics";

export default function SectionDiscountCosmetics() {
  return (
    <div className="flex justify-center items-center flex-col my-14 lg:my-40 px-3">
      <div className="flex justify-center w-force-full relative z-10">
        <BackgroundLines
          className="hidden lg:block"
          horizontalLines="my-3 lg:my-0"
        />
        <StaticImage
          className="h-[300px] md:h-[450px] lg:h-[600px] w-full"
          src={DISCOUNT_COSMETICS_SRC}
          alt={DISCOUNT_COSMETICS_ALT}
        />
        <div className="container absolute px-4 lg:px-6 py-7 lg:py-9">
          <div className="text-22 sm:text-24 md:text-36 lg:text-48 text-yellow leading-loose">
            Знижки на професійну косметику
          </div>
          <div className="text-16 sm:text-22 md:text-24 mt-3 lg:my-5">
            Обери щодений догляд
          </div>
          <Button className="hidden lg:block mt-8" text="Переглянути" />
        </div>
      </div>
      <Button className="lg:hidden mt-16" text="Переглянути" />
    </div>
  );
}
