import React from 'react'
import { Link, graphql } from 'gatsby'
import SEO from '$components/SEO'

class WorkIndex extends React.Component {
  render() {
    const { data } = this.props
    const projects = data.allFile.edges

    return (
      <>
        <SEO
          title="dbanksdesign - Work"
          keywords={[`dbanksdesign`, `projects`, `design`, `design systems`]}
        />
        <h1>Work</h1>
        <p className="text-center"><em>Coming soon...</em></p>

        {/* {projects.map(({ node }) => {
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
        })} */}
      </>
    )
  }
}

export default WorkIndex

export const pageQuery = graphql`
  query {
    allFile(filter: {
      sourceInstanceName: {eq: "pages"},
      relativeDirectory: {regex: "/^work\//"},
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
