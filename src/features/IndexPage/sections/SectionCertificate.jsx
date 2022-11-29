import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { classList } from "@utils/index";

import Button from "@components/Button";
import BaseCaption from "@components/BaseCaption";
import Carousel from "@components/Carousel";
import BackgroundLines from "@components/BackgroundLines";

import Heart from "@images/heart.svg";
import Medal from "@images/medal.svg";
import Sun from "@images/sun.svg";
import Papirus from "@images/papirus.svg";
import Price from "@images/price.svg";

const GIFT_SERT_SRC = "../../../images/gift-сertificate.png";
const GIFT_SERT_ALT = "Gift certificate for the dearest person";

export default function SectionCertificate() {
  return (
    <>
      <div className="container">
        <BaseCaption text="Подарунковий сертифікат" />

        <div className="flex flex-col items-center xl:flex-row xl:mt-20">
          <div className="mx-1 my-8 xl:my-0 xl:w-3/5">
            <StaticImage src={GIFT_SERT_SRC} alt={GIFT_SERT_ALT} />
          </div>

          <div className="flex flex-col items-center mx-3 max-w-xl xl:w-2/5">
            <p className="font-base text-16 md:text-24 indent-7 leading-loose">
              Іноді дуже непросто вгадати з подарунком, але є універсальні
              рішення, які підійдуть абсолютно будь-кому. Одне з таких рішень -
              це подарунковий сертифікат від Dr.Reva.
            </p>
            <p className="font-base text-16 md:text-24 indent-7 leading-loose mt-5">
              У нас Ви можете придбати Подарункові Сертифікати номіналом 300,
              500 та 1000 гривень. А також - особливий вид Подарункового
              Сертифікату, де вказана лише назва процедури, яку Ви бажаєте
              подарувати.
            </p>
            <Button text="Замовити" className="mt-12" />
          </div>
        </div>
      </div>

      <div className="relative my-28 xl:hidden">
        <Carousel>
          {dataQualityCard.map((card, id) => {
            return <Card key={id} {...card} />;
          })}
        </Carousel>
        <BackgroundLines className="z-0" />
      </div>
      <div className="relative my-28 z-10 hidden xl:grid xl:grid-cols-5">
        {dataQualityCard.map((card, id) => {
          return <Card key={id} {...card} />;
        })}
        <BackgroundLines />
      </div>
    </>
  );
}

function Card({ title, text, icon, background }) {
  return (
    <div
      className={classList({
        "flex items-center flex-col relative h-full z-0 bg-yellow text-yellow": true,
        "text-black": !background,
      })}
    >
      <span className="my-10 z-10">{icon}</span>
      <p className="z-10 text-center text-24 mb-5">{title}</p>
      <p className="z-10 text-center text-18 pb-7 px-3 leading-loose">{text}</p>
      {background && (
        <div className="absolute h-full w-full bg-opacity-50 bg-black">
          {background}
        </div>
      )}
    </div>
  );
}

var dataQualityCard = [
  {
    icon: <Heart />,
    title: "Консультація",
    text: "Перед отриманням будь-якої процедури Вас консультують, погоджують препарати і протипоказання. Та попереджають про всі можливі наслідки.",
  },
  {
    icon: <Medal />,
    background: (
      <StaticImage
        src="../../../images/face.jpg"
        alt="Face image"
        className="absolute h-full -z-10"
      />
    ),
    title: "Професійність",
    text: "Процедури та консультації проводять тільки лікарі-фахівці відповідної сфери та напрямку.",
  },
  {
    icon: <Sun />,
    title: "Якість",
    text: "Усі задіяні препарати та обладнання мають відповідні сертифікати якості.",
  },
  {
    icon: <Papirus />,
    background: (
      <StaticImage
        src="../../../images/injection.jpg"
        alt="Injection image"
        className="absolute h-full -z-10"
      />
    ),
    title: "Входить в послугу",
    text: "Кожна процедура по догляду за обличчям включає в себе нанесення маски по типу шкіри.",
  },
  {
    icon: <Price />,
    title: "Гнучкі ціни",
    text: "Гнучкі ціни залежать від використовуваного препорату.",
  },
];
