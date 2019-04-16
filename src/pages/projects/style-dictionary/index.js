import React from 'react'
import styleDictionaryLogo from './style-dictionary-logo.svg'

export const frontmatter = {
  title: "Style Dictionary",
  category: "project",
  graphic: 'style-dictionary-logo.svg',
  description: "Test"
}

export default () => (
  <>
    <h1>hi</h1>
    <img src={styleDictionaryLogo} />
  </>
)