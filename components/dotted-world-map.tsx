export function DottedWorldMap() {
    return (
      <svg
        viewBox="0 0 800 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto opacity-50"
      >
        <g className="text-gray-700">
          {/* North America */}
          <circle cx="150" cy="120" r="2" className="fill-current" />
          <circle cx="160" cy="110" r="2" className="fill-current" />
          <circle cx="170" cy="100" r="2" className="fill-current" />
          <circle cx="180" cy="110" r="2" className="fill-current" />
          <circle cx="190" cy="120" r="2" className="fill-current" />
          <circle cx="200" cy="130" r="2" className="fill-current" />
          <circle cx="160" cy="140" r="2" className="fill-current" />
          <circle cx="170" cy="150" r="2" className="fill-current" />
          <circle cx="180" cy="140" r="2" className="fill-current" />
          <circle cx="190" cy="130" r="2" className="fill-current" />
  
          {/* South America */}
          <circle cx="220" cy="220" r="2" className="fill-current" />
          <circle cx="230" cy="230" r="2" className="fill-current" />
          <circle cx="240" cy="240" r="2" className="fill-current" />
          <circle cx="250" cy="250" r="2" className="fill-current" />
          <circle cx="220" cy="260" r="2" className="fill-current" />
          <circle cx="230" cy="270" r="2" className="fill-current" />
          <circle cx="240" cy="280" r="2" className="fill-current" />
  
          {/* Europe */}
          <circle cx="400" cy="100" r="2" className="fill-current" />
          <circle cx="410" cy="90" r="2" className="fill-current" />
          <circle cx="420" cy="100" r="2" className="fill-current" />
          <circle cx="430" cy="110" r="2" className="fill-current" />
          <circle cx="440" cy="120" r="2" className="fill-current" />
          <circle cx="400" cy="130" r="2" className="fill-current" />
          <circle cx="410" cy="140" r="2" className="fill-current" />
          <circle cx="420" cy="130" r="2" className="fill-current" />
  
          {/* Africa */}
          <circle cx="400" cy="180" r="2" className="fill-current" />
          <circle cx="410" cy="190" r="2" className="fill-current" />
          <circle cx="420" cy="200" r="2" className="fill-current" />
          <circle cx="430" cy="210" r="2" className="fill-current" />
          <circle cx="440" cy="220" r="2" className="fill-current" />
          <circle cx="400" cy="230" r="2" className="fill-current" />
          <circle cx="410" cy="240" r="2" className="fill-current" />
          <circle cx="420" cy="250" r="2" className="fill-current" />
  
          {/* Asia */}
          <circle cx="500" cy="120" r="2" className="fill-current" />
          <circle cx="510" cy="110" r="2" className="fill-current" />
          <circle cx="520" cy="100" r="2" className="fill-current" />
          <circle cx="530" cy="110" r="2" className="fill-current" />
          <circle cx="540" cy="120" r="2" className="fill-current" />
          <circle cx="550" cy="130" r="2" className="fill-current" />
          <circle cx="560" cy="140" r="2" className="fill-current" />
          <circle cx="570" cy="150" r="2" className="fill-current" />
          <circle cx="580" cy="160" r="2" className="fill-current" />
          <circle cx="590" cy="170" r="2" className="fill-current" />
          <circle cx="600" cy="180" r="2" className="fill-current" />
          <circle cx="500" cy="150" r="2" className="fill-current" />
          <circle cx="510" cy="160" r="2" className="fill-current" />
          <circle cx="520" cy="170" r="2" className="fill-current" />
          <circle cx="530" cy="180" r="2" className="fill-current" />
  
          {/* Australia */}
          <circle cx="650" cy="250" r="2" className="fill-current" />
          <circle cx="660" cy="260" r="2" className="fill-current" />
          <circle cx="670" cy="270" r="2" className="fill-current" />
          <circle cx="680" cy="280" r="2" className="fill-current" />
          <circle cx="650" cy="290" r="2" className="fill-current" />
          <circle cx="660" cy="300" r="2" className="fill-current" />
  
          {/* Points de connexion animés */}
          <circle cx="200" cy="150" r="3" className="fill-blue-500 animate-pulse" />
          <circle cx="400" cy="120" r="3" className="fill-blue-500 animate-pulse" />
          <circle cx="600" cy="200" r="3" className="fill-blue-500 animate-pulse" />
          <circle cx="500" cy="250" r="3" className="fill-blue-500 animate-pulse" />
  
          {/* Lignes de connexion */}
          <line x1="200" y1="150" x2="400" y2="120" className="stroke-current stroke-[0.5]" />
          <line x1="400" y1="120" x2="600" y2="200" className="stroke-current stroke-[0.5]" />
          <line x1="600" y1="200" x2="500" y2="250" className="stroke-current stroke-[0.5]" />
          <line x1="500" y1="250" x2="200" y2="150" className="stroke-current stroke-[0.5]" />
        </g>
      </svg>
    )
  }
  
  