import * as React from 'react';
import { TouchableOpacity, Text, Pressable, StyleSheet } from 'react-native';
import { Tab, Tabs, TabHeading, ScrollableTab } from 'native-base';
import { FourteenPxText, Headline2Text, SixteenPxText } from './Text';
import { PrimaryColor, WhiteColor } from '../styles/color';
import { RFValue } from 'react-native-responsive-fontsize';
import AdvertBanner from './AdvertBanner';

export interface Props {
  womenTab: React.ReactNode;
  menTab: React.ReactNode;
  kidsTab: React.ReactNode;
}

export interface State {}

export default class CategoriesTabView extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {};
  }

  public render() {
    return (
      <Tabs
        renderTabBar={() => (
          <ScrollableTab tabsContainerStyle={{ backgroundColor: WhiteColor }} />
        )}
        tabBarUnderlineStyle={{
          borderBottomWidth: RFValue(3),
          borderBottomColor: PrimaryColor,
        }}
      >
        <Tab
          heading={
            <TabHeading style={{ backgroundColor: WhiteColor }}>
              <SixteenPxText text={'Women'} />
            </TabHeading>
          }
        >
          {this.props.womenTab}
        </Tab>

        <Tab
          heading={
            <TabHeading style={{ backgroundColor: WhiteColor }}>
              <SixteenPxText text={'Men'} />
            </TabHeading>
          }
        >
          {this.props.menTab}
        </Tab>

        <Tab
          heading={
            <TabHeading style={{ backgroundColor: WhiteColor }}>
              <SixteenPxText text={'Kids'} />
            </TabHeading>
          }
        >
          {this.props.kidsTab}
        </Tab>
      </Tabs>
    );
  }
}
