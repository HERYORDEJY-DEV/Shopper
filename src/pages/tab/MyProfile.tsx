import * as React from 'react';
import { View, StyleSheet, Pressable, FlatList, TextInput } from 'react-native';
import { StatusBar } from 'react-native';
import { Container, Content, Thumbnail } from 'native-base';
import { RFValue } from 'react-native-responsive-fontsize';
import NavigationBar from '../../components/NavigationBar';
import { SearchIcon } from '../../svg/SearchIcon';
import {
  BlackColor,
  GrayColor,
  NavIconColor,
  WhiteColor,
} from '../../styles/color';
import CategoriesTabView from '../../components/CategoriesTabView';
import AdvertBanner from '../../components/AdvertBanner';
import {
  Headline2Text,
  FourteenPxText,
  SixteenPxRegularText,
  HeadlineText,
  Headline3Text,
  SixteenPxText,
  ElevenPxText,
} from '../../components/Text';
import CategoryCard from '../../components/CategoryCard';
import { subCategories, clothes, womensTop } from '../../api/datas';
import ButtonPrimaryBig from '../../components/ButtonPrimaryBig';
import ButtonTagSmall from '../../components/ButtonTagSmall';
import ListFilter from '../../components/ListFilter';
import PriceFilter from '../../components/PriceFilter';
import { ViewIcon } from '../../svg/ViewIcon';
import CatalogItem from '../../components/CatalogItem';
import FavoriteItemRectangle from '../../components/FavoriteItemRectangle';
import FavoriteItemSquare from '../../components/FavoriteItemSquare';
import Bagitem from '../../components/BagItem';
import {
  ChevronArrowRight,
  EnterArrowRight,
  ChevronArrowRightGray,
} from '../../svg/ArrowIcon';
import { fourteenPxText, headline3Text } from '../../styles/text';
import RNBottomSheet from '../../components/RNBottomSheet';
import PromoCodeEntry from '../../components/PromoCodeEntry';
import { CancelIcon } from '../../svg/CancelIcon';
import { _currency } from '../../utils/textFormatter';

export interface Props {}
export interface State {
  view: boolean;
}

export default function MyProfile(props: Props) {
  const bottomSheetRef = React.createRef();

  const onEnterCode = () => bottomSheetRef.current.open();

  const [promoCode, setPromoCode] = React.useState(false);

  // Grid View === true     List View === false
  const [view, setView] = React.useState(true);

  const renderTitle = () => (
    <HeadlineText
      text={'My Profile'}
      styles={{ paddingHorizontal: RFValue(10) }}
    />
  );

  const renderHeader = () => (
    <View
      style={{
        padding: RFValue(10),
        paddingVertical: RFValue(20),
        // marginBottom: RFValue(20),
        backgroundColor: WhiteColor,
        flexDirection: 'row',
        // elevation: 3,
      }}
    >
      <Thumbnail
        source={require('../../assets/images/monroe.png')}
        style={{ marginRight: RFValue(10) }}
      />
      <View>
        <Headline3Text text={'Matilda Brown'} />
        <FourteenPxText text={'matildabrown@gmail.com'} color={GrayColor} />
      </View>
    </View>
  );

  const renderItem = (title, subtitle, onPress) => (
    <Pressable style={styles.linkWrapper} onPress={onPress}>
      <View>
        <SixteenPxText
          text={`${title}`}
          styles={{ marginBottom: RFValue(5) }}
        />
        <ElevenPxText color={GrayColor} text={`${subtitle}`} />
      </View>
      <ChevronArrowRightGray />
    </Pressable>
  );

  return (
    <Container style={styles.container}>
      <StatusBar
        translucent={true}
        barStyle={'dark-content'}
        backgroundColor={'transparent'}
      />
      <NavigationBar
        noLeft={true}
        rightComponent={
          <SearchIcon
            fill={NavIconColor}
            width={RFValue(17.49)}
            height={RFValue(17.49)}
          />
        }
      />
      <Content showsVerticalScrollIndicator={false}>
        {renderTitle()}
        {renderHeader()}
        {renderItem('My orders', 'Already have 12 orders')}
        {renderItem('Shipping addresses', '2 addresses')}
        {renderItem('Payment methods', 'Visa ***2')}
        {renderItem('Promo codes', 'You have 4 special promo codes')}
        {renderItem('My reviews', "You've made 6 reviews so far")}
        {renderItem('Settings', 'Notifications, password')}
      </Content>
    </Container>
  );
}
const styles = StyleSheet.create({
  container: { paddingTop: RFValue(20) },
  content: {},
  contentContainerStyle: {
    paddingVertical: RFValue(20),
    paddingHorizontal: RFValue(10),
    // alignItems: 'center',
  },
  renderHeader: {
    alignItems: 'center',
    // paddingHorizontal: RFValue(10),
    paddingVertical: RFValue(10),
  },
  renderItem: {
    paddingVertical: RFValue(20),
    paddingHorizontal: RFValue(30),
    borderBottomColor: GrayColor,
    borderBottomWidth: RFValue(1),
  },
  linkWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: RFValue(10),
    paddingHorizontal: RFValue(10),
    marginBottom: RFValue(10),
    borderBottomColor: GrayColor,
    borderBottomWidth: RFValue(1),
  },
  renderTagScroll: {
    paddingVertical: RFValue(10),
    paddingHorizontal: RFValue(10),
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: RFValue(10),
    height: RFValue(46),
  },
  textInput: { ...fourteenPxText, flex: 1 },
  amountWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: RFValue(10),
    height: RFValue(46),
  },
  buttonWrapper: {
    alignItems: 'center',
    padding: RFValue(10),
  },
});
