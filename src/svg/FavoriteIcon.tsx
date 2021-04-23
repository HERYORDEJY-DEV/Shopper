import React from 'react';
import { SvgXml } from 'react-native-svg';
import { RFValue } from 'react-native-responsive-fontsize';

let width: String = String(RFValue(13.08));
let height: String = String(RFValue(12));

export function FavoriteIconActivated(props) {
  const xml = `<svg width=${props.width ?? width} height=${
    props.height ?? height
  } viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.53951 12L5.59128 11.1368C2.22343 8.08283 0 6.06866 0 3.59673C0 1.58256 1.58256 0 3.59673 0C4.7346 0 5.8267 0.5297 6.53951 1.36676C7.25232 0.5297 8.34441 0 9.48229 0C11.4965 0 13.079 1.58256 13.079 3.59673C13.079 6.06866 10.8556 8.08283 7.48774 11.1433L6.53951 12Z" fill="#DB3022"/>
</svg>
`;
  return <SvgXml xml={xml} />;
}

export function FavoriteIconPressed(props) {
  const xml = `<svg  width=${props.width ?? width} height=${
    props.height ?? height
  } viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.53951 12L5.59128 11.1368C2.22343 8.08283 0 6.06866 0 3.59673C0 1.58256 1.58256 0 3.59673 0C4.7346 0 5.8267 0.5297 6.53951 1.36676C7.25232 0.5297 8.34441 0 9.48229 0C11.4965 0 13.079 1.58256 13.079 3.59673C13.079 6.06866 10.8556 8.08283 7.48774 11.1433L6.53951 12Z" fill="white"/>
</svg>

`;
  return <SvgXml xml={xml} />;
}

export function FavoriteIconInactive(props) {
  const xml = `<svg width=${props.width ?? width} height=${
    props.height ?? height
  } viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.48229 0C8.34441 0 7.25232 0.5297 6.53951 1.36676C5.8267 0.5297 4.73461 0 3.59673 0C1.58256 0 0 1.58256 0 3.59673C0 6.06866 2.22343 8.08283 5.59128 11.1433L6.53951 12L7.48774 11.1368C10.8556 8.08283 13.079 6.06866 13.079 3.59673C13.079 1.58256 11.4965 0 9.48229 0ZM6.6049 10.1689L6.5395 10.2343L6.47411 10.1689C3.3613 7.3504 1.3079 5.48664 1.3079 3.59672C1.3079 2.28882 2.28882 1.3079 3.59672 1.3079C4.60381 1.3079 5.58474 1.95531 5.93133 2.85122H7.15422C7.49427 1.95531 8.4752 1.3079 9.48228 1.3079C10.7902 1.3079 11.7711 2.28882 11.7711 3.59672C11.7711 5.48664 9.71771 7.3504 6.6049 10.1689Z" fill="#9B9B9B"/>
</svg>

`;
  return <SvgXml xml={xml} />;
}

export function FavoriteTabIconInactive(props) {
  const xml = `<svg width=${props.width ?? width} height=${
    props.height ?? height
  }  viewBox='0 0 28 26'
  fill='none'
  xmlns='http://www.w3.org/2000/svg'
>
  <path
    fill-rule='evenodd'
    clip-rule='evenodd'
    d='M14.079 25L12.1826 23.2736C5.44687 17.1657 1 13.1373 1 8.19346C1 4.16512 4.16512 1 8.19346 1C10.4692 1 12.6534 2.0594 14.079 3.73351C15.5046 2.0594 17.6888 1 19.9646 1C23.9929 1 27.158 4.16512 27.158 8.19346C27.158 13.1373 22.7112 17.1657 15.9755 23.2866L14.079 25Z'
    stroke='#9B9B9B'
  />
</svg>

`;
  return <SvgXml xml={xml} />;
}

export function ShareIcon(props) {
  let width: String = String(RFValue(18));
  let height: String = String(RFValue(19.2));
  const xml = `<svg width=${width} height=${height}  viewBox='0 0 18 20'
  fill='none'
  xmlns='http://www.w3.org/2000/svg'
>
  <path
    d='M15 14.08C14.24 14.08 13.56 14.38 13.04 14.85L5.91 10.7C5.96 10.47 6 10.24 6 10C6 9.76 5.96 9.53 5.91 9.3L12.96 5.19C13.5 5.69 14.21 6 15 6C16.66 6 18 4.66 18 3C18 1.34 16.66 0 15 0C13.34 0 12 1.34 12 3C12 3.24 12.04 3.47 12.09 3.7L5.04 7.81C4.5 7.31 3.79 7 3 7C1.34 7 0 8.34 0 10C0 11.66 1.34 13 3 13C3.79 13 4.5 12.69 5.04 12.19L12.16 16.35C12.11 16.56 12.08 16.78 12.08 17C12.08 18.61 13.39 19.92 15 19.92C16.61 19.92 17.92 18.61 17.92 17C17.92 15.39 16.61 14.08 15 14.08Z'
    fill='#222222'
  />
</svg>

`;
  return <SvgXml xml={xml} />;
}

export function ThumbsUpInactiveIcon(props) {
  let width: String = String(RFValue(13));
  let height: String = String(RFValue(16));
  let fill = '#9B9B9B';
  const xml = `<svg width=${width} height=${height}  viewBox='0 2 13 14'
  fill='none'
  xmlns='http://www.w3.org/2000/svg'
>
  <path
    fill-rule='evenodd'
    clip-rule='evenodd'
    d='M0 13.3594H2.36364V5.55937H0V13.3594ZM13 6.20937C13 5.49437 12.4682 4.90937 11.8182 4.90937H8.08955L8.65091 1.93887L8.66864 1.73087C8.66864 1.46437 8.56818 1.21737 8.40864 1.04187L7.78227 0.359375L3.89409 4.64287C3.67545 4.87687 3.54545 5.20187 3.54545 5.55937V12.0594C3.54545 12.7744 4.07727 13.3594 4.72727 13.3594H10.0455C10.5359 13.3594 10.9555 13.0344 11.1327 12.5664L12.9173 7.98387C12.9705 7.83437 13 7.67837 13 7.50937V6.26787L12.9941 6.26137L13 6.20937Z'
    fill='#9B9B9B'
  />
</svg>

`;
  return <SvgXml xml={xml} />;
}

export function ThumbsUpActiveIcon(props) {
  let width: String = String(RFValue(13));
  let height: String = String(RFValue(16));
  let fill = '#9B9B9B';
  const xml = `<svg width=${width} height=${height}  viewBox='0 2 13 14'
  fill='none'
  xmlns='http://www.w3.org/2000/svg'
>
  <path
    fill-rule='evenodd'
    clip-rule='evenodd'
    d='M0 13.3594H2.36364V5.55937H0V13.3594ZM13 6.20937C13 5.49437 12.4682 4.90937 11.8182 4.90937H8.08955L8.65091 1.93887L8.66864 1.73087C8.66864 1.46437 8.56818 1.21737 8.40864 1.04187L7.78227 0.359375L3.89409 4.64287C3.67545 4.87687 3.54545 5.20187 3.54545 5.55937V12.0594C3.54545 12.7744 4.07727 13.3594 4.72727 13.3594H10.0455C10.5359 13.3594 10.9555 13.0344 11.1327 12.5664L12.9173 7.98387C12.9705 7.83437 13 7.67837 13 7.50937V6.26787L12.9941 6.26137L13 6.20937Z'
    fill="#DB3022"
  />
</svg>

`;
  return <SvgXml xml={xml} />;
}
