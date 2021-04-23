import React from 'react';
import { Dimensions, Text, View } from 'react-native';

export const windowWidth = Math.round(Dimensions.get('window').width);
export const screenWidth = Math.round(Dimensions.get('screen').width);
export const windowHeight = Math.round(Dimensions.get('window').height);
export const screenHeight = Math.round(Dimensions.get('screen').height);

// import ExtraDimensions from 'react-native-extra-dimensions-android';
// const RealWindowHeight = ExtraDimensions.getRealWindowHeight();
// const RealWindowWidth = ExtraDimensions.getRealWindowWidth();
// const StatusBarHeight = ExtraDimensions.getStatusBarHeight();
// const SoftMenuBarHeight = ExtraDimensions.getSoftMenuBarHeight();
// const SmartBarHeight = ExtraDimensions.getSmartBarHeight();
// const SoftMenuBarEnabled = ExtraDimensions.isSoftMenuBarEnabled();
