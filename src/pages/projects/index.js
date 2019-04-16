import React from 'react'
import { Link, graphql } from 'gatsby'
import SEO from '$components/SEO'

class ProjectIndex extends React.Component {
  render() {
    const { data } = this.props;
    const projects = data.allFile.edges;

    return (
      <>
        <SEO
          title="All projects"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />

        {projects.map(({ node }) => {
          const title = node.childJavascriptFrontmatter.frontmatter.title;
          const url = node.relativeDirectory;
          return (
            <div key={url}>
              <h3>
                <Link to={url}>
                  {title}
                </Link>
              </h3>
            </div>
          )
        })}
      </>
    )
  }
}

export default ProjectIndex

export const pageQuery = graphql`
  query {
    allFile(filter: {
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
            }
          }
        }
      }
    }
  }
`
