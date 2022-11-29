import React from "react";
import { Helmet } from "react-helmet";

const TITLE = "Твій персональний косметолог у Дніпрі | dr.revva";

const META = {
  description:
    "Записатися на косметологічні процедури за найвигіднішою ціною Ви можете тільки тут. Кваліфікована допомога косметолога.",
  author: "Владислава Рева",
  "theme-color": "#212121",
};

const OPEN_GRAPH = {
  "og:title": "Кваліфікована допомога косметолога",
  "og:description":
    "Записатися на косметологічні процедури за найвигіднішою ціною Ви можете тільки тут. Кваліфікована допомога косметолога.",
  "og:type": "website",
  "og:locale": "uk_UA",
};

export default function Head() {
  return (
    <Helmet htmlAttributes={{ lang: "uk" }}>
      <title>{TITLE}</title>

      {dictionaryMap(META, (k, v, i) => (
        <meta name={k} content={v} key={i} />
      ))}

      {dictionaryMap(OPEN_GRAPH, (k, v, i) => (
        <meta property={k} content={v} key={i} />
      ))}

      <meta
        http-equiv="Content-Security-Policy"
        content="upgrade-insecure-requests"
      />
    </Helmet>
  );
}

function dictionaryMap(dictionary, callback) {
  return Object.entries(dictionary).map(([key, value], index) =>
    callback(key, value, index)
  );
}
