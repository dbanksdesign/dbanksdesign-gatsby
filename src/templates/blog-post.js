import React from 'react'
import { Link, graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import SEO from '$components/SEO'
import TOC from '$components/TOC'
import smoothScroll from '$components/TOC/smoothScroll'
import './BlogPost.css'

class BlogPostTemplate extends React.Component {
  componentDidMount() {
    const { hash } = this.props.location;
    const { frontmatter={} } = this.props.data.mdx;
    if (hash && hash.length > 0) {
      setTimeout(() => {
        smoothScroll.scrollTo(hash.replace('#',''))
      }, 100);
    }
    if (frontmatter.className && document) {
      document.documentElement.classList.add(frontmatter.className);
    }
  }
  
  componentWillUnmount() {
    const { frontmatter={} } = this.props.data.mdx;
    if (frontmatter.className && document) {
      document.documentElement.classList.remove(frontmatter.className);
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
    const { frontmatter={} } = post;
    const { previous, next } = this.props.pageContext;
    const image = frontmatter.image
      ? post.frontmatter.image.childImageSharp.resize
      : null;
      
    if (frontmatter.toc) {
      toc = frontmatter.toc;
    }
    
    return (
      <>
        <SEO
          title={frontmatter.title}
          description={frontmatter.description || post.excerpt}
          image={image}
          pathname={this.props.location.pathname}
        />
        {/* <SEO title={frontmatter.title} description={post.excerpt} /> */}
        <div className="blog-content">
          <header className="blog-header">
            <h1>{frontmatter.title}</h1>
            <section className="post-metadata">
              <span className="post-date">{post.frontmatter.date}</span>
            </section>
          </header>
        
          <MDXRenderer>{post.body}</MDXRenderer>

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
        {toc &&
          <TOC links={toc} />}
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
        className
        date(formatString: "MMMM DD, YYYY")
        image: featured {
          childImageSharp {
            resize(width: 1200) {
              src
              height
              width
            }
          }
        }
        toc {
          anchor
          label
        }
      }
      body
    }
  }
`
