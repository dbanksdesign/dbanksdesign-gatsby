import React from 'react'

export default () => (
  <svg width="1440px" height="1024px" viewBox="0 0 1440 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient x1="100%" y1="50%" x2="0%" y2="50%" id="linearGradient-1">
        <stop className="fidelity-gradient-start" offset="0%"></stop>
        <stop className="fidelity-gradient-stop" offset="100%"></stop>
      </linearGradient>
    </defs>
    <polygon fill="url(#linearGradient-1)" points="928 266 928 714 236 714"></polygon>
    <line x1="236" y1="266" x2="236" y2="714" id="Line" stroke="#979797" strokeWidth="4" strokeLinecap="square"></line>
    <line x1="236.25" y1="713.75" x2="1317" y2="714" id="Line-2" stroke="#979797" strokeWidth="4" strokeLinecap="square"></line>
    <text className="fidelity-graph-value">
      <tspan x="614.1" y="593">Design &amp; </tspan>
      <tspan x="573.54" y="641">Development</tspan>
    </text>
    <text className="fidelity-graph-label">
      <tspan x="43.1" y="495">Fidelity</tspan>
    </text>
    <text className="fidelity-graph-label">
      <tspan x="724.98" y="839">Time</tspan>
    </text>
    <line x1="928.5" y1="266.5" x2="928.5" y2="714.5" id="Line-Copy-2" stroke="#979797" stroke-width="4" stroke-linecap="square" stroke-dasharray="10,20"></line>
    <text className="fidelity-graph-label">
      <tspan x="863.24" y="222">Launch</tspan>
    </text>
  </svg>
);