import React from 'react'
import Header from '$components/Header'
import Footer from '$components/Footer'
import styles from './Layout.module.css'

class Layout extends React.Component {
  render() {
    const { children } = this.props
    console.log(this.props);

    return (
      <>
        <Header />
        <div className={styles.content}>
          {children}
        </div>
        <Footer />
      </>
    )
  }
}

export default Layout
