import React, { useCallback, useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { StatusBar } from 'react-native';
import { Container, Content } from 'native-base';
import { RFValue } from 'react-native-responsive-fontsize';
import RangeSlider from 'rn-range-slider';
import { ColorIconInactive } from '../svg/ColorIcon';
import {
  SliderRailActive,
  SliderRailInactive,
  SliderThumb,
} from '../svg/RangeSlider';
import { FourteenPxText } from './Text';
import { _currency } from '../utils/textFormatter';
import { GrayColor, PrimaryColor } from '../styles/color';

export interface Props {
  low?: number | string;
  high?: number | string;
  min?: number | string;
  max?: number | string;
  step?: number | string;
}
export interface State {}
export default function (props: Props) {
  const [low, setLow] = useState(+props.low);
  const [high, setHigh] = useState(+props.high);

  const renderThumb = useCallback(() => <SliderThumb />, []);
  const renderRail = useCallback(() => <SliderRailInactive />, []);

  const renderRailSelected = useCallback(() => <SliderRailActive />, []);
  const renderLabel = useCallback(
    (value) => <FourteenPxText text={value} />,
    [],
  );
  // const renderNotch = useCallback(() => <Notch />, []);
  const handleValueChange = useCallback((low, high) => {
    setLow(low);
    setHigh(high);
  }, []);

  return (
    <>
      <View style={styles.top}>
        <FourteenPxText text={`${_currency(low)}`} />
        <FourteenPxText text={`${_currency(high)}`} />
      </View>
      <RangeSlider
        gravity={'center'}
        style={styles.slider}
        min={props.min ?? 0}
        max={props.max ?? 100}
        step={props.step ?? 1}
        renderThumb={renderThumb}
        renderRail={renderRail}
        renderRailSelected={renderRailSelected}
        renderLabel={renderLabel}
        // renderNotch={renderNotch}
        onValueChanged={handleValueChange}
        selectionColor={PrimaryColor}
        blankColor={GrayColor}
      />
    </>
  );
}
const styles = StyleSheet.create({
  container: {},
  content: {},
  contentContainerStyle: {},
  slider: {},
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // paddingHorizontal: RFValue(10),
  },
});
