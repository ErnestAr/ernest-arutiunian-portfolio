import { Link, graphql, useStaticQuery } from 'gatsby'
import React from 'react'

export default function Navbar() {
  const data = useStaticQuery(graphql`
  query SiteInfo {
    site {
      siteMetadata {
        contact
      }
    }
  }
  `)

  const {title} = data.site.siteMetadata
  return (
    <nav>
        <h3>Ernest Arutiunian</h3>
        <div className='links'>
            <Link to="/">Home  </Link>
            <Link to="/projects">Projects  </Link>
            <Link to="/about">About  </Link>
        </div>
    </nav>
  )
}
