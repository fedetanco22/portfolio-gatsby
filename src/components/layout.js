import * as React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import Footer from "./Footer/Footer"
import "./_layout.scss"

const Layout = ({ children }) => {
  return (
    <>
      <div className="Layout">
        <Header />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
