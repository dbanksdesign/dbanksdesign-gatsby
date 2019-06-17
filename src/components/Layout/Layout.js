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

    return (
      <div className="app">
        <Header />
        {toc && 
          <TOC links={toc} />}

        <div className="content">
          <div className="content-inner">
          {children}
          <Footer />
          </div>
        </div>
      </div>
    )
  }
}

export default Layout
