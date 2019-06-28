import React from 'react'
import { Link, graphql } from 'gatsby'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import SEO from '$components/SEO'
import TOC from '$components/TOC'
import smoothScroll from '$components/TOC/smoothScroll'
import './BlogPost.css'

class BlogPostTemplate extends React.Component {
  componentDidMount() {
    const { hash } = this.props.location;
    if (hash && hash.length > 0) {
      setTimeout(() => {
        smoothScroll.scrollTo(hash.replace('#',''))
      }, 100);
    }
  }
  
  // A blog post layout should never be re-rendered...
  // I think...
  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }
  
  render() {
    let toc;
    const post = this.props.data.mdx;
    const { frontmatter } = post;
    const { previous, next } = this.props.pageContext;
    if (frontmatter && frontmatter.toc) {
      toc = frontmatter.toc;
    }
    
    return (
      <>
        {toc &&
          <TOC links={toc} />}
        <SEO title={frontmatter.title} description={post.excerpt} />
        <div className="blog-content">
        <h1>{frontmatter.title}</h1>
        <section className="post-metadata">
          <span className="post-date">{post.frontmatter.date}</span>
        </section>
        
        <MDXRenderer>{post.code.body}</MDXRenderer>

        {/* <nav className="post-nav">
          {previous && (
            <Link className="post-nav-link" to={previous.fields.slug} rel="prev">
              <FaChevronLeft /> {previous.frontmatter.title}
            </Link>
          )}
          {next && (
            <Link className="post-nav-link" to={next.fields.slug} rel="next">
              {next.frontmatter.title} <FaChevronRight />
            </Link>
          )}
        </nav> */}
        </div>
      </>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        toc {
          anchor
          label
        }
      }
      code {
        body
      }
    }
  }
`
