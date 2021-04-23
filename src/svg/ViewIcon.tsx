import React from 'react';
import { SvgXml } from 'react-native-svg';
import { RFValue } from 'react-native-responsive-fontsize';

let width: String = String(RFValue(16));
let height: String = String(RFValue(12));
let fill: String = '#222222';

type Props = {
  width?: number;
  height?: number;
  fill?: string;
};

export function ViewIcon(props) {
  const xml = `<svg width=${props.width ?? width} height=${
    props.height ?? height
  } viewBox='0 0 16 12' fill="none" xmlns="http://www.w3.org/2000/svg">
   <path
    fill-rule='evenodd'
    clip-rule='evenodd'
    d='M0 5.53846H4.70588V0H0V5.53846ZM0 12H4.70588V6.46154H0V12ZM5.64703 12H10.3529V6.46154H5.64703V12ZM11.2941 12H16V6.46154H11.2941V12ZM5.64706 5.53846H10.3529V0H5.64706V5.53846ZM11.2941 0V5.53846H16V0H11.2941Z' fill=${
      props.fill ?? fill
    }/>
</svg>
`;
  return <SvgXml xml={xml} />;
}

export function ListViewIcon(props) {
  const xml = `<svg width=${props.width ?? '17'} height=${
    props.height ?? '14'
  }  viewBox='0 0 17 14'
  fill='none'
  xmlns='http://www.w3.org/2000/svg'
>
  <path
    fill-rule='evenodd'
    clip-rule='evenodd'
    d='M0 9H4V5H0V9ZM0 14H4V10H0V14ZM0 4H4V0H0V4ZM5 9H17V5H5V9ZM5 14H17V10H5V14ZM5 0V4H17V0H5Z'
    fill='#222222'
  />
</svg>
`;
  return <SvgXml xml={xml} />;
}

export function MoreIcon(props) {
  const xml = `<svg width=${props.width ?? width} height=${
    props.height ?? height
  } viewBox='0 0 4 16'
  fill='none'
  xmlns='http://www.w3.org/2000/svg'
>
  <path
    opacity='0.54'
    fill-rule='evenodd'
    clip-rule='evenodd'
    d='M2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4ZM2 6C0.9 6 0 6.9 0 8C0 9.1 0.9 10 2 10C3.1 10 4 9.1 4 8C4 6.9 3.1 6 2 6ZM2 12C0.9 12 0 12.9 0 14C0 15.1 0.9 16 2 16C3.1 16 4 15.1 4 14C4 12.9 3.1 12 2 12Z'
    fill='#9B9B9B'
  />
</svg>
`;
  return <SvgXml xml={xml} />;
}
