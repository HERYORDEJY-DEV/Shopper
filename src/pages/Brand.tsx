import * as React from 'react';
import { View, StyleSheet, FlatList,  } from 'react-native';
import { StatusBar } from 'react-native';
import { Container, Content } from 'native-base';
import { RFValue } from 'react-native-responsive-fontsize';
import RangeSlider from '../components/RangeSlider';
import NavigationBar from '../components/NavigationBar';
import { SixteenPxText } from '../components/Text';
import ColorSelect from '../components/ColorSelect';
import { brand, categories, color, sizes } from '../api/datas';
import SizeSelect from '../components/SizeSelect';
import CategorySelect from '../components/CategorySelect';
import { GrayColor } from '../styles/color';
import BrandSelect from '../components/BrandSelect';
import SearchBar from '../components/SearchBar';
import ButtonSecondaryOutlineSmall from '../components/ButtonSecondaryOutlineSmall';
import ButtonPrimarySmall from '../components/ButtonPrimarySmall';

export interface Props {}

export interface State {}

export default function Brand(props: Props) {
  return (
    <Container style={styles.container}>
      <StatusBar
        translucent={true}
        barStyle={'dark-content'}
        backgroundColor={'transparent'}
      />
      <NavigationBar title={'Brand'} />
      <Content
        style={styles.content}
        contentContainerStyle={styles.contentContainerStyle}
      >
        <View style={styles.search}>
          <SearchBar />
        </View>
        <FlatList
          style={{ padding: RFValue(20)}}
          data={brand}
          // renderItem={({ item, index }) => <BrandSelect
          // {...item}

          renderItem={({ item, index }) => (
            <BrandSelect
              {...item}
              containerStyle={{ paddingBottom: RFValue(20) }}
            />
          )}
          showsVerticalScrollIndicator={false}
          bounces={false}
          scrollEventThrottle={16}
        />
      </Content>
      <View style={styles.footer}>
        <ButtonSecondaryOutlineSmall
          title={'Discard'}
          width={RFValue(160)}
          height={RFValue(36)}
        />
        <ButtonPrimarySmall
          title={'Apply'}
          titleStyles={{ ...fourteenPxText, color: WhiteColor }}
          width={RFValue(160)}
          height={RFValue(36)}
        />
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: { paddingTop: RFValue(20) },
  content: {},
  contentContainerStyle: {},
  renderPriceRange: { padding: RFValue(10) },
  title: { height: RFValue(42), justifyContent: 'center' },
  search: { alignItems: 'center' },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: RFValue(20),
  },
});
