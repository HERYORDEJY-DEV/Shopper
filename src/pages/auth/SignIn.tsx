import * as React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import { StatusBar } from 'react-native';
import { Container, Content } from 'native-base';
import { RFValue } from 'react-native-responsive-fontsize';
import NavigationBar from '../../components/NavigationBar';
import { FourteenPxText, HeadlineText } from '../../components/Text';
import InputBar from '../../components/InputBar';
import { Formik } from 'formik';
import {
  signinInitialValues,
  SignInDataSchema,
  SignUpDataSchema,
  signupInitialValues,
} from '../../utils/dataSchema';
import { useForm, NestedValue, Controller } from 'react-hook-form';
import ButtonPrimaryBig from '../../components/ButtonPrimaryBig';
import { LongArrowRight } from '../../svg/ArrowIcon';
import { GoogleIcon } from '../../svg/GoogleIcon';
import { FacebookIcon } from '../../svg/FacebookIcon';
import { WhiteColor } from '../../styles/color';

export interface Props {}

export interface State {}

type Option = {
  label: string;
  value: string;
};

const options = [
  { label: 'Chocolate', value: 'chocolate' },
  { label: 'Strawberry', value: 'strawberry' },
  { label: 'Vanilla', value: 'vanilla' },
];

export default function SignIn(props: Props) {
  const [state, setState] = React.useState({
    fullname: '',
    email: '',
    password: '',
    confirmPassword: '',
    isSubmitting: false,
  });

  const [correct, setCorrect] = React.useState({
    fullname: undefined,
    email: undefined,
    password: undefined,
    confirmPassword: undefined,
  });

  const correctFullname = (text) => {
    if (text.length < 2) {
      setCorrect({ ...correct, fullname: false });
    } else {
      setCorrect({ ...correct, fullname: true });
    }
  };

  const onSubmit = (data) => console.log('data');

  // const onSubmit = async (
  //   values,
  //   { setSubmitting, setErrors, setStatus, resetForm },
  // ) => {
  //   try {
  //     setState({ ...state, isSubmitting: true });
  //     resetForm(signupInitialValues);
  //     setStatus({ success: true });
  //     setState({ ...state, isSubmitting: false });
  //     console.log(values);
  //   } catch (e) {
  //     setStatus({ success: false });
  //     setSubmitting(false);
  //     setErrors({ submit: e.message });
  //     console.log(e);
  //   }
  // };

  const renderTitle = () => (
    <HeadlineText text={'Login'} styles={{ paddingHorizontal: RFValue(10) }} />
  );

  return (
    <Container style={styles.container}>
      <StatusBar
        translucent={true}
        barStyle={'dark-content'}
        backgroundColor={'transparent'}
      />
      <NavigationBar />
      {/* <Content
        style={styles.content}
        contentContainerStyle={styles.contentContainerStyle}
      > */}
      {renderTitle()}
      <View style={styles.formWrapper}>
        <Formik
          initialValues={signupInitialValues}
          onSubmit={(values) => console.log(JSON.stringify(values))}
          validationSchema={SignUpDataSchema}
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
            <>
              <InputBar
                placeholder={'Email'}
                value={values.email}
                onChangeText={handleChange('email')}
                onBlur={() => setFieldTouched('email')}
                touched={touched.email}
                errors={errors.email}
              />
              <InputBar
                placeholder={'Password'}
                value={values.password}
                onChangeText={handleChange('password')}
                onBlur={() => setFieldTouched('password')}
                touched={touched.password}
                errors={errors.password}
              />
              <Pressable style={styles.already}>
                <FourteenPxText
                  text={'Forgot your password??'}
                  styles={{ marginHorizontal: RFValue(10) }}
                />
                <LongArrowRight />
              </Pressable>

              <View style={styles.buttonEnter}>
                <ButtonPrimaryBig
                  title={'LOGIN'}
                  disabled={!isValid}
                  onPress={handleSubmit}
                />
              </View>
            </>
          )}
        </Formik>
      </View>
      <View style={{ flex: 0.3 }}>
        <FourteenPxText
          text={'Or login with social account'}
          styles={{ marginHorizontal: RFValue(10), textAlign: 'center' }}
        />
        <View style={styles.bottom}>
          <Pressable style={styles.socialButton}>
            <GoogleIcon />
          </Pressable>

          <Pressable style={styles.socialButton}>
            <FacebookIcon />
          </Pressable>
        </View>
      </View>
      {/* </Content> */}
    </Container>
  );
}

const styles = StyleSheet.create({
  container: { paddingTop: RFValue(20), flex: 1 },
  formWrapper: { marginTop: RFValue(30), flex: 0.7 },
  content: {},
  contentContainerStyle: {},
  buttonEnter: { alignItems: 'center', marginVertical: RFValue(20) },
  already: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: RFValue(10),
  },
  bottom: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginVertical: RFValue(30),
  },
  socialButton: {
    width: RFValue(92),
    height: RFValue(64),
    backgroundColor: WhiteColor,
    elevation: 3,
    borderRadius: RFValue(24),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
