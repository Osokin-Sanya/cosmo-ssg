import React from "react";
import Button from "@components/Button";

export default function SectionSubscribe() {
  return (
    <div className="container">
      <div className="flex flex-col items-center mb-20 px-3 text-center">
        <p className="w-900 max-w-full my-16 font-base text-16 sm:text-24 leading-loose">
          <span className="text-yellow">Красива шкіра</span> — це здорова шкіра.
          Жодними кремами та засобами для макіяжу не приховати зморшки,
          розширені пори, висипання та інші недоліки. Тому косметологія у Днірі—
          один із найпопулярніших напрямків б’юті індустрії.
        </p>
        <Button text="Записатися" />
      </div>
    </div>
  );
}
