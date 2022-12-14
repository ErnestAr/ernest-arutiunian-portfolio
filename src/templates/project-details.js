import React from 'react'
import Layout from '../components/Layout'
import { GatsbyImage} from "gatsby-plugin-image";
import {details, featured, htmlstyle} from "../styles/project-details.module.css"
import { graphql } from 'gatsby';


export default function ProjectDetails({data}) {
    const {html} = data.markdownRemark
    const {stack, title, featuredImg } = data.markdownRemark.frontmatter
  return (
    <Layout>
        <div className={details}>
            <h2>
                {title}
            </h2>
            <h3>{stack}</h3>
            <div className={featured}>
                <GatsbyImage image = {featuredImg.childImageSharp.gatsbyImageData} alt="project image"/> 
            </div>
             <div className={htmlstyle} dangerouslySetInnerHTML={{__html: html}}/> 
        </div>
    </Layout>
  )
}

export const query = graphql`
  query ProjectDetails($slug: String) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      html
      frontmatter {
        stack
        title
        featuredImg {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`