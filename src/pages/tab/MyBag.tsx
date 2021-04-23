import * as React from 'react';
import { View, StyleSheet, Pressable, FlatList, TextInput } from 'react-native';
import { StatusBar } from 'react-native';
import { Container, Content } from 'native-base';
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
import { EnterArrowRight } from '../../svg/ArrowIcon';
import { fourteenPxText } from '../../styles/text';
import RNBottomSheet from '../../components/RNBottomSheet';
import PromoCodeEntry from '../../components/PromoCodeEntry';
import { CancelIcon } from '../../svg/CancelIcon';
import { _currency } from '../../utils/textFormatter';

export interface Props {}
export interface State {
  view: boolean;
}

export default function MyBag(props: Props) {
  const bottomSheetRef = React.createRef();

  const onEnterCode = () => bottomSheetRef.current.open();
  const onCloseCode = () => bottomSheetRef.current.close();

  const [promoCode, setPromoCode] = React.useState({
    status: false,
    code: undefined,
  });

  const getPromoCode = (code) => {
    setPromoCode({ ...promoCode, status: true, code: code });
    onCloseCode();
  };

  const onCancelCode = () => setPromoCode({ status: false, code: undefined });

  // Grid View === true     List View === false
  const [view, setView] = React.useState(true);

  const renderTitle = () => (
    <HeadlineText text={'My Bag'} styles={{ paddingHorizontal: RFValue(10) }} />
  );

  const renderHeader = () => (
    <View
      style={{
        paddingBottom: RFValue(5),
        // marginBottom: RFValue(20),
        backgroundColor: WhiteColor,
        // elevation: 3,
      }}
    >
      {renderTitle()}
    </View>
  );

  const renderItem = (name) => (
    <Bagitem
      containerStyles={{
        marginBottom: RFValue(20),
      }}
    />
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
      {renderHeader()}
      <FlatList
        showsVerticalScrollIndicator={false}
        // stickyHeaderIndices={[0]}
        contentContainerStyle={styles.contentContainerStyle}
        // ListHeaderComponent={renderHeader()}
        data={clothes}
        renderItem={({ item, index }) => renderItem(item.name)}
        keyExtractor={(item, index) => item.name}
      />

      <View style={styles.inputWrapper}>
        <Pressable
          onPress={onEnterCode}
          style={{ flex: 0.8 }}
          disabled={promoCode.status}
        >
          <FourteenPxText
            text={promoCode.code ?? 'Enter your promo code'}
            color={promoCode.code ? BlackColor : GrayColor}
          />
        </Pressable>
        <Pressable onPress={onCancelCode} disabled={!promoCode.status}>
          {promoCode.status ? <CancelIcon /> : <EnterArrowRight />}
        </Pressable>
      </View>
      <View style={styles.amountWrapper}>
        <FourteenPxText text={'Total amount'} color={GrayColor} />
        <Headline3Text text={`${_currency(1234)}`} />
      </View>
      <View style={styles.buttonWrapper}>
        <ButtonPrimaryBig
          title={'CHECK OUT'}
          containerStyles={{ elevation: 3 }}
        />
      </View>
      <RNBottomSheet ref={bottomSheetRef} height={RFValue(464)}>
        <PromoCodeEntry getPromoCode={getPromoCode} />
      </RNBottomSheet>
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
  renderFilterBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: RFValue(10),
    paddingHorizontal: RFValue(10),
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
  textInput: { ...fourteenPxText },
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
