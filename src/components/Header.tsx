import React, { FC } from "react"
import Search from "./Search"
import Navigation from "./Nav"
import { MainHeader } from "../types/globalTypes"
const Header: FC<MainHeader> = () => {
  const title = "Choose your dog"
  const tagline = "We have the the largest selection of dogs"
  return (
    <header className="flex flex-col m-auto text-center mb-8">
      <Search />
      <h1 className="lg:text-5xl text-4xl font-bold lg:py-2 transition-all duration-200 mb-2 lg:mb-4">
        {title}
      </h1>
      <p className="text-gray lg:pb-2 lg:mb-4 mb-6">{tagline}</p>
      <Navigation />
    </header>
  )
}

export default Header
