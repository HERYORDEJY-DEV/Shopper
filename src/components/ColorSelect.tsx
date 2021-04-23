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

export interface Props {
  selected?: Boolean;
  name?: string;
  color?: string;
  code?: string;
  containerStyle?: {};
}
// export interface State {
//   selected?: Boolean;
// }

export default function ColorSelect(props: Props) {
  const [selected, setSelected] = useState(false);

  const onSelect = () => setSelected(!selected);

  return (
    <>
      <Pressable
        onPress={onSelect}
        style={[styles.top, { ...props.containerStyle }]}
      >
        {selected ? (
          <ColorIconAtive
            fill={props.code || props.name || props.name}
            stroke={props.code || props.name || props.name}
          />
        ) : (
          <ColorIconInactive fill={props.code || props.name || props.name} />
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
