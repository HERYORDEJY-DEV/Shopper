import * as React from 'react';
import { TouchableOpacity, Text, Pressable, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { BlackColor, PrimaryColor, WhiteColor } from '../styles/color';
import { FourteenPxText } from './Text';

export interface Props {
  status: 'pressed' | 'inactive';
  title: string;
  titleColor?: string;
  titleStyles?: string;
  backgroundColor?: string;
  containerStyle?: {};
  width?: number;
  height?: number;
  onPress?: () => void;
}

export interface State {
  status: 'pressed' | 'inactive';
  selected: boolean;
}

export default class ButtonTagSmall extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = { status: 'inactive', selected: false };
  }

  // onPressIn = () => this.setState({ ...this.state, status: 'pressed' });
  // onPressOut = () => this.setState({ ...this.state, status: 'inactive' });
  onPress = () =>
    this.setState({ ...this.state, selected: !this.state.selected });

  render() {
    return (
      <Pressable
        onPress={this.props.onPress ?? this.onPress}
        // onPressIn={this.onPressIn}
        // onPressOut={this.onPressOut}
        style={[
          styles.container,
          {
            backgroundColor:
              this.state.status === 'pressed'
                ? BlackColor + '90'
                : this.state.selected
                ? BlackColor
                : WhiteColor,
            // : this.props.backgroundColor,
            borderColor: this.state.selected ? WhiteColor : BlackColor,
            borderWidth: this.state.selected ? 0 : 1,
            ...this.props.containerStyle,
          },
        ]}
      >
        <FourteenPxText
          text={this.props.title}
          color={
            this.state.selected
              ? WhiteColor
              : this.props.titleColor ?? BlackColor
          }
          styles={{ textAlign: 'center', alignItems: 'center' }}
        />
      </Pressable>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: PrimaryColor,
    borderRadius: RFValue(29),
    minWidth: RFValue(100),
    height: RFValue(30),
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: RFValue(10),
  },
});
