import React from 'react'
import Layout from '../../components/Layout'
import {portfolio, projectsst} from "../../styles/projects.module.css"
import {graphql, Link} from "gatsby"
import { GatsbyImage, getImage} from "gatsby-plugin-image";

export default function Projects({data}) {
  console.log(data);
  const projects = data.projects.nodes
  const contact = data.contact.siteMetadata.contact
  return (
    <Layout>
         <div className={portfolio}>
          <h2>Projects</h2>
          <h3>Projects and Websites I've created</h3>
          <div className={projectsst}>
            {projects.map(project => (
              <Link to = {"/projects" + project.frontmatter.slug} key = {project.id}>
                <div>
                  <GatsbyImage image = {project.frontmatter.thumb.childImageSharp.gatsbyImageData} alt="project image"/>
                  <h3>{project.frontmatter.title}</h3>
                  <p>{project.frontmatter.stack}</p>
                </div>
              </Link>
            ))}
          </div>
                <p>Like what you see? Email me at {contact}</p>
          </div>
    </Layout>
  )
}

export const query = graphql`

query MyQuery {
  projects: allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
    nodes {
      frontmatter {
        title
        stack
        slug
        thumb {
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH
              placeholder: BLURRED
              formats: [AUTO, WEBP]
              )
          }
        }
      }
      id
    }
  }
  contact: site {
    siteMetadata {
      contact
    }
  }
}
`

