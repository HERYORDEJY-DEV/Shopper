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
  containerStyles: {};
}

export interface State {
  status: 'pressed' | 'inactive';
}

export default class ButtonSecondaryOutlineBig extends React.Component<
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
    return (
      <Pressable
        onPress={() => {}}
        onPressIn={this.onPressIn}
        onPressOut={this.onPressOut}
        style={[
          styles.container,
          {
            ...this.props.containerStyles,
            borderColor:
              this.state.status === 'pressed'
                ? GrayColor
                : this.props.containerStyles.borderColor ?? BlackColor,
          },
        ]}
      >
        <FourteenPxText
          text={this.props.title}
          color={
            this.state.status === 'pressed'
              ? GrayColor
              : this.props.titleColor ?? BlackColor
          }
          styles={this.props.titleStyles}
        />
      </Pressable>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    borderRadius: RFValue(100),
    width: RFValue(343),
    height: RFValue(48),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: BlackColor,
    flex: 0,
  },
});
