import React from "react";
import ServicesPage from "../../features/ServicesPage";

const ServicesPagePreview = ({ entry }) => {
  const data = entry.getIn(["data"]).toJS();

  if (!data) return <div>Loading...</div>;

  const services =
    data.serviceList?.map(({ service }) => {
      if (!service) return {};

      const [serviceType, title] = service.split("***");

      return { serviceType, title, price: 0 };
    }) || [];

  return <ServicesPage services={services} />;
};

export default ServicesPagePreview;
