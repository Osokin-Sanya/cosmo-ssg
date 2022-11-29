import React from "react";
import { graphql, StaticQuery } from "gatsby";

import useStore from "../store";

import Head from "./Head";
import Header from "./Header";
import Footer from "./Footer";

// TODO: Add SEO
function Layout({ children, data }) {
  const { setProducts } = useStore();

  React.useEffect(() => {
    setProducts(getProducts(data));
  }, []);

  return (
    <>
      <Head />
      <Header />
      <div className="base-container container mx-auto">{children}</div>
      <Footer />
    </>
  );
}

function getProducts(queryResponse) {
  const products = queryResponse.allMarkdownRemark.edges.filter(({ node }) => {
    return node.frontmatter.templateKey === "product-page";
  });

  return products.map(({ node }) => ({ ...node.frontmatter }));
}

export default function LayoutWithInitedStore({ children }) {
  return (
    <StaticQuery
      render={data => <Layout children={children} data={data} />}
      query={graphql`
        {
          allMarkdownRemark {
            edges {
              node {
                frontmatter {
                  url
                  title
                  manufacturer
                  subTitle
                  templateKey
                  prices {
                    price
                    oldPrice
                    volume
                  }
                  image {
                    childImageSharp {
                      gatsbyImageData
                    }
                  }
                }
              }
            }
          }
        }
      `}
    />
  );
}
