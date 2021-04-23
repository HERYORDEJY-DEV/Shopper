import * as React from 'react';
import { TouchableOpacity, Text, Pressable, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { PrimaryColor, WhiteColor } from '../styles/color';
import { PenIcon } from '../svg/PenIcon';
import { screenWidth } from '../utils/dimension';
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

export default class ButtonReview extends React.Component<Props, State> {
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
        <PenIcon />
        <FourteenPxText text={this.props.title} color={WhiteColor} />
      </Pressable>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: PrimaryColor,
    padding: RFValue(10),
    paddingVertical: RFValue(10),
    borderRadius: RFValue(100),
    width: RFValue(128),
    height: RFValue(36),
    // width: screenWidth * 0.4,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
});
