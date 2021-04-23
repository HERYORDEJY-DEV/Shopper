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

export function CameraIcon(props: Props) {
  const xml = `<svg  width=${props.width ?? width} height=${
    props.height ?? height
  } viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11 14.4667C12.9146 14.4667 14.4667 12.9146 14.4667 11C14.4667 9.08542 12.9146 7.53334 11 7.53334C9.0854 7.53334 7.53333 9.08542 7.53333 11C7.53333 12.9146 9.0854 14.4667 11 14.4667Z" fill=${
    props.fill ?? fill
  }/>
<path d="M7.74999 0.166656L5.76749 2.33332H2.33332C1.14166 2.33332 0.166656 3.30832 0.166656 4.49999V17.5C0.166656 18.6917 1.14166 19.6667 2.33332 19.6667H19.6667C20.8583 19.6667 21.8333 18.6917 21.8333 17.5V4.49999C21.8333 3.30832 20.8583 2.33332 19.6667 2.33332H16.2325L14.25 0.166656H7.74999ZM11 16.4167C8.00999 16.4167 5.58332 13.99 5.58332 11C5.58332 8.00999 8.00999 5.58332 11 5.58332C13.99 5.58332 16.4167 8.00999 16.4167 11C16.4167 13.99 13.99 16.4167 11 16.4167Z" fill=${
    props.fill ?? fill
  }/>
</svg>

`;
  return <SvgXml xml={xml} />;
}

export function AddPhotoIcon(props: Props) {
  let width: String = String(RFValue(52));
  let height: String = String(RFValue(52));
  let fill: String = '#8E8E93';

  const xml = `<svg  width=${props.width ?? width} height=${
    props.height ?? height
  } viewBox='0 0 52 52'
  fill='none'
  xmlns='http://www.w3.org/2000/svg'
>
  <circle cx='26' cy='26' r='26' fill='#DB3022' />
  <path
    d='M26 29.4668C27.9146 29.4668 29.4667 27.9147 29.4667 26.0001C29.4667 24.0855 27.9146 22.5334 26 22.5334C24.0854 22.5334 22.5333 24.0855 22.5333 26.0001C22.5333 27.9147 24.0854 29.4668 26 29.4668Z'
    fill='white'
  />
  <path
    d='M22.75 15.1667L20.7675 17.3334H17.3333C16.1416 17.3334 15.1666 18.3084 15.1666 19.5001V32.5001C15.1666 33.6917 16.1416 34.6667 17.3333 34.6667H34.6666C35.8583 34.6667 36.8333 33.6917 36.8333 32.5001V19.5001C36.8333 18.3084 35.8583 17.3334 34.6666 17.3334H31.2325L29.25 15.1667H22.75ZM26 31.4167C23.01 31.4167 20.5833 28.9901 20.5833 26.0001C20.5833 23.0101 23.01 20.5834 26 20.5834C28.99 20.5834 31.4166 23.0101 31.4166 26.0001C31.4166 28.9901 28.99 31.4167 26 31.4167Z'
    fill='white'
  />
</svg>

`;
  return <SvgXml xml={xml} />;
}
