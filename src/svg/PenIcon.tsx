import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { SvgXml } from 'react-native-svg';

let width_: String = String(RFValue(13));
let height_: String = String(RFValue(13));

export function PenIcon(props) {
  const xml = `<svg  width=${width_} height=${height_} viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 10.292V13H2.70797L10.6947 5.01326L7.98669 2.3053L0 10.292ZM12.7888 2.91915C12.924 2.78422 13 2.60106 13 2.41005C13 2.21904 12.924 2.03588 12.7888 1.90095L11.0991 0.211181C10.9641 0.075979 10.781 0 10.59 0C10.3989 0 10.2158 0.075979 10.0809 0.211181L8.75937 1.53267L11.4673 4.24063L12.7888 2.91915Z" fill="white"/>
</svg>
`;
  return <SvgXml xml={xml} />;
}
