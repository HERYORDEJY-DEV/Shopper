import * as React from 'react';
import { ImageBackground, View, Pressable, StyleSheet } from 'react-native';
import { BlackColor } from '../styles/color';

export interface Props {
  imageSource?: any;
  height?: number;
  children?: React.ReactNode;
}

export interface State {}

export default class HeaderBanner extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {};
  }

  public render() {
    return (
      <ImageBackground
        style={[styles.imageBackground, { height: this.props.height }]}
        source={
          this.props.imageSource ?? require('../assets/images/image15.png')
        }
      >
        <View
          style={{
            ...StyleSheet.absoluteFillObject,
            backgroundColor: BlackColor + 50,
          }}
        />
        {this.props.children}
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  imageBackground: { width: '100%' },
});
