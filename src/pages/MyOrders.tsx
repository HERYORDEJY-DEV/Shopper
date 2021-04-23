import * as React from 'react';
import {
  View,
  StyleSheet,
  Pressable,
  FlatList,
  TextInput,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
// import { TabView, SceneMap } from 'react-native-tab-view';
import { StatusBar } from 'react-native';
import { Container, Content, Thumbnail } from 'native-base';
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
  SixteenPxText,
  ElevenPxText,
} from '../components/Text';
import { fourteenPxText, headline3Text } from '../styles/text';
import RNBottomSheet from '../components/RNBottomSheet';
import PromoCodeEntry from '../components/PromoCodeEntry';
import { CancelIcon } from '../svg/CancelIcon';
import { _currency } from '../utils/textFormatter';
import MyOrdersTabView from '../components/MyOrdersTabView';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view-fixed';
import ButtonTagSmall from '../components/ButtonTagSmall';
import OrderCard from '../components/OrderCard';

export interface Props {}
export interface State {
  view: boolean;
}

const DeliveredRoute = () => (
  <ScrollView
    style={styles.routeWrapper}
    contentContainerStyle={styles.contentContainerStyle}
    showsVerticalScrollIndicator={false}
  >
    <OrderCard />
    <OrderCard />
    <OrderCard />
    <OrderCard />
  </ScrollView>
);

const ProcessingRoute = () => (
  <ScrollView
    style={styles.routeWrapper}
    contentContainerStyle={styles.contentContainerStyle}
    showsVerticalScrollIndicator={false}
  >
    <OrderCard />
    <OrderCard />
    <OrderCard />
    <OrderCard />
  </ScrollView>
);

const CancelledRoute = () => (
  <ScrollView
    style={styles.routeWrapper}
    contentContainerStyle={styles.contentContainerStyle}
    showsVerticalScrollIndicator={false}
  >
    <OrderCard />
    <OrderCard />
    <OrderCard />
    <OrderCard />
  </ScrollView>
);

export default function MyOrders(props: Props) {
  const bottomSheetRef = React.createRef();

  const [state, setState] = React.useState({
    index: 0,
    routes: [
      { key: 0, title: 'Delivered' },
      { key: 1, title: 'Processing' },
      { key: 2, title: 'Cancelled' },
    ],
  });

  const renderTitle = () => (
    <HeadlineText
      text={'My Orders'}
      styles={{ paddingHorizontal: RFValue(10) }}
    />
  );

  const _handleIndexChange = (index) => {
    setState({ ...state, index });
  };

  const _renderHeader = (props) => (
    <TabBar
      {...props}
      labelStyle={{ ...fourteenPxText }}
      style={{ backgroundColor: WhiteColor }}
      tabStyle={{ backgroundColor: WhiteColor }}
      renderLabel={({ route, focused, color }) => (
        <ButtonTagSmall
          onPress={() => {
            // _handleIndexChange(route.key);
          }}
          title={`${route.title}`}
          titleColor={focused ? WhiteColor : BlackColor}
          containerStyle={{
            backgroundColor: focused ? BlackColor : WhiteColor,
            borderWidth: focused ? 0 : 0,
          }}
        />
      )}
    />
  );

  const _renderScene = SceneMap({
    0: DeliveredRoute,
    1: ProcessingRoute,
    2: CancelledRoute,
  });
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
      {/* <Content> */}
      {renderTitle()}
      <TabViewAnimated
        style={styles.container}
        navigationState={state}
        renderScene={_renderScene}
        renderHeader={_renderHeader}
        onIndexChange={_handleIndexChange}
        //
      />
      {/* </Content> */}
    </Container>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingTop: RFValue(20),
    color: 'red',
    backgroundColor: WhiteColor,
  },
  content: {},
  contentContainerStyle: {
    // paddingVertical: RFValue(20),
    // paddingHorizontal: RFValue(10),
    paddingBottom: RFValue(20),
    padding: RFValue(10),
    paddingVertical: RFValue(20),
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
  routeWrapper: {
    flex: 1,
    backgroundColor: WhiteColor,
  },
});
