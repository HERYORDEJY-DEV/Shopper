import * as React from 'react';
import { TouchableOpacity, Text, Pressable, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { PrimaryColor, WhiteColor } from '../styles/color';
import { BagIcon, BagIconInactive } from '../svg/BagIcon';
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
  addToBag: boolean;
}

export default class ButtonAddBagSmall extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = { status: 'inactive', addToBag: false };
  }

  onPressIn = () => this.setState({ ...this.state, status: 'pressed' });
  onPressOut = () =>
    this.setState({
      ...this.state,
      status: 'inactive',
      addToBag: !this.state.addToBag,
    });
  // onPress = () =>
  //   this.setState({ ...this.state, addToBag: !this.state.addToBag });

  render() {
    return (
      <Pressable
        onPressIn={this.onPressIn}
        onPressOut={this.onPressOut}
        style={[
          styles.container,
          {
            backgroundColor: !this.state.addToBag
              ? WhiteColor
              : this.state.status === 'pressed'
              ? PrimaryColor + '90'
              : PrimaryColor,
            // : this.props.backgroundColor,
          },
        ]}
      >
        {this.state.addToBag ? (
          <BagIcon
            width={RFValue(12.8)}
            height={RFValue(12.27)}
            fill={WhiteColor}
          />
        ) : (
          <BagIconInactive width={RFValue(12.8)} height={RFValue(12.27)} />
        )}
      </Pressable>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: PrimaryColor,
    borderRadius: RFValue(100),
    width: RFValue(36),
    height: RFValue(36),
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
  },
});
