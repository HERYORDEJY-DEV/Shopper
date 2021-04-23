import * as React from 'react';
import { TouchableOpacity, Text, Pressable, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { PrimaryColor, WhiteColor } from '../styles/color';
import { CameraIcon } from '../svg/CameraIcon';
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

export default class ButtonCameraBig extends React.Component<Props, State> {
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
            // : this.props.backgroundColor,
          },
        ]}
      >
        <CameraIcon
          width={RFValue(21.67)}
          height={RFValue(19.5)}
          fill={WhiteColor}
        />
      </Pressable>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: PrimaryColor,
    borderRadius: RFValue(100),
    width: RFValue(52),
    height: RFValue(52),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
