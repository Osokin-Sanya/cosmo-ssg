import React from "react";
import BaseCaption from "@components/BaseCaption";
import ContentSwitcher from "@components/ContentSwitcher";
import NavServiceList from "@components/NavServiceList";
import Accordion from "@components/Accordion";
import ListItem from "@components/ListItem";

const MOCK_DATA = {
  serviceFace: [
    {
      name: null,
      set: ["Пухкі губки", "Темні кола під очима"],
      link: ["1a", "2a"],
    },
    {
      name: "Підлітки",
      set: ["Очищення обличчя", "Домашній догляд", "️Фітопілінг"],
      link: ["1b", "2b", "3b"],
    },
    {
      name: "Зморшки",
      set: [
        "Мікроструми",
        "️Rf-ліфтинг",
        "Пілінг",
        "Біоревіталізація",
        "Домашній догляд",
      ],
      link: ["1c", "2c", "3c", "4c", "5c"],
    },
    {
      name: "Гіперпігментація",
      set: ["Домашній догляд", "Мезотерапія", "Пілінг"],
      link: ["1d", "2d", "3d"],
    },
  ],
  serviceHair: [
    {
      name: "Стрижка",
      set: ["Під колобка", "Як у Він Дизіля", "Стрижка по Гордонськи"],
      link: ["1a", "2a", "3a"],
    },
    {
      name: "Покраска",
      set: ["В зелений", "Червоний", "️Радужний"],
      link: ["1b", "2b", "3b"],
    },
    {
      name: "Помивка",
      set: [
        "Шампунем",
        "️Милом пахучим",
        "Милом господарським",
        "Кетчупом",
        "Дощовою водою",
      ],
      link: ["1c", "2c", "3c", "4c", "5c"],
    },
  ],
  serviceBody: [
    {
      name: "Шкіра",
      set: [
        "Басейн з освіжаючим брудом",
        "Обмивка в сметані",
        "Терапія бджолами",
      ],
      link: ["1a", "2a", "3a"],
    },
    {
      name: "Масаж",
      set: ["На сідницях", "На спині", "На руках", "Масаж простати"],
      link: ["1b", "2b", "3b", "4b"],
    },
    {
      name: "Послуги для чоловіків",
      set: [
        "Ескортниці середнього рівня",
        "️Ескортниці елітні",
        "Пара хлопчиків",
        "Повариха Татяна",
        "Вантажник Степан",
        "Мілфи за 40",
        "Пилотяг",
      ],
      link: ["1c", "2c", "3c", "4c", "5c", "6c", "7c"],
    },
    {
      name: "Паливно-мастильні матеріали",
      set: ["Рево", "Козацька Рада", "Жигулівське", "Глід"],
      link: ["1d", "2d", "3d", "4d"],
    },
  ],
};

export default function SectionService() {
  return (
    <div className="container mt-16 mb-20 xs:bg-white">
      <BaseCaption text="Оберіть вашу проблему" />

      <Accordion
        className="lg:hidden"
        items={[
          {
            title: "Обличчя",
            content: <AccordionServiceList services={MOCK_DATA.serviceFace} />,
          },
          {
            title: "Волосся",
            content: <AccordionServiceList services={MOCK_DATA.serviceHair} />,
          },
          {
            title: "Тіло",
            content: <AccordionServiceList services={MOCK_DATA.serviceBody} />,
          },
        ]}
      />

      <ContentSwitcher
        className="hidden lg:flex"
        items={[
          {
            title: "Обличчя",
            content: <NavServiceList services={MOCK_DATA.serviceFace} />,
          },
          {
            title: "Волосся",
            content: <NavServiceList services={MOCK_DATA.serviceHair} />,
          },
          {
            title: "Тіло",
            content: <NavServiceList services={MOCK_DATA.serviceBody} />,
          },
        ]}
      />
    </div>
  );
}

function AccordionServiceList({ services }) {
  return (
    <ul className="w-full">
      {services.map((service, serviceKey) => (
        <React.Fragment key={serviceKey}>
          {/* 
          TODO: Use this title ?
          {service.name && (
            <li className="mr-4 mb-5 ml-6 text-yellow">{service.name}:</li>
          )} */}
          {service.set.map((e, setKey) => (
            <ListItem
              key={serviceKey + setKey}
              text={e}
              // TODO: Use links when CMS data will be ready
              // link={serviceArr[serviceKey].link[setKey]}
              className="text-16 sm:text-22 md:text-24 mb-5 ml-2 flex"
              classNameIcon="w-3 h-3 sm:w-4 sm:h-4 mr-3"
            />
          ))}
        </React.Fragment>
      ))}
    </ul>
  );
}
