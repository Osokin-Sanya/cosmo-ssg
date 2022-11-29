import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import ListItem from "@components/ListItem";

const ABOUT_FACE_1_SRC = "../../../images/about-face-1.png";
const ABOUT_FACE_2_SRC = "../../../images/about-face-2.png";
const ABOUT_FACE_ALT = "Facial treatments";

const services = [
  "Все починаємо з бесіди",
  "Тільки показані Вам процедури",
  "Дотримання стерильност",
];

export default function SectionSkills() {
  return (
    <div className="grid lg:grid-cols-2 2xl:relative px-3 mt-16 sm:gap-y-6">
      <div className="grid justify-items-center relative mb-4 lg:order-2">
        <StaticImage
          src={ABOUT_FACE_1_SRC}
          alt={ABOUT_FACE_ALT}
          className="w-3/4 2xl:w-auto"
          position="scale-75 -bottom-6"
        />
        <div className="left-[8%] absolute top-[-10%] h-[130%] lg:top-[-20%] 2xl:left-[12%] 2xl:h-[140%] 2xl:top-[-20%] w-[1px] bg-grey" />
        <div className="bottom-[-8%] absolute w-full lg:top-[-8%] 2xl:w-[90%] h-[1px] bg-grey" />
      </div>

      <div className="text-16 lg:text-18 xl:text-24 my-10 lg:my-0 indent-9 leading-loose lg:order-1">
        <p>
          У студії ми оновлюємо зовнішність, даємо красу і молодість. Усе це
          комфортно та швидко робиться руками професіонально.
        </p>
        <p>
          Робимо повну діагностику проблем шкіри та пропоную методи їх
          вирішення. Даю рекомендації щодо вибору декоративної косметики, та
          чудові поради по догляду за шкірою.
        </p>
      </div>

      <div className="relative grid justify-items-center mb-4 lg:order-3 2xl:top-[-170px] 2xl:right-[-140px]">
        <StaticImage
          src={ABOUT_FACE_2_SRC}
          alt={ABOUT_FACE_ALT}
          className="w-3/4 2xl:w-auto z-10"
          position="scale-75 -bottom-6"
        />
        <div className="absolute right-[8%] top-[-10%] h-[130%] w-[1px] 2xl:right-[12%] 2xl:h-[140%] 2xl:top-[-20%] bg-grey" />
        <div className="absolute bottom-[-8%] w-full h-[1px] 2xl:w-[90%] bg-grey" />
      </div>

      <div className="lg:order-2 lg:my-0 lg:mx-auto my-5">
        <div className="text-16 mb-5 lg:text-18 xl:text-24 2xl:mb-9">
          Принципи роботи:
        </div>
        <div className="space-y-4 xl:space-y-8">
          {services.map((e, id) => (
            <ListItem
              key={id}
              className="text-16 lg:text-18 xl:text-24"
              text={e}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
