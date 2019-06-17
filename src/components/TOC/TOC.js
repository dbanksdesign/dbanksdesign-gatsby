import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Scrollspy from 'react-scrollspy'

import './TOC.css'

export default ({ links }) => (
  <div className="toc">
    <div className="toc-inner">
      <h4>Table of contents</h4>
      <Scrollspy items={ links.map((link) => link.anchor) } 
        currentClassName="is-current">
        {links.map((link) => (
          <li key={link.anchor}>
            <AnchorLink href={`#${link.anchor}`}>
              {link.label}
            </AnchorLink>
          </li>
        ))}
      </Scrollspy>
    </div>
  </div>
)
