import * as React from 'react';
import { View, Pressable, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { WhiteColor } from '../styles/color';
import { QuantityMinusIcon, QuantityPlusIcon } from '../svg/QuantityPlusMinu';
import { FourteenPxText } from './Text';

export interface Props {}

export interface State {
  quantity: number;
}

export default class QuantitySelect extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = { quantity: 1 };
  }

  onAdd = () =>
    this.setState({ ...this.state, quantity: this.state.quantity + 1 });
  onMinus = () =>
    this.setState({ ...this.state, quantity: this.state.quantity - 1 });

  renderPlusButton = () => (
    <Pressable style={styles.plusContainer} onPress={this.onAdd}>
      <QuantityPlusIcon />
    </Pressable>
  );

  renderMinusButton = () => (
    <Pressable style={styles.minusContainer} onPress={this.onMinus}>
      <QuantityMinusIcon />
    </Pressable>
  );

  renderValue = () => (
    <View style={styles.valueContainer}>
      <FourteenPxText text={`${this.state.quantity}`} styles={styles.value} />
    </View>
  );

  public render() {
    return (
      <View style={styles.container}>
        {this.renderMinusButton()}
        {this.renderValue()}
        {this.renderPlusButton()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  plusContainer: {
    // borderWidth: RFValue(1),
    borderRadius: RFValue(50),
    // borderColor: '#9B9B9B',
    width: RFValue(36),
    height: RFValue(36),
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    backgroundColor: WhiteColor,
  },
  minusContainer: {
    // borderWidth: RFValue(1),
    borderRadius: RFValue(50),
    // borderColor: '#9B9B9B',
    width: RFValue(36),
    height: RFValue(36),
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    backgroundColor: WhiteColor,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  valueContainer: { marginHorizontal: RFValue(10) },
  value: { lineHeight: RFValue(20), flex: 0.4 },
});
