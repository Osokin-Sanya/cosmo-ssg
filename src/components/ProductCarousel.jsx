import React from "react";
import { navigate } from "gatsby";
import ProductCard from "./ProductCard";

export default function ProductCarousel({ items }) {
  // TODO: Use Link component for jump to bucket or product page
  const onClickProductCard = url => () => navigate(`/product/${url}`);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      {items.map((item, key) => (
        <ProductCard
          key={key}
          {...item}
          onClick={onClickProductCard(item.url)}
        />
      ))}
    </div>
  );
}
