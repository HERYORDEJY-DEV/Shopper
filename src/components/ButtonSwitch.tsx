import * as React from 'react';
import { TouchableOpacity, Text, Pressable, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { PrimaryColor, WhiteColor } from '../styles/color';
import { CameraIcon } from '../svg/CameraIcon';
import { CheckboxActiveIcon, CheckboxInactiveIcon } from '../svg/CheckboxIcon';
import { SearchIcon } from '../svg/SearchIcon';
import { SwitchOff, SwitchOn } from '../svg/Switch';
import { FourteenPxText } from './Text';

export interface Props {
  status: 'pressed' | 'inactive';
  title: string;
  titleColor: string;
  titleStyles: string;
  backgroundColor: string;
  containerStyles: {};
  selected: boolean;
}

export interface State {
  status: 'pressed' | 'inactive';
  selected: boolean;
}

export default class ButtonSwitch extends React.Component<Props, State> {
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
        onPress={this.onPress}
        // onPressIn={this.onPressIn}
        // onPressOut={this.onPressOut}
        style={[styles.container]}
      >
        {this.state.selected ? <SwitchOn /> : <SwitchOff />}
      </Pressable>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: PrimaryColor,
    // borderRadius: RFValue(100),
    // width: RFValue(52),
    // height: RFValue(52),
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
