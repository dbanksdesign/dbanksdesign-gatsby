import React from 'react'
import data from './data'

const topCount = data.filter(ds => ds.primaryNav === 'top').length;
const sideCount = data.filter(ds => ds.primaryNav === 'side').length;

export default () => (
  <div>
    <div>Top: {topCount}</div>
    <div>Side: {sideCount}</div>
    <div>Total: {data.length}</div>
  </div>
)