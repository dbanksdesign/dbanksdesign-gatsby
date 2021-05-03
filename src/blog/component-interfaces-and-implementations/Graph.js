import React from 'react';

const Graph = () => (
  <svg width="420px" height="200px" viewBox="0 0 420 200" version="1.1" xmlns="http://www.w3.org/2000/svg" style={{
    border:'var(--size-border-base) solid var(--color-border-secondary)', 
    margin: 'var(--size-padding-large) auto',
    display: 'block'}}>
      <g id="Artboard" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <text id="Traffic" fontFamily="IBMPlexSans-Bold, IBM Plex Sans" fontSize="20" fontWeight="bold" fill="var(--color-font-primary)">
          <tspan x="11.73" y="28">Traffic</tspan>
        </text>
        <text id="Last-updated-2-minutes" fontFamily="IBMPlexSans, IBM Plex Sans" fontSize="16" fontWeight="normal" fill="var(--color-font-tertiary)">
          <tspan x="12" y="181">Last updated 2 minutes ago</tspan>
        </text>
        <text id="Page-hits-in-2019" fontFamily="IBMPlexSans, IBM Plex Sans" fontSize="16" fontWeight="normal" fill="var(--color-font-primary)">
          <tspan x="286.472" y="27">Page hits in 2019</tspan>
        </text>
        <text id="View-more" fontFamily="IBMPlexSans, IBM Plex Sans" fontSize="16" fontWeight="normal" fill="var(--color-font-link)">
          <tspan x="333" y="181">View more</tspan>
        </text>
        <polyline id="Line" stroke="var(--color-core-green)" strokeWidth="2" strokeLinecap="square" points="47.5 93 79.8014915 66.9550781 112.102983 71.6669922 144.404474 79.9775391 176.705966 71.6669922 209.007457 79.9775391 241.308949 49.3945312 273.61044 76.1378485 305.911932 102.294922 338.213423 79.9775391 370.514915 93 402.816406 86.28125"></polyline>
        <path d="M41,129.5 L412.576172,129.5" id="Line-2" stroke="var(--color-border-tertiary)" strokeLinecap="square"></path>
        <path d="M41,129.5 L41,45.6914062" id="Line-3" stroke="var(--color-border-tertiary)" strokeLinecap="square"></path>
        <text id="0" fontFamily="IBMPlexSans, IBM Plex Sans" fontSize="12" fontWeight="normal" fill="var(--color-font-tertiary)">
          <tspan x="24.8" y="130">0</tspan>
        </text>
        <text id="100" fontFamily="IBMPlexSans, IBM Plex Sans" fontSize="12" fontWeight="normal" fill="var(--color-font-tertiary)">
          <tspan x="10.4" y="96">100</tspan>
        </text>
        <text id="200" fontFamily="IBMPlexSans, IBM Plex Sans" fontSize="12" fontWeight="normal" fill="var(--color-font-tertiary)">
          <tspan x="10.4" y="61">200</tspan>
        </text>
        <text id="Jan" fontFamily="IBMPlexSans, IBM Plex Sans" fontSize="12" fontWeight="normal" fill="#868C91">
          <tspan x="41" y="145">Jan</tspan>
        </text>
        <text id="Feb" fontFamily="IBMPlexSans, IBM Plex Sans" fontSize="12" fontWeight="normal" fill="#868C91">
          <tspan x="72" y="145">Feb</tspan>
        </text>
        <text id="Mar" fontFamily="IBMPlexSans, IBM Plex Sans" fontSize="12" fontWeight="normal" fill="#868C91">
          <tspan x="104" y="145">Mar</tspan>
        </text>
        <text id="Apr" fontFamily="IBMPlexSans, IBM Plex Sans" fontSize="12" fontWeight="normal" fill="#868C91">
          <tspan x="136" y="145">Apr</tspan>
        </text>
        <text id="May" fontFamily="IBMPlexSans, IBM Plex Sans" fontSize="12" fontWeight="normal" fill="#868C91">
          <tspan x="167" y="145">May</tspan>
        </text>
        <text id="Jun" fontFamily="IBMPlexSans, IBM Plex Sans" fontSize="12" fontWeight="normal" fill="#868C91">
          <tspan x="201" y="145">Jun</tspan>
        </text>
        <text id="Jul" fontFamily="IBMPlexSans, IBM Plex Sans" fontSize="12" fontWeight="normal" fill="#868C91">
          <tspan x="233" y="145">Jul</tspan>
        </text>
        <text id="Aug" fontFamily="IBMPlexSans, IBM Plex Sans" fontSize="12" fontWeight="normal" fill="#868C91">
          <tspan x="261" y="145">Aug</tspan>
        </text>
        <text id="Sep" fontFamily="IBMPlexSans, IBM Plex Sans" fontSize="12" fontWeight="normal" fill="#868C91">
          <tspan x="293" y="145">Sep</tspan>
        </text>
        <text id="Oct" fontFamily="IBMPlexSans, IBM Plex Sans" fontSize="12" fontWeight="normal" fill="#868C91">
          <tspan x="325" y="145">Oct</tspan>
        </text>
        <text id="Nov" fontFamily="IBMPlexSans, IBM Plex Sans" fontSize="12" fontWeight="normal" fill="#868C91">
          <tspan x="356" y="145">Nov</tspan>
        </text>
        <text id="Dec" fontFamily="IBMPlexSans, IBM Plex Sans" fontSize="12" fontWeight="normal" fill="#868C91">
          <tspan x="389" y="145">Dec</tspan>
        </text>
      </g>
  </svg>
);

export default Graph;