import React from "react";
import ListItem from "@components/ListItem";
import { StaticImage } from "gatsby-plugin-image";
import BaseCaption from "@components/BaseCaption";

const MY_PHOTO_CERTIFICATE_SRC = "../../../images/my-photo-certificate.png";

const certificates = [
  "Бустер- ревіталізація, пептидотерапія, застосування полінуклеотидів, коктейлів для обличчя та тіл",
  "Сучасні можливості ревіталізуючих методик.",
  "Консультант з формування здорової харчової поведінки",
  "Контурна пластика губ",
  "Ліподеструкція. Результативний метод боротьби з локальними жировими відкладеннями - мезодіссолюція",
  "Курс з терапевтичної та інʼєкціоної косметології",
  "Курси лікувального масажу",
  "Школа з дерматології в Київському медичному університеті",
  "Full face",
  "Курс  по інноваційним технологіям безінʼєкційноно ремоделювання дерми  PRT t33",
];

export default function SectionСertificates() {
  return (
    <div className="mb-16 xl:mb-32">
      <BaseCaption className="my-8" text="Сертифікати" />
      <div className="grid justify-items-center lg:justify-items-start gap-x-8 lg:grid-cols-2 px-3">
        <StaticImage
          src={MY_PHOTO_CERTIFICATE_SRC}
          className="mb-12 w-3/4 lg:w-auto lg:order-first lg:row-span-6"
          position="scale-75 -bottom-6"
        />
        <div className="space-y-4 2xl:space-y-8">
          {certificates.map((e, id) => (
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
