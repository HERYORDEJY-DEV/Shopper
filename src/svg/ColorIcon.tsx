import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { SvgXml } from 'react-native-svg';
import { BlackColor, PrimaryColor } from '../styles/color';

let width: String = String(RFValue(36));
let height: String = String(RFValue(36));
let fill: String = BlackColor;
let stroke: String = BlackColor;

export function ColorIconInactive(props) {
  const xml = `<svg width=${props.width ?? width} height=${
    props.height ?? height
  }  viewBox='0 0 36 36' fill="none" xmlns="http://www.w3.org/2000/svg">
 <circle cx='18' cy='18' r='18' fill=${props.fill ?? fill}/>
</svg>
`;
  return <SvgXml xml={xml} />;
}

export function ColorIconAtive(props) {
  let width: String = String(RFValue(44));
  let height: String = String(RFValue(44));
  let fill: String = BlackColor;
  let stroke: String = BlackColor;

  const xml = `<svg width=${props.width ?? width} height=${
    props.height ?? height
  }   viewBox='0 0 44 44' fill="none" xmlns="http://www.w3.org/2000/svg">
 <circle cx="22" cy="22" r="18" fill=${props.fill ?? fill} />
 <circle cx="22" cy="22" r="21.5" stroke='#DB3022' />

  </svg>
`;
  return <SvgXml xml={xml} />;
}
