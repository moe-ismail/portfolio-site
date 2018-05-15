import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import './index.css'
import Link from 'gatsby-link'



const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <header className="header">
      <div className="header-wrap">
        <Link className="homelink" to ="/"><span className ="logo">Logo</span>
        <h1 className="name">Moe Ismail </h1>
        </Link>
        <nav>
            <li><Link className="about" to="/about">About</Link></li>
            <li><Link className="projects" to="/projects">Projects</Link></li>
            <li><Link className="contact" to="/contact">Contact</Link></li>
        </nav>
      </div>
    </header>

    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
