import React from 'react';
import { SvgXml } from 'react-native-svg';
import { RFValue } from 'react-native-responsive-fontsize';
import { BlackColor, PrimaryColor } from '../styles/color';

let width: String = String(RFValue(14));
let fill: String = '#8E8E93';

type Props = {
  width?: number;
  height?: number;
  fill?: string;
};

export function SearchIcon(props: Props) {
  const xml = `<svg width=${props.width ?? width} height=${
    props.height ?? width
  }  viewBox='0 0 18 18'
  fill='none'
  xmlns='http://www.w3.org/2000/svg'
>
  <path
    d='M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z'
    fill=${props.fill ?? fill}/>
</svg>

`;
  return <SvgXml xml={xml} />;
}

export function SearchIconFinding(props) {
  let width: String = String(RFValue(45.18));
  let height: String = String(RFValue(45.18));
  let fill: String = BlackColor;
  let stroke: String = PrimaryColor;

  const xml = `<svg width=${props.width ?? width} height=${
    props.height ?? height
  }  viewBox='0 0 45.18 45.18'
  fill='none'
  xmlns='http://www.w3.org/2000/svg'
>
  <path
    d='M33.0417 29.1667H31.0008L30.2775 28.4692C32.8092 25.5242 34.3333 21.7008 34.3333 17.5417C34.3333 8.2675 26.8158 0.75 17.5417 0.75C8.2675 0.75 0.75 8.2675 0.75 17.5417C0.75 26.8158 8.2675 34.3333 17.5417 34.3333C21.7008 34.3333 25.5242 32.8092 28.4692 30.2775L29.1667 31.0008V33.0417L42.0833 45.9325L45.9325 42.0833L33.0417 29.1667V29.1667ZM17.5417 29.1667C11.1092 29.1667 5.91667 23.9742 5.91667 17.5417C5.91667 11.1092 11.1092 5.91667 17.5417 5.91667C23.9742 5.91667 29.1667 11.1092 29.1667 17.5417C29.1667 23.9742 23.9742 29.1667 17.5417 29.1667Z'
    fill='#DB3022'
  />
</svg>`;
  return <SvgXml xml={xml} />;
}
