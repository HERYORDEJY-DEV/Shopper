import * as React from 'react';
import { View, StyleSheet, TextInput, Pressable } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import {
  BlackColor,
  GrayColor,
  PrimaryColor,
  WhiteColor,
} from '../styles/color';
import { fourteenPxText } from '../styles/text';
import { InfoIcon } from '../svg/CancelIcon';
import { MasterCardIcon, MastercardIcon2 } from '../svg/Payment';
import ButtonCheckbox from './ButtonCheckbox';
import ButtonPrimaryBig from './ButtonPrimaryBig';
import ButtonPrimarySmall from './ButtonPrimarySmall';
import ButtonSecondaryOutlineSmall from './ButtonSecondaryOutlineSmall';
import { DescriptionText, ElevenPxText, Headline3Text } from './Text';

export interface Props {}

export interface State {
  fullnameFocus: boolean;
  emailFocus: boolean;
  dobFocus: boolean;
  defaultCard: boolean;
  parentRef?: any;
}

const defProps = {
  fullnameFocus: false,
  emailFocus: false,
  dobFocus: false,
  defaultCard: false,
};

export default class PersonalInfoChange extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      fullnameFocus: false,
      emailFocus: false,
      dobFocus: false,
      defaultCard: false,
    };
  }

  onFocus = (type: string) => {
    if (type === 'fullname') {
      this.setState({ ...defProps, fullnameFocus: true });
    } else if (type === 'email') {
      this.setState({ ...defProps, emailFocus: true });
    } else if (type === 'dob') {
      this.setState({ ...defProps, dobFocus: true });
    } else {
      this.setState({
        ...defProps,
      });
    }
  };

  // onChangeName = () => this.setState({ ...this.state, fullnameFocus})

  public render() {
    const { fullnameFocus, emailFocus, dobFocus, defaultCard } = this.state;

    return (
      <View style={styles.container}>
        <Headline3Text
          text={'Personal information Change'}
          styles={styles.headText}
        />

        {/* Name on card */}
        <View style={styles.inputWrapper}>
          <View>
            {fullnameFocus && (
              <ElevenPxText
                text={'Full name'}
                color={GrayColor}
                styles={styles.label}
              />
            )}
          </View>
          <TextInput
            onFocus={() => this.onFocus('fullname')}
            placeholder={this.state.fullnameFocus ? null : 'Full name'}
            style={styles.textInput}
            placeholderTextColor={GrayColor}
          />
        </View>

        {/* Card number */}
        <View style={styles.inputWrapper}>
          <View>
            {emailFocus && (
              <ElevenPxText
                text={'Email'}
                color={GrayColor}
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
              onFocus={() => this.onFocus('email')}
              placeholder={this.state.emailFocus ? null : 'Email'}
              style={[
                styles.textInput,
                { flex: 0.95, paddingRight: RFValue(10) },
              ]}
              placeholderTextColor={GrayColor}
            />
          </View>
        </View>

        {/* Card expiry */}
        <View style={styles.inputWrapper}>
          <View>
            {dobFocus && (
              <ElevenPxText
                text={'Date of Birth'}
                color={GrayColor}
                styles={styles.label}
              />
            )}
          </View>
          <TextInput
            onFocus={() => this.onFocus('dob')}
            placeholder={this.state.dobFocus ? null : 'Date of Birth'}
            style={styles.textInput}
            placeholderTextColor={GrayColor}
          />
        </View>

        {/* Card expiry */}
        <View style={styles.footer}>
          <ButtonSecondaryOutlineSmall
            onPress={() => this.props.parentRef.current.close()}
            title={'Cancel'}
            width={RFValue(160)}
            height={RFValue(36)}
            titleStyles={fourteenPxText}
          />
          <ButtonPrimarySmall
            title={'Save'}
            width={RFValue(160)}
            height={RFValue(36)}
            titleStyles={{ ...fourteenPxText, color: WhiteColor }}
          />
        </View>
      </View>
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
  logo: {},
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: RFValue(20),
  },
});
