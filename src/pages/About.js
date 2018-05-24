import React from 'react'
import Link from 'gatsby-link'
import TabContainer from '../components/Navbar'


const About = () => (
  <div>
  <TabContainer />

    <h1>About Page</h1>
    <p>Hi, I'm full stack developer living in toronto </p>
    <Link to="/">Go back to the homepage</Link>
  </div>
)

export default About
