import React from "react";
import { graphql } from "gatsby";

import Layout from "../features/Layout";
import ProductPage from "../features/ProductPage";

export default function ProductPageTemplate({ data }) {
  return (
    <Layout>
      <ProductPage {...data.markdownRemark.frontmatter} />
    </Layout>
  );
}

export const pageQuery = graphql`
  query ProductById($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        id
        title
        subTitle
        manufacturer
        description
        image {
          childImageSharp {
            gatsbyImageData
          }
        }

        prices {
          price
          oldPrice
          volume
        }

        datails {
          tabs {
            content
            title
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
`;
