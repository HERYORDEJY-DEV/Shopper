import React, { useRef } from 'react';
import { View, StyleSheet, ScrollView, Image, Pressable } from 'react-native';
import { StatusBar } from 'react-native';
import { Container, Content } from 'native-base';
import { RFValue } from 'react-native-responsive-fontsize';
import RangeSlider from '../components/RangeSlider';
import NavigationBar from '../components/NavigationBar';
import {
  DescriptionText,
  ElevenPxText,
  FourteenPxText,
  Headline2Text,
  Headline3Text,
  SixteenPxRegularText,
  SixteenPxText,
} from '../components/Text';
import ColorSelect from '../components/ColorSelect';
import { brand, categories, color, sizes, womenSizeInfo } from '../api/datas';
import SizeSelect from '../components/SizeSelect';
import CategorySelect from '../components/CategorySelect';
import { BlackColor, GrayColor, WhiteColor } from '../styles/color';
import BrandSelect from '../components/BrandSelect';
import { ShareIcon } from '../svg/FavoriteIcon';
import Dropdown, { MultiDropdown } from '../components/Dropdown';
import ButtonAddFavoriteSmall from '../components/ButtonAddFavoriteSmall';
import { _currency } from '../utils/textFormatter';
import StarRating from '../components/StarRating';
import ButtonPrimaryBig from '../components/ButtonPrimaryBig';
import { ChevronArrowRight, ChevronArrowUp } from '../svg/ArrowIcon';
import ProductMainItem from '../components/ProductMainItem';
import RNBottomSheet from '../components/RNBottomSheet';

export interface Props {}

export interface State {}

