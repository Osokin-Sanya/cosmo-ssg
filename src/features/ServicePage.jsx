import React from "react";

import Button from "@components/Button";
import ImageRhomb from "@components/ImageRhomb";
import BackgroundLines from "@components/BackgroundLines";
import ListItem from "@components/ListItem";

import { MarkdownResolver } from "@components/MarkdownResolver";
import AdaptiveTabs from "@components/AdaptiveTabs";

export default function ServicePage({
  title,
  price,
  image,
  datailsImage,
  description,
  datails: { isSingle, subServices, tabs },
}) {
  const alt = `Зображення для процедури - ${title}`;

  const contentTabClassName =
    "flex flex-col gap-y-3 text-16 sm:text-22 md:text-24 leading-loose";

  const subServiceContent = !isSingle ? (
    <div className={contentTabClassName}>
      {subServices?.map(({ title, price }, idx) => (
        <ListItem key={idx} text={`${title} - ${price}`} />
      ))}
    </div>
  ) : null;

  const subServiceTab = subServiceContent
    ? [{ title: "Вартiсть", content: subServiceContent }]
    : [];

  return (
    <>
      <h1 className="font-base my-5 lg:my-7 text-center text-22 sm:text-36 md:text-48 text-yellow relative z-10">
        {title}
      </h1>

      <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-x-4 px-3">
        <ImageRhomb
          image={image}
          alt={alt}
          className="px-3 my-6"
          position="bottom-0"
        />
        <MarkdownResolver
          className="flex flex-col gap-y-3 mt-3 lg:my-6 text-16 sm:text-22 md:text-24 leading-loose z-0"
          fallback={<EmptyDescription />}
        >
          {description}
        </MarkdownResolver>
      </div>

      <div className="relative my-20 md:my-28 xl:my-36 px-3 xl:z-0">
        <div className="flex flex-col xl:flex-row items-center xl:justify-around xl:py-10 gap-y-6">
          <div className="text-16 sm:text-22 md:text-24 text-center">
            Оберіть зручний для вас час
          </div>
          <Button text="Записатися" />
        </div>
        <BackgroundLines className="left-1/2" />
      </div>

      <div className="my-20">
        <AdaptiveTabs
          tabs={tabs}
          additionalTabs={subServiceTab}
          image={datailsImage}
          alt={alt}
        />
      </div>
    </>
  );
}

// TODO: Used for active development changes. It will remove in future
function EmptyDescription() {
  return (
    <div className="flex flex-col lg:w-3/5 gap-y-5 text-16 sm:text-22 md:text-24 leading-loose px-3">
      Опис видсутнiй
    </div>
  );
}
