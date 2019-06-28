import React, { Fragment } from 'react'
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styles from './DesignSystems.module.css'
import data from './data'

const DesignSystem = ({ title, ds, token, image }) => (
  <div className={styles.designSystem}>
    <h4>{title}</h4>
    
    {image &&
      <Img fluid={image.childImageSharp.fluid}
        title={title}
        alt={`Screenshot of ${title} design system token page`}
        className={styles.designSystemImage} />}
      
    <dl className={styles.designSystemInfo}>
      {ds.site && 
        <Fragment>
          <dt>Design System Site:</dt>
          <dd><a href={ds.site}>{ds.site}</a></dd>
        </Fragment>}
        
      {ds.source && 
        <Fragment>
          <dt>Design System Source:</dt>
          <dd><a href={ds.source}>{ds.source}</a></dd>
        </Fragment>}

      {token.site && 
        <Fragment>
          <dt>Token Site:</dt>
          <dd><a href={token.site}>{token.site}</a></dd>
        </Fragment>}
        
      {token.source && 
        <Fragment>
          <dt>Token Source:</dt>
          <dd><a href={token.source}>{token.source}</a></dd>
        </Fragment>}
    </dl>
  </div>
)

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allFile(filter: {relativeDirectory: {eq: "documenting-design-tokens/images/design-system"}}) {
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
          <DesignSystem key={ds.title} {...ds} image={image} />
        )
      })
    }}
  />
)