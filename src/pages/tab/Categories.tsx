import * as React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { StatusBar } from 'react-native';
import { Container, Content } from 'native-base';
import { RFValue } from 'react-native-responsive-fontsize';
import NavigationBar from '../../components/NavigationBar';
import { SearchIcon } from '../../svg/SearchIcon';
import { NavIconColor, WhiteColor } from '../../styles/color';
import CategoriesTabView from '../../components/CategoriesTabView';
import AdvertBanner from '../../components/AdvertBanner';
import { Headline2Text, FourteenPxText } from '../../components/Text';
import CategoryCard from '../../components/CategoryCard';
import { subCategories } from '../../api/datas';

export interface Props {}
export interface State {}
export default function Categories(props: Props) {
  // Women Tab render
  const renderWomenTab = () => (
    <ScrollView contentContainerStyle={styles.womenContainer}>
      <AdvertBanner containerStyles={{ marginBottom: RFValue(20) }}>
        <Headline2Text text={'SUMMER SALES'} color={WhiteColor} />
        <FourteenPxText text={'Up to 50% off'} color={WhiteColor} />
      </AdvertBanner>
      <View>
        {subCategories.map((item, index) => (
          <CategoryCard
            {...item}
            containerStyle={{ marginBottom: RFValue(20) }}
          />
        ))}
      </View>
    </ScrollView>
  );

  return (
    <Container style={styles.container}>
      <StatusBar
        translucent={true}
        barStyle={'dark-content'}
        backgroundColor={'transparent'}
      />
      <NavigationBar
        title={'Categories'}
        rightComponent={
          <SearchIcon
            fill={NavIconColor}
            width={RFValue(17.49)}
            height={RFValue(17.49)}
          />
        }
      />
      {/* <Content
        style={styles.content}
        contentContainerStyle={styles.contentContainerStyle}
      >
        <View> */}
      <CategoriesTabView womenTab={renderWomenTab()} />
      {/* </View>
      </Content> */}
    </Container>
  );
}
const styles = StyleSheet.create({
  container: { paddingTop: RFValue(20) },
  content: {},
  contentContainerStyle: {},
  womenContainer: {
    alignItems: 'center',
    paddingHorizontal: RFValue(10),
    paddingVertical: RFValue(20),
  },
});
