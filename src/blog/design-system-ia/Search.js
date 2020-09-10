import React from 'react'
import data from './data'

const searchCount = data.reduce((curr, next) => {
  if (next.hasSearch) {
    curr ++;
  }
  return curr;
}, 0);

const totalCount = data.length;
const searchPercentage = (searchCount / (searchCount + totalCount)) * 100;

export default () => (
  <div style={{background:'red', height:'20px'}}>
    <div style={{background:'green', height:'20px', width:`${searchPercentage}%`}}>{searchCount}</div>
  </div>
)