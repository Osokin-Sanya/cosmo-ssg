const path = require("path");
const fs = require("fs").promises;
const { createFilePath } = require("gatsby-source-filesystem");
const { fmImagesToRelative } = require("gatsby-remark-relative-images-v2");

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              title
              templateKey
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    result.errors.forEach(e => console.error(e.toString()));
  }

  const { edges } = result.data.allMarkdownRemark;

  edges.forEach(edge => {
    const edgeId = edge.node.id;
    const { templateKey } = edge.node.frontmatter || "";
    const { slug } = edge.node.fields;

    if (
      [
        "service-page",
        "services-page",
        "product-page",
        "products-page",
        "index-page",
      ].includes(templateKey)
    ) {
      createPage({
        path: slug,
        component: path.resolve(`src/templates/${String(templateKey)}.js`),

        // additional data can be passed via context
        context: { id: edgeId },
      });
    }
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  // convert image paths for gatsby images
  fmImagesToRelative(node);

  if (node.internal.type === "MarkdownRemark") {
    const value = createFilePath({ node, getNode });
    createNodeField({ name: "slug", node, value });
  }
};

exports.onPostBuild = async () => {
  // Removes CMS admin panel trash
  try {
    const files = [
      "cms.js.map",
      "cms.js.LICENSE.txt",
      "netlify-cms-app.js.map",
      "netlify-cms-app.js.LICENSE.txt",
      "netlify-identity.js.map",
      "netlify-identity.js.LICENSE.txt",
    ];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      await fs.unlink(path.resolve(`public/admin/${file}`));
    }

    console.warn("Maps were deleted");
  } catch (error) {
    console.warn("Maps weren't deleted");
    console.warn({ error });
  }
};

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@components": path.resolve(__dirname, "src/components"),
        "@images": path.resolve(__dirname, "src/images"),
        "@utils": path.resolve(__dirname, "src/utils"),
      },
    },
  });
};
