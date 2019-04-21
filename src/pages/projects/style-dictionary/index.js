import React from 'react'
import styleDictionaryLogo from './style-dictionary-logo.svg'

export const frontmatter = {
  title: "Style Dictionary",
  category: "project",
  graphic: 'style-dictionary-logo.svg',
  publicURL: 'https://amzn.github.io/style-dictionary',
  description: "Style Dictionary is a build system that allows you to define styles once, in a way for any platform or language to consume."
}

export default () => (
  <>
    <h1>hi</h1>
    <img src={styleDictionaryLogo} />
  </>
)