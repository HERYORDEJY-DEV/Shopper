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
import { FourteenPxText } from './Text';
import { _currency } from '../utils/textFormatter';
import ButtonTagOrdinary from './ButtonTagOrdinary';
import { GrayColor } from '../styles/color';

export interface Props {
  selected?: Boolean;
  name?: string;
  slug?: string;
  containerStyle?: {};
  width?: number;
  height?: number;
  onPress?: () => void;
  selected?: boolean;
}
// export interface State {
//   selected?: Boolean;
// }

export default function SizeSelect(props: Props) {
  const [selected, setSelected] = useState(false);

  const onSelect = () => {
    setSelected(!selected);
    props.onPress();
  };
  return (
    <>
      <View
        // onPress={onSelect}
        // onPress={props.onPress}
        style={[styles.top, { ...props.containerStyle }]}
      >
        <ButtonTagOrdinary
          selected={props.selected}
          onPress={props.onPress}
          title={props.slug}
          width={props.width ?? RFValue(40)}
          height={props.height ?? RFValue(40)}
          containerStyle={{
            borderColor: selected ? null : GrayColor,
          }}
        />
      </View>
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
