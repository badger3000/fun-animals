import * as React from "react"
import { Link } from "gatsby"
import { MapPin } from "react-feather"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"

const AnimalCard = ({ slug, name, image, breed, origin, shortStory }) => {
  //Grab the image
  const animalImage = getImage(image)

  const options = {
    renderMark: {
      [MARKS.BOLD]: text => <b className="font-bold">{text}</b>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => {
        return <p className="text-gray truncate">{children}</p>
      },
    },
  }
  return (
    <figure className="w-full block">
      <Link
        to={slug}
        className="block hover:translate-y-[-5px] transition-all duration-300 delay-50 relative hover:drop-shadow-xl h-full"
      >
        <GatsbyImage
          image={animalImage}
          alt={name}
          className="rounded-2xl rounded-b-3xl"
        />
        <figcaption className=" p-4 absolute bottom-0 left-0 w-full min-h-1/3 bg-white z-10 rounded-b-2xl ">
          <div className="flex flex-row items-center justify-between mb-6">
            <h2 className="text-2xl text-bold">{breed}</h2>
            <div className="flex flex-row">
              <p>{origin}</p>
              <MapPin className=" stroke-blue ml-2" />
            </div>
          </div>
          <div className="py-2">{renderRichText(shortStory, options)}</div>
        </figcaption>
      </Link>
    </figure>
  )
}

export default AnimalCard
