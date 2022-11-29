import React from "react";

import ServicePage from "../../features/ServicePage";

const ServicePagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(["data"]).toJS();

  if (!data) return <div>Loading...</div>;

  return (
    <ServicePage
      {...data}
      image={getAsset(data?.image)}
      datailsImage={getAsset(data?.datailsImage)}
    />
  );
};

export default ServicePagePreview;
