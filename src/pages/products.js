import React from "react";
import { graphql, Link } from "gatsby";
import Image from "@components/Image";
import Layout from "../features/Layout";

export default function ProductsPage({ data }) {
  return (
    <Layout>
      <div className="flex flex-col gap-5 p-4">
        {data.allMarkdownRemark.edges.map(({ node }, key) => {
          const { url, image, title } = node.frontmatter;
          const linkTo = `/product/${url}`;

          return (
            <Link to={linkTo} className="flex border" key={key}>
              <div className="w-16">
                <Image image={image} alt="image" />
              </div>
              <span>{title}</span>
            </Link>
          );
        })}
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "product-page" } } }
    ) {
      edges {
        node {
          frontmatter {
            title
            url
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
`;
