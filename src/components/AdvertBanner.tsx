import * as React from 'react';
import { TouchableOpacity, Text, Pressable, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { PrimaryColor, WhiteColor } from '../styles/color';
import { FourteenPxText } from './Text';

export interface Props {
  status?: 'pressed' | 'inactive';
  backgroundColor?: string;
  containerStyles?: {};
  children?: React.ReactNode;
}

export interface State {
  status: 'pressed' | 'inactive';
}

export default class AdvertBanner extends React.Component<Props, State> {
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
            backgroundColor:
              this.state.status === 'pressed'
                ? PrimaryColor + '90'
                : PrimaryColor,
            ...this.props.containerStyles,
          },
        ]}
      >
        {this.props.children}
      </Pressable>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: PrimaryColor,
    borderRadius: RFValue(8),
    width: RFValue(343),
    height: RFValue(100),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
