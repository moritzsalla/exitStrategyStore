const path = require("path")

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Exit Strategies`,
    siteUrl: `https://exitstrategies.store`,
    description: `Welcome to the online print sale of the photography to-be graduates of
          the Royal Academy of Art, The Hague`,
    author: `@forgetfulnumber`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-preload-fonts`,
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-116740197-2",
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        commonmark: true,
        footnotes: true,
        pedantic: true,
        gfm: true,
        plugins: [],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `exit-strategies-print-sale`,
        short_name: `exitstrategies`,
        start_url: `/`,
        background_color: `#F5F6F7`,
        theme_color: `#e86228`,
        display: `minimal-ui`,
        icon: `src/images/favicon.jpg`,
      },
    },
    "gatsby-plugin-offline",
  ],
}
