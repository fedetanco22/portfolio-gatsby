import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"
import ParticlesComponent from "../../Particles/Particles"
import Typical from "react-typical"

import Layout from "../../layout"
import SEO from "../../seo"

import "./_HomeContainer.scss"
import BackgroundImage from "gatsby-background-image"

const Home = () => {
  /* const imagen = getImage(image)
  const logoImage = getImage(logo) */

  return (
    <Layout>
      <SEO title="Home" />
      <div className="Home">
        <ParticlesComponent />
        <Typical
          steps={["Hello", 1000, "Hello world!", 500]}
          loop={Infinity}
          wrapper="p"
        />
      </div>
      {/* <BgImage image={imagen} className="Home__BgImage"> 
        <div className="Home__Logo__Container">
          <GatsbyImage image={logoImage} alt={`img-${title}`}></GatsbyImage>
        </div>
        <h1 className="Home__Title">{title}</h1>
      </BgImage>*/}
    </Layout>
  )
}

export default Home
