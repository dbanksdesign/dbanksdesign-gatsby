import React from 'react'
import { render } from 'react-dom'
import Highlight, { defaultProps } from 'prism-react-renderer'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'

const Code = ({ codeString, language, ...props }) => {
  if (props['react-live']) {
    return (
      <LiveProvider code={codeString} noInline={true}>
        <LiveEditor />
        <LiveError />
        <LivePreview />
      </LiveProvider>
    )
  } else {
    return (
      <Highlight {...defaultProps} code={codeString} language={language}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })} style={null}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} style={null} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    )
  }
}

export default Code;