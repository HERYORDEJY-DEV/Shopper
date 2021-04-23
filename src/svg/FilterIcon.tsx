import React from 'react';
import { SvgXml } from 'react-native-svg';
import { RFValue } from 'react-native-responsive-fontsize';

let width: String = String(RFValue(18));
let height: String = String(RFValue(14));
let fill: String = '#222222';

type Props = {
  width?: number;
  height?: number;
  fill?: string;
};

export function FilterIcon(props) {
  const xml = `<svg width=${props.width ?? width} height=${
    props.height ?? height
  } viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 12H11V10H7V12ZM0 0V2H18V0H0ZM3 7H15V5H3V7Z" fill=${
    props.fill ?? fill
  }/>
</svg>
`;
  return <SvgXml xml={xml} />;
}
