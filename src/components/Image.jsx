import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function Image({ image, alt, ...props }) {
  // this is an image coming from Netlify CMS
  if (image.url) {
    return <img src={image.url} alt={alt} {...props} />;
  }

  // this should be an image processed by gatsby-plugin-image
  const imageRef = getImage(resolveImage(image));
  return <GatsbyImage image={imageRef} alt={alt} {...props} />;
}

function resolveImage(image) {
  return image?.childrenImageSharp
    ? getImage(image.childrenImageSharp[0].gatsbyImageData)
    : image;
}
