import * as React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { GrayColor, WhiteColor } from '../styles/color';
import { ElevenPxText, FourteenPxText } from './Text';

export interface Props {}

export interface State {}

export default class extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {};
  }

  renderAddFavorite = () => (
    <Pressable
      onPress={() => {}}
      style={styles.itemContainer}
      android_ripple={{
        color: GrayColor,
        borderless: false,
        // radius: RFValue(8),
      }}
    >
      <ElevenPxText text={'Add to favorites'} />
    </Pressable>
  );

  renderDeleteFavorite = () => (
    <Pressable
      onPress={() => {}}
      style={styles.itemContainer}
      android_ripple={{
        color: GrayColor,
        borderless: false,
        // radius: RFValue(8),
      }}
    >
      <ElevenPxText text={'Delete from the list'} />
    </Pressable>
  );

  public render() {
    return (
      <View style={styles.container}>
        {this.renderAddFavorite()}
        <View
          style={{
            // ...StyleSheet.absoluteFillObject,
            borderWidth: 0.2,
            borderColor: GrayColor,
          }}
        />
        {this.renderDeleteFavorite()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: RFValue(170),
    height: RFValue(96),
    elevation: 3,
    backgroundColor: WhiteColor,
    justifyContent: 'center',
    borderRadius: RFValue(8),
  },
  itemContainer: { alignItems: 'center', padding: RFValue(20) },
});
