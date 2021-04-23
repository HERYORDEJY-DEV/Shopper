import React, { forwardRef } from 'react';
import {
  Pressable,
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import { RFValue } from 'react-native-responsive-fontsize';
import { BlackColor, GrayColor } from '../styles/color';

export interface Props {
  children: React.ReactNode;
  height?: number;
}

const RNBottomSheet = React.forwardRef((props: Props, ref) => {
  return (
    <RBSheet
      height={props.height}
      ref={ref}
      // ref={refRBSheet}
      closeOnDragDown={true}
      closeOnPressMask={false}
      customStyles={{
        wrapper: {
          backgroundColor: BlackColor + 99,
        },
        draggableIcon: {
          backgroundColor: GrayColor,
        },
        container: {
          borderTopLeftRadius: RFValue(34),
          borderTopRightRadius: RFValue(34),
        },
      }}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        bounces={false}
        scrollEventThrottle={16}
      >
        {props.children}
      </ScrollView>
    </RBSheet>
  );
});

export default RNBottomSheet;
