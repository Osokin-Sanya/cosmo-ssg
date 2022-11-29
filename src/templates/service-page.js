import React from "react";
import { graphql } from "gatsby";

import Layout from "../features/Layout";
import ServicePage from "../features/ServicePage";

export default function ServicePageTemplate({ data }) {
  return (
    <Layout>
      <ServicePage {...data.markdownRemark.frontmatter} />
    </Layout>
  );
}

export const pageQuery = graphql`
  query ServiceById($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        title
        price
        description

        image {
          childImageSharp {
            gatsbyImageData
          }
        }
        datailsImage {
          childImageSharp {
            gatsbyImageData
          }
        }

        datails {
          isSingle
          subServices {
            price
            title
          }
          tabs {
            content
            title
          }
        }
      }
    }
  }
`;
