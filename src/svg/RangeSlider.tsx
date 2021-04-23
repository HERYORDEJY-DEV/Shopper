import React from 'react';
import { SvgXml } from 'react-native-svg';
import { RFValue } from 'react-native-responsive-fontsize';

export function SliderRailInactive(props) {
  const xml = `<svg  viewBox="0 0 343 2" fill="none" xmlns="http://www.w3.org/2000/svg">
<line x1="-1.31134e-07" y1="1.5" x2="343" y2="1.49997" stroke=${
    props.stroke ?? '#9B9B9B'
  } stroke-width="3"/>
</svg>
`;
  return <SvgXml xml={xml} />;
}

export function SliderRailActive(props) {
  const xml = `<svg  viewBox="0 0 343 3"   fill="none" height="7"  fill="none" xmlns="http://www.w3.org/2000/svg">
<line x1="-1.31134e-07" y1="2.5" x2="343" y2="1.49997" stroke="#DB3022" stroke-width="4"/>
</svg>

`;
  return <SvgXml xml={xml} />;
}

// export function SliderRailActive(props) {
//   const xml = `<svg width="129" height="4" viewBox="0 0 129 3" fill="none" xmlns="http://www.w3.org/2000/svg">
// <line x1="-1.31134e-07" y1="1.5" x2="129" y2="1.49999" stroke="#DB3022" stroke-width="3"/>
// </svg>

// `;
//   return <SvgXml xml={xml} />;
// }

export function SliderThumb(props) {
  const xml = `<svg width=${RFValue(22)} height=${RFValue(
    22,
  )} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="11" cy="11" r="11" fill="#DB3022"/>
</svg>

`;
  return <SvgXml xml={xml} />;
}
