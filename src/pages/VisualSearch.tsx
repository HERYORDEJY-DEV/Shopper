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
import { WhiteColor } from '../styles/color';
import ButtonPrimaryBig from '../components/ButtonPrimaryBig';
import ButtonSecondaryOutlineBig from '../components/ButtonSecondaryOutlineBig';

export interface Props {}
export interface State {}
export default function VisualSearch(props: Props) {
  return (
    <Container style={styles.container}>
      <StatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
      />
      <NavigationBar
        title={'Visual search'}
        leftComponent={<ChevronArrowLeft />}
      />
      <ImageBackground
        style={styles.content}
        source={require('../assets/images/VSimageBg.png')}
        // contentContainerStyle={styles.contentContainerStyle}
      >
        <View style={styles.wrapper}>
          <Headline2Text
            color={WhiteColor}
            text={
              'Search for an outfit by taking a photo or uploading an image'
            }
          />
          <ButtonPrimaryBig
            title={'TAKE A PHOTO'}
            containerStyles={{ marginVertical: RFValue(20) }}
          />
          <ButtonSecondaryOutlineBig
            title={'UPLOAD AN IMAGE'}
            titleColor={WhiteColor}
            containerStyles={{ borderColor: WhiteColor }}
          />
        </View>
      </ImageBackground>
    </Container>
  );
}
const styles = StyleSheet.create({
  container: { paddingTop: RFValue(0) },
  content: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainerStyle: {},
  wrapper: {
    padding: RFValue(20),
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
