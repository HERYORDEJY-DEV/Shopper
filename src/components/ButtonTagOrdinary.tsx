import * as React from 'react';
import { TouchableOpacity, Text, Pressable, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import {
  BlackColor,
  GrayColor,
  PrimaryColor,
  WhiteColor,
} from '../styles/color';
import { FourteenPxText } from './Text';

export interface Props {
  status: 'pressed' | 'inactive';
  title: string;
  titleColor: string;
  titleStyles: string;
  backgroundColor: string;
  containerStyle: {};
  width?: number;
  height?: number;
  onPress?: () => void;
  selected?: boolean;
}

export interface State {
  status: 'pressed' | 'inactive';
  selected: boolean;
}

export default class ButtonTagOrdinary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = { status: 'inactive', selected: false };
  }

  // onPressIn = () => this.setState({ ...this.state, status: 'pressed' });
  // onPressOut = () => this.setState({ ...this.state, status: 'inactive' });
  onPress = () => {
    this.setState({ ...this.state, selected: !this.state.selected });
    this.props.onPress();
  };
  render() {
    const { width, height } = this.props;
    return (
      <Pressable
        onPress={this.onPress}
        // onPressIn={this.onPressIn}
        // onPressOut={this.onPressOut}
        style={[
          styles.container,
          {
            backgroundColor: this.props.selected ? PrimaryColor : WhiteColor,
            // : this.props.backgroundColor,
            borderColor: this.props.selected ? PrimaryColor : GrayColor,
            borderWidth: this.props.selected ? 0 : 1,
            ...this.props.containerStyle,
            width,
            height,
          },
        ]}
      >
        <FourteenPxText
          text={this.props.title}
          color={this.props.selected ? WhiteColor : BlackColor}
        />
      </Pressable>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: PrimaryColor,
    borderRadius: RFValue(8),
    width: RFValue(100),
    height: RFValue(40),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
