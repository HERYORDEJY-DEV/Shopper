import * as React from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  ImageBackground,
  Text,
} from 'react-native';
import { Container, Content } from 'native-base';
import { RFValue } from 'react-native-responsive-fontsize';
import NavigationBar from '../components/NavigationBar';
import { Headline2Text, HeadlineText } from '../components/Text';
import { ChevronArrowLeft } from '../svg/ArrowIcon';
import { PrimaryColor, WhiteColor } from '../styles/color';
import ButtonPrimaryBig from '../components/ButtonPrimaryBig';
import ButtonSecondaryOutlineBig from '../components/ButtonSecondaryOutlineBig';
import { SearchIconFinding } from '../svg/SearchIcon';

export interface Props {}
export interface State {}
export default function VisualSearchFinding(props: Props) {
  return (
    <Container style={styles.container}>
      <StatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
      />
      <View style={styles.wrapper}>
        <SearchIconFinding fill={PrimaryColor} />
        <HeadlineText
          text={'Finding similar results...'}
          styles={{ textAlign: 'center', marginVertical: RFValue(10) }}
        />
      </View>
    </Container>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: WhiteColor,
    paddingTop: RFValue(0),
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainerStyle: {},
  wrapper: {
    padding: RFValue(20),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
