import React from 'react'
import { Link, graphql } from 'gatsby'
import SEO from '$components/SEO'
import Post from '$components/Post'

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props;
    const posts = data.allMdx.edges;

    return (
      <>
        <SEO
          title="dbanksdesing - Blog"
          keywords={[`blog`, `design systems`, `components`, `front-end`]}
        />
        <h1>Blog</h1>
        <hr />
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
      </>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC },
      filter: {
        frontmatter: {
          draft: {ne: true}
        }
      },
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
  }
`
