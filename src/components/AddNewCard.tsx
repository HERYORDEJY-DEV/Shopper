import * as React from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Pressable,
  ScrollView,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import {
  BlackColor,
  ErrorColor,
  GrayColor,
  PrimaryColor,
  WhiteColor,
} from '../styles/color';
import { fourteenPxText } from '../styles/text';
import { InfoIcon } from '../svg/CancelIcon';
import { MasterCardIcon, MastercardIcon2 } from '../svg/Payment';
import ButtonCheckbox from './ButtonCheckbox';
import ButtonPrimaryBig from './ButtonPrimaryBig';
import { DescriptionText, ElevenPxText, Headline3Text } from './Text';
import valid from 'card-validator';
import { SvgXml } from 'react-native-svg';
import { paymentCardIcon } from '../api/datas';

const nameRegex = /^[a-zA-Z '.-]*$/;

export interface Props {}

export interface State {
  nameFocus: boolean;
  numberFocus: boolean;
  expiryFocus: boolean;
  cvvFocus: boolean;
  defaultCard: boolean;
  formatedNumber: string;
  name: string;
  number: string;
  cvv: string;
  expiration: string;
  correctName: undefined | boolean;
  correctNumber: undefined | boolean;
  correctExpiration: undefined | boolean;
  correctCvv: undefined | boolean;
  type: string;
}

const defProps = {
  nameFocus: false,
  numberFocus: false,
  expiryFocus: false,
  cvvFocus: false,
  defaultCard: false,
};

export default class AddNewCard extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      nameFocus: false,
      numberFocus: false,
      expiryFocus: false,
      cvvFocus: false,
      defaultCard: false,
      name: '',
      number: '',
      formatedNumber: '',
      cvv: '',
      expiration: '',
      correctName: undefined,
      correctNumber: undefined,
      correctExpiration: undefined,
      correctCvv: undefined,
      type: undefined,
    };
  }

  addGaps = (value) => {
    var v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    var matches = v.match(/\d{4,16}/g);
    var match = (matches && matches[0]) || '';
    var parts = [];
    let i, len;
    for (i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    if (parts.length) {
      return parts.join(' ');
    } else {
      return value;
    }
  };

  addSlash = (string) => {
    return string
      .replace(
        /[^0-9]/g,
        '', // To allow only numbers
      )
      .replace(
        /^([2-9])$/g,
        '0$1', // To handle 3 > 03
      )
      .replace(
        /^(1{1})([3-9]{1})$/g,
        '0$1/$2', // 13 > 01/3
      )
      .replace(
        /^0{1,}/g,
        '0', // To handle 00 > 0
      )
      .replace(
        /^([0-1]{1}[0-9]{1})([0-9]{1,2}).*/g,
        '$1/$2', // To handle 113 > 11/3
      );
  };

  // addSlash = (str) => {
  //   let newStr = '';
  //   let len = str.length;
  //   for (let i = 0; i < len; i++) {
  //     newStr = newStr + str[i];
  //     while (newStr.length % 2 === 0) {
  //       newStr = newStr + '/';
  //     }
  //   }
  //   return newStr.substr(0, newStr.length - 1);
  // };

  onChangeText = (text, type) => {
    this.setState({
      ...this.state,
      [type]: text,
    });
  };

  onChangeName = (text) => {
    this.setState({
      ...this.state,
      name: text,
      correctName: nameRegex.test(text),
    });
  };

  onChangeNumber = (text) => {
    this.setState({
      ...this.state,
      number: this.addGaps(text, 4),
      type: valid.number(text).isValid
        ? valid.number(text).card.niceType
        : undefined,
    });
  };

  onChangeExpiration = (text) => {
    this.setState({
      ...this.state,
      expiration: this.addSlash(text),
    });
  };

  onBlurName = () =>
    this.setState({
      ...this.state,
      correctName: nameRegex.test(text),
    });

  onBlurNumber = () =>
    this.setState({
      ...this.state,
      correctNumber: valid.number(this.state.number).isValid,
      // type: String(valid.number(this.state.number).card.niceType),
      // number: this.addGaps(this.state.number, 4),
    });

  onBlurExpiration = () =>
    this.setState({
      ...this.state,
      correctExpiration: valid.expirationDate(this.state.expiration).isValid,
      // expiration: this.addSlash(this.state.expiration),
    });

  onBlurCvv = () =>
    this.setState({
      ...this.state,
      correctCvv: valid.cvv(this.state.cvv).isValid,
    });

  onErrorText = (title) => (
    <ElevenPxText
      text={`The ${title} is needed and in correct format`}
      color={ErrorColor}
      styles={styles.error}
    />
  );

  // onChangeName = () => this.setState({ ...this.state, nameFocus})

  public render() {
    const {
      nameFocus,
      numberFocus,
      expiryFocus,
      cvvFocus,
      defaultCard,
      correctName,
      correctNumber,
      correctExpiration,
      correctCvv,
    } = this.state;

    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        bounces={false}
        scrollEventThrottle={16}
        style={styles.container}
      >
        <Headline3Text text={'Add new card'} styles={styles.headText} />

        {/* Name on card */}
        <>
          {this.state.correctName === false && this.onErrorText('Name on card')}
          <View
            style={[
              styles.inputWrapper,
              {
                borderColor:
                  this.state.correctName === false ? ErrorColor : WhiteColor,
                borderWidth: this.state.correctName === false ? 1 : 0,
              },
            ]}
          >
            <View>
              {this.state.name.length > 0 && (
                <ElevenPxText
                  text={'Name on card'}
                  color={
                    this.state.correctName === false ? ErrorColor : GrayColor
                  }
                  styles={styles.label}
                />
              )}
            </View>
            <TextInput
              maxLength={30}
              onChangeText={(text) => this.onChangeName(text)}
              placeholder={'Name on card'}
              style={styles.textInput}
              placeholderTextColor={GrayColor}
            />
          </View>
        </>

        {/* Card number */}
        <>
          {this.state.correctNumber === false &&
            this.onErrorText('Card number')}
          <View
            style={[
              styles.inputWrapper,
              {
                borderColor:
                  this.state.correctNumber === false ? ErrorColor : WhiteColor,
                borderWidth: this.state.correctNumber === false ? 1 : 0,
              },
            ]}
          >
            <View>
              {this.state.number.length > 0 && (
                <ElevenPxText
                  text={'Card number'}
                  color={
                    this.state.correctNumber === false ? ErrorColor : GrayColor
                  }
                  styles={styles.label}
                />
              )}
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                // justifyContent: 'space-between',
              }}
            >
              <TextInput
                value={this.state.number}
                onChangeText={(text) => this.onChangeNumber(text)}
                onBlur={this.onBlurNumber}
                placeholder={'Card number'}
                style={[
                  styles.textInput,
                  { flex: 0.95, paddingRight: RFValue(10) },
                ]}
                placeholderTextColor={GrayColor}
              />
              {typeof this.state.type === 'string' && (
                <SvgXml
                  xml={paymentCardIcon[`${this.state.type}`]}
                  width={RFValue(32)}
                  height={RFValue(25)}
                />
              )}
            </View>
          </View>
        </>

        {/* Card expiry */}
        <>
          {this.state.correctExpiration === false &&
            this.onErrorText('Expiry Date')}
          <View
            style={[
              styles.inputWrapper,
              {
                borderColor:
                  this.state.correctExpiration === false
                    ? ErrorColor
                    : WhiteColor,
                borderWidth: this.state.correctExpiration === false ? 1 : 0,
              },
            ]}
          >
            <View>
              {this.state.expiration.length > 0 && (
                <ElevenPxText
                  text={'Expiry Date'}
                  color={
                    this.state.correctExpiration === false
                      ? ErrorColor
                      : GrayColor
                  }
                  styles={styles.label}
                />
              )}
            </View>
            <TextInput
              value={this.state.expiration}
              onBlur={this.onBlurExpiration}
              onChangeText={(text) => this.onChangeExpiration(text)}
              placeholder={'Expiry Date'}
              style={styles.textInput}
              placeholderTextColor={GrayColor}
            />
          </View>
        </>

        {/* Card Cvv */}
        <>
          {this.state.correctCvv === false && this.onErrorText('CVV')}
          <View
            style={[
              styles.inputWrapper,
              {
                borderColor:
                  this.state.correctCvv === false ? ErrorColor : WhiteColor,
                borderWidth: this.state.correctCvv === false ? 1 : 0,
              },
            ]}
          >
            <View>
              {this.state.cvv.length > 0 && (
                <ElevenPxText
                  text={'CVV'}
                  color={
                    this.state.correctCvv === false ? ErrorColor : GrayColor
                  }
                  styles={styles.label}
                />
              )}
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                // justifyContent: 'space-between',
              }}
            >
              <TextInput
                onBlur={this.onBlurCvv}
                onChangeText={(text) => this.onChangeText(text, 'cvv')}
                maxLength={3}
                placeholder={'CVV'}
                style={[
                  styles.textInput,
                  { flex: 0.95, paddingRight: RFValue(10) },
                ]}
                placeholderTextColor={GrayColor}
              />
              <Pressable>
                <InfoIcon />
              </Pressable>
            </View>
          </View>
        </>

        <View style={styles.defaultWrapper}>
          <ButtonCheckbox
            backgroundColor={BlackColor}
            containerStyles={{ paddingRight: RFValue(10) }}
          />
          <DescriptionText text={'Use as default payment method'} />
        </View>
        <View style={{ alignItems: 'center', marginVertical: RFValue(10) }}>
          <ButtonPrimaryBig
            title={'ADD CARD'}
            disabled={
              correctName === true &&
              correctNumber === true &&
              correctExpiration === true &&
              correctCvv === true
            }
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  headText: { alignItems: 'center', textAlign: 'center', padding: RFValue(10) },
  container: { flex: 1, backgroundColor: '#e9e9e9e9' },
  inputWrapper: {
    // height: RFValue(64),
    backgroundColor: WhiteColor,
    paddingTop: RFValue(5),
    margin: RFValue(10),
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
  error: { paddingHorizontal: RFValue(10) },
  logo: {},
  defaultWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: RFValue(20),
    paddingHorizontal: RFValue(10),
  },
});
