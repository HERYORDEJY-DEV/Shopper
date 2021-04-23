import * as React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { GrayColor, PrimaryColor, WhiteColor } from '../styles/color';
import { MasterCardIcon } from '../svg/Payment';
import { DescriptionText, ElevenPxText, FourteenPxText } from './Text';
import { SvgXml } from 'react-native-svg';

export interface Props {
  id: string;
  name: string;
  minDays: string;
  maxDays: string;
  logo: string;
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
          <SvgXml xml={this.props.logo} />
        </View>
        <View style={styles.body}>
          <ElevenPxText
            color={GrayColor}
            text={`${this.props.minDays} - ${this.props.maxDays} days`}
          />
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
    height: RFValue(72),
    width: RFValue(100),
    borderRadius: RFValue(8),
    alignItems: 'center',
  },
  heading: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    marginTop: RFValue(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
