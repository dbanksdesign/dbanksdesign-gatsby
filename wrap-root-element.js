import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import Prism from "prism-react-renderer/prism";

(typeof global !== "undefined" ? global : window).Prism = Prism;

require("prismjs/components/prism-swift");

const anchorify = str => str.replace(/[^\s|\w|-]/g,'').replace(/\s/g,'-')

// components is its own object outside of render so that the references to
// components are stable
const components = {
  // remark-autolink-headers is crapping out. doing this myself
  h2: props => {
    if (typeof props.children === 'string') {
      return <h2 id={anchorify(props.children)} {...props} />
    } else {
      const id = anchorify(props.children
          .filter(node => typeof node === 'string')
          .join('-'));
      return <h2 id={id} {...props} />
    }
  },
  h3: props => {
    if (typeof props.children === 'string') {
      return <h3 id={anchorify(props.children)} {...props} />
    } else {
      const id = anchorify(props.children.map((node) => {
        if (typeof node === 'string') {
          return node;
        } else {
          return node.props.children
        }
      }).join('-'))
      return <h3 id={id} {...props} />
    }
  },
}

export const wrapRootElement = ({ element }) => (
  <MDXProvider components={components}>{element}</MDXProvider>
)
