import React from "react"
import Layout from "../components/Layout"
import {header, btn} from "../styles/home.module.css"
import { Link, graphql } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image";


export default function Home({data}) {
  const image = getImage(data.file.childImageSharp.gatsbyImageData)
  return(
    
    <Layout>
      <section className={header}>
        <div>
          <h2>Home page</h2>
          <Link className={btn} to="/projects">My projects</Link>
          </div>
          <GatsbyImage image={image} alt="Banner" />
      </section>
      
    </Layout>
)
}

export const query = graphql`
query Banner {
  file(relativePath: {eq: "banner.png"}) {
    childImageSharp {
      gatsbyImageData(
        layout: FULL_WIDTH
        placeholder: BLURRED
        formats: [AUTO, WEBP]
        )
    }
  }
}`
