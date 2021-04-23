import { RFValue } from 'react-native-responsive-fontsize';
import { BlackColor, WhiteColor } from './color';

type Properties = {
  color: string;
  fontFamily: string;
  fontSize: number;
  lineHeight?: number | string;
  lineSpacing?: number | string;
};

export const headlineText: object = {
  color: BlackColor,
  fontFamily: 'Metropolis-Bold',
  fontSize: RFValue(34),
};

export const elevenPxText: object = {
  color: BlackColor,
  fontFamily: 'Metropolis-Regular',
  fontSize: RFValue(11),
};

export const labelText: object = {
  color: WhiteColor,
  fontFamily: 'Metropolis-SemiBold',
  fontSize: RFValue(11),
};

export const fourteenPxText: object = {
  color: BlackColor,
  fontFamily: 'Metropolis-Medium',
  fontSize: RFValue(14),
  lineHeight: RFValue(20),
};

export const sixteenPxText: object = {
  color: BlackColor,
  fontFamily: 'Metropolis-SemiBold',
  fontSize: RFValue(16),
};

export const sixteenPxRegularText: object = {
  color: BlackColor,
  fontFamily: 'Metropolis-Regular',
  fontSize: RFValue(16),
};

export const descriptionText: object = {
  color: BlackColor,
  fontFamily: 'Metropolis-Regular',
  fontSize: RFValue(14),
  lineHeight: RFValue(22),
  letterSpacing: RFValue(-0.15),
};

export const headline2Text: object = {
  color: BlackColor,
  fontFamily: 'Metropolis-SemiBold',
  fontSize: RFValue(24),
  lineHeight: RFValue(30),
};

export const headline3Text: object = {
  color: BlackColor,
  fontFamily: 'Metropolis-SemiBold',
  fontSize: RFValue(18),
  lineHeight: RFValue(22),
};
