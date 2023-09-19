import * as React from "react"
import { graphql } from "gatsby"

import AnimalCard from "../components/AnimalCard"
import Layout from "../components/Layout"
import Seo from "../components/seo"

const IndexPage = ({ data }) => {
  const allContentfulFunAnimals = data.allContentfulFunAnimals.edges
  return (
    <Layout>
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {allContentfulFunAnimals.map(({ node }) => (
          <AnimalCard
            breed={node.breed}
            name={node.name}
            slug={node.slug}
            image={node.image}
            key={node.id}
            origin={node.origin}
            shortStory={node.shortStory}
          />
        ))}
      </section>
    </Layout>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export const query = graphql`
  query AllAnimmals {
    allContentfulFunAnimals {
      edges {
        node {
          ...allAnimmals
        }
      }
    }
  }
`

export default IndexPage