export default function ProductCard(props: Props) {
  const bottomSheetRef = useRef();

  const renderImageSlider = () => (
    <ScrollView
      horizontal={true}
      style={{ height: RFValue(413) }}
      showsHorizontalScrollIndicator={false}
    >
      <View style={styles.imageWrapper}>
        <Image
          style={styles.image}
          source={require('../assets/images/image15.png')}
        />
      </View>
      <View style={styles.imageWrapper}>
        <Image
          style={styles.image}
          source={require('../assets/images/image15.png')}
        />
      </View>
      <View style={styles.imageWrapper}>
        <Image
          style={styles.image}
          source={require('../assets/images/image15.png')}
        />
      </View>
      <View style={styles.imageWrapper}>
        <Image
          style={styles.image}
          source={require('../assets/images/image15.png')}
        />
      </View>
    </ScrollView>
  );

  const renderSizeDropDown = () => {
    const items = sizes.map(
      (size: { name: string; slug: string; info: string }, index: number) => ({
        label: size.slug,
        value: size.name,
      }),
    );
    return (
      <Dropdown
        items={items}
        placeholder={'Size'}
        width={RFValue(138)}
        height={RFValue(40)}
      />
    );
  };

  const renderColorDropDown = () => {
    const items = color.map(
      (col: { name: string; code?: string }, index: number) => ({
        label: col.name.toLocaleUpperCase(),
        value: col.name,
      }),
    );
    return (
      <Dropdown
        items={items}
        placeholder={'Color'}
        width={RFValue(138)}
        height={RFValue(40)}
      />
    );
  };

  const renderFavButton = () => {
    return <ButtonAddFavoriteSmall />;
  };

  const renderItemInfo = () => {
    return (
      <>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            padding: RFValue(10),
            paddingVertical: RFValue(10),
          }}
        >
          <View>
            <Headline2Text text={'Gucci'} />
            <FourteenPxText text={'Gucci'} color={GrayColor} />
            <StarRating
              starHeight={RFValue(14)}
              starWidth={RFValue(14)}
              containerStyles={{ paddingVertical: RFValue(5) }}
            />
          </View>
          <Headline2Text text={`${_currency(94.0)}`} />
        </View>
        <DescriptionText
          text={
            'Short dress in soft cotton jersey with decorative buttons down the front and a wide, frill-trimmed square neckline with concealed elastication. Elasticated seam under the bust and short puff sleeves with a small frill trim.'
          }
          styles={{ paddingHorizontal: RFValue(10) }}
        />
      </>
    );
  };
  const renderAddButton = () => {
    return (
      <View
        style={{
          alignItems: 'center',
          paddingVertical: RFValue(20),
          marginBottom: RFValue(20),
        }}
      >
        <ButtonPrimaryBig title={'ADD TO CART'} onPress={() => {}} />
      </View>
    );
  };

  const renderLinkButton = (title, onPress) => {
    return (
      <Pressable style={styles.renderLinkButton} onPress={onPress}>
        <SixteenPxRegularText text={title} />
        <ChevronArrowRight width={RFValue(10)} height={RFValue(10)} />
      </Pressable>
    );
  };

  const [sizeInfo, setSizeInfo] = React.useState(undefined);

  const checkSizeInfo = (size) => {
    setSizeInfo(size);

    console.log(sizeInfo);
  };

  const renderBottomSheetSize = (props) => {
    var sizeInfoKeys = Object.keys(womenSizeInfo['3XL']).map((keys) => keys);
    var sizeInfoValues = Object.values(womenSizeInfo['3XL']).map(
      (values) => values,
    );

    return (
      <View style={styles.renderPriceRange}>
        <Headline3Text
          text={'Size Info'}
          styles={{ textAlign: 'center', paddingBottom: RFValue(20) }}
        />
        <View style={styles.sizeButtonWrapper}>
          {sizes.map(
            (c, index) =>
              index < 5 && (
                <SizeSelect
                  onPress={() => checkSizeInfo(c.slug)}
                  width={RFValue(100)}
                  name={c.name}
                  slug={c.slug}
                  containerStyle={{
                    paddingRight: RFValue(10),
                    paddingBottom: RFValue(10),
                  }}
                  selected={sizeInfo === c.slug}
                />
              ),
          )}
        </View>
        {sizeInfo !== undefined && (
          <>
            <DescriptionText text={`${womenSizeInfo[sizeInfo].def}`} />
            <View>
              {Object.keys(womenSizeInfo['3XL']).map((keys, index) => (
                <View
                  style={{ flexDirection: 'row', paddingVertical: RFValue(5) }}
                >
                  {index > 0 && (
                    <FourteenPxText
                      text={`${sizeInfoKeys[index]}: `}
                      styles={{ textTransform: 'capitalize', flex: 0.3 }}
                    />
                  )}
                  {index > 0 && (
                    <FourteenPxText
                      text={`${sizeInfoValues[index]}`}
                      styles={{ flex: 0.8, fontFamily: 'Metropolis-Regular' }}
                    />
                  )}
                </View>
              ))}
            </View>
          </>
        )}
      </View>
    );
  };

  const renderSimilarProducts = () => (
    <View style={{ marginTop: RFValue(20) }}>
      <Headline3Text
        text={'You can also like this'}
        styles={{ padding: RFValue(10) }}
      />
      <ScrollView
        showsHorizontalScrollIndicator={false}
        bounces={false}
        horizontal={true}
        contentContainerStyle={{
          paddingTop: RFValue(10),
          paddingBottom: RFValue(5),
          paddingHorizontal: RFValue(0),
        }}
      >
        <ProductMainItem
          label={'hot'}
          containerStyles={{ paddingHorizontal: RFValue(10) }}
        />
        <ProductMainItem
          label={'new'}
          containerStyles={{ paddingHorizontal: RFValue(10) }}
        />
        <ProductMainItem
          label={'sale'}
          value={14}
          amount={134}
          percentDiscount={14}
          containerStyles={{ paddingHorizontal: RFValue(10) }}
        />
      </ScrollView>
    </View>
  );

  return (
    <Container style={styles.container}>
      <StatusBar
        translucent={true}
        barStyle={'dark-content'}
        backgroundColor={'transparent'}
      />
      <NavigationBar title={'Short dress'} rightComponent={<ShareIcon />} />
      <Content
        style={styles.content}
        contentContainerStyle={styles.contentContainerStyle}
      >
        {renderImageSlider()}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: RFValue(10),
            paddingVertical: RFValue(10),
          }}
        >
          {renderSizeDropDown()}
          {renderColorDropDown()}
          {renderFavButton()}
        </View>
        {renderItemInfo()}
        {renderAddButton()}
        <View>
          {renderLinkButton('Size info', () => bottomSheetRef.current.open())}
          {renderLinkButton('Shipping info')}
          {renderLinkButton('Support')}
        </View>
        {renderSimilarProducts()}
      </Content>
      {/* <View
        style={{
          ...StyleSheet.absoluteFillObject,
          backgroundColor: BlackColor + 99,
        }}
      /> */}
      <RNBottomSheet ref={bottomSheetRef} height={RFValue(370)}>
        {renderBottomSheetSize()}
      </RNBottomSheet>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: { paddingTop: RFValue(20), flex: 1 },
  content: { flex: 1, height: '100%' },
  contentContainerStyle: { paddingBottom: RFValue(20) },
  renderPriceRange: { padding: RFValue(10) },
  title: { height: RFValue(42), justifyContent: 'center' },
  imageWrapper: {
    width: RFValue(275),
    height: RFValue(413),
    marginRight: RFValue(5),
  },
  image: { resizeMode: 'cover', width: null, height: null, flex: 1 },
  renderLinkButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: RFValue(10),
    paddingVertical: RFValue(20),
    borderBottomWidth: RFValue(0.5),
    borderBottomColor: GrayColor,
  },
  sizeButtonWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    minHeight: RFValue(50),
    flexWrap: 'wrap',
    paddingBottom: RFValue(10),
    marginBottom: RFValue(10),
    borderBottomWidth: RFValue(1),
    borderBottomColor: GrayColor,
  },
});
