import React from 'react'
import Layout from '../../components/Layout'
import {portfolio, project, prj1, prj2, prj3} from "../../styles/projects.module.css"
import {graphql, Link} from "gatsby"


export default function Projects({data}) {
  console.log(data);
  function prjStyle(style) {
    if (style==='prj1'){
      return prj1}
    else if (style==='prj2'){
        return prj2
    } else if (style==='prj3'){
      return prj3
  }
    }
  const projects = data.projects.nodes
  const contact = data.contact.siteMetadata.contact
  return (
    <Layout>
         <div className={portfolio}>
          <h2>Projects</h2>
          <h3>Projects and Websites I've created</h3>
          <div className={project}>
            {projects.map(project => (
                <Link to = {"/projects" + project.frontmatter.slug} key = {project.id}>
                    <div className={prjStyle(project.frontmatter.style)}>
                    <p>{project.frontmatter.stack}</p>
                    <h2>{project.frontmatter.title}</h2>
                    <p>{project.frontmatter.inshort}</p>
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
        style
        inshort
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

