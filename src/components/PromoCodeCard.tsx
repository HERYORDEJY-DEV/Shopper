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
import { GrayColor, WhiteColor, BlackColor } from '../styles/color';
import ButtonPrimarySmall from './ButtonPrimarySmall';
import { ElevenPxText, FourteenPxText, HeadlineText } from './Text';

export interface Props {
  id: string;
  imageSource?: string;
  name: string;
  code: string;
  expiration: string;
  percentDiscount: string | number;
  onApplyCode: (e: string) => void;
}

export interface State {}

export default class PromoCodeCard extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {};
  }

  renderLeft = () => (
    <View style={styles.leftContainer}>
      <ImageBackground
        source={
          this.props.imageSource
            ? require('../assets/images/image15.png')
            : require('../assets/images/promoBg.png')
        }
        style={styles.image}
      >
        {this.props.imageSource && (
          <View
            style={{
              ...StyleSheet.absoluteFillObject,
              backgroundColor: WhiteColor + 99,
            }}
          />
        )}
        <View style={styles.percentContainer}>
          <HeadlineText
            text={this.props.percentDiscount}
            color={this.props.imageSource ? BlackColor : WhiteColor}
          />
          <View style={{}}>
            <FourteenPxText
              text={'%'}
              color={this.props.imageSource ? BlackColor : WhiteColor}
              styles={{
                fontFamily: 'Metropolis-Bold',
                lineHeight: RFValue(15),
                marginHorizontal: RFValue(2),
              }}
            />
            <FourteenPxText
              text={'off'}
              color={this.props.imageSource ? BlackColor : WhiteColor}
              styles={{
                fontFamily: 'Metropolis-Bold',
                lineHeight: RFValue(15),
                marginHorizontal: RFValue(2),
              }}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
  renderBody = () => (
    <View style={styles.bodyContainer}>
      <FourteenPxText
        text={
          this.props.name.length > 15
            ? this.props.name.substring(0, 15) + '...'
            : this.props.name
        }
        styles={{ marginBottom: RFValue(5) }}
      />
      <ElevenPxText text={this.props.code} />
    </View>
  );
  renderRight = () => (
    <View style={styles.rightContainer}>
      <ElevenPxText
        text={`${this.props.expiration} days remaining`}
        color={GrayColor}
      />
      <ButtonPrimarySmall
        title={'Apply'}
        width={RFValue(93)}
        height={RFValue(36)}
        onPress={() => this.props.onApplyCode(this.props.code)}
      />
    </View>
  );

  public render() {
    const {
      id,
      imageSource,
      name,
      code,
      expiration,
      percentDiscount,
    } = this.props;

    return (
      <View style={styles.main}>
        <Pressable style={styles.container}>
          {this.renderLeft()}
          {this.renderBody()}
          {this.renderRight()}
        </Pressable>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: { marginBottom: RFValue(20), flex: 1 },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: RFValue(80),
    borderRadius: RFValue(8),
    elevation: 3,
    overflow: 'hidden',
    backgroundColor: WhiteColor,
    flex: 1,
  },
  leftContainer: {
    width: RFValue(80),
    height: RFValue(80),
    overflow: 'hidden',
    flex: 0.9,
  },
  bodyContainer: {
    padding: RFValue(10),
    // paddingVertical: RFValue(10),
    alignItems: 'flex-start',
    justifyContent: 'center',
    flex: 1,
  },
  rightContainer: {
    padding: RFValue(10),
    paddingRight: RFValue(5),
    alignItems: 'center',
    justifyContent: 'space-around',
    flex: 1,
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
