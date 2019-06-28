import React from 'react'
import Header from '$components/Header'
import Footer from '$components/Footer'
import './Layout.css'

class Layout extends React.Component {
  render() {
    const { children } = this.props;

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
