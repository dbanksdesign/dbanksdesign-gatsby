import React from 'react'
import SEO from '$components/SEO'

class Credits extends React.Component {
  render() {

    return (
      <>
        <SEO
          title="dbanksdesign : Source" />
        <h1>Source</h1>
        <p>The source code of this site and blog is available on <a href="https://github.com/dbanksdesign/dbanksdesign-gatsby">Github</a>. It is not super pretty yet, but I'm working on it. I think it is good to not wait until something is perfect to share it. </p>

        <p>This website is built with some amazing open-source projects. Check them out and show them some 💚 if you can.</p>
        <dl>
          <dt><a href="https://www.gatsbyjs.org">Gatsby</a></dt>
          <dd>Static site generation using react and webpack.</dd>

          <dt><a href="https://github.com/react-icons/react-icons">React-Icons</a></dt>
          <dd>Easy-to-use icons for React. Comes with FontAwesome, Material, and other icon sets.</dd>
        </dl>
      </>
    )
  }
}

export default Credits
