import React from "react";
import { graphql } from "gatsby";

import Layout from "../features/Layout";
import IndexPage from "../features/IndexPage";

export default function IndexPageTamplate({ data }) {
  const normalizedData = normalizeIndexResponse(data);

  return (
    <Layout>
      <IndexPage data={normalizedData} />
    </Layout>
  );
}

function normalizeIndexResponse(data) {
  return data.markdownRemark.frontmatter;
}

export const pageQuery = graphql`
  {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        image {
          childrenImageSharp {
            gatsbyImageData
          }
        }
        mainTitle
      }
    }
  }
`;
