import * as React from 'react';
import { View, Pressable, StyleSheet } from 'react-native';
import { starRating } from '../api/datas';
import { StarIconActive, StarIconInactive } from '../svg/StarIcon';
import { ElevenPxText } from './Text';
import { RFValue } from 'react-native-responsive-fontsize';
import { GrayColor } from '../styles/color';

export interface Props {
  starWidth?: number;
  starHeight?: number;
  containerStyles?: object;
  showValue?: boolean;
  disabled?: boolean;
  rating?: number;
}

export interface State {
  minRating: number;
  maxRating: number;
  currentRating: number;
  ratingMultiplier: number;
}

export default class StarRating extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      minRating: 1,
      maxRating: 5,
      currentRating: 0,
      ratingMultiplier: 2,
    };
  }

  onPress = (value: number) =>
    this.setState({ ...this.state, currentRating: value });

  ratingValue = () => {
    return this.state.currentRating * this.state.ratingMultiplier;
  };

  render() {
    return (
      <View style={[styles.container, this.props.containerStyles]}>
        <>
          {starRating.map((star: { name; rating }, index) => (
            <Pressable
              key={star.name + star.rating}
              onPress={() => this.onPress(star.rating)}
              style={styles.pressable}
            >
              {this.state.currentRating >= star.rating ? (
                <StarIconActive
                  width={this.props.starWidth}
                  height={this.props.starHeight}
                />
              ) : (
                <StarIconInactive
                  width={this.props.starWidth}
                  height={this.props.starHeight}
                />
              )}
            </Pressable>
          ))}
        </>
        {this.props.showValue && (
          <ElevenPxText
            text={`(${this.state.currentRating * this.state.ratingMultiplier})`}
            styles={{ marginHorizontal: RFValue(5) }}
            color={GrayColor}
          />
        )}
      </View>
    );
  }
}

export class StarRatingFixed extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      minRating: 1,
      maxRating: 5,
      currentRating: 0,
      ratingMultiplier: 2,
    };
  }

  onPress = (value: number) =>
    this.setState({ ...this.state, currentRating: value });

  ratingValue = () => {
    return this.state.currentRating * this.state.ratingMultiplier;
  };

  render() {
    return (
      <View style={[styles.container, this.props.containerStyles]}>
        <>
          {starRating.map((star: { name; rating }, index) => (
            <View key={star.name + star.rating} style={styles.pressable}>
              {this.props.rating >= star.rating ? (
                <StarIconActive
                  width={this.props.starWidth}
                  height={this.props.starHeight}
                />
              ) : (
                <StarIconInactive
                  width={this.props.starWidth}
                  height={this.props.starHeight}
                />
              )}
            </View>
          ))}
        </>
        {this.props.showValue && (
          <ElevenPxText
            text={`(${this.state.currentRating * this.state.ratingMultiplier})`}
            styles={{ marginHorizontal: RFValue(5) }}
            color={GrayColor}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center',
  },
  pressable: { marginRight: RFValue(5) },
});
