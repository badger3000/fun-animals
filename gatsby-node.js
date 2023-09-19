/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
const path = require(`path`)
async function createContentfulPages(reporter, graphql, actions) {
  const { createPage } = actions
  const pageTemplate = path.resolve(`src/templates/Layout-contentful-page.js`)
  const result = await graphql(`
    query AllAnimals {
      allContentfulFunAnimals {
        edges {
          node {
            id
            name
            shedding
            origin
            shortStory {
              raw
            }
            slug
            image {
              gatsbyImageData
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your Contentful pages`,
      result.errors
    )
    return
  }
  result.data.allContentfulFunAnimals.edges.forEach(edge => {
    const { id, slug = {} } = edge.node
    const path = `/${slug}`
    reporter.info(`Creating Contentful Page: ${slug}`)
    createPage({
      path: path,
      component: pageTemplate,
      context: { id },
    })
  })
}
exports.createPages = async ({ reporter, graphql, actions }) => {
  await createContentfulPages(reporter, graphql, actions)
}
