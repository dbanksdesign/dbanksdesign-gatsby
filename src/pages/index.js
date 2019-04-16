import React from 'react'
import { Link, graphql } from 'gatsby'

import SEO from '$components/SEO'
import Amazon from '$components/Amazon'
import {ProjectCard, CardGrid} from '$components/Card'
import Code from '$components/Code'

class Home extends React.Component {
  render() {
    const { data } = this.props;
    const posts = data.allMdx.edges;
    const projects = data.projects.edges;

    return (
      <>
        <SEO
          title="dbanksdesign - The home of Danny Banks"
          keywords={[`dbanksdesign`, `design system`, `style dictionary`, `design technologist`]}
        />

        <div style={{textAlign:'center'}}>
          <h1>Danny Banks</h1>
          <h2>Designineer at <Amazon /></h2>

        </div>

        <Code codeString={`
{
  name: 'Danny Banks',
  title: 'Designineer',
  employer: 'Amazon'
}`} language="javascript" />
        <div>
          I design and develop <mark>design system</mark> things. Occassionally I write about it and speak about it.
        </div>

        <h3>Recent Articles</h3>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <div key={node.fields.slug}>
              <h4>
                <Link to={node.fields.slug}>
                  {title}
                </Link>
              </h4>
              <small>{node.frontmatter.date}</small>
              <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            </div>
          )
        })}
        <Link to="/blog">See all articles</Link>

        <h3>Projects</h3>
        <CardGrid>
          {projects.map(({ node }) => {
            const {title, graphic, description} = node.childJavascriptFrontmatter.frontmatter;
            return (
              <ProjectCard title={title}
                description={description}
                url={node.relativeDirectory}
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
      limit: 3
    ) {
      edges {
        node {
          excerpt
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
