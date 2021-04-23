import * as React from 'react';
import {
  View,
  StyleSheet,
  Pressable,
  ScrollView,
  FlatList,
} from 'react-native';
import { StatusBar } from 'react-native';
import { Container, Content } from 'native-base';
import { RFValue } from 'react-native-responsive-fontsize';
import {
  ElevenPxText,
  Headline3Text,
  HeadlineText,
} from '../../components/Text';
import { GrayColor, WhiteColor } from '../../styles/color';
import HeaderBanner from '../../components/HeaderBanner';
import ButtonPrimarySmall from '../../components/ButtonPrimarySmall';
import ProductMainItem from '../../components/ProductMainItem';
import { products } from '../../api/datas';

export interface Props {}
export interface State {}
export default function MainPage(props: Props) {
  const renderBannerContent = () => (
    <View style={styles.bannerWrapper}>
      <HeadlineText
        text={'Fashion\nsale'}
        styles={{ fontFamily: 'Metropolis-Black', fontSize: RFValue(48) }}
        color={WhiteColor}
      />
      <ButtonPrimarySmall
        title={'Check'}
        width={RFValue(160)}
        height={RFValue(36)}
      />
    </View>
  );

  const renderNewProducts = () => (
    <View style={styles.newProductContainer}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: RFValue(20),
          paddingTop: RFValue(20),
        }}
      >
        <View>
          <HeadlineText text={'New'} />
          <ElevenPxText
            text={"You've nevwer seen it before!"}
            color={GrayColor}
          />
        </View>
        <Pressable>
          <ElevenPxText text={'View All'} />
        </Pressable>
      </View>
      <ScrollView
        bounces={false}
        horizontal={true}
        contentContainerStyle={{
          paddingVertical: RFValue(20),
          paddingHorizontal: RFValue(10),
        }}
      >
        <ProductMainItem
          label={'new'}
          containerStyles={{ paddingHorizontal: RFValue(10) }}
        />
        <ProductMainItem
          label={'new'}
          containerStyles={{ paddingHorizontal: RFValue(10) }}
        />
        <ProductMainItem
          label={'new'}
          containerStyles={{ paddingHorizontal: RFValue(10) }}
        />
      </ScrollView>
    </View>
  );

  const renderHotProducts = () => (
    <View style={styles.newProductContainer}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: RFValue(20),
          paddingTop: RFValue(20),
        }}
      >
        <View>
          <HeadlineText text={'Hot'} />
          <ElevenPxText text={'Blazing at the moment!'} color={GrayColor} />
        </View>
        <Pressable>
          <ElevenPxText text={'View All'} />
        </Pressable>
      </View>
      <ScrollView
        bounces={false}
        horizontal={true}
        contentContainerStyle={{
          paddingVertical: RFValue(20),
          paddingHorizontal: RFValue(10),
        }}
      >
        <ProductMainItem
          label={'hot'}
          containerStyles={{ paddingHorizontal: RFValue(10) }}
        />
        <ProductMainItem
          label={'hot'}
          containerStyles={{ paddingHorizontal: RFValue(10) }}
        />
        <ProductMainItem
          label={'hot'}
          containerStyles={{ paddingHorizontal: RFValue(10) }}
        />
      </ScrollView>
    </View>
  );

  const renderSaleProductHeader = () => (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: RFValue(20),
        paddingTop: RFValue(20),
        paddingBottom: RFValue(20),
      }}
    >
      <View>
        <HeadlineText text={'Sale'} />
        <ElevenPxText text={'Selling at the moment!'} color={GrayColor} />
      </View>
      <Pressable>
        <ElevenPxText text={'View All'} />
      </Pressable>
    </View>
  );

  return (
    <Container style={styles.container}>
      <StatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle={'light-content'}
      />

      <FlatList
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <>
            <HeaderBanner height={RFValue(400)}>
              {renderBannerContent()}
            </HeaderBanner>
            {renderNewProducts()}
            {renderHotProducts()}
            {renderSaleProductHeader()}
          </>
        }
        contentContainerStyle={{
          // paddingVertical: RFValue(20),
          paddingBottom: RFValue(20),
          // alignItems: 'center',
          // paddingHorizontal: RFValue(10),
        }}
        columnWrapperStyle={{
          paddingHorizontal: RFValue(5),
          paddingVertical: RFValue(5),
          alignItems: 'center',
        }}
        numColumns={2}
        data={products}
        renderItem={({ item }) => (
          <ProductMainItem
            onPress={() => this.props.navigation.navigate('ProductCard')}
            // width={RFValue(154)}
            label={'sale'}
            percentDiscount={12}
            amount={231}
            containerStyles={{ paddingHorizontal: RFValue(5) }}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </Container>
  );
}
const styles = StyleSheet.create({
  container: { backgroundColor: WhiteColor },
  content: {},
  contentContainerStyle: {},
  bannerWrapper: {
    padding: RFValue(20),
    paddingBottom: RFValue(40),
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  newProductContainer: {},
});
