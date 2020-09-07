import React from 'react'
import { Link, graphql } from 'gatsby'
import Image from 'gatsby-image'
import SEO from '$components/SEO'
import Talk from '$components/Talk'

const talks = [{
  event: 'Clarity 2020',
  eventLink: 'https://clarityconf.com/2020',
  date: {day:'04', month:'SEP', year:'2020'},
  title: 'An Introduction to Multi-Platform Design Systems',
  slideLink: 'https://noti.st/danielbanks/4cfWGA/an-introduction-to-multi-platform-design-systems',
},{
  event: 'OSCON 2019',
  eventLink: 'https://conferences.oreilly.com/oscon/oscon-or',
  date: {day: '18', month: 'JUL', year: '2019'},
  title: 'Building Consistent Cross Platform Interfaces',
  slideLink: 'http://bit.ly/oscon-2019-cross-platform',
  videoLink: 'https://www.youtube.com/watch?v=OCMt-aA8XBA'
},{
  event: 'FrontConf 2019',
  eventLink: 'https://frontconf.com/',
  date: {day: '27', month: 'APR', year: '2019'},
  title: 'Building Consistent Cross-Platform Interfaces',
  slideLink: 'http://bit.ly/frontconf-2019-cross-platform'
},{
  event: 'Codemotion Amsterdam 2019',
  eventLink: 'https://events.codemotion.com/conferences/amsterdam/2019/',
  date: {day:'03', month:'APR', year:'2019'},
  title: 'Building Consistent Cross-Platform Interfaces',
  slideLink: 'http://bit.ly/codemotion-2019-cross-platform'
},{
  event: 'Codemotion Rome 2019',
  eventLink: 'https://events.codemotion.com/conferences/rome/2019/',
  date: {day:'22', month:'MAR', year:'2019'},
  title: 'Building Consistent Cross Platform Interfaces',
  slideLink: 'http://bit.ly/codemotion-2019-cross-platform'
},{
  event: 'All Things Open 2018',
  eventLink: 'https://allthingsopen.org/',
  date: {day:'22', month:'OCT', year:'2018'},
  title: 'Building Consistent Cross Platform Interfaces',
  slideLink: 'http://bit.ly/ato2018-cross-platform'
},{
  event: 'Big Design 2018',
  eventLink: 'https://bigdesignevents.com/',
  date: {day:'24', month:'SEP', year:'2018'},
  title: 'Building Consistent Cross Platform Interfaces',
  slideLink: 'http://bit.ly/bigdstyled'
},{
  event: 'The Mixin SF',
  eventLink: 'https://themixinsf.com/',
  date: {day:'11', month:'JUL', year:'2018'},
  title: 'Cross-Platform Styles with Style Dictionary',
  slideLink: 'https://dbanksdesign.github.io/style-dictionary-presentation'
}];

const upcomingTalks = [];

class Speaking extends React.Component {
  render() {
    const { photo } = this.props.data;
    const { twitter } = this.props.data.site.siteMetadata.social;
    return (
      <div className="content-inner">
        <SEO
          title="Danny Banks : Speaking"
          keywords={[`Danny Banks`, `Speaking`, `design systems`, `front-end development`, `style dictionary`, `cross-platform`]} />
        <h1>Speaking</h1>
        <div className="row">
          <div className="column">
            <Image
              className="bg-image responsive-image round-image"
              fadeIn={true}
              fluid={photo.childImageSharp.fluid}
              alt="Danny speaking at All Things Open in 2018" />
          </div>
          <div className="column">
            <p>I love speaking about design systems, cross-platform design and development, front-end technology, and design stuff. If you'd like to have me speak at your event you can shoot me an <a href="mailto:dbanks.design@gmail.com">email</a> or DM on <a href={`https://twitter.com/${twitter}`}>Twitter</a>.</p>
          </div>
        </div>

        <h4 className="font-secondary">Upcoming Events</h4>
        {upcomingTalks.map(talk => <Talk {...talk} />)}

        <h4 className="font-secondary">Past Events</h4>
        {talks.map(talk => <Talk {...talk} />)}
      </div>
    )
  }
}

export default Speaking

export const pageQuery = graphql`
query {
  photo: file(absolutePath: { regex: "/speaking.jpg/" }) {
    childImageSharp {
      fluid(maxWidth: 1000, maxHeight: 1000) {
        ...GatsbyImageSharpFluid_noBase64
      }
    }
  }
  site {
    siteMetadata {
      social {
        twitter
      }
    }
  }
}`