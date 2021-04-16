import React from 'react'
import './FidelityGraph.css'

export default () => (
  <svg width="1440px" height="1024px" viewBox="0 0 1440 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <polygon className="fidelity-graph-development" points="684 266 684 714 236 714"></polygon>
    <polygon className="fidelity-graph-design" points="1317 391 1317 714 684 714"></polygon>
    <line className="fidelity-graph-border" x1="236" y1="266" x2="236" y2="714" strokeWidth="4" strokeLinecap="square"></line>
    <line className="fidelity-graph-border" x1="684" y1="266" x2="684" y2="714" strokeWidth="4" strokeLinecap="square" strokeDasharray="10,20"></line>
    <line className="fidelity-graph-border" x1="1317" y1="266" x2="1317" y2="714" strokeWidth="4" strokeLinecap="square" strokeDasharray="10,20"></line>
    <line className="fidelity-graph-border" x1="236.25" y1="713.75" x2="1317" y2="714" strokeWidth="4" strokeLinecap="square"></line>
    <text className="fidelity-graph-label">
      <tspan x="610.34" y="222">Handoff</tspan>
    </text>
    <text className="fidelity-graph-label">
      <tspan x="1235.24" y="222">Launch</tspan>
    </text>
    <text className="fidelity-graph-value">
      <tspan x="446.52" y="650">Design</tspan>
    </text>
    <text className="fidelity-graph-label">
      <tspan x="43.1" y="495">Fidelity</tspan>
    </text>
    <text className="fidelity-graph-label">
      <tspan x="724.98" y="839">Time</tspan>
    </text>
    <text className="fidelity-graph-value">
      <tspan x="1009.04" y="650">Development</tspan>
    </text>
  </svg>
);