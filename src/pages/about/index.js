import React from 'react'
import { Link, graphql } from 'gatsby'
import Image from 'gatsby-image'
import SEO from '$components/SEO'

class About extends React.Component {
  render() {
    const { data } = this.props;

    return (
      <>
        <SEO
          title="dbanksdesign - About Danny Banks"
          keywords={[`Danny Banks`, `dbanksdesign`, `Daniel Banks`]} />
        <h1>About Me</h1>
        <div className="row">
          <div className="column">
            <Image
              className="responsive-image round-image"
              fluid={data.dangie.childImageSharp.fluid}
              alt="Danny and wife Angie drinking a beer" />
          </div>
          <div className="column">
            <p>I've been a designer/front-end developer since 2005. I started at a small web design/development agency in San Diego, then went to <a href="https://spokeo.com" target="_blank">Spokeo</a> for 4 years. I currently work at Amazon in the Santa Cruz office. I work on the Amazon Seller app, and help build design systems.</p>
            <p>I live in San Jose with my perfect partner and 2 silly cats.</p>
            <p>My partner and I love to travel when we can and eat all the carbs: 🍩, 🥐, 🍕.</p>
          </div>
        </div>
      </>
    )
  }
}

export default About

export const pageQuery = graphql`
  query AboutQuery {
    dangie: file(absolutePath: { regex: "/dangie.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 1000, maxHeight: 1000) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`
