import * as React from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Pressable,
  Image,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { BlackColor, WhiteColor } from '../styles/color';
import normzer from '../utils/normalizer';
import ButtonCheckbox from './ButtonCheckbox';
import {
  DescriptionText,
  ElevenPxText,
  FourteenPxText,
  Headline2Text,
  SixteenPxText,
} from './Text';

export interface Props {
  name: string;
  number: string;
  ccv: string;
  expiration: string;
  type: any;
}

export interface State {}

export default class PaymentCard extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {};
  }

  creditCardMask = (number: string | number, character = '*') => {
    number = String(number).replace(/[^0-9]+/g, ''); /*ensureOnlyNumbers*/
    var l = number.length;
    return (
      number.substring(0, 4) +
      character.repeat(l - 8) +
      number.substring(l - 4, l)
    );
  };

  public render() {
    return (
      <View style={styles.container}>
        <View style={styles.cardWrapper}>
          <ImageBackground
            source={this.props.type}
            style={styles.imageBackground}
          >
            <Headline2Text
              color={WhiteColor}
              text={this.creditCardMask(this.props.number)}
              styles={styles.headline2}
            />
            <View style={styles.bottomWrapper}>
              <View style={{ marginRight: RFValue(50) }}>
                <ElevenPxText
                  text={'Card Holder Name'}
                  color={WhiteColor}
                  styles={styles.elevenPxText}
                />
                <FourteenPxText
                  text={this.props.name}
                  color={WhiteColor}
                  styles={styles.fourteenPxText}
                />
              </View>

              <View>
                <ElevenPxText
                  text={'Expiry Date'}
                  color={WhiteColor}
                  styles={styles.elevenPxText}
                />
                <FourteenPxText
                  text={this.props.expiration}
                  color={WhiteColor}
                  styles={styles.fourteenPxText}
                />
              </View>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.defaultWrapper}>
          {/* <Pressable> */}
          <ButtonCheckbox
            backgroundColor={BlackColor}
            containerStyles={{ paddingRight: RFValue(10) }}
          />
          {/* </Pressable> */}
          <DescriptionText text={'Use as default payment method'} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { marginBottom: RFValue(10) },
  imageBackground: {
    width: normzer(355),
    height: normzer(216),
    padding: normzer(10),
    paddingHorizontal: normzer(40),
    paddingTop: normzer(70),
    resizeMode: 'cover',
  },
  bottomWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: RFValue(50),
  },
  cardWrapper: { alignItems: 'center' },
  headline2: {
    fontFamily: 'Metropolis-Regular',
    letterSpacing: RFValue(5),
  },
  elevenPxText: {
    fontSize: RFValue(10),
    fontFamily: 'Metropolis-SemiBold',
  },
  fourteenPxText: { paddingTop: RFValue(5) },
  defaultWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: RFValue(10),
    paddingHorizontal: RFValue(20),
  },
});
