import React from 'react'
import data from './data'
import './bar.css'

const topLevelCounts = data.map(ds => ds.items.length);
const total = topLevelCounts.reduce((curr,prev) => {
  return curr + prev;
}, 0);

const max = topLevelCounts.reduce((curr, prev) => {
  if (curr < prev) {
    return prev;
  } else {
    return curr;
  }
}, 0);

const countsArr = topLevelCounts.reduce((curr,prev) => {
  if (curr[prev]) {
    curr[prev]++;
  } else {
    curr[prev] = 1;
  }
  return curr;
}, Array.from(Array(max), n => 0)); // create an array of 0s to max

export default (params) => (
  <div>
    <div>Average: {(total / data.length).toFixed(2)}</div>
    
    <div className="bar-chart">
      {countsArr.slice(1).map((count,i) => (
        <div className="bar-column" key={i}>
          <div className="bar" data-count={count} style={{height: `${count+1}rem`}} />
          <div className="bar-label">{i+1}</div>
        </div>
      ))}
    </div>
  </div>
);