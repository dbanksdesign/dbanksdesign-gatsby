import React, { Fragment } from 'react'
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import data from './data'

const DesignSystem = ({ name, company, url, image }) => (
  <div className="">
    <a href={url}>
      {image &&
        <Img fluid={image.childImageSharp.fluid}
          title={`${company} ${name}`}
          alt={`Screenshot of ${company} ${name} website`}
          className="" />}
    </a>
  </div>
)

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allFile(filter: {relativeDirectory: {eq: "design-system-ia/images"}}) {
          nodes {
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid
                originalName
              }
            }
          }
        }
      }
    `}
    render={images => {
      return data.map((ds) => {
        const image = images.allFile.nodes.find(
          node => node.childImageSharp.fluid.originalName === ds.image
        )
        
        return (
          <DesignSystem key={ds.url} {...ds} image={image} />
        )
      })
    }}
  />
)