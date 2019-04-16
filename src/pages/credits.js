import React from 'react'
import SEO from '$components/SEO'

class Credits extends React.Component {
  render() {

    return (
      <>
        <SEO
          title="dbanksdesign : Source" />
        <h1>Source</h1>
        <a href="https://github.com/dbanksdesign/dbanksdesign-gatsby">Source</a>
        <p>This website is built with some amazing open-source projects. Check them out and show them some 💚 if you can.</p>

        <h4>Gatsby</h4>
        <p>Static site generation using react and webpack.</p>
        <h3>React</h3>
        <p></p>
        <h3>React-Icons</h3>
        <p>Easy-to-use icons for React. Comes with FontAwesome, Material, and other icon sets.</p>
      </>
    )
  }
}

export default Credits
