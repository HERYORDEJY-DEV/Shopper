import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { SvgXml } from 'react-native-svg';
import { BlackColor } from '../styles/color';

let width: String = String(RFValue(8));
let height: String = String(RFValue(4.94));
let fill: String = BlackColor;

export function ChevronArrowDown(props) {
  const xml = `<svg width=${props.width ?? width} height=${
    props.height ?? height
  } viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.94 0.726654L4 3.77999L7.06 0.726654L8 1.66665L4 5.66665L0 1.66665L0.94 0.726654Z" fill=${
    props.fill ?? fill
  }/>
</svg>
`;
  return <SvgXml xml={xml} />;
}

export function ChevronArrowUp(props) {
  const xml = `<svg width=${props.width ?? width} height=${
    props.height ?? height
  } viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
<path  viewBox='0 0 8 6'
   d='M7.06 5.66666L4 2.61332L0.94 5.66666L0 4.72666L4 0.726656L8 4.72666L7.06 5.66666Z' fill=${
     props.fill ?? fill
   }/>
</svg>
`;
  return <SvgXml xml={xml} />;
}

export function ChevronArrowLeft(props) {
  let width: String = String(RFValue(9.26));
  let height: String = String(RFValue(16));
  let fill: String = BlackColor;
  const xml = `<svg width=${props.width ?? width} height=${
    props.height ?? height
  } viewBox='0 0 10 16'
  fill='none'
  xmlns='http://www.w3.org/2000/svg'
>
  <path
    fill-rule='evenodd'
    clip-rule='evenodd'
    d='M0.225521 8.54307C-0.0751736 8.24288 -0.0751736 7.7579 0.225521 7.45693L7.362 0.325723C7.79608 -0.108574 8.50232 -0.108574 8.93717 0.325723C9.37125 0.76002 9.37125 1.46488 8.93717 1.89917L2.83231 8.00039L8.93717 14.1C9.37125 14.5351 9.37125 15.24 8.93717 15.6743C8.50232 16.1086 7.79608 16.1086 7.362 15.6743L0.225521 8.54307Z'
    fill='#222222'
  />
</svg>
`;
  return <SvgXml xml={xml} />;
}

export function ChevronArrowRight(props) {
  let width: String = String(RFValue(8));
  let height: String = String(RFValue(12));
  let fill: String = '#222222';
  const xml = `<svg width=${props.width ?? width} height=${
    props.height ?? height
  } viewBox='0 0 8 12'
  fill='none'
  xmlns='http://www.w3.org/2000/svg'
>
  <path
    d='M0.590088 10.59L5.17009 6L0.590088 1.41L2.00009 0L8.00009 6L2.00009 12L0.590088 10.59Z'
    fill='#222222'
  />
</svg>
`;
  return <SvgXml xml={xml} />;
}

export function ChevronArrowRightGray(props) {
  let width: String = String(RFValue(9.26));
  let height: String = String(RFValue(16));
  let fill: String = '#9B9B9B';
  const xml = `<svg width=${props.width ?? width} height=${
    props.height ?? height
  } viewBox='0 0 6 8'
  fill='none'
  xmlns='http://www.w3.org/2000/svg'
>
  <path
    d='M0.726685 7.06L3.78002 4L0.726684 0.94L1.66668 -4.10887e-08L5.66668 4L1.66668 8L0.726685 7.06Z'
    fill='#9B9B9B'
  />
</svg>
`;
  return <SvgXml xml={xml} />;
}

export function EnterArrowRight(props) {
  let width: String = String(RFValue(36));
  let height: String = String(RFValue(36));
  let fill: String = BlackColor;
  const xml = `<svg width=${props.width ?? width} height=${
    props.height ?? height
  }  viewBox='0 0 36 36'
  fill='none'
  xmlns='http://www.w3.org/2000/svg'
>
  <circle cx='18' cy='18' r='18' fill='#222222' />
  <path
    fill-rule='evenodd'
    clip-rule='evenodd'
    d='M18 12L16.95 13.05L21.15 17.25H12V18.75H21.15L16.95 22.95L18 24L24 18L18 12Z'
    fill='white'
  />
</svg>
`;
  return <SvgXml xml={xml} />;
}

export function LongArrowRight(props) {
  let width: String = String(RFValue(18));
  let height: String = String(RFValue(8));
  let fill: String = BlackColor;
  const xml = `<svg width=${props.width ?? width} height=${
    props.height ?? height
  }   viewBox='0 0 16 8'
  fill='none'
  xmlns='http://www.w3.org/2000/svg'
>
  <path
    d='M12.01 3.00002H1C0.45 3.00002 0 3.45002 0 4.00002C0 4.55002 0.45 5.00002 1 5.00002H12.01V6.79002C12.01 7.24002 12.55 7.46002 12.86 7.14002L15.64 4.35002C15.83 4.15002 15.83 3.84002 15.64 3.64002L12.86 0.850017C12.55 0.530017 12.01 0.760017 12.01 1.20002V3.00002Z'
    fill='#DB3022'
  />
</svg>
`;
  return <SvgXml xml={xml} />;
}
