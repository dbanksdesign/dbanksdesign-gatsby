import React from 'react'

export default ({ data }) => {
  const total = data.reduce((prev, curr) => prev + curr.value, 0);
  
  return (
    <div className="breakdown">
      {data.map(({label, value}) => (
        <span className="breakdown-bar" style={{width:`${(value/total)*100}%`}}>
          {label} &mdash; {value}
        </span>
      ))}
    </div>
  )
}