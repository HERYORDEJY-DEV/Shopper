import React, { useRef, forwardRef } from 'react';
import { View, StyleSheet, Pressable, FlatList } from 'react-native';
import { StatusBar } from 'react-native';
import { Container, Content } from 'native-base';
import { RFValue } from 'react-native-responsive-fontsize';
import NavigationBar from '../components/NavigationBar';
import { SearchIcon } from '../svg/SearchIcon';
import {
  BlackColor,
  GrayColor,
  NavIconColor,
  WhiteColor,
} from '../styles/color';
import CategoriesTabView from '../components/CategoriesTabView';
import AdvertBanner from '../components/AdvertBanner';
import {
  Headline2Text,
  FourteenPxText,
  SixteenPxRegularText,
  HeadlineText,
  Headline3Text,
} from '../components/Text';
import CategoryCard from '../components/CategoryCard';
import { subCategories, clothes, womensTop, sizes } from '../api/datas';
import ButtonPrimaryBig from '../components/ButtonPrimaryBig';
import ButtonTagSmall from '../components/ButtonTagSmall';
import ListFilter from '../components/ListFilter';
import PriceFilter from '../components/PriceFilter';
import { ViewIcon } from '../svg/ViewIcon';
import CatalogItem from '../components/CatalogItem';
import ProductMainItem from '../components/ProductMainItem';
import RNBottomSheet from '../components/RNBottomSheet';
import SizeSelect from '../components/SizeSelect';

export interface Props {}
export interface State {}

export default function Catalog2(props: Props) {
  const [state, setState] = React.useState({
    gridView: false,
    btnText: 'Show List',
  });

  const changeView = () => {
    setState({ ...state, gridView: !state.gridView }, () => {
      if (state.gridView) {
        setState({ ...state, btnText: 'Show List' });
      } else {
        setState({ ...state, btnText: 'Show Grid' });
      }
    });
  };

  const bottomSheet = React.createRef();
  const renderTagScroll = () => (
    <FlatList
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.renderTagScroll}
      horizontal={true}
      data={womensTop}
      renderItem={({ item, index }) => (
        <ButtonTagSmall
          containerStyle={{ marginRight: 10, backgroundColor: BlackColor }}
          titleColor={WhiteColor}
          title={item.name}
        />
      )}
      keyExtractor={(item, index) => index.toString()}
    />
  );

  const renderFilterBar = () => (
    <View style={styles.renderFilterBar}>
      <ListFilter />
      <PriceFilter />
      <Pressable>
        <ViewIcon />
      </Pressable>
    </View>
  );

  const renderHeader = () => (
    <View
      style={{
        paddingBottom: RFValue(5),
        // marginBottom: RFValue(20),
        backgroundColor: WhiteColor,
        elevation: 3,
      }}
    >
      {renderTagScroll()}
      {renderFilterBar()}
    </View>
  );

  const renderSizes = (props) => (
    <View style={styles.renderPriceRange}>
      <Headline3Text text={'Select size'} styles={styles.title} />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
          height: RFValue(50),
        }}
      >
        {sizes.map(
          (c, index) =>
            index < 5 && (
              <SizeSelect
                name={c.name}
                slug={c.slug}
                containerStyle={{ paddingRight: RFValue(10) }}
              />
            ),
        )}
      </View>
    </View>
  );

  return (
    <Container style={styles.container}>
      <StatusBar
        translucent={true}
        barStyle={'dark-content'}
        backgroundColor={'transparent'}
      />
      <NavigationBar
        title={"Women's tops"}
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
        renderItem={({ item, index }) => (
          <ProductMainItem
            {...item}
            percentDiscount={12}
            amount={231}
            containerStyles={{ paddingHorizontal: RFValue(5) }}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        // contentContainerStyle={{
        //   // paddingVertical: RFValue(20),
        //   paddingBottom: RFValue(20),
        //   // paddingHorizontal: RFValue(10),
        // }}
        columnWrapperStyle={{
          paddingHorizontal: RFValue(15),
          paddingVertical: RFValue(5),
        }}
      />
      <RNBottomSheet ref={bottomSheet}>
        <FourteenPxText text={'Yusuf'} />
        <Headline3Text text={'Select Size'} />
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
    alignItems: 'center',
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
  renderPriceRange: { padding: RFValue(10) },
  title: {
    height: RFValue(42),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
