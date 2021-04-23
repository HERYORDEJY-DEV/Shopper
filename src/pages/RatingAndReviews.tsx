import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { StatusBar } from 'react-native';
import { Container, Content } from 'native-base';
import { RFValue } from 'react-native-responsive-fontsize';
import {
  DescriptionText,
  FourteenPxText,
  Headline2Text,
  HeadlineText,
} from '../components/Text';
import NavigationBar from '../components/NavigationBar';
import { StarIconActive, StarRatingBar } from '../svg/StarIcon';
import {
  BlackColor,
  GrayColor,
  PrimaryColor,
  WhiteColor,
} from '../styles/color';
import RatingChart from '../components/RatingChart';
import ButtonCheckbox from '../components/ButtonCheckbox';
import ReviewCard from '../components/ReviewCard';
import ButtonPrimarySmall from '../components/ButtonPrimarySmall';
import { PenIcon } from '../svg/PenIcon';
import RNBottomSheet from '../components/RNBottomSheet';
import WriteAReview from '../components/WriteAReview';
import { screenHeight } from '../utils/dimension';

export interface Props {}

export interface State {}

export default function RatingAndReviews(props: Props) {
  const bottomSheetRef = React.createRef();

  const [withPhoto, setWithPhoto] = React.useState(false);

  const toggleWithPhoto = () => setWithPhoto(!withPhoto);

  const renderReviewBar = () => {
    return (
      <View style={styles.renderReviewBar}>
        <Headline2Text text={'8 reviews'} />
        <View style={styles.renderReviewBar}>
          <ButtonCheckbox
            backgroundColor={BlackColor}
            onPress={toggleWithPhoto}
          />
          <DescriptionText
            text={'With photo'}
            styles={{ marginLeft: RFValue(10) }}
          />
        </View>
      </View>
    );
  };

  const onWriteReview = () => bottomSheetRef.current.open();

  return (
    <Container style={styles.container}>
      <StatusBar
        translucent={true}
        barStyle={'dark-content'}
        backgroundColor={'transparent'}
      />
      <NavigationBar title={'Rating and reviews'} />
      <Content
        style={styles.content}
        contentContainerStyle={styles.contentContainerStyle}
      >
        {/* <HeadlineText text={'Rating&Reviews'} /> */}
        <RatingChart />
        {renderReviewBar()}
        <ReviewCard withPhoto={withPhoto} />
        <ReviewCard withPhoto={withPhoto} />
      </Content>
      <>
        <View style={styles.footer}>
          <ButtonPrimarySmall
            onPress={onWriteReview}
            title={'Write a review'}
            width={RFValue(128)}
            height={RFValue(36)}
            leftIcon={<PenIcon width={RFValue(13)} height={RFValue(13)} />}
          />
        </View>
        <RNBottomSheet
          ref={bottomSheetRef}
          height={screenHeight * 0.788}
          // height={RFValue(640)}
        >
          <WriteAReview />
        </RNBottomSheet>
      </>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: { paddingTop: RFValue(20) },
  content: {},
  contentContainerStyle: {
    paddingHorizontal: RFValue(10),
    paddingBottom: RFValue(80),
  },
  ratingChartContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    flex: 1,
  },
  barContainer: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingLeft: RFValue(5),
  },
  starsContainer: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingRight: RFValue(5),
    width: RFValue(95),
  },
  valueContainer: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingRight: RFValue(5),
  },
  renderReviewBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: RFValue(10),
  },
  footer: {
    alignItems: 'flex-end',
    paddingHorizontal: RFValue(10),
    paddingBottom: RFValue(10),
    height: RFValue(100),
    justifyContent: 'flex-end',
    backgroundColor: WhiteColor + 99,
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
  },
});
