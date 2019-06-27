import React from 'react'
import { MDXProvider } from '@mdx-js/tag'
import Code from './src/components/Code'
import { preToCodeBlock } from 'mdx-utils'

// components is its own object outside of render so that the references to
// components are stable
const components = {
  pre: preProps => {
    const props = preToCodeBlock(preProps)
    // if there's a codeString and some props, we passed the test
    if (props) {
      return <Code {...props} />
    } else {
      // it's possible to have a pre without a code in it
      return <pre {...preProps} />
    }
  },
  // remark-autolink-headers is crapping out. doing this myself
  h2: props => {
    if (typeof props.children === 'string') {
      return <h2 id={props.children.replace(/\s/g,'-')} {...props} />
    } else {
      const id = props.children.map((node) => {
        if (typeof node === 'string') {
          return node;
        } else {
          return node.props.children
        }
      }).join('-').replace(/\s/g,'-')
      return <h2 id={id} {...props} />
    }
  }
}
export const wrapRootElement = ({ element }) => (
  <MDXProvider components={components}>{element}</MDXProvider>
)
