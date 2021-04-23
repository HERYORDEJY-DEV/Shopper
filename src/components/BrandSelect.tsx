import React, { useCallback, useState } from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import { StatusBar } from 'react-native';
import { Container, Content } from 'native-base';
import { RFValue } from 'react-native-responsive-fontsize';
import RangeSlider from 'rn-range-slider';
import { ColorIconAtive, ColorIconInactive } from '../svg/ColorIcon';
import {
  SliderRailActive,
  SliderRailInactive,
  SliderThumb,
} from '../svg/RangeSlider';
import { FourteenPxText, SixteenPxText } from './Text';
import { _currency } from '../utils/textFormatter';
import ButtonTagOrdinary from './ButtonTagOrdinary';
import { GrayColor, PrimaryColor } from '../styles/color';
import { CheckboxInactiveIcon, CheckboxActiveIcon } from '../svg/CheckboxIcon';

export interface Props {
  selected?: Boolean;
  name?: string;
  slug?: string;
  containerStyle?: {};
}
// export interface State {
//   selected?: Boolean;
// }

export default function BrandSelect(props: Props) {
  const [selected, setSelected] = useState(false);

  const onSelect = () => setSelected(!selected);

  return (
    <>
      <Pressable
        onPress={onSelect}
        style={[styles.top, { ...props.containerStyle }]}
      >
        {selected ? (
          <>
            <SixteenPxText text={props.name ?? 'adidas'} color={PrimaryColor} />
            <CheckboxActiveIcon />
          </>
        ) : (
          <>
            <SixteenPxText text={props.name ?? 'adidas'} />
            <CheckboxInactiveIcon />
          </>
        )}
      </Pressable>
    </>
  );
}
const styles = StyleSheet.create({
  container: {},
  content: {},
  contentContainerStyle: {},
  slider: {
    // paddingHorizontal: RFValue(10)
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // paddingHorizontal: RFValue(10),
  },
});
