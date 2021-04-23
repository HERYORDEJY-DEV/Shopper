import * as React from 'react';
import { TouchableOpacity, Text, Pressable, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import {
  BlackColor,
  GrayColor,
  PrimaryColor,
  WhiteColor,
} from '../styles/color';
import { screenWidth } from '../utils/dimension';
import { FourteenPxText } from './Text';

export interface Props {
  status: 'pressed' | 'inactive';
  title: string;
  titleColor?: string;
  titleStyles?: object;
  backgroundColor?: string;
  containerStyles?: {};
  width?: number;
  height?: number;
  onPress?: () => void;
}

export interface State {
  status: 'pressed' | 'inactive';
}

export default class ButtonSecondaryOutlineSmall extends React.Component<
  Props,
  State
> {
  constructor(props: Props) {
    super(props);

    this.state = { status: 'inactive' };
  }

  onPressIn = () => this.setState({ ...this.state, status: 'pressed' });
  onPressOut = () => this.setState({ ...this.state, status: 'inactive' });

  render() {
    const { width, height } = this.props;
    return (
      <Pressable
        onPress={this.props.onPress}
        onPressIn={this.onPressIn}
        onPressOut={this.onPressOut}
        style={[
          styles.container,
          {
            borderColor:
              this.state.status === 'pressed' ? GrayColor : BlackColor,
            width,
            height,
          },
        ]}
      >
        <FourteenPxText
          text={this.props.title}
          color={this.state.status === 'pressed' ? GrayColor : BlackColor}
          styles={this.props.titleStyles}
        />
      </Pressable>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: WhiteColor,
    borderRadius: RFValue(100),
    width: RFValue(160),
    height: RFValue(36),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: BlackColor,
  },
});
