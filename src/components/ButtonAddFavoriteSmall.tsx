import * as React from 'react';
import { TouchableOpacity, Text, Pressable, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { PrimaryColor, WhiteColor } from '../styles/color';
import { BagIcon, BagIconInactive } from '../svg/BagIcon';
import {
  FavoriteIconActivated,
  FavoriteIconInactive,
  FavoriteIconPressed,
} from '../svg/FavoriteIcon';
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
  addToFavorite: boolean;
  pressedIn: boolean;
}

export default class ButtonAddFavoriteSmall extends React.Component<
  Props,
  State
> {
  constructor(props: Props) {
    super(props);

    this.state = { status: 'inactive', addToFavorite: false, pressedIn: false };
  }

  onPressIn = () => {
    this.setState({
      ...this.state,
      pressedIn: true,

      // status: 'pressed',
    });
    setTimeout(() => {
      this.setState({ ...this.state, pressedIn: false });
    }, 200);
  };
  onPressOut = () =>
    this.setState({
      ...this.state,
      status: 'inactive',
      addToFavorite: !this.state.addToFavorite,
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
            backgroundColor: !this.state.addToFavorite
              ? WhiteColor
              : this.state.pressedIn
              ? PrimaryColor
              : WhiteColor,
            // : this.props.backgroundColor,
          },
        ]}
      >
        {this.state.pressedIn ? (
          <FavoriteIconPressed />
        ) : this.state.addToFavorite ? (
          <FavoriteIconActivated />
        ) : (
          <FavoriteIconInactive />
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
