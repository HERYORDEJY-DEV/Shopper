import * as React from 'react';
import { TouchableOpacity, Text, Pressable, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { PrimaryColor, WhiteColor } from '../styles/color';
import { CameraIcon } from '../svg/CameraIcon';
import { GoogleIcon } from '../svg/GoogleIcon';
import { SearchIcon } from '../svg/SearchIcon';
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

export default class ButtonGoogle extends React.Component<Props, State> {
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
              this.state.status === 'pressed' ? WhiteColor + '90' : WhiteColor,
            // : this.props.backgroundColor,
          },
        ]}
      >
        <GoogleIcon
        // width={RFValue(21.67)}
        // height={RFValue(19.5)}
        // fill={WhiteColor}
        />
      </Pressable>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: PrimaryColor,
    borderRadius: RFValue(24),
    width: RFValue(92),
    height: RFValue(64),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
