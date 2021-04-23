import * as React from 'react';
import { View, StyleSheet, Pressable, TextInput } from 'react-native';
import { StatusBar } from 'react-native';
import { Container, Content } from 'native-base';
import { RFValue } from 'react-native-responsive-fontsize';
import { SearchIcon } from '../svg/SearchIcon';
import NavigationBar from '../components/NavigationBar';
import {
  GrayColor,
  NavIconColor,
  SuccessColor,
  WhiteColor,
} from '../styles/color';
import {
  FourteenPxText,
  HeadlineText,
  SixteenPxText,
  ElevenPxText,
  DescriptionText,
} from '../components/Text';
import { _creditCardMask, _currency } from '../utils/textFormatter';
import OrderItem from '../components/OrderItem';
import { MasterCardIcon } from '../svg/Payment';
import ButtonSecondaryOutlineSmall from '../components/ButtonSecondaryOutlineSmall';
import ButtonPrimarySmall from '../components/ButtonPrimarySmall';
import { fourteenPxText } from '../styles/text';
import ButtonSwitch from '../components/ButtonSwitch';
import RNBottomSheet from '../components/RNBottomSheet';
import PersonalInfoChange from '../components/PersonalInfoChange';
import PasswordChange from '../components/PasswordChange';

export interface Props {}

export interface State {}

export default function Settings(props: Props) {
  const bottomSheetRefBio = React.createRef();
  const bottomSheetRefPassword = React.createRef();

  const renderTitle = () => (
    <HeadlineText
      text={'Settings'}
      styles={{ paddingHorizontal: RFValue(0) }}
    />
  );

  const renderBio = () => (
    <>
      <View style={styles.bioWrapper}>
        <View style={styles.titleHeader}>
          <SixteenPxText text={'Personal Information'} styles={styles.title} />
          <Pressable onPress={() => bottomSheetRefBio.current.open()}>
            <FourteenPxText text={'Change'} color={GrayColor} />
          </Pressable>
        </View>

        <View style={styles.inputWrapper}>
          <View>
            <ElevenPxText
              text={'Full name'}
              color={GrayColor}
              styles={styles.label}
            />
          </View>
          <DescriptionText text={'Oyebode Yusuf'} styles={styles.textInput} />
        </View>

        <View style={styles.inputWrapper}>
          <View>
            <ElevenPxText
              text={'Email'}
              color={GrayColor}
              styles={styles.label}
            />
          </View>
          <DescriptionText
            text={'heryordejy@gmail.com'}
            styles={styles.textInput}
          />
        </View>

        <View style={styles.inputWrapper}>
          <View>
            <ElevenPxText
              text={'Date of Birth'}
              color={GrayColor}
              styles={styles.label}
            />
          </View>
          <DescriptionText text={'01-01-2021'} styles={styles.textInput} />
        </View>
      </View>
    </>
  );

  const renderPassword = () => (
    <>
      <View style={styles.bioWrapper}>
        <View style={styles.titleHeader}>
          <SixteenPxText text={'Password'} styles={styles.title} />
          <Pressable onPress={() => bottomSheetRefPassword.current.open()}>
            <FourteenPxText text={'Change'} color={GrayColor} />
          </Pressable>
        </View>

        <View style={styles.inputWrapper}>
          <View>
            <ElevenPxText
              text={'Password'}
              color={GrayColor}
              styles={styles.label}
            />
          </View>
          <DescriptionText text={'********'} styles={styles.textInput} />
        </View>
      </View>
    </>
  );

  const renderNotifications = () => (
    <>
      <View style={styles.bioWrapper}>
        <View style={styles.titleHeader}>
          <SixteenPxText text={'Notification'} styles={styles.title} />
          <ButtonSwitch />
        </View>

        <View style={styles.notfItemWrapper}>
          <DescriptionText text={'Sales'} styles={styles.notfText} />
          <ButtonSwitch />
        </View>

        <View style={styles.notfItemWrapper}>
          <DescriptionText text={'New arrivals'} styles={styles.notfText} />
          <ButtonSwitch />
        </View>

        <View style={styles.notfItemWrapper}>
          <DescriptionText
            text={'Delivery status changed'}
            styles={styles.notfText}
          />
          <ButtonSwitch />
        </View>
      </View>
    </>
  );

  return (
    <Container style={styles.container}>
      <StatusBar
        translucent={true}
        barStyle={'dark-content'}
        backgroundColor={'transparent'}
      />
      <NavigationBar
        rightComponent={
          <Pressable>
            <SearchIcon
              fill={NavIconColor}
              width={RFValue(17.49)}
              height={RFValue(17.49)}
            />
          </Pressable>
        }
      />
      <Content
        style={styles.content}
        contentContainerStyle={styles.contentContainerStyle}
      >
        {renderTitle()}
        {renderBio()}
        {renderPassword()}
        {renderNotifications()}
      </Content>
      {/* Personal info Change */}
      <RNBottomSheet ref={bottomSheetRefBio} height={RFValue(350)}>
        <PersonalInfoChange parentRef={bottomSheetRefBio} />
      </RNBottomSheet>
      {/* Password Change */}
      <RNBottomSheet ref={bottomSheetRefPassword} height={RFValue(380)}>
        <PasswordChange parentRef={bottomSheetRefPassword} />
      </RNBottomSheet>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: { paddingTop: RFValue(20) },
  content: {},
  contentContainerStyle: { padding: RFValue(10) },
  inputWrapper: {
    // height: RFValue(60),
    backgroundColor: WhiteColor,
    paddingVertical: RFValue(10),
    // paddingTop: RFValue(5),
    // margin: RFValue(10),
    borderRadius: RFValue(4),
    // alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 3,
    marginBottom: RFValue(20),
  },
  textInput: {
    ...fourteenPxText,

    // height: RFValue(30),
    // alignItems: 'center',
    // justifyContent: 'center',
    margin: 0,
    paddingHorizontal: RFValue(10),
    paddingTop: RFValue(5),
    // position: 'relative',
    // bottom: 0,
  },
  label: { paddingHorizontal: RFValue(10), height: RFValue(11) },
  bioWrapper: { marginVertical: RFValue(20) },
  titleHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: RFValue(20),
  },
  notfItemWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: RFValue(20),
    padding: 0,
  },
  notfText: { ...fourteenPxText, padding: 0 },
});
