import React from 'react';
import "../Mole/moleSVG.css"


const MoleSVG = ({ isCaught }) => {
	return (
		isCaught
			?
			<svg id="Слой_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 125 324.1"
			     style={ { enableBackground: "new 0 0 125 324.1" } }>
				<path className="st0-caught" d="M64.6,0h6.2C94.7,0,114,19.3,114,43.2v237.7c0,23.8-19.3,43.2-43.2,43.2h-6.2c-23.8,0-43.2-19.3-43.2-43.2V43.2
	C21.4,19.3,40.7,0,64.6,0z"/>
				<path className="st1-caught" d="M57.2,0h6.2c23.8,0,43.2,19.3,43.2,43.2v237.7c0,23.8-19.3,43.2-43.2,43.2h-6.2c-23.8,0-43.2-19.3-43.2-43.2
	V43.2C14,19.3,33.3,0,57.2,0z"/>
				<path className="st2-caught" d="M74.4,58l-9.6,9.7c-1.5,1.5-3.9,1.5-5.4,0c0,0,0,0,0,0L49.7,58c-1.4-1.4-1.5-3.5-0.3-5h25.3
	C75.9,54.5,75.7,56.6,74.4,58z"/>
				<line className="st3-caught" x1="80.1" y1="55.3" x2="123.4" y2="44.3"/>
				<line className="st3-caught" x1="81" y1="57.7" x2="125" y2="57.7"/>
				<line className="st3-caught" x1="79.5" y1="60.1" x2="122.8" y2="71.2"/>
				<line className="st3-caught" x1="43.8" y1="55.3" x2="1.5" y2="44.3"/>
				<line className="st3-caught" x1="43" y1="57.7" x2="0" y2="57.7"/>
				<line className="st3-caught" x1="44.4" y1="60.1" x2="2.1" y2="71.2"/>
				<path className="st4-caught" d="M79.9,72.3v6.4c0,7.7-8,13.8-17.8,13.8s-17.8-6.2-17.8-13.8v-6.4H79.9z"/>
				<rect x="52.3" y="72.3" className="st5-caught" width="10.2" height="22"/>
				<line className="st6-caught" x1="61.6" y1="72.3" x2="61.6" y2="94.3"/>
				<g>
					<line className="st7-caught" x1="73.8" y1="26.3" x2="87.2" y2="49.9"/>
					<line className="st7-caught" x1="87.5" y1="30.9" x2="72.3" y2="48.8"/>
				</g>
				<g>
					<line className="st7-caught" x1="38.6" y1="26.3" x2="51.9" y2="49.9"/>
					<line className="st7-caught" x1="52.3" y1="30.9" x2="37.1" y2="48.8"/>
				</g>
			</svg>
			:
			<svg viewBox="0 0 125 324.07">
				<rect className="cls-1" x="21.41" width="92.59" height="324.07" rx="43.17"/>
				<rect className="cls-2" x="14" width="92.59" height="324.07" rx="43.17"/>
				<ellipse cx="79.26" cy="39.7" rx="11.68" ry="11.44"/>
				<ellipse className="cls-3" cx="74.42" cy="34.97" rx="4.43" ry="4.34"/>
				<ellipse cx="47.8" cy="39.7" rx="11.68" ry="11.44"/>
				<ellipse className="cls-3" cx="42.97" cy="34.97" rx="4.43" ry="4.34"/>
				<path className="cls-4"
				      d="M60.38,58l-9.6,9.66a3.82,3.82,0,0,1-5.43,0L35.74,58a3.86,3.86,0,0,1-.34-5.05H60.73A3.87,3.87,0,0,1,60.38,58Z"
				      transform="translate(14)"/>
				<line className="cls-5" x1="80.14" y1="55.33" x2="123.43" y2="44.32"/>
				<line className="cls-5" x1="81.03" y1="57.74" x2="125" y2="57.74"/>
				<line className="cls-5" x1="79.54" y1="60.1" x2="122.81" y2="71.23"/>
				<line className="cls-5" x1="43.84" y1="55.33" x2="1.53" y2="44.32"/>
				<line className="cls-5" x1="42.97" y1="57.74" y2="57.74"/>
				<line className="cls-5" x1="44.44" y1="60.1" x2="2.14" y2="71.23"/>
				<path className="cls-6" d="M65.87,72.26v6.39c0,7.65-8,13.85-17.83,13.85S30.21,86.3,30.21,78.65V72.26Z"
				      transform="translate(14)"/>
				<rect className="cls-3" x="52.3" y="72.26" width="18.87" height="22"/>
				<line className="cls-7" x1="61.61" y1="72.26" x2="61.61" y2="94.26"/>
			</svg>
	)
};

export default MoleSVG;