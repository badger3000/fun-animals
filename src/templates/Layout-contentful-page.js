import * as React from "react"
import { graphql } from "gatsby"
import { ArrowLeft, Heart, MapPin } from "react-feather"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"

import Range from "../components/Range"
import Button from "../components/Button"
import Layout from "../components/LayoutSingle"
import Seo from "../components/seo"

const AnimialSingle = props => {
  const { data, errors } = props

  if (errors) {
    return (
      <Layout>
        <h1>The Data is Broken Dude! </h1>
      </Layout>
    )
  }
  const page = (data || {}).page

  if (!page) {
    throw new Error("Missing Page Data")
  }
  const { image, breed, friendliness, shedding, name, origin, shortStory } =
    page
  const buttonTxT = "Contact Breeder"
  const animalImage = getImage(image)

  const options = {
    renderMark: {
      [MARKS.BOLD]: text => <b className="font-bold">{text}</b>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => {
        return <p className="text-gray">{children}</p>
      },
    },
  }

  return (
    <Layout>
      <section className="relative min-h-screen min-w-screen pt-[50vh] lg:pt-0">
        <Link to="/" className="absolute top-4 lg:top-12 left-4 z-10">
          <ArrowLeft color="white" size={35} />
        </Link>
        <div className="fixed lg:relative top-0 left-0">
          <GatsbyImage
            image={animalImage}
            alt={name}
            quality={100}
            formats={["auto", "webp", "avif"]}
            className="object-cover z-0 w-full lg:mt-8 lg:rounded-t-2xl transition-all duration-200"
          />
        </div>
        <div className="bg-white w-screen h-screen lg:w-full  z-10 relative p-4 rounded-2xl lg:mt-[-10rem]">
          <div className="flex flex-row justify-between items-center mb-6">
            <h1 className="text-4xl font-bold">{breed}</h1>
            <span className="p-4 bg-peach inline-block rounded-lg">
              <Heart className="stroke-pink" />
            </span>
          </div>
          <div className="flex flex-row items-center justify-start mb-6">
            <MapPin className=" stroke-blue mr-2" />
            <p>{origin}</p>
          </div>
          <div className="flex flex-row items-center justify-start text-gray mb-6 ">
            {renderRichText(shortStory, options)}
          </div>
          <Range friendliness={friendliness} shedding={shedding} />
          <Button text={buttonTxT} />
        </div>
      </section>
    </Layout>
  )
}
export const data = graphql`
  query SinglePageAnimal($id: String!) {
    page: contentfulEntry(id: { eq: $id }) {
      ... on ContentfulFunAnimals {
        ...allAnimmals
      }
    }
  }
`
export const Head = () => <Seo title="Using SSR" />

export default AnimialSingle
