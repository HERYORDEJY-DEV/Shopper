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
import { Formik } from 'formik';
import {
  DescriptionText,
  ElevenPxText,
  FourteenPxText,
  Headline3Text,
} from './Text';
import InputBar from './InputBar';
import {
  ChangePasswordDataSchema,
  changePasswordInitialValues,
} from '../utils/dataSchema';

export interface Props {}

export interface State {
  oldFocus: boolean;
  newFocus: boolean;
  repeatFocus: boolean;
  defaultCard: boolean;
  parentRef?: any;
}

const defProps = {
  oldFocus: false,
  newFocus: false,
  repeatFocus: false,
  defaultCard: false,
};

export default class PasswordChange extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      oldFocus: false,
      newFocus: false,
      repeatFocus: false,
      defaultCard: false,
    };
  }

  // onChangeName = () => this.setState({ ...this.state, oldFocus})

  public render() {
    const { oldFocus, newFocus, repeatFocus, defaultCard } = this.state;

    return (
      <View style={styles.container}>
        <Headline3Text text={'Password Change'} styles={styles.headText} />

        {/* Name on card */}
        <Formik
          initialValues={changePasswordInitialValues}
          onSubmit={(values) => console.log(JSON.stringify(values))}
          validationSchema={ChangePasswordDataSchema}
        >
          {({
            values,
            handleChange,
            errors,
            setFieldTouched,
            touched,
            isValid,
            handleSubmit,
          }) => (
            <View>
              <InputBar
                placeholder={'Old Password'}
                value={values.old_password}
                onChangeText={handleChange('old_password')}
                onBlur={() => setFieldTouched('old_password')}
                touched={touched.old_password}
                errors={errors.old_password}
              />

              <Pressable
                style={{
                  marginHorizontal: RFValue(10),
                  marginVertical: RFValue(10),
                }}
              >
                <FourteenPxText
                  text={'Forgot Password?'}
                  color={GrayColor}
                  styles={{ textAlign: 'right' }}
                />
              </Pressable>
              <InputBar
                placeholder={'Password'}
                value={values.password}
                onChangeText={handleChange('password')}
                onBlur={() => setFieldTouched('password')}
                touched={touched.password}
                errors={errors.password}
              />
              <InputBar
                placeholder={'Confirm Password'}
                value={values.confirm_password}
                onChangeText={handleChange('confirm_password')}
                onBlur={() => setFieldTouched('confirm_password')}
                touched={touched.confirm_password}
                errors={errors.confirm_password}
              />
            </View>
          )}
        </Formik>

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
