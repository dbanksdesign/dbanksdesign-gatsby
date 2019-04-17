import React from 'react'
import './src/styles/reset.css'
import './src/styles/theme.css'
import './src/styles/prism.css'
import Layout from '$components/Layout'

import { wrapRootElement as wrap } from './wrap-root-element'

export const wrapRootElement = wrap

export const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
)
