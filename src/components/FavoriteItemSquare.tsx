import * as React from 'react';
import { View, Image, StyleSheet, Pressable } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { GrayColor, WhiteColor, PrimaryColor } from '../styles/color';
import { elevenPxText } from '../styles/text';
import { CancelIcon } from '../svg/CancelIcon';
import { MoreIcon } from '../svg/ViewIcon';
import { _currency } from '../utils/textFormatter';
import ButtonAddBagSmall from './ButtonAddBagSmall';
import ButtonAddFavoriteSmall from './ButtonAddFavoriteSmall';
import { LabelItem } from './Label';
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
  soldOut: boolean;
  label: string;
  containerStyles?: object;
  percentDiscount?: string;
}

export interface State {}

export default class FavoriteItemSquare extends React.Component<Props, State> {
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

  renderDeleteButton = () => (
    <Pressable
      style={{
        width: RFValue(24),
        height: RFValue(24),
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <CancelIcon width={RFValue(12)} height={RFValue(12)} />
    </Pressable>
  );

  renderAmount = (discountPrice) => (
    <>
      {this.props.percentDiscount === true ||
      +this.props.percentDiscount > 0 ? (
        <View
          style={{
            marginRight: RFValue(30),
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <FourteenPxText
            text={`${_currency(this.props.amount)}`}
            color={GrayColor}
            styles={{
              textDecorationLine: 'line-through',
              marginRight: RFValue(10),
            }}
          />
          <FourteenPxText
            text={`${_currency(discountPrice)}`}
            color={PrimaryColor}
          />
        </View>
      ) : (
        <View style={{ marginRight: RFValue(30) }}>
          <FourteenPxText text={`${_currency(this.props.amount)}`} />
        </View>
      )}
    </>
  );

  public render() {
    return (
      <View style={{ ...this.props.containerStyles }}>
        <View
          style={[styles.container, { elevation: this.props.soldOut ? 0 : 3 }]}
        >
          <View style={styles.imageContainer}>
            <Image
              source={require('../assets/images/image15.png')}
              style={styles.image}
            />
            {!this.props.soldOut && (
              <View style={styles.label}>
                <LabelItem type={'sale'} value={14} />
              </View>
            )}
            <View style={styles.delete}>{this.renderDeleteButton()}</View>
          </View>
          <View style={styles.infoContainer}>
            {!this.props.soldOut && (
              <View style={styles.button}>
                <ButtonAddBagSmall />
              </View>
            )}
            <View>
              {/* <View style={{ flexDirection: 'row' }}> */}
              <StarRating
                starWidth={RFValue(13)}
                starHeight={RFValue(12)}
                containerStyles={{
                  marginBottom: RFValue(5),
                  marginRight: RFValue(30),
                }}
              />
              {/* <View style={{}} /> */}
              {/* </View> */}

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <View>
                  <ElevenPxText text={'Gucci'} color={GrayColor} />
                  <SixteenPxText text={'Pullover'} />
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  marginTop: RFValue(5),
                }}
              >
                {this.renderColor()}
                {this.renderSize()}
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  // justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: RFValue(10),
                }}
              >
                {this.renderAmount()}
              </View>
            </View>
          </View>
          {this.props.soldOut && (
            <View
              style={{
                ...StyleSheet.absoluteFillObject,
                backgroundColor: WhiteColor + 99,
              }}
            />
          )}
          {this.props.soldOut && (
            <ElevenPxText
              text={'Sorry, this item is currently sold out'}
              color={GrayColor}
            />
          )}
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
    flexDirection: 'column',
    justifyContent: 'flex-start',
    borderRadius: RFValue(8),
    overflow: 'hidden',
    backgroundColor: WhiteColor,
    width: RFValue(164),
    // height: RFValue(281),
    elevation: 3,
  },
  imageContainer: {
    width: '100%',
    // width: RFValue(104),
    height: RFValue(180),
    overflow: 'hidden',
  },
  infoContainer: {
    // flex: 1,
    paddingVertical: RFValue(5),
    paddingHorizontal: RFValue(5),
    // paddingTop: RFValue(3),
    // borderColor: GrayColor,
    // borderWidth: 1,
    borderRadius: RFValue(8),
    borderTopLeftRadius: RFValue(0),
    borderLeftWidth: RFValue(0),
    borderBottomLeftRadius: RFValue(0),
  },
  button: {
    position: 'absolute',
    top: -20,
    zIndex: 2000,
    right: 0,
    elevation: 3,
  },
  label: {
    position: 'absolute',
    top: 0,
    zIndex: 2000,
    left: 0,
    elevation: 3,
    padding: RFValue(5),
  },
  delete: {
    position: 'absolute',
    top: 0,
    zIndex: 2000,
    right: 0,
    elevation: 3,
    padding: RFValue(5),
  },
});
