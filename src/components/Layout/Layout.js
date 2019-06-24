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
    
    // if (this.props.location.hash) {
    //   console.log(this.props.location.hash.replace('#',''));
    // }

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
