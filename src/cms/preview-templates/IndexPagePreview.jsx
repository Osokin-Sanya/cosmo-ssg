import React from "react";
import IndexPage from "../../features/IndexPage";

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(["data"]).toJS();

  if (!data) return <div>Loading...</div>;

  return (
    <IndexPage
      data={{
        mainTitle: data.mainTitle,
        image: getAsset(data.image),
      }}
    />
  );
};

export default IndexPagePreview;
