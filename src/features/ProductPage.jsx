import React from "react";

import Button from "@components/Button";
import ImageRhomb from "@components/ImageRhomb";
import BackgroundLines from "@components/BackgroundLines";
import VolumeSelect from "@components/VolumeSelect";
import BaseCaption from "@components/BaseCaption";
import { MarkdownResolver } from "@components/MarkdownResolver";
import AdaptiveTabs from "@components/AdaptiveTabs";
import ProductCarousel from "@components/ProductCarousel";

import { classList } from "@utils/index";
import { DEFAULT_PRICE_INDEX } from "@utils/constants";

import useStore from "./store";

export default function ProductPage({
  id,
  title,
  subTitle,
  manufacturer,
  image,
  prices,
  description,
  datails,
}) {
  const { products } = useStore();

  const { tabs, image: detailsImage } = datails;
  const [selectedPriceIndex, setSelectedPriceIndex] =
    React.useState(DEFAULT_PRICE_INDEX);

  const currentPrice = prices[selectedPriceIndex].price;
  const currentDiscount =
    Math.max(prices[selectedPriceIndex].oldPrice, 0) || null;

  return (
    <>
      <div className="grid justify-items-center lg:justify-items-start lg:grid-cols-2 gap-x-5 px-3 mt-6">
        <h1 className="text-22 sm:text-36 md:text-48 text-center lg:text-left text-yellow">
          {title}
        </h1>

        <ImageRhomb
          image={image}
          alt={title}
          className="mb-12 w-3/4 lg:w-auto lg:order-first lg:row-span-6"
          position="scale-75 -bottom-6"
        />

        <div className="mt-5 mb-3 lg:mb-6 text-16 sm:text-22 md:text-24 text-center lg:text-left opacity-75">
          {subTitle}
        </div>

        <VolumeSelect
          items={prices}
          onClick={setSelectedPriceIndex}
          selectedIndex={selectedPriceIndex}
          className="justify-center lg:justify-start flex-wrap"
        />

        <div className="flex flex-col w-full lg:flex-row items-center lg:items-start justify-center lg:justify-start my-5 lg:mt-12">
          <span className="relative flex lg:flex-col items-baseline lg:min-w-[10rem]">
            <span className="text-yellow ">
              <span className="font-num text-48 lg:text-64 mr-2">
                {currentPrice}
              </span>
              <span className="font-base text-24">грн</span>
            </span>

            <DiscountLabel
              price={currentDiscount}
              className={classList({
                "lg:absolute -bottom-6": true,
                "ml-2 lg:ml-0": !!currentDiscount,
              })}
            />
          </span>

          <Button text="Купити" className="" />
        </div>

        <MarkdownResolver
          className="flex flex-col gap-y-3 mt-3 lg:my-6 text-16 sm:text-22 md:text-24 leading-loose z-0"
          fallback="Опису нема"
        >
          {description}
        </MarkdownResolver>
      </div>

      <div className="my-8">
        <BaseCaption text="Товари цієї ж серії" className="mb-10" />
        <ProductCarousel items={products} />
      </div>

      <div className="my-20">
        <AdaptiveTabs tabs={tabs} image={detailsImage} alt={title} />
      </div>

      <div className="my-20">
        <BaseCaption text="Спеціально для вас" className="mb-10" />
        <ProductCarousel items={products} />
      </div>
    </>
  );
}

function DiscountLabel({ price, className }) {
  return (
    <span
      className={classList({
        "line-through transition-all duration-500 text-neutral-500": true,
        "opacity-0 invisible": !price,
        "opacity-70 visible": price,
        [className]: !!className,
      })}
    >
      {price && (
        <>
          <span className="font-num mr-1">{price}</span>
          <span className="font-base">грн</span>
        </>
      )}
    </span>
  );
}
