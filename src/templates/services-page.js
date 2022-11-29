import React from "react";
import { graphql } from "gatsby";

import Layout from "../features/Layout";
import ServicesPage from "../features/ServicesPage";

export default function ServicesPageTamplate({ data }) {
  const services = normalizeServicesData(data);

  return (
    <Layout>
      <ServicesPage services={services} />
    </Layout>
  );
}

function normalizeServicesData(data) {
  const selectedIds = data.markdownRemark.frontmatter.serviceList.map(
    x => x.service.split("***")[2]
  );

  const services = data.allMarkdownRemark.edges.map(
    edge => edge.node.frontmatter
  );

  const result = [];

  selectedIds.forEach(id => {
    const item = services.find(service => service.id === id);
    result.push(item);
  });

  return result;
}

export const pageQuery = graphql`
  {
    markdownRemark(frontmatter: { templateKey: { eq: "services-page" } }) {
      frontmatter {
        serviceList {
          service
        }
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "service-page" } } }
    ) {
      edges {
        node {
          frontmatter {
            title
            price
            url
            id
            serviceType
            shortDescription
          }
        }
      }
    }
  }
`;
