import * as React from 'react';
import { View, Image, StyleSheet, Pressable } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { GrayColor, WhiteColor } from '../styles/color';
import { elevenPxText } from '../styles/text';
import { MoreIcon } from '../svg/ViewIcon';
import { _currency } from '../utils/textFormatter';
import ButtonAddFavoriteSmall from './ButtonAddFavoriteSmall';
import QuantitySelect from './QuantitySelect';
import StarRating from './StarRating';
import { ElevenPxText, FourteenPxText, SixteenPxText } from './Text';

export interface Props {
  imageSource: string;
  name: string;
  brand: string;
  rating: number;
  amount: number;
  favorite: boolean;
  containerStyle?: {};
}

export interface State {}

export default class CatalogItem extends React.Component<Props, State> {
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

  renderMoreButton = () => (
    <Pressable>
      <MoreIcon width={RFValue(4)} height={RFValue(16)} />
    </Pressable>
  );

  renderAmount = () => (
    <View>
      <FourteenPxText text={`${_currency(30)}`} />
    </View>
  );

  public render() {
    return (
      <View style={{ ...this.props.containerStyle }}>
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image
              source={require('../assets/images/image15.png')}
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
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginVertical: RFValue(10),
                }}
              >
                <StarRating starWidth={RFValue(13)} starHeight={RFValue(12)} />
              </View>
              {this.renderAmount()}
            </View>
          </View>
        </View>
        <View style={styles.button}>
          <ButtonAddFavoriteSmall />
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
    resizeMode: 'cover',
    overflow: 'hidden',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    borderRadius: RFValue(8),
    overflow: 'hidden',
    backgroundColor: WhiteColor,
    // width: 343,
    height: RFValue(104),
    elevation: 3,
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
  button: {
    position: 'absolute',
    bottom: -15,
    zIndex: 2000,
    right: 0,
    elevation: 3,
  },
});
