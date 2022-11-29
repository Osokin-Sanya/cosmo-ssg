import React from "react";
import {
  SectionService,
  SectionHero,
  SectionCertificate,
  SectionSubscribe,
  SectionDiscountCosmetics,
} from "./sections";

export default function IndexPage({ data }) {
  return (
    <>
      <SectionHero {...data} />
      <SectionService />
      <SectionDiscountCosmetics />
      <SectionCertificate />
      <SectionSubscribe />
    </>
  );
}
