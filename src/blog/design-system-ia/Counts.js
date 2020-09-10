import React from 'react'
import data from './data'
import './breakdown.css'

const nameCounts = data.reduce((curr, next) => {
  next.items.forEach((item) => {
    const name = item.name.toLowerCase();
    if (curr.hasOwnProperty([name])) {
      curr[name]++;
    } else {
      curr[name] = 1;
    }
    
    if (curr.MAX < curr[name]) {
      curr.MAX = curr[name];
    }
  });

  return curr;
}, {MAX: 0});

const nameCountList = Object.keys(nameCounts)
  .filter(name => nameCounts[name] > 1 && name !== 'MAX')
  .sort((a,b) => nameCounts[a] < nameCounts[b] ? 1 : -1)
  .slice(0, 11)
  .map(name => {
    const count = nameCounts[name];
    return {
      name,
      count,
      percentage: (count / nameCounts.MAX) * 100
    }
  });

export default (params) => (
  <div>
    {nameCountList.map(({name,count, percentage}) => (
      <div key={name} className="count" style={{width:`${percentage}%`}}>
        <span>{name}</span>&nbsp;
        <strong>({count})</strong>
      </div>
    ))}
  </div>
);