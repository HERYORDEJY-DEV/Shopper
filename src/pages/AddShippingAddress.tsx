import * as React from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Pressable,
  TextInput,
  ScrollView,
} from 'react-native';
import { StatusBar } from 'react-native';
import { Container, Content } from 'native-base';
import { RFValue } from 'react-native-responsive-fontsize';
import NavigationBar from '../components/NavigationBar';
import {
  ElevenPxText,
  SixteenPxText,
  FourteenPxText,
} from '../components/Text';

import { MastercardCard } from '../svg/Payment';
import { AddActiveIcon } from '../svg/AddIcon';
import PaymentCard from '../components/PaymentCard';
import RNBottomSheet from '../components/RNBottomSheet';
import AddNewCard from '../components/AddNewCard';
import { paymentCardBg, paymentMethods, shippingAddresses } from '../api/datas';
import AddressCard from '../components/AddressCard';
import ButtonPrimaryBig from '../components/ButtonPrimaryBig';
import { GrayColor, WhiteColor, ErrorColor } from '../styles/color';
import { fourteenPxText } from '../styles/text';
import { alpha3code } from '../api/alpha3code';
// import mastercardCard from '../assets/images/mastercardCard.svg';
const nameRegex = /^[a-zA-Z '.-]*$/;
const cityRegex = /^([a-zA-Z\ u0080-\u024F]+(?:. |-| |'))*[a-zA-Z\ u0080-\u024F]*$/;
const zipRegex = /^\d{5}(?:[-\s]\d{4})?$/;

export interface Props {}

export interface State {
  fullnameFocus: boolean;
  addressFocus: boolean;
  cityFocus: boolean;
  stateFocus: boolean;
  zipFocuss: boolean;
  countryFocuss: boolean;
  defaultCard: boolean;
}

const defProps = {
  fullnameFocus: false,
  addressFocus: false,
  cityFocus: false,
  stateFocus: false,
  zipFocus: false,
  countryFocus: false,
  defaultCard: false,
};

export default function AddShippingAddress(props: Props) {
  const bottomSheetRef = React.createRef();

  const [state, setState] = React.useState({
    fullnameFocus: false,
    addressFocus: false,
    cityFocus: false,
    stateFocus: false,
    zipFocus: false,
    countryFocus: false,
    defaultCard: false,
    country: undefined,
    correctName: undefined,
    correctAddress: undefined,
    correctCity: undefined,
    correctState: undefined,
    correctZip: undefined,
    name: '',
    address: '',
    city: '',
    state: '',
    zip: '',
  });

  const onChangeText = (text, type) => {
    setState({
      ...state,
      [type]: text,
    });
  };

  const onChangeName = (text) => {
    setState({
      ...state,
      name: text,
      correctName: nameRegex.test(text),
    });
  };

  const onChangeZip = (text) => {
    setState({
      ...state,
      zip: text,
      correctZip: zipRegex.test(text),
    });
  };

  const onChangeAddress = (text, type, status) => {
    setState({
      ...state,
      [type]: text,
      [status]: cityRegex.test(text),
    });
  };

  const onBlur = (type, status) =>
    setState({
      ...state,
      [status]: state[type].length > 0 ? true : false,
    });

  const countryListBottomSheetRef = React.createRef();

  const onSelectCountry = (country) => {
    setState({ ...state, country: country });
    countryListBottomSheetRef.current.close();
  };

  const renderCountryList = () => (
    <ScrollView>
      {Object.values(alpha3code).map((country, index) => (
        <Pressable
          onPress={() => onSelectCountry(country)}
          style={styles.countryListItem}
        >
          <FourteenPxText text={country} />
        </Pressable>
      ))}
    </ScrollView>
  );

  const onErrorText = (title) => (
    <ElevenPxText
      text={`The ${title} is needed and in correct format`}
      color={ErrorColor}
      styles={styles.error}
    />
  );

  const {
    fullnameFocus,
    addressFocus,
    cityFocus,
    stateFocus,
    zipFocus,
    countryFocus,
    defaultCard,
    country,
    correctName,
    correctAddress,
    correctCity,
    correctState,
    correctZip,
  } = state;

  return (
    <Container style={styles.container}>
      <StatusBar
        translucent={true}
        barStyle={'dark-content'}
        backgroundColor={'transparent'}
      />
      <NavigationBar title={'Add Shipping Address'} />
      <Content
        showsVerticalScrollIndicator={false}
        style={styles.content}
        contentContainerStyle={styles.contentContainerStyle}
      >
        <>
          <>
            {/* Name on card */}
            {state.correctName === false && onErrorText('full name')}
            <View
              style={[
                styles.inputWrapper,
                {
                  borderColor:
                    state.correctName === false ? ErrorColor : WhiteColor,
                  borderWidth: state.correctName === false ? 1 : 0,
                },
              ]}
            >
              <View>
                {state.name.length > 0 && (
                  <ElevenPxText
                    text={'Full name'}
                    color={state.correctName === false ? ErrorColor : GrayColor}
                    styles={styles.label}
                  />
                )}
              </View>
              <TextInput
                maxLength={30}
                onChangeText={(text) => onChangeName(text)}
                placeholder={'Full name'}
                style={styles.textInput}
                placeholderTextColor={GrayColor}
              />
            </View>
          </>

          {/* Card number */}
          <>
            {state.correctAddress === false && onErrorText('address')}
            <View
              style={[
                styles.inputWrapper,
                {
                  borderColor:
                    state.correctAddress === false ? ErrorColor : WhiteColor,
                  borderWidth: state.correctAddress === false ? 1 : 0,
                },
              ]}
            >
              <View>
                {state.address.length > 0 && (
                  <ElevenPxText
                    text={'Address'}
                    color={
                      state.correctAddress === false ? ErrorColor : GrayColor
                    }
                    styles={styles.label}
                  />
                )}
              </View>
              <TextInput
                onChangeText={(text) =>
                  onChangeAddress(text, 'address', 'correctAddress')
                }
                onBlur={() => onBlur('address', 'correctAddress')}
                placeholder={'Address'}
                style={[
                  styles.textInput,
                  { flex: 0.95, paddingRight: RFValue(10) },
                ]}
                placeholderTextColor={GrayColor}
              />
            </View>
          </>

          {/* Card number */}
          <>
            {state.correctCity === false && onErrorText('city')}
            <View
              style={[
                styles.inputWrapper,
                {
                  borderColor:
                    state.correctCity === false ? ErrorColor : WhiteColor,
                  borderWidth: state.correctCity === false ? 1 : 0,
                },
              ]}
            >
              <View>
                {state.city.length > 0 && (
                  <ElevenPxText
                    text={'City'}
                    color={state.correctCity === false ? ErrorColor : GrayColor}
                    styles={styles.label}
                  />
                )}
              </View>
              <TextInput
                onChangeText={(text) =>
                  onChangeAddress(text, 'city', 'correctCity')
                }
                onBlur={() => onBlur('city', 'correctCity')}
                placeholder={'City'}
                style={[
                  styles.textInput,
                  { flex: 0.95, paddingRight: RFValue(10) },
                ]}
                placeholderTextColor={GrayColor}
              />
            </View>
          </>

          {/* Card number */}
          <>
            {state.correctState === false && onErrorText('state')}
            <View
              style={[
                styles.inputWrapper,
                {
                  borderColor:
                    state.correctState === false ? ErrorColor : WhiteColor,
                  borderWidth: state.correctState === false ? 1 : 0,
                },
              ]}
            >
              <View>
                {state.state.length > 0 && (
                  <ElevenPxText
                    text={'State/Province/Region'}
                    color={
                      state.correctState === false ? ErrorColor : GrayColor
                    }
                    styles={styles.label}
                  />
                )}
              </View>
              <TextInput
                onChangeText={(text) =>
                  onChangeAddress(text, 'state', 'correctState')
                }
                onBlur={() => onBlur('state', 'correctState')}
                placeholder={'State/Province/Region'}
                style={[
                  styles.textInput,
                  { flex: 0.95, paddingRight: RFValue(10) },
                ]}
                placeholderTextColor={GrayColor}
              />
            </View>
          </>

          {/* Card number */}
          <>
            {state.correctZip === false && onErrorText('zip code')}
            <View
              style={[
                styles.inputWrapper,
                {
                  borderColor:
                    state.correctZip === false ? ErrorColor : WhiteColor,
                  borderWidth: state.correctZip === false ? 1 : 0,
                },
              ]}
            >
              <View>
                {state.zip.length > 0 && (
                  <ElevenPxText
                    text={'Zip Code (Postal Code)'}
                    color={state.correctZip === false ? ErrorColor : GrayColor}
                    styles={styles.label}
                  />
                )}
              </View>
              <TextInput
                onChangeText={(text) => onChangeZip(text)}
                onBlur={() => onBlur('zip', 'correctZip')}
                placeholder={'Zip Code (Postal Code)'}
                style={[
                  styles.textInput,
                  { flex: 0.95, paddingRight: RFValue(10) },
                ]}
                placeholderTextColor={GrayColor}
              />
            </View>
          </>

          {/* Card expiry */}
          <Pressable
            onPress={() => countryListBottomSheetRef.current.open()}
            style={styles.inputWrapper}
          >
            <View>
              {countryFocus && (
                <ElevenPxText
                  text={'Country'}
                  color={GrayColor}
                  styles={styles.label}
                />
              )}
            </View>
            <TextInput
              editable={false}
              value={state.country}
              onFocus={() => onFocus('country')}
              placeholder={state.countryFocus ? null : 'Country'}
              style={[
                styles.textInput,
                { flex: 0.95, paddingRight: RFValue(10) },
              ]}
              placeholderTextColor={GrayColor}
            />
          </Pressable>
        </>
        <View style={styles.addWrapper}>
          <ButtonPrimaryBig
            title={'SAVE ADDRESS'}
            disabled={
              country &&
              correctName &&
              correctAddress &&
              correctCity &&
              correctState &&
              correctZip === true
            }
          />
        </View>
      </Content>
      <RNBottomSheet ref={countryListBottomSheetRef} height={RFValue(700)}>
        {renderCountryList()}
      </RNBottomSheet>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: { paddingTop: RFValue(20) },
  content: {},
  contentContainerStyle: { padding: RFValue(10) },
  imageBackground: {
    width: RFValue(343),
    height: RFValue(216),
    padding: RFValue(10),
  },
  cardWrapper: { alignItems: 'center' },
  addWrapper: {
    alignItems: 'center',
    margin: RFValue(10),
    marginVertical: RFValue(40),
  },
  inputWrapper: {
    // height: RFValue(64),
    backgroundColor: WhiteColor,
    paddingTop: RFValue(5),
    margin: RFValue(10),
    marginBottom: RFValue(20),
    borderRadius: RFValue(4),
    // alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 3,
  },
  textInput: {
    ...fourteenPxText,

    // height: RFValue(30),
    // alignItems: 'center',
    // justifyContent: 'center',
    margin: 0,
    paddingHorizontal: RFValue(10),
    // position: 'relative',
    // bottom: 0,
  },
  label: { paddingHorizontal: RFValue(10), height: RFValue(11) },
  logo: {},
  countryListItem: {
    padding: RFValue(20),
  },
  error: { paddingHorizontal: RFValue(10) },
});
