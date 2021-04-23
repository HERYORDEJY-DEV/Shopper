import React from 'react';
import { View } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainPage from '../pages/tab/MainPage';
import MyProfile from '../pages/tab/MyProfile';
import Favorites from '../pages/tab/Favorites';
import MyBag from '../pages/tab/MyBag';
import Categories from '../pages/tab/Categories';
import { GrayColor, PrimaryColor, WhiteColor } from '../styles/color';
import { ElevenPxText } from '../components/Text';
import {
  BagTabIconActive,
  BagTabIconInactive,
  FavTabIconActive,
  FavTabIconInactive,
  HomeIconActive,
  HomeIconInactive,
  ProfileTabIconActive,
  ProfileTabIconInactive,
  ShopIconActive,
  ShopIconInactive,
} from '../svg/TabBarIcons';
import {
  FavoriteIconActivated,
  FavoriteIconInactive,
} from '../svg/FavoriteIcon';
import { RFValue } from 'react-native-responsive-fontsize';
import { elevenPxText } from '../styles/text';
import { HomeStackNavigation } from './StackNavigation';

// const Tab = createMaterialBottomTabNavigator();
const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        labelStyle: {
          fontSize: RFValue(10),
          fontFamily: 'Metropolis-SemiBold',
          marginBottom: RFValue(10),
        },
        activeTintColor: PrimaryColor,
        inactiveTintColor: GrayColor,
        tabStyle: { backgroundColor: WhiteColor },
        style: {
          backgroundColor: WhiteColor,
          height: RFValue(60),
          alignItems: 'center',
          justifyContent: 'center',
        },
        allowFontScaling: true,
        showLabel: true,
      }}
    >
      <Tab.Screen
        name={'Home'}
        component={HomeStackNavigation}
        options={{
          // tabBarLabel: ({ focused }) => (
          //   <ElevenPxText
          //     color={focused ? PrimaryColor : GrayColor}
          //     text={'Home'}
          //     styles={{ fontFamily: 'Metropolis-SemiBold' }}
          //   />
          // ),
          tabBarIcon: ({ focused }) =>
            focused ? <HomeIconActive /> : <HomeIconInactive />,
          // tabBarBadge: '',
        }}
      />
      <Tab.Screen
        name={'Shop'}
        component={Categories}
        options={{
          // tabBarLabel: ({ focused }) => (
          //   <ElevenPxText
          //     color={focused ? PrimaryColor : GrayColor}
          //     text={'Shop'}
          //     styles={{ fontFamily: 'Metropolis-SemiBold' }}
          //   />
          // ),
          tabBarIcon: ({ focused }) =>
            focused ? <ShopIconActive /> : <ShopIconInactive />,
        }}
      />
      <Tab.Screen
        name={'Bag'}
        component={MyBag}
        options={{
          // tabBarLabel: ({ focused }) => (
          //   <ElevenPxText
          //     color={focused ? PrimaryColor : GrayColor}
          //     text={'Bag'}
          //     styles={{ fontFamily: 'Metropolis-SemiBold' }}
          //   />
          // ),
          tabBarIcon: ({ focused }) =>
            focused ? <BagTabIconActive /> : <BagTabIconInactive />,
        }}
      />
      <Tab.Screen
        name={'Favorites'}
        component={Favorites}
        options={{
          // tabBarLabel: ({ focused }) => (
          //   <ElevenPxText
          //     color={focused ? PrimaryColor : GrayColor}
          //     text={'Favorites'}
          //     styles={{ fontFamily: 'Metropolis-SemiBold' }}
          //   />
          // ),
          tabBarIcon: ({ focused }) =>
            focused ? <FavTabIconActive /> : <FavTabIconInactive />,
        }}
      />
      <Tab.Screen
        name={'Profile'}
        component={MyProfile}
        options={{
          // tabBarLabel: ({ focused }) => (
          //   <ElevenPxText
          //     color={focused ? PrimaryColor : GrayColor}
          //     text={'Profile'}
          //     styles={{ fontFamily: 'Metropolis-SemiBold' }}
          //   />
          // ),
          tabBarIcon: ({ focused }) =>
            focused ? <ProfileTabIconActive /> : <ProfileTabIconInactive />,
          title: 'Profile',
        }}
      />
    </Tab.Navigator>
  );
}
