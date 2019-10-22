/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})
// You can delete this file if you're not using it
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    node: {
      fs: 'empty'
    }
  })
}
