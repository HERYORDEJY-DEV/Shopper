import React from 'react';
import { SvgXml } from 'react-native-svg';
import { RFValue } from 'react-native-responsive-fontsize';

let width: String = String(RFValue(14));
let height: String = String(RFValue(14));
let fill: String = '#8E8E93';

type Props = {
  width?: number;
  height?: number;
  fill?: string;
};

export function QuantityPlusIcon(props) {
  const xml = `<svg width=${props.width ?? width} height=${
    props.height ?? height
  } viewBox='0 0 14 14'
  fill='none'
  xmlns='http://www.w3.org/2000/svg'
>
  <path
    fill-rule='evenodd'
    clip-rule='evenodd'
    d='M6 0V6H0V8H6V14H8V8H14V6H8V0H6Z'
    fill='#9B9B9B'
  />
</svg>
`;
  return <SvgXml xml={xml} />;
}

export function QuantityMinusIcon(props) {
  let width: String = String(RFValue(14));
  let height: String = String(RFValue(2));
  let fill: String = '#8E8E93';
  const xml = `<svg  width=${props.width ?? width} height=${
    props.height ?? height
  } viewBox='0 0 14 2'
  fill='none'
  xmlns='http://www.w3.org/2000/svg'
>
  <rect width='14' height='2' fill='#9B9B9B' />
</svg>
`;
  return <SvgXml xml={xml} />;
}
