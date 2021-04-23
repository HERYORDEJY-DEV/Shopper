import * as React from 'react';
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
} from '../components/Text';
import CategoryCard from '../components/CategoryCard';
import { subCategories, clothes, womensTop } from '../api/datas';
import ButtonPrimaryBig from '../components/ButtonPrimaryBig';
import ButtonTagSmall from '../components/ButtonTagSmall';
import ListFilter from '../components/ListFilter';
import PriceFilter from '../components/PriceFilter';
import { ViewIcon } from '../svg/ViewIcon';
import CatalogItem from '../components/CatalogItem';
import ProductMainItem from '../components/ProductMainItem';

export interface Props {}
export interface State {}
export default function Catalog1(props: Props) {
  const [state, setState] = React.useState({
    GridColumnsValue: true,
    ButtonDefaultText: 'CHANGE TO GRIDVIEW',
  });

  const changeGridValueFunction = () => {
    if (state.GridColumnsValue === true) {
      setState({
        GridColumnsValue: false,
        ButtonDefaultText: 'CHANGE TO LISTVIEW',
      });
    } else {
      setState({
        GridColumnsValue: true,
        ButtonDefaultText: 'CHANGE TO GRIDVIEW',
      });
    }
  };

  const renderTitle = () => (
    <HeadlineText
      text={"Women's tops"}
      styles={{ paddingHorizontal: RFValue(10) }}
    />
  );

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
      <Pressable onPress={changeGridValueFunction}>
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
      {renderTitle()}
      {renderTagScroll()}
      {renderFilterBar()}
    </View>
  );

  const renderItem = (name) =>
    state.GridColumnsValue ? (
      <ProductMainItem
        {...name}
        percentDiscount={12}
        amount={231}
        containerStyles={{
          paddingHorizontal: RFValue(5),
          marginBottom: RFValue(10),
        }}
      />
    ) : (
      <CatalogItem containerStyle={{ marginBottom: RFValue(20) }} />
    );

  return (
    <Container style={styles.container}>
      <StatusBar
        translucent={true}
        barStyle={'dark-content'}
        backgroundColor={'transparent'}
      />
      <NavigationBar
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
        numColumns={state.GridColumnsValue ? 2 : 1}
        key={state.GridColumnsValue ? 'TWO COLUMN' : 'ONE COLUMN'}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          styles.contentContainerStyle,
          { alignItems: state.GridColumnsValue ? 'center' : null },
        ]}
        data={clothes}
        renderItem={({ item, index }) => renderItem(item.name)}
        keyExtractor={(item, index) => index.toString()}
      />
    </Container>
  );
}
const styles = StyleSheet.create({
  container: { paddingTop: RFValue(20) },
  content: {
    // alignItems: 'center',
  },
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
});
