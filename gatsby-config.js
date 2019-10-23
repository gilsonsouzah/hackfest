const fetch = require(`node-fetch`)
const path = require("path")
const fs = require("fs")
const { buildClientSchema } = require(`graphql`)
const { createHttpLink } = require(`apollo-link-http`)

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Hacktober 2019 Vitta`,
        short_name: `Hacktober Vitta`,
        start_url: `/`,
        background_color: `#FFF`,
        theme_color: `#327dff`,
        display: `minimal-ui`,
        icon: 'https://vitta.com.br/wp-content/uploads/2019/09/Azul-Vertical.png'
      }
    },
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'GitHub',
        fieldName: 'github',
        url: "https://api.github.com/graphql",
        headers: {
          Authorization: `bearer ${process.env.GITHUB_TOKEN}`,
        },
      }
    }
  ]
}
