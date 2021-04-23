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
}
// export interface State {
//   selected?: Boolean;
// }

export default function CategorySelect(props: Props) {
  const [selected, setSelected] = useState(false);

  const onSelect = () => setSelected(!selected);

  return (
    <>
      <Pressable
        onPress={onSelect}
        style={[styles.top, { ...props.containerStyle }]}
      >
        {selected ? (
          <ButtonTagOrdinary
            title={props.name}
            width={RFValue(100)}
            height={40}
          />
        ) : (
          <ButtonTagOrdinary
            title={props.name}
            width={RFValue(100)}
            height={40}
            containerStyle={{
              borderColor: GrayColor,
            }}
          />
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
