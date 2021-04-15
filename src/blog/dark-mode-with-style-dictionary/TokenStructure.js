import React, { useState } from 'react';

const TokenStructureWrapper = () => {
  const [mode, setMode] = useState('light');
  
  return (
    <div style={{textAlign:'center', marginBottom:'var(--size-padding-large)'}}>
      <TokenStructure mode={mode} />
      <div className="toggle-buttons">
      <button className={`toggle-button ${mode === 'dark' ? 'active' : ''}`} onClick={() => setMode('dark')}>Dark</button>
      <button className={`toggle-button ${mode === 'light' ? 'active' : ''}`} onClick={() => setMode('light')}>Light</button>
      </div>
    </div>
  )
}

const TokenStructure = ({ mode }) => (
  <svg className={`token-structure-${mode}`} viewBox="0 0 1300 500" fill="none" xmlns="http://www.w3.org/2000/svg">
    <text x="100" y="50" className="dm-token-structure-title">Core/Brand</text>
    <text x="500" y="50" className="dm-token-structure-title">Semantic/Application</text>
    <text x="900" y="50" className="dm-token-structure-title">Component</text>
    
    <g opacity={mode === 'light' ? '1' : '0.5'}>
      <rect className="dm-token-structure-token-shadow" x="94" y="96" width="300" height="80" />
      <rect className="dm-token-structure-token" x="100" y="90" width="300" height="80" stroke="#4C4C4D" strokeWidth="2"/>
      <text x="180" y="135" className="dm-token-structure-name">color.core.neutral.1000</text>
      <rect x="122" y="109" width="40" height="40" fill="black"/>
    </g>
    
    <g opacity={mode === 'dark' ? '1' : '0.5'}>
      <rect className="dm-token-structure-token-shadow" x="94" y="196" width="300" height="80" />
      <rect className="dm-token-structure-token" x="100" y="190" width="300" height="80" stroke="#4C4C4D" strokeWidth="2"/>
      <text x="180" y="235" className="dm-token-structure-name">color.core.neutral.0</text>
      <rect x="122" y="209" width="40" height="40" fill="white"/>
    </g>
    
    <rect className="dm-token-structure-token-shadow" x="494" y="96" width="300" height="80" />
    <rect className="dm-token-structure-token" x="500" y="90" width="300" height="80" stroke="#4C4C4D" strokeWidth="2"/>
    <text className="dm-token-structure-name" x="580" y="135">color.font.primary</text>
    <rect className="dm-token-structure-swatch" x="522" y="109" width="40" height="40" fill="#162020"/>
    
    <rect className="dm-token-structure-token-shadow" x="894" y="96" width="300" height="80" />
    <rect className="dm-token-structure-token" x="900" y="90" width="300" height="80" strokeWidth="2"/>
    <text className="dm-token-structure-name" x="980" y="135">input.fontColor</text>
    <rect className="dm-token-structure-swatch" x="923" y="109" width="40" height="40" fill="#162020"/>
    
    <rect className="dm-token-structure-token-shadow" x="894" y="196" width="300" height="80" />
    <rect className="dm-token-structure-token" x="900" y="190" width="300" height="80" strokeWidth="2"/>
    <text className="dm-token-structure-name" x="980" y="235">input.fontColor</text>
    <rect className="dm-token-structure-swatch" x="923" y="209" width="40" height="40" fill="#162020"/>

    <rect className="dm-token-structure-token-shadow" x="894" y="296" width="300" height="80" />
    <rect className="dm-token-structure-token" x="900" y="290" width="300" height="80" strokeWidth="2" />
    <text className="dm-token-structure-name" x="980" y="335">...</text>
    <rect className="dm-token-structure-swatch" x="923" y="309" width="40" height="40" fill="#162020"/>
    
    <path className="dm-token-structure-line" d="M810 110 H890" strokeWidth="2"/>
    <path className="dm-token-structure-line" d="M410 130 H490" strokeWidth="2" opacity={mode === 'light' ? '1' : '0.5'} strokeDasharray={mode === 'light' ? null : '5,5'} />
    <path className="dm-token-structure-line" d="M410 220 H450 V130 H490" strokeWidth="2" opacity={mode === 'dark' ? '1' : '0.5'} strokeDasharray={mode === 'dark' ? null : '5,5'}/>
    <path className="dm-token-structure-line" d="M890 220 H850 V130 H810" strokeWidth="2"/>
    <path className="dm-token-structure-line" d="M890 320 H830 V150 H810" strokeWidth="2"/>
  </svg>
);

export default TokenStructureWrapper;