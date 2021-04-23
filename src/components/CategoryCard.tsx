import * as React from 'react';
import { View, Image, StyleSheet, Pressable } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { GrayColor, WhiteColor } from '../styles/color';
import { Headline3Text } from './Text';
import { MoreIcon } from '../svg/ViewIcon';
import { _currency } from '../utils/textFormatter';
import QuantitySelect from './QuantitySelect';
import { ElevenPxText, FourteenPxText, SixteenPxText } from './Text';

export interface Props {
  imageSource: string;
  name: string;
  containerStyle?: {};
}

export interface State {}

export default class CategoryCard extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {};
  }

  public render() {
    return (
      <View style={[styles.container, { ...this.props.containerStyle }]}>
        <View style={styles.infoContainer}>
          <Headline3Text text={this.props.name} />
        </View>
        <View style={styles.imageContainer}>
          <Image source={this.props.imageSource} style={styles.image} />
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
    elevation: 3,
    overflow: 'hidden',
    backgroundColor: WhiteColor,
    width: RFValue(343),
    height: RFValue(100),
  },
  imageContainer: {
    width: '50%',
    height: RFValue(100),
    overflow: 'hidden',
  },
  infoContainer: {
    flex: 1,
    padding: RFValue(10),
    justifyContent: 'center',
    paddingLeft: RFValue(20),
    // borderColor: GrayColor,
    // borderWidth: 1,
    borderRadius: RFValue(8),
    borderTopLeftRadius: RFValue(0),
    borderLeftWidth: RFValue(0),
    borderBottomLeftRadius: RFValue(0),
  },
});
