import * as React from 'react';
import {
  TouchableOpacity,
  Text,
  Pressable,
  StyleSheet,
  TextStyle,
  StyleProp,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { PrimaryColor, WhiteColor } from '../styles/color';
import { screenWidth } from '../utils/dimension';
import { ElevenPxText, FourteenPxText } from './Text';

export interface Props {
  status: 'pressed' | 'inactive';
  title: string;
  titleColor: string;
  titleStyles?: {};
  backgroundColor: string;
  containerStyles: {};
  width: number;
  height: number;
  leftIcon?: React.ReactNode;
  onPress?: () => void;
}

export interface State {
  status: 'pressed' | 'inactive';
}

export default class ButtonPrimarySmall extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = { status: 'inactive' };
  }

  onPressIn = () => this.setState({ ...this.state, status: 'pressed' });
  onPressOut = () => this.setState({ ...this.state, status: 'inactive' });

  render() {
    const { height, width } = this.props;

    return (
      <Pressable
        onPress={this.props.onPress}
        onPressIn={this.onPressIn}
        onPressOut={this.onPressOut}
        style={[
          styles.container,
          {
            backgroundColor:
              this.state.status === 'pressed'
                ? PrimaryColor + '90'
                : PrimaryColor,
            height,
            width,
            flexDirection: this.props.leftIcon ? 'row' : 'column',
            // justifyContent: this.props.leftIcon ? 'space-between' : 'center',

            // : this.props.backgroundColor,
          },
        ]}
      >
        {this.props.leftIcon}
        <ElevenPxText
          text={this.props.title}
          color={WhiteColor}
          styles={{
            fontFamily: 'Metropolis-SemiBold',
            paddingHorizontal: RFValue(10),
            ...this.props.titleStyles,
          }}
        />
      </Pressable>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: PrimaryColor,
    // padding: RFValue(15),
    borderRadius: RFValue(100),
    width: RFValue(160),
    height: RFValue(36),
    // width: screenWidth * 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
