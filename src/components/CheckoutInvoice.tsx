import * as React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { GrayColor, PrimaryColor, WhiteColor } from '../styles/color';
import { _currency } from '../utils/textFormatter';
import {
  DescriptionText,
  Headline3Text,
  FourteenPxText,
  SixteenPxText,
} from './Text';

export interface Props {
  orderFee: string;
  deliveryFee: string;
}

export interface State {}

export default class CheckoutInvoice extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {};
  }

  public render() {
    return (
      <View style={{ marginVertical: RFValue(0) }}>
        <View style={styles.amountWrapper}>
          <FourteenPxText text={'Order'} color={GrayColor} />
          <SixteenPxText text={`${_currency(1234)}`} />
        </View>

        <View style={styles.amountWrapper}>
          <FourteenPxText text={'Delivery'} color={GrayColor} />
          <SixteenPxText text={`${_currency(1234)}`} />
        </View>

        <View style={styles.amountWrapper}>
          <SixteenPxText text={'Summary'} color={GrayColor} />
          <Headline3Text text={`${_currency(1234)}`} />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  amountWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: RFValue(10),
    height: RFValue(46),
  },
});
