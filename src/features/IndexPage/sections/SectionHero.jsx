import React from "react";

import AmountVisitors from "@components/AmountVisitors";
import ImageRhomb from "@components/ImageRhomb";
import Button from "@components/Button";

export default function SectionHero({ mainTitle, image }) {
  return (
    <div className="container flex flex-col my-5 md:my-20">
      <h1 className="text-22 sm:text-36 md:text-48 text-yellow leading-loose max-w-full text-center xl:text-start xl:w-800 px-3">
        {mainTitle}
      </h1>

      <div className="flex flex-col-reverse xl:flex-row xl:items-center gap-x-14 px-3">
        <div className="flex flex-col items-center xl:items-start xl:max-w-[45%]">
          <div className="text-16 sm:text-24 my-6 xl:my-10 max-w-2xl text-center xl:text-start leading-loose">
            Комплекс косметологічних процедур з догляду за обличчям та тілом у
            Дніпрі
          </div>
          <Button text="Записатися" />
          <div className="flex flex-col md:flex-row items-center md:items-start mt-14 md:mt-24">
            <AmountVisitors
              text="виконаних процедур та наданих послуг"
              number="2 596"
              className="mb-5 md:mb-0 md:mr-8 2xl:mr-24"
            />
            <AmountVisitors text="клієнтів відвідало мене" number="5 596" />
          </div>
        </div>

        <div className="my-[18%] xl:my-0">
          <ImageRhomb image={image} alt="Index image" />
        </div>
      </div>
    </div>
  );
}
