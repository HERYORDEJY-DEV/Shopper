import React from 'react';
import { SvgXml } from 'react-native-svg';
import { RFValue } from 'react-native-responsive-fontsize';

let width: String = String(RFValue(12));
let height: String = String(RFValue(12));
let fill: String = '#9B9B9B';

type Props = {
  width?: number;
  height?: number;
  fill?: string;
};

export function CancelIcon(props) {
  let width: String = String(RFValue(20));
  let height: String = String(RFValue(20));

  const xml = `<svg width=${props.width ?? width} height=${
    props.height ?? height
  }  viewBox='0 0 12 12'
  fill='none'
  xmlns='http://www.w3.org/2000/svg'
>
  <path
    opacity='0.54'
    fill-rule='evenodd'
    clip-rule='evenodd'
    d='M12 1.2L10.8 0L6 4.8L1.2 0L0 1.2L4.8 6L0 10.8L1.2 12L6 7.2L10.8 12L12 10.8L7.2 6L12 1.2Z'
  fill=${props.fill ?? fill}/>
</svg>
`;
  return <SvgXml xml={xml} />;
}

export function CheckIcon(props) {
  let width: String = String(RFValue(19));
  let height: String = String(RFValue(16));

  const xml = `<svg width=${props.width ?? width} height=${
    props.height ?? height
  }    viewBox='0 0 19 16'
  fill='none'
  xmlns='http://www.w3.org/2000/svg'
>
  <path
    d='M6.03809 12.6234L1.53383 7.64802L0 9.33035L6.03809 16L19 1.68233L17.477 0L6.03809 12.6234Z'
    fill='#2AA952'
  />
</svg>
`;
  return <SvgXml xml={xml} />;
}

export function InfoIcon(props) {
  let width: String = String(RFValue(20));
  let height: String = String(RFValue(20));

  const xml = `<svg width=${props.width ?? width} height=${
    props.height ?? height
  } viewBox='0 0 20 20'
  fill='none'
  xmlns='http://www.w3.org/2000/svg'
>
  <path
    fill-rule='evenodd'
    clip-rule='evenodd'
    d='M9 16H11V14H9V16ZM10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18ZM10 4C7.79086 4 6 5.79086 6 8H8C8 6.9 8.9 6 10 6C11.1 6 12 6.9 12 8C12 10 9 9.75 9 13H11C11 10.75 14 10.5 14 8C14 5.79086 12.2091 4 10 4Z'
    fill='#9B9B9B'
  />
</svg>
`;
  return <SvgXml xml={xml} />;
}
