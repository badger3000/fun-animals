import { graphql } from "gatsby"

export const allAnimmals = graphql`
  fragment allAnimmals on ContentfulFunAnimals {
    id
    image {
      gatsbyImageData(formats: WEBP, placeholder: DOMINANT_COLOR)
    }
    slug
    shedding
    name
    lifespan
    origin
    shortStory {
      raw
    }
    breed
  }
`
