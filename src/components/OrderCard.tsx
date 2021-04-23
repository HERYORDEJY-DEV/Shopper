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
  SuccessColor,
  WhiteColor,
} from '../styles/color';
import { _currency } from '../utils/textFormatter';
import ButtonCheckbox from './ButtonCheckbox';
import ButtonPrimarySmall from './ButtonPrimarySmall';
import ButtonSecondaryOutlineSmall from './ButtonSecondaryOutlineSmall';
import {
  DescriptionText,
  ElevenPxText,
  FourteenPxText,
  HeadlineText,
  SixteenPxText,
} from './Text';

export interface Props {
  orderNo: string;
  trackingNo: string;
  dateTime: string;
  quantity: string;
  totalAmount: string;
  status: 'delivererd' | 'processing' | 'cancelled';
}

export interface State {}

export default class OrderCard extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {};
  }

  renderLeft = () => (
    <View style={styles.leftContainer}>
      <SixteenPxText text={'Order № 1947034'} />
      <FourteenPxText text={'01-01-2021'} color={GrayColor} />
    </View>
  );

  renderTrackingNo = () => (
    <View style={[styles.leftContainer, { marginTop: RFValue(10) }]}>
      <FourteenPxText text={'Tracking number:'} />
      <FourteenPxText
        text={'IW3475453455'}
        styles={{ fontFamily: 'Metropolis-Bold' }}
      />
    </View>
  );

  renderBody = () => (
    <View style={[styles.leftContainer, { marginTop: RFValue(10) }]}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <FourteenPxText text={'Quantity:'} />
        <FourteenPxText
          text={'1'}
          styles={{ fontFamily: 'Metropolis-Bold', paddingLeft: RFValue(5) }}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <FourteenPxText text={'Total Amount:'} />
        <FourteenPxText
          text={`${_currency(1123)}`}
          styles={{ fontFamily: 'Metropolis-Bold', paddingLeft: RFValue(5) }}
        />
      </View>
    </View>
  );

  renderDetails = () => (
    <View style={[styles.leftContainer, { marginTop: RFValue(10) }]}>
      <ButtonSecondaryOutlineSmall
        title={'Details'}
        width={RFValue(93)}
        height={RFValue(36)}
      />
      <FourteenPxText text={'Delivered'} color={SuccessColor} />
    </View>
  );

  public render() {
    return (
      <Pressable style={styles.container}>
        {this.renderLeft()}
        {this.renderTrackingNo()}
        {this.renderBody()}
        {this.renderDetails()}
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
    alignItems: 'center',
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
