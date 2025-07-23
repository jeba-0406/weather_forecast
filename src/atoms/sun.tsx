import * as React from "react";

export const Sun = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" className="w-[200px] h-[200px]">
    <defs>
      <filter id="blur" width="200%" height="200%">
        <feGaussianBlur in="SourceAlpha" stdDeviation={3} />
        <feOffset dy={4} result="offsetblur" />
        <feComponentTransfer>
          <feFuncA slope={0.05} type="linear" />
        </feComponentTransfer>
        <feMerge>
          <feMergeNode />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      <style>{/* keep your @keyframes and .am-weather-sun-shiny here */}</style>
    </defs>
    <g id="day" filter="url(#blur)">
      <g transform="translate(32 32)">
        <g className="am-weather-sun-shiny">
          <path
            fill="none"
            stroke="orange"
            strokeLinecap="round"
            strokeWidth={2}
            d="M0 9v3M-6.364 6.364l-2.121 2.121M-9 0h-3M-6.364-6.364l-2.121-2.121M0-9v-3M6.364-6.364l2.121-2.121M9 0h3M6.364 6.364l2.121 2.121"
          />
        </g>
        <circle r={5} fill="orange" stroke="orange" strokeWidth={2} />
      </g>
    </g>
  </svg>
);
