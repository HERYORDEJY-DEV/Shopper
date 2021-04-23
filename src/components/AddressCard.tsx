import * as React from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Image,
  ImageBackground,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import {
  BlackColor,
  GrayColor,
  PrimaryColor,
  WhiteColor,
} from '../styles/color';
import ButtonCheckbox from './ButtonCheckbox';
import ButtonPrimarySmall from './ButtonPrimarySmall';
import {
  DescriptionText,
  ElevenPxText,
  FourteenPxText,
  HeadlineText,
} from './Text';

export interface Props {
  id: string;
  fullname: string;
  address: string;
  city: string;
  state: string;
  zip?: string;
  country: string;
}

export interface State {}

export default class AddressCard extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {};
  }

  renderLeft = () => (
    <View style={styles.leftContainer}>
      <FourteenPxText text={this.props.fullname} />
      <FourteenPxText text={'Edit'} color={PrimaryColor} />
    </View>
  );
  renderBody = () => (
    <View style={styles.bodyContainer}>
      <DescriptionText text={this.props.address} />
      <DescriptionText
        text={`${this.props.city}, ${this.props.state}, ${this.props.country}`}
      />
    </View>
  );
  renderRight = () => (
    <View style={styles.rightContainer}>
      <ButtonCheckbox backgroundColor={BlackColor} />
      <DescriptionText
        text={'Use as Shipping Address?'}
        styles={{ marginLeft: RFValue(10) }}
      />
    </View>
  );

  public render() {
    return (
      <Pressable style={styles.container}>
        {this.renderLeft()}
        {this.renderBody()}
        {this.renderRight()}
      </Pressable>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    // height: RFValue(80),
    borderRadius: RFValue(8),
    padding: RFValue(20),
    marginBottom: RFValue(20),
    elevation: 3,
    overflow: 'hidden',
    backgroundColor: WhiteColor,
  },
  leftContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    overflow: 'hidden',
  },
  bodyContainer: {
    paddingVertical: RFValue(20),
  },
  rightContainer: {
    flexDirection: 'row',
    // padding: RFValue(10),
    alignItems: 'center',
    // justifyContent: 'space-around',
  },
  image: {
    width: null,
    height: null,
    flex: 1,
    resizeMode: 'cover',
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  percentContainer: {
    // position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
