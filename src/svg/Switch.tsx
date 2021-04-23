import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { SvgXml } from 'react-native-svg';
import {
  BlackColor,
  GrayColor,
  PrimaryColor,
  SuccessColor,
} from '../styles/color';

let width: String = String(RFValue(33));
let height: String = String(RFValue(20));
let radius: String = String(RFValue(10));
let fill: String = PrimaryColor;

export function SwitchOn(props) {
  const xml = `<svg width="41" height="36" viewBox="0 0 41 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.1" y="8" width="32" height="20" rx="10" fill="#292929"/>
<g filter="url(#filter0_d)">
<circle cx="30" cy="18" r="10" fill="#2AA952"/>
</g>
<defs>
<filter id="filter0_d" x="5" y="0" width="36" height="36" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
<feOffset/>
<feGaussianBlur stdDeviation="4"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.164706 0 0 0 0 0.662745 0 0 0 0 0.321569 0 0 0 0.45 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</filter>
</defs>
</svg>

`;
  return <SvgXml xml={xml} />;
}

export function SwitchOff(props) {
  const xml = `<svg width="41" height="36" viewBox="0 0 41 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.1" y="8" width="32" height="20" rx="10" fill="#292929"/>
<g filter="url(#filter0_d)">
<circle cx="10" cy="18" r="10" fill="#ccc"/>
</g>
<defs>
<filter id="filter0_d" x="5" y="0" width="36" height="36" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
<feOffset/>
<feGaussianBlur stdDeviation="4"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.164706 0 0 0 0 0.662745 0 0 0 0 0.321569 0 0 0 0.45 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</filter>
</defs>
</svg>

`;
  return <SvgXml xml={xml} />;
}

// export function SwitchOff(props) {
//   const xml = `<svg width="41" height="36" viewBox="0 0 41 36" fill="none" xmlns="http://www.w3.org/2000/svg">
// <rect opacity="0.1" width="32" height="20" rx="10" transform="matrix(-1 0 0 1 41 8)" fill="#292929"/>
// <g filter="url(#filter0_d)">
// <circle r="10" transform="matrix(-1 0 0 1 18 18)" fill="#cccc"/>
// </g>
// <defs>
// <filter id="filter0_d" x="0" y="0" width="36" height="36" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
// <feFlood flood-opacity="0" result="BackgroundImageFix"/>
// <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
// <feOffset/>
// <feGaussianBlur stdDeviation="4"/>
// <feColorMatrix type="matrix" values="0 0 0 0 0.942448 0 0 0 0 0.942448 0 0 0 0 0.942448 0 0 0 1 0"/>
// <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
// <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
// </filter>
// </defs>
// </svg>

// `;
//   return <SvgXml xml={xml} />;
// }
