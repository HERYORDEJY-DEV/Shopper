import * as React from 'react';
import { View, StyleSheet, Pressable, FlatList } from 'react-native';
import { StatusBar } from 'react-native';
import { Container, Content } from 'native-base';
import { RFValue } from 'react-native-responsive-fontsize';
import NavigationBar from '../components/NavigationBar';
import { SearchIcon } from '../svg/SearchIcon';
import { GrayColor, NavIconColor, WhiteColor } from '../styles/color';
import CategoriesTabView from '../components/CategoriesTabView';
import AdvertBanner from '../components/AdvertBanner';
import {
  Headline2Text,
  FourteenPxText,
  SixteenPxRegularText,
} from '../components/Text';
import CategoryCard from '../components/CategoryCard';
import { subCategories, clothes } from '../api/datas';
import ButtonPrimaryBig from '../components/ButtonPrimaryBig';

export interface Props {}
export interface State {}
export default function Categories2(props: Props) {
  const renderHeader = () => (
    <View
      style={{
        paddingHorizontal: RFValue(10),
        paddingBottom: RFValue(10),
        backgroundColor: WhiteColor,
      }}
    >
      <View style={styles.renderHeader}>
        <ButtonPrimaryBig
          title={'VIEW ALL ITEMS'}
          containerStyles={{ elevation: 3 }}
        />
      </View>
      <FourteenPxText text={'Choose category'} color={GrayColor} />
    </View>
  );

  const renderItem = (name) => (
    <Pressable style={styles.renderItem}>
      <SixteenPxRegularText text={name} />
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
        title={'Categories'}
        rightComponent={
          <SearchIcon
            fill={NavIconColor}
            width={RFValue(17.49)}
            height={RFValue(17.49)}
          />
        }
      />
      <FlatList
        stickyHeaderIndices={[0]}
        contentContainerStyle={styles.contentContainerStyle}
        ListHeaderComponent={renderHeader()}
        data={clothes}
        renderItem={({ item, index }) => renderItem(item.name)}
        keyExtractor={(item, index) => index.toString()}
      />
    </Container>
  );
}
const styles = StyleSheet.create({
  container: { paddingTop: RFValue(20) },
  content: {},
  contentContainerStyle: { paddingBottom: RFValue(20) },
  renderHeader: {
    alignItems: 'center',
    paddingHorizontal: RFValue(10),
    paddingVertical: RFValue(10),
  },
  renderItem: {
    paddingVertical: RFValue(20),
    paddingHorizontal: RFValue(30),
    borderBottomColor: GrayColor,
    borderBottomWidth: RFValue(1),
  },
});
