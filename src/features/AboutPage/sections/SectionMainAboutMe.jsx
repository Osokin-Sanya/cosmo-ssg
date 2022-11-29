import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import ListItem from "@components/ListItem";

const problems = [
  "Вирішення Ваших проблем за допомогою методів еститичної косметолгії",
  "Боротьба з акне",
  "Боротьба з віковими змінами",
  "Боротьба з гіперпігментацією",
  "Підбером ідеальних процедуру для кожного",
  "Доповню 30% до 100 % успішно виконаної",
];

const MY_PHOTO_SRC = "../../../images/my-photo.png";
const MY_PHOTO_ALT = "My photo";

export default function SectionMainAboutMe() {
  return (
    <div className="grid justify-items-center lg:justify-items-start lg:grid-cols-2 px-3 gap-x-20">
      <div className="text-22 sm:text-24 lg:text-36 text-center lg:text-left  2xl:mb-14 text-yellow">
        Привіт!
      </div>
      <div className="text-18 xl:text-24 mb-5 mt-2">
        Мене звати Влада - я косметолог.
      </div>

      <StaticImage
        src={MY_PHOTO_SRC}
        alt={MY_PHOTO_ALT}
        className="mb-12 w-3/4 lg:w-auto lg:order-first lg:row-span-6"
        position="scale-75 -bottom-6"
      />

      <div>
        <div className="text-18 xl:text-24 mb-4 2xl:mb-8">
          Моя діяльність спрямована на :
        </div>
        <div className="space-y-4 2xl:space-y-8">
          {problems.map((e, id) => (
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
