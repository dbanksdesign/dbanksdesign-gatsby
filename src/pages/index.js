import React from 'react'
import { Link, graphql } from 'gatsby'

import SEO from '$components/SEO'
import Amazon from '$components/Amazon'
import {ProjectCard, CardGrid} from '$components/Card'
import Post from '$components/Post'

// import colors from '../tokens/color/core'
// const swatches = () => (
//   <div className="home-swatches">
//     {Object.keys(colors).filter(color => !['white','gray'].includes(color))
//       .map(color => (
//       <div className="color-group">
//         {Object.keys(colors[color]).map(shade => (
//           <div className="color-swatch" style={{backgroundColor: colors[color][shade].value}} />
//         ))}
//       </div>
//     ))}
//   </div>
// )

import './home.css'
class Home extends React.Component {
  render() {
    const { data } = this.props;
    const posts = data.allMdx.edges;
    const projects = data.projects.edges;

    return (
      <>
        <SEO
          title="dbanksdesign - The home of Danny Banks"
          keywords={[`dbanksdesign`, `design system`, `style dictionary`, `design technologist`, `design tokens`]}
        />
        
        <div>
          <h1>Danny Banks</h1>
          <h2>Design Systems Architect<sup>*</sup>, Design Technologist, Designineer at <Amazon /></h2>
          <p>I design and develop <mark>design system</mark> things. Occassionally I write and speak about it too. I work on mobile and web apps, designing and developing.</p>
        </div>
        <hr />
        <h3>Recent Articles</h3>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <Post key={node.fields.slug}
              href={node.fields.slug}
              title={title}
              date={node.frontmatter.date}
              body={node.excerpt} />
          )
        })}
        <hr />
        <h3>Projects</h3>
        <CardGrid>
          {projects.map(({ node }) => {
            const {title, graphic, description, publicURL} = node.childJavascriptFrontmatter.frontmatter;
            return (
              <ProjectCard key={title}
                title={title}
                description={description}
                url={publicURL}
                graphic={graphic ? graphic.publicURL : null} />
            )
          })}
        </CardGrid>
      </>
    )
  }
}

export default Home

export const pageQuery = graphql`
  query {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC },
      filter: {
        frontmatter: {
          draft: {ne: true}
        }
      },
      limit: 3
    ) {
      edges {
        node {
          excerpt(pruneLength: 200)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
    projects: allFile(filter: {
      sourceInstanceName: {eq: "pages"},
      relativeDirectory: {regex: "/^projects\//"},
      extension: {eq: "js"}
    }) {
      edges {
        node {
          id
          name
          relativeDirectory
          childJavascriptFrontmatter {
            frontmatter {
              title
              publicURL
              graphic {
                publicURL
              }
              description
            }
          }
        }
      }
    }
  }
`
