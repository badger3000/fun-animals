/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"

import Header from "./Header"
import Footer from "./Footer"

const Layout = ({ children }) => {
  return (
    <div className="container px-2 lg:px-0 py-4">
      <Header />
      <main className="container">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
