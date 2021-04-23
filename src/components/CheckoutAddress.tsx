import * as React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { GrayColor, PrimaryColor, WhiteColor } from '../styles/color';
import { DescriptionText, FourteenPxText } from './Text';

export interface Props {
  id: string
  fullname: string;
  address: string;
  city: string;
  state: string;
  zip?: string;
  country: string;
}

export interface State {}

export default class CheckoutAddress extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {};
  }

  public render() {
    return (
      <View style={styles.container}>
        <View style={styles.heading}>
          <FourteenPxText text={this.props.fullname} />
          <Pressable>
            <FourteenPxText text={'Change'} color={PrimaryColor} />
          </Pressable>
        </View>
        <View style={styles.body}>
          <DescriptionText text={this.props.address} />
          <DescriptionText
            text={`${this.props.city}, ${this.props.state}, ${this.props.country}`}
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
    minHeight: RFValue(108),
    borderRadius: RFValue(8),
  },
  heading: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  body: { minHeight: RFValue(42), marginTop: RFValue(10) },
});
