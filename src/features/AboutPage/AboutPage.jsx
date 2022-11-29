import React from "react";
import ActionSection from "@components/ActionSection";

import {
  SectionMainAboutMe,
  SectionSkills,
  SectionСertificates,
} from "./sections";

export default function AboutPage() {
  return (
    <>
      <SectionMainAboutMe />
      <SectionSkills />
      <ActionSection
        text="І головне, Зі мною Ви можете попробувати багато топових новинок Бо
        я ні на хвилину не зупиняюсь у досягненні отриманих знань"
        className="2xl:mt-28"
      />
      <SectionСertificates />
    </>
  );
}
