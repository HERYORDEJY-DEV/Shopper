import React from 'react';
import { View, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { FourteenPxText, HeadlineText } from '../components/Text';
import { StarIconActive, StarRatingBar } from '../svg/StarIcon';
import { GrayColor } from '../styles/color';
import { ratingChart } from '../api/datas';

export interface Props {}

export interface State {}

export default class RatingChart extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {};
  }

  getTotalPeople = (arr: { star: string; people: string }[]) => {
    return arr.map((li) => +li.people).reduce((sum, val) => sum + val, 0);
  };

  getAverageRating = (
    arr: { star: string; people: string }[],
    decimalPlaces: number,
  ) => {
    let val =
      arr.map((li) => +li.people).reduce((sum, val) => sum + val, 0) / 5;
    return Number(
      Math.round(+val + 'e' + decimalPlaces) + 'e-' + decimalPlaces,
    );
  };

  getBarWidth = (value, maxWidth, minValue, maxValue, minWidth) => {
    if (+value >= 100) {
      return RFValue(maxWidth);
    } else {
      return RFValue(maxWidth * (+value / 100) + 0);
    }
  };

  public render() {
    return (
      <View style={styles.ratingChartContainer}>
        <View>
          <HeadlineText
            text={`${this.getAverageRating(ratingChart, 1)}`}
            styles={{
              fontFamily: 'Metropolis-SemiBold',
              fontSize: RFValue(40),
            }}
          />
          <FourteenPxText
            text={`${this.getTotalPeople(ratingChart)} ratings`}
            color={GrayColor}
            styles={{ lineHeight: RFValue(14), justifyContent: 'center' }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-start',
            flex: 1,
            justifyContent: 'space-between',
          }}
        >
          <View style={{ justifyContent: 'space-between' }}>
            {ratingChart.map((rating, index) => (
              <View
                key={`${rating.star}-${rating.people}`}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  // justifyContent: 'space-between',
                  flex: 1,
                }}
              >
                <View style={styles.starsContainer}>
                  {Array(+rating.star).fill(
                    <View style={{ marginRight: RFValue(2) }}>
                      <StarIconActive
                        width={RFValue(12)}
                        height={RFValue(12)}
                      />
                    </View>,
                  )}
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'flex-end',
                    // justifyContent: 'space-between',
                  }}
                >
                  <View style={styles.barContainer}>
                    <StarRatingBar
                      width={this.getBarWidth(rating.people, 130)}
                    />
                  </View>
                </View>
              </View>
            ))}
          </View>
          <View style={styles.valueContainer}>
            {ratingChart.map((rating, index) => (
              <FourteenPxText
                text={rating.people}
                color={GrayColor}
                styles={{
                  textAlign: 'right',
                  alignItems: 'flex-end',
                  justifyContent: 'flex-end',
                }}
              />
            ))}
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  ratingChartContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    flex: 1,
    justifyContent: 'space-between',
    paddingVertical: RFValue(0),
    paddingBottom: RFValue(0),
  },
  barContainer: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingLeft: RFValue(5),

    // width: '100%'),
  },
  starsContainer: {
    flexDirection: 'row-reverse',
    alignItems: 'flex-start',
    // justifyContent: 'center',
    // paddingRight: RFValue(55),
    width: RFValue(80),
  },
  valueContainer: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    paddingRight: RFValue(5),
    marginLeft: RFValue(5),
    // width: RFValue(30),
  },
});
