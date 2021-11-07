/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  /* Your site config here */

  siteMetadata: {
    title: "Richard's Personal Site",
    description: "Richard Ma's personal site",
    author: "Richard Ma",
  },
  plugins: [
    //google analytics
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          process.env.GANALYTICS, // Google Analytics / GA
        ],
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
          anonymize_ip: true,
        },
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-mdx`,
    // contentful
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `ui971jbkxd2e`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    //mdx
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    //fonts
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Lato",
              variants: ["100", "300", "400", "700", "900"],
            },
            {
              family: "Alegreya Sans",
              variants: ["400"],
            },
            {
              family: "Andada Pro",
              variants: ["400"],
            },
            {
              family: "Scheherazade New",
              variants: ["700"],
            },
            {
              family: "Scheherazade New",
              variants: ["700"],
            },
          ],
        },
      },
    },
  ],
}
