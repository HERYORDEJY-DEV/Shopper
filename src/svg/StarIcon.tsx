import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { SvgXml } from 'react-native-svg';
import { BlackColor, PrimaryColor } from '../styles/color';

let width: String = String(RFValue(36));
let height: String = String(RFValue(36));
let fill: String = BlackColor;
let stroke: String = BlackColor;

export function StarIconInactive(props) {
  const xml = `<svg width=${props.width ?? width} height=${
    props.height ?? height
  }   viewBox='0 0 14 12' fill="none" xmlns="http://www.w3.org/2000/svg">
 <path
    fill-rule='evenodd'
    clip-rule='evenodd'
    d='M7 9.95016L3.87713 11.5436C3.50946 11.7313 3.08567 11.4177 3.1575 11.0113L3.75 7.65836L1.25401 5.29695C0.949752 5.00909 1.11307 4.49713 1.52781 4.43864L4.99139 3.95016L6.55431 0.876499C6.73965 0.512004 7.26035 0.512003 7.44569 0.876499L9.00861 3.95016L12.4722 4.43864C12.8869 4.49713 13.0502 5.00909 12.746 5.29695L10.25 7.65836L10.8425 11.0113C10.9143 11.4177 10.4905 11.7313 10.1229 11.5436L7 9.95016Z'
    stroke='#9B9B9B'
    stroke-width='0.5'
  />
</svg>
`;
  return <SvgXml xml={xml} />;
}

export function StarIconActive(props) {
  let width: String = String(RFValue(44));
  let height: String = String(RFValue(44));
  let fill: String = BlackColor;
  let stroke: String = PrimaryColor;

  const xml = `<svg width=${props.width ?? width} height=${
    props.height ?? height
  }   viewBox='0 0 12 12' fill="none" xmlns="http://www.w3.org/2000/svg">
  <path
    fill-rule='evenodd'
    clip-rule='evenodd'
    d='M6 9.95016L2.87713 11.5436C2.50946 11.7313 2.08567 11.4177 2.1575 11.0113L2.75 7.65836L0.254009 5.29695C-0.0502481 5.00909 0.113068 4.49713 0.527809 4.43864L3.99139 3.95016L5.55431 0.876499C5.73965 0.512004 6.26035 0.512003 6.44569 0.876499L8.00861 3.95016L11.4722 4.43864C11.8869 4.49713 12.0502 5.00909 11.746 5.29695L9.25 7.65836L9.8425 11.0113C9.91433 11.4177 9.49054 11.7313 9.12287 11.5436L6 9.95016Z'
    fill='#FFBA49'
  />`;
  return <SvgXml xml={xml} />;
}

export function StarRatingBar(props) {
  let width: String = String(RFValue(8));
  let height: String = String(RFValue(8));
  let heightInner: String = String(props.height ? props.height : height);
  let fill: String = BlackColor;
  let stroke: String = PrimaryColor;

  const xml = `<svg width=${props.width ?? width} height=${
    props.height ?? height
  }
  fill='none'
  xmlns='http://www.w3.org/2000/svg'
>
  <rect width=${
    props.width ?? width
  } height=${heightInner} rx='4' ry='4' fill='#DB3022' />
</svg>`;
  return <SvgXml xml={xml} />;
}

// export function StarRatingBar(props) {
//   let width: String = String(RFValue(8));
//   let height: String = String(RFValue(8));
//   let fill: String = BlackColor;
//   let stroke: String = PrimaryColor;

//   const xml = `<svg width=${props.width ?? width} height=${
//     props.height ?? height
//   }  viewBox='0 0 8 8'
//   fill='none'
//   xmlns='http://www.w3.org/2000/svg'
// >
//   <rect width=${props.width ?? width} height=${
//     props.height ?? height
//   } rx='4' fill='#DB3022' />
// </svg>`;
//   return <SvgXml xml={xml} />;
// }
