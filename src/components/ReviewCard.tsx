import * as React from 'react';
import { View, StyleSheet, Pressable, ScrollView, Image } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Thumbnail } from 'native-base';
import moment from 'moment';
import { DescriptionText, ElevenPxText, FourteenPxText } from './Text';
import StarRating, { StarRatingFixed } from './StarRating';
import { GrayColor, PrimaryColor } from '../styles/color';
import { ThumbsUpInactiveIcon, ThumbsUpActiveIcon } from '../svg/FavoriteIcon';

export interface Props {
  withPhoto?: boolean;
}

export interface State {
  helpful: boolean;
}

export default class ReviewCard extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = { helpful: false };
  }

  onHelpful = () =>
    this.setState({ ...this.state, helpful: !this.state.helpful });

  public render() {
    return (
      <View style={styles.container}>
        <View style={styles.thumbnailContainer}>
          <Thumbnail
            source={require('../assets/images/monroe.png')}
            small={true}
          />
        </View>
        <View style={styles.content}>
          <View>
            <FourteenPxText
              text={'Helene Monroe'}
              styles={{
                fontFamily: 'Metropolis-SemiBold',
                // lineHeight: RFValue(10),
              }}
            />
            <View
              style={[
                styles.reviewHeading,
                { justifyContent: 'space-between', alignItems: 'center' },
              ]}
            >
              <StarRatingFixed
                rating={4}
                starWidth={RFValue(12)}
                starHeight={RFValue(12)}
              />
              <ElevenPxText
                text={`${moment().format('MMMM D, YYYY')}`}
                color={GrayColor}
              />
            </View>
          </View>
          <View style={styles.reviewTextContainer}>
            <DescriptionText
              text={
                "The dress is great! Very classy and comfortable. It fit perfectly! I'm 5'7\" and 130 pounds. I am a 34B chest. This dress would be too long for those who are shorter but could be hemmed. I wouldn't recommend it for those big chested as I am smaller chested and it fit me perfectly. The underarms were not too wide and the dress was made well."
              }
            />
          </View>
          {this.props.withPhoto && (
            <ScrollView
              horizontal={true}
              bounces={false}
              containerContentStyle={styles.photoRowWrapper}
              showsHorizontalScrollIndicator={false}
            >
              <View style={styles.ImageSections}>
                <Image
                  source={require('../assets/images/image15.png')}
                  style={styles.images}
                />
              </View>
              <View style={styles.ImageSections}>
                <Image
                  source={require('../assets/images/image15.png')}
                  style={styles.images}
                />
              </View>
            </ScrollView>
          )}
          <Pressable onPress={this.onHelpful} style={styles.helpfulContainer}>
            <ElevenPxText
              text={`Helpful`}
              color={this.state.helpful ? PrimaryColor : GrayColor}
              styles={{ marginRight: RFValue(10) }}
            />
            {this.state.helpful ? (
              <ThumbsUpActiveIcon />
            ) : (
              <ThumbsUpInactiveIcon />
            )}
          </Pressable>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { padding: RFValue(10), marginVertical: RFValue(10) },
  content: {
    padding: RFValue(20),
    paddingLeft: RFValue(30),
    backgroundColor: '#f9f9f9f1',
  },
  thumbnailContainer: { position: 'absolute', zIndex: 1000 },
  reviewHeading: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    // alignItems: 'baseline',
  },
  reviewTextContainer: { paddingTop: RFValue(10) },
  helpfulContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  photoRowWrapper: {
    // height: RFValue(122),
    // width: RFValue(133),
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    // marginVertical: RFValue(30),
  },
  ImageSections: {
    width: RFValue(140),
    height: RFValue(140),
    borderRadius: RFValue(4),
    overflow: 'hidden',
    marginRight: RFValue(10),
    marginVertical: RFValue(20),
  },
  images: {
    width: null,
    height: null,
    flex: 1,
    resizeMode: 'cover',
  },
});
