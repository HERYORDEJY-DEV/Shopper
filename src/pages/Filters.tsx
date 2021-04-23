import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { StatusBar } from 'react-native';
import { Container, Content } from 'native-base';
import { RFValue } from 'react-native-responsive-fontsize';
import RangeSlider from '../components/RangeSlider';
import NavigationBar from '../components/NavigationBar';
import { ElevenPxText, SixteenPxText } from '../components/Text';
import ColorSelect from '../components/ColorSelect';
import { brand, categories, color, selectedBrand, sizes } from '../api/datas';
import SizeSelect from '../components/SizeSelect';
import CategorySelect from '../components/CategorySelect';
import { GrayColor, WhiteColor } from '../styles/color';
import BrandSelect from '../components/BrandSelect';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import { SliderThumb } from '../svg/RangeSlider';
import ButtonSecondaryOutlineSmall from '../components/ButtonSecondaryOutlineSmall';
import ButtonPrimarySmall from '../components/ButtonPrimarySmall';
import { fourteenPxText } from '../styles/text';
import { ChevronArrowRight } from '../svg/ArrowIcon';

export interface Props {}

export interface State {}

export default function Filters(props: Props) {
  const [state, setState] = React.useState({ scrollEnabled: false });

  const enableScroll = () => setState({ scrollEnabled: true });
  const disableScroll = () => setState({ scrollEnabled: false });

  const renderPriceRange = (props) => (
    <View style={styles.renderPriceRange}>
      <SixteenPxText text={'Price range'} styles={styles.title} />
      <RangeSlider {...props} />
      {/* <MultiSlider
        allowOverlap={true}
        enableLabel={true}
        enabledTwo={true}
        sliderLength={RFValue(300)}
        isMarkersSeparated={true}
        onValuesChangeStart={disableScroll}
        onValuesChangeFinish={enableScroll}
        customMarkerLeft={(e) => {
          return <SliderThumb currentValue={e.currentValue} />;
        }}
        // customMarkerRight={(e) => {
        //   return <SliderThumb currentValue={e.currentValue} />;
        // }}
      /> */}
    </View>
  );

  const renderColors = (props) => (
    <View style={styles.renderPriceRange}>
      <SixteenPxText text={'Colors'} styles={styles.title} />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
          height: RFValue(50),
        }}
      >
        {color.map(
          (c, index) =>
            index < 5 && (
              <ColorSelect
                key={`${index}-${c.name}`}
                name={c.name}
                containerStyle={{
                  paddingRight: RFValue(20),
                  // paddingBottom: RFValue(10),
                }}
              />
            ),
        )}
      </View>
    </View>
  );

  const renderSizes = (props) => (
    <View style={styles.renderPriceRange}>
      <SixteenPxText text={'Sizes'} styles={styles.title} />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
          height: RFValue(50),
        }}
      >
        {sizes.map(
          (size, index) =>
            index < 5 && (
              <SizeSelect
                key={`${index}-${size.name}`}
                name={size.name}
                slug={size.slug}
                containerStyle={{ paddingRight: RFValue(10) }}
              />
            ),
        )}
      </View>
    </View>
  );

  const renderCategory = (props) => (
    <View style={styles.renderPriceRange}>
      <SixteenPxText text={'Category'} styles={styles.title} />
      <View
        style={{
          flexDirection: 'row',
          // alignItems: 'center',
          // justifyContent: 'space-be',
          minHeight: RFValue(50),
          flexWrap: 'wrap',
          // flex: 1,
        }}
      >
        {categories.map(
          (c, index) =>
            index < 5 && (
              <CategorySelect
                key={`${index}-${c.name}`}
                name={c.name}
                containerStyle={{
                  paddingRight: RFValue(10),
                  paddingBottom: RFValue(10),
                  borderColor: GrayColor,
                }}
              />
            ),
        )}
      </View>
    </View>
  );

  const renderBrand = (props) => (
    <View style={[styles.renderPriceRange, { flexDirection: 'column' }]}>
      <SixteenPxText text={'Brand'} styles={styles.title} />
      <View
        style={{
          flexDirection: 'row',
          // alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            // alignItems: 'center',
            justifyContent: 'flex-start',
            flex: 1,
            flexWrap: 'wrap',
            flexShrink: 0.9,
          }}
        >
          {selectedBrand.map((brand, index) => (
            <ElevenPxText
              styles={{ marginBottom: RFValue(5) }}
              key={`${index}-${brand.name}`}
              color={GrayColor}
              text={`${brand.name}${
                index + 1 === selectedBrand.length ? '' : ', '
              } `}
              containerStyle={{
                // paddingRight: RFValue(20),
                paddingBottom: RFValue(10),
                // borderColor: GrayColor,
              }}
            />
          ))}
        </View>
        <View style={{ flex: 0.1 }}>
          <ChevronArrowRight />
        </View>
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
      <NavigationBar title={'Filter'} />
      <Content
        style={styles.content}
        contentContainerStyle={styles.contentContainerStyle}
      >
        {renderPriceRange()}
        {renderColors()}
        {renderSizes()}
        {renderCategory()}
        {renderBrand()}
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
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: RFValue(20),
  },
});
