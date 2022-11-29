import React from "react";
import ListItem from "../ListItem";

import "./NavServiceList.scss";

export function NavServiceList({ services }) {
  return (
    <div className="flex justify-center relative w-full">
      <div className="z-10">
        <div className="line__service line__service-horizontal"></div>
        <div className="line__service line__service-vertical"></div>
      </div>
      <ul className="columns-3 w-full z-50">
        {services.map((service, serviceKey) => (
          <React.Fragment key={serviceKey}>
            {service.name && (
              <li className="mr-4 mb-5 ml-6 text-yellow">{service.name}:</li>
            )}
            {service.set.map((e, setKey) => (
              <ListItem
                key={serviceKey + setKey}
                text={e}
                // TODO: Use links when CMS data will be ready
                // link={serviceArr[serviceKey].link[setKey]}
                className="mb-5 ml-2 flex"
                classNameIcon="w-4 h-4 mr-3"
              />
            ))}
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
}
