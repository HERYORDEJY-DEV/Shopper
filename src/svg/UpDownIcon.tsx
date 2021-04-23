import React from 'react';
import { SvgXml } from 'react-native-svg';
import { RFValue } from 'react-native-responsive-fontsize';

let width: String = String(RFValue(14));
let height: String = String(RFValue(18));
let fill: String = '#222222';

type Props = {
  width?: number;
  height?: number;
  fill?: string;
};

export function UpDownIcon(props) {
  const xml = `<svg width=${props.width ?? width} height=${
    props.height ?? height
  } viewBox='0 0 14 18' fill="none" xmlns="http://www.w3.org/2000/svg">
 <path
    d='M11 14.01V7H9V14.01H6L10 18L14 14.01H11ZM4 0L0 3.99H3V11H5V3.99H8L4 0Z' fill=${
      props.fill ?? fill
    }/>
</svg>
`;
  return <SvgXml xml={xml} />;
}

<svg width='14' height='18' fill='none' xmlns='http://www.w3.org/2000/svg'>
  <path
    d='M11 14.01V7H9V14.01H6L10 18L14 14.01H11ZM4 0L0 3.99H3V11H5V3.99H8L4 0Z'
    fill='#222222'
  />
</svg>;
