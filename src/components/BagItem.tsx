import * as React from 'react';
import { View, Image, StyleSheet, Pressable } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { GrayColor, WhiteColor } from '../styles/color';
import { MoreIcon } from '../svg/ViewIcon';
import { screenWidth } from '../utils/dimension';
import { _currency } from '../utils/textFormatter';
import PopUpWindow from './PopUpWindow';
import QuantitySelect from './QuantitySelect';
import { ElevenPxText, FourteenPxText, SixteenPxText } from './Text';

export interface Props {
  imageSource: string;
  name: string;
  color: string;
  size: 'XS' | 'SM' | 'MD' | 'LG' | 'XL';
  amount: number;
  containerStyles?: object;
}

export interface State {
  showMoreOptions: boolean;
}

export default class Bagitem extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = { showMoreOptions: false };
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

  showMoreOptions = () =>
    this.setState({
      ...this.state,
      showMoreOptions: !this.state.showMoreOptions,
    });

  renderMoreButton = () => (
    <Pressable onPress={this.showMoreOptions} style={{ padding: RFValue(5) }}>
      <MoreIcon width={RFValue(4)} height={RFValue(16)} />
    </Pressable>
  );

  renderAmount = () => (
    <View>
      <FourteenPxText text={`${_currency(30)}`} />
    </View>
  );

  renderMoreOptions = () => (
    <View style={styles.popup}>
      <PopUpWindow />
    </View>
  );

  public render() {
    return (
      <View>
        <View style={[styles.container, { ...this.props.containerStyles }]}>
          <View style={styles.imageContainer}>
            <Image
              source={require('../assets/images/image12.png')}
              style={styles.image}
            />
          </View>
          <View style={styles.infoContainer}>
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <SixteenPxText text={'Pullover'} />
                {this.renderMoreButton()}
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
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
                  marginTop: RFValue(10),
                }}
              >
                <QuantitySelect onChangeQuantity={() => {}} />
                {this.renderAmount()}
              </View>
            </View>
          </View>
        </View>
        {this.state.showMoreOptions && this.renderMoreOptions()}
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
    elevation: 3,
    overflow: 'hidden',
    backgroundColor: WhiteColor,
    // width: 343,
    height: RFValue(104),
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
  popup: {
    position: 'absolute',
    right: RFValue(50),
    top: RFValue(-10),
    zIndex: 1000,
    elevation: 3,
  },
});
