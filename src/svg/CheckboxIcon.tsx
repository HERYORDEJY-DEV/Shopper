import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { SvgXml } from 'react-native-svg';
import { BlackColor, PrimaryColor } from '../styles/color';

let width: String = String(RFValue(20));
let height: String = String(RFValue(20));
let fill: String = PrimaryColor;

export function CheckboxActiveIcon(props) {
  const xml = `<svg width=${props.width ?? width} height=${
    props.height ?? height
  } viewBox='0 0 20 20' fill="none" xmlns="http://www.w3.org/2000/svg">
 <rect width='20' height='20' rx='4' fill=${props.fill ?? fill} />
  <path
    d='M6.76691 13.4676L3.21092 9.73602L2 10.9978L6.76691 16L17 5.26174L15.7976 4L6.76691 13.4676Z'
    fill='white'
  />
</svg>
`;
  return <SvgXml xml={xml} />;
}

export function CheckboxInactiveIcon(props) {
  const xml = `<svg width=${props.width ?? width} height=${
    props.height ?? height
  }  viewBox='0 0 20 20' fill="none" xmlns="http://www.w3.org/2000/svg">
<rect
    x='1'
    y='1'
    width='18'
    height='18'
    rx='3'
    stroke='#9B9B9B'
    stroke-width='2'
  />
</svg>
`;
  return <SvgXml xml={xml} />;
}

<svg
  width='20'
  height='20'
  fill='none'
  xmlns='http://www.w3.org/2000/svg'
></svg>;
