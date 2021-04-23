import React from 'react';
import { SvgXml } from 'react-native-svg';
import { RFValue } from 'react-native-responsive-fontsize';
import { WhiteColor } from '../styles/color';

let width: String = String(RFValue(14));
let height: String = String(RFValue(14));
let fill: String = WhiteColor;

type Props = {
  width?: number;
  height?: number;
  fill?: string;
};

export function AddIcon(props: Props) {
  const xml = `<svg width=${props.width ?? width} height=${
    props.height ?? height
  } viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6 0V6H0V8H6V14H8V8H14V6H8V0H6Z" fill=${
    props.fill ?? fill
  }/>
</svg>

`;
  return <SvgXml xml={xml} />;
}

export function AddActiveIcon(props: Props) {
  let width: String = String(RFValue(36));
  let height: String = String(RFValue(36));
  let fill: String = WhiteColor;

  const xml = `<svg width=${props.width ?? width} height=${
    props.height ?? height
  }  viewBox='0 0 44 44'
  fill='none'
  xmlns='http://www.w3.org/2000/svg'
>
  <g filter='url(#filter0_d)'>
    <circle cx='22' cy='18' r='18' fill='#222222' />
  </g>
  <path
    fill-rule='evenodd'
    clip-rule='evenodd'
    d='M21 11V17H15V19H21V25H23V19H29V17H23V11H21Z'
    fill='white'
  />
  <defs>
    <filter
      id='filter0_d'
      x='0'
      y='0'
      width='44'
      height='44'
      filterUnits='userSpaceOnUse'
      color-interpolation-filters='sRGB'
    >
      <feFlood flood-opacity='0' result='BackgroundImageFix' />
      <feColorMatrix
        in='SourceAlpha'
        type='matrix'
        values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
      />
      <feOffset dy='4' />
      <feGaussianBlur stdDeviation='2' />
      <feColorMatrix
        type='matrix'
        values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.22 0'
      />
      <feBlend
        mode='normal'
        in2='BackgroundImageFix'
        result='effect1_dropShadow'
      />
      <feBlend
        mode='normal'
        in='SourceGraphic'
        in2='effect1_dropShadow'
        result='shape'
      />
    </filter>
  </defs>
</svg>

`;
  return <SvgXml xml={xml} />;
}
