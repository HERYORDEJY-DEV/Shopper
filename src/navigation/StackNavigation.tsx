import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Settings from '../pages/Settings';
import MainPage from '../pages/tab/MainPage';
import ProductCard from '../pages/ProductCard';

const Stack = createStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={'Settings'} component={Settings} />
    </Stack.Navigator>
  );
}

export const HomeStackNavigation = () => {
  return (
    <Stack.Navigator headerMode={null}>
      <Stack.Screen name={'Home'} component={MainPage} />
      <Stack.Screen name={'ProductCard'} component={ProductCard} />
    </Stack.Navigator>
  );
};
