import React from "react";
import { navigate } from "gatsby";

import Button from "@components/Button";
import SideSquares from "@components/SideSquares";
import ContentSwitcher from "@components/ContentSwitcher";
import ActionSection from "@components/ActionSection";

import { SERVICE_TYPES } from "@utils/constants";
import Plus from "@images/plus.svg";

export default function ServicesPage({ services }) {
  const servicesByType = React.useMemo(
    () => normalizeServicesByType(services),
    [services]
  );

  const servicesToDisplay = Object.keys(servicesByType).map((item) => {
    return {
      title: SERVICE_TYPES[item],
      content: (
        <div className="flex flex-col items-stretch gap-y-9 px-3 w-full">
          {servicesByType[item].map((x, i) => (
            <ServiceRow {...x} key={i} />
          ))}
        </div>
      ),
    };
  });

  return (
    <>
      <ContentSwitcher items={servicesToDisplay} />
      <ActionSection
        text="Маєте проблему, але не знатаєте яка процедура підійде вам, запишіться
          на профксійну консультацію"
      />
    </>
  );
}

function ServiceRow({ title, shortDescription, price, url }) {
  return (
    <div className="grid grid-cols-8 items-center pb-1 border-b border-grey">
      <div className="col-span-4 lg:col-span-3 text-16 sm:text-24">{title}</div>
      <div className="col-span-3 md:col-span-2 lg:col-span-3 xl:pl-12 text-16 sm:text-24">
        <Price value={price} />
      </div>
      <div
        className="flex justify-center items-center cursor-pointer gap-x-3 md:col-span-2"
        onClick={() => navigate(`/service/${url}`)}
      >
        <span className="text-yellow hidden md:block">Детальніше</span>
        <Plus />
      </div>
      <div className="col-span-4 lg:col-span-3 text-18 opacity-40 hidden lg:block">
        {shortDescription}
      </div>
    </div>
  );
}

function Price({ value }) {
  return (
    <>
      {value < 0 && <span className="">{"вiд "}</span>}
      <span className="text-yellow whitespace-nowrap">{`${Math.abs(
        value
      )} грн`}</span>
    </>
  );
}

function normalizeServicesByType(services) {
  return services.reduce((acc, curr) => {
    !acc[curr.serviceType]
      ? (acc[curr.serviceType] = [curr])
      : acc[curr.serviceType].push(curr);

    return acc;
  }, {});
}
