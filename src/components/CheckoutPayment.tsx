import * as React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { GrayColor, PrimaryColor, WhiteColor } from '../styles/color';
import { MasterCardIcon } from '../svg/Payment';
import { DescriptionText, FourteenPxText } from './Text';

export interface Props {
  id: string;
  name: string;
  number: string;
  ccv: string;
  expiration: string;
  type: string;
}

export interface State {}

export default class CheckoutPayment extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {};
  }

  public render() {
    return (
      <View style={styles.container}>
        <View style={styles.heading}>
          <MasterCardIcon />
        </View>
        <View style={styles.body}>
          <DescriptionText text={'**** **** **** 7890'} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: RFValue(20),
    margin: RFValue(10),
    elevation: 3,
    flex: 1,
    backgroundColor: WhiteColor,
    minHeight: RFValue(108),
    borderRadius: RFValue(8),
    flexDirection: 'row',
    alignItems: 'center',
  },
  heading: {
    alignItems: 'center',
    justifyContent: 'center',
    width: RFValue(64),
    height: RFValue(38),
    backgroundColor: WhiteColor,
    borderRadius: RFValue(8),
    elevation: 3,
    marginRight: RFValue(20),
  },
  body: {
    minHeight: RFValue(21),
    marginTop: RFValue(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
