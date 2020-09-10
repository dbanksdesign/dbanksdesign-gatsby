import React from 'react'
import data from './data'

const startNames = data.reduce((curr, next) => {
  const items = next.items.filter((item) => {
    return item.name.toLowerCase().includes('start')
  });
  
  if (items.length) {
    curr = curr.concat(items[0].name);
  }
  
  return curr;
}, []);

const totalCount = data.length;
const startPercentage = (startNames.length / (startNames.length + totalCount)) * 100;

console.log(startNames.filter(name => name.toLowerCase() === `getting started`).length);
console.log(startNames.filter(name => name.toLowerCase() === `get started`).length);


export default (params) => (
  <div style={{background:'red', height:'20px'}}>
    <div style={{background:'green', height:'20px', width:`${startPercentage}%`}}>{startNames.length}</div>
    {startNames.map((name) => <div>{name}</div>)}
  </div>
);