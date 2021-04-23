import * as React from 'react';
import { TouchableOpacity, Text, Pressable, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { BlackColor, PrimaryColor, WhiteColor } from '../styles/color';
import { AddIcon } from '../svg/AddIcon';
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
  adding: boolean;
}

export default class ButtonAdd extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = { status: 'inactive', adding: false };
  }

  onPressIn = () => this.setState({ ...this.state, status: 'pressed' });
  onPressOut = () =>
    this.setState({
      ...this.state,
      status: 'inactive',
      adding: !this.state.adding,
    });

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
                ? BlackColor + '90'
                : this.state.adding
                ? WhiteColor
                : BlackColor,
            // : this.props.backgroundColor,
          },
        ]}
      >
        <AddIcon
          width={RFValue(14)}
          height={RFValue(14)}
          fill={this.state.adding ? BlackColor : WhiteColor}
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
