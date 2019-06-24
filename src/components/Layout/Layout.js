import React from 'react'
import Header from '$components/Header'
import Footer from '$components/Footer'
import TOC from '$components/TOC'
import './Layout.css'

class Layout extends React.Component {
  render() {
    let toc;
    const { children } = this.props;
    const { data } = this.props;
    if (data && data.mdx && data.mdx.frontmatter && data.mdx.frontmatter.toc) {
      toc = data.mdx.frontmatter.toc;
    }
    
    if (this.props.location.hash) {
      console.log(this.props.location.hash.replace('#',''));
      // console.log(document.getElementById(this.props.location.hash.replace('#','')).offsetTop);
    }

    return (
      <div className="app">
        <Header />
        <div className="content">
          {children}
        </div>
        <Footer />
      </div>
    )
  }
}

export default Layout
