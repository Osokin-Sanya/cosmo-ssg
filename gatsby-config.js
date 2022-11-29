require("dotenv").config({ path: ".env" });

module.exports = {
  siteMetadata: {
    title: `new`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-sharp",
      options: {
        defaults: {
          placeholder: "blurred",
          breakpoints: [640, 768, 1024, 1280, 1536],
        },
      },
    },
    "gatsby-plugin-netlify-cms-paths",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-relative-images-v2",
            options: {
              name: "images",
            },
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048,
            },
          },
          {
            resolve: "gatsby-remark-copy-linked-files",
            options: {
              destinationDir: "static",
            },
          },
        ],
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-config",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Мiй персональний косметолог | dr.revva",
        short_name: "Мiй косметолог | dr.revva",
        description: "Мiй персональний косметолог у Днiпрi | dr.revva",
        categories: ["health", "medical"],
        icon: "src/images/icon.png",
        lang: "uk",
        start_url: "/",
        background_color: "#212121",
        theme_color: "#212121",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "uploads",
        path: `${__dirname}/static/uploads`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages/`,
        name: "pages",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/`,
        name: "src",
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.svg$/,
        },
      },
    },
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
        customizeWebpackConfig: config => {
          Object.assign(config.resolve.alias, {
            "@components": `${__dirname}/src/components`,
            "@images": `${__dirname}/src/images`,
            "@utils": `${__dirname}/src/utils`,
          });
        },
      },
    },
    {
      resolve: "gatsby-plugin-purgecss",
      options: {
        printRejected: true, // Print removed selectors and processed file names
        develop: true, // Enable while using `gatsby develop`
        tailwind: true, // Enable tailwindcss support
        // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
        ignore: ["Carousel/", "/global.scss"],
        purgeCSSOptions: {
          // https://purgecss.com/configuration.html#options
          // safelist: ['safelist'], // Don't remove this selector
        },
        // More options defined here https://purgecss.com/configuration.html#options
      },
    },
    {
      // TODO: Check css bundle size
      // yarn add postcss-preset-env
      // yarn add postcss gatsby-plugin-postcss
      resolve: "gatsby-plugin-postcss",
      options: {
        postCssPlugins: [
          require("postcss-import"),
          require("postcss-preset-env")({
            stage: 0,
          }),
        ],
      },
    },
    {
      resolve: `gatsby-plugin-minify`,
      options: {
        minifyCSS: true,
        minifyJS: true,
        removeComments: true,
      },
    },
    "gatsby-plugin-no-sourcemaps",

    // This plugin must be last
    "gatsby-plugin-netlify",
  ],
};
