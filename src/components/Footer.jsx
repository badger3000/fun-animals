import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Footer = () => (
  <footer className="flex flex-row justify-center py-8 text-gray items-center">
    <StaticImage
      src="../images/website-icon.png"
      width={32}
      height={32}
      alt="Badger3000"
      className="mr-2"
    />
    <p className="mr-2">
      This was made by
      <a
        className="hover:text-black underline transition-all duration-300 pl-1"
        href="https://www.linkedin.com/in/kyle-r-ross"
      >
        Kyle Ross
      </a>
      , for Calendly
    </p>
  </footer>
)

export default Footer
