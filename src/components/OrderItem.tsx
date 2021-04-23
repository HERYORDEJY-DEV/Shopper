import * as React from 'react';
import { View, Image, StyleSheet, Pressable } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { GrayColor, WhiteColor } from '../styles/color';
import { MoreIcon } from '../svg/ViewIcon';
import { _currency } from '../utils/textFormatter';
import QuantitySelect from './QuantitySelect';
import { ElevenPxText, FourteenPxText, SixteenPxText } from './Text';

export interface Props {
  imageSource: string;
  name: string;
  color: string;
  size: 'XS' | 'SM' | 'MD' | 'LG' | 'XL';
  amount: number;
}

export interface State {}

export default class OrderItem extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {};
  }

  renderColor = () => (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
      }}
    >
      <ElevenPxText text={'Color:'} color={GrayColor} />
      <ElevenPxText
        text={'Blue'}
        styles={{
          fontFamily: 'Metropolis-SemiBold',
          paddingHorizontal: RFValue(5),
        }}
      />
    </View>
  );

  renderSize = () => (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: RFValue(10),
      }}
    >
      <ElevenPxText text={'Size:'} color={GrayColor} />
      <ElevenPxText
        text={'MD'}
        styles={{
          fontFamily: 'Metropolis-SemiBold',
          paddingHorizontal: RFValue(5),
        }}
      />
    </View>
  );

  renderUnit = () => (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
      }}
    >
      <ElevenPxText text={'Unit:'} color={GrayColor} />
      <ElevenPxText
        text={'1'}
        styles={{
          fontFamily: 'Metropolis-SemiBold',
          paddingHorizontal: RFValue(5),
        }}
      />
    </View>
  );

  renderAmount = () => (
    <View>
      <FourteenPxText text={`${_currency(30)}`} />
    </View>
  );

  public render() {
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../assets/images/image12.png')}
            style={styles.image}
          />
        </View>
        <View style={styles.infoContainer}>
          <View>
            <View>
              <SixteenPxText text={'Pullover'} />
              <ElevenPxText text={'Gucci'} color={GrayColor} />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
                marginVertical: RFValue(5),
              }}
            >
              {this.renderColor()}
              {this.renderSize()}
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: RFValue(5),
              }}
            >
              {this.renderUnit()}
              {this.renderAmount()}
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: null,
    height: null,
    flex: 1,
    resizeMode: 'contain',
    overflow: 'hidden',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    borderRadius: RFValue(8),
    overflow: 'hidden',
    elevation: 3,
    backgroundColor: WhiteColor,
    // width: 343,
    height: RFValue(104),
    marginBottom: RFValue(20),
  },
  imageContainer: {
    width: RFValue(104),
    height: RFValue(104),
    overflow: 'hidden',
  },
  infoContainer: {
    flex: 1,
    padding: RFValue(10),
    // borderColor: GrayColor,
    // borderWidth: 1,
    borderRadius: RFValue(8),
    borderTopLeftRadius: RFValue(0),
    borderLeftWidth: RFValue(0),
    borderBottomLeftRadius: RFValue(0),
  },
});
