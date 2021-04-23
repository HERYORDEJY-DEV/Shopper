import * as Yup from 'yup';
import * as Payment from 'payment';
import valid from 'card-validator'; //import statement

export const SignUpDataSchema = Yup.object().shape({
  fullname: Yup.string().min(1, 'Minimum length of 1').required('**Required'),
  email: Yup.string().email('Invalid Email').required('**Required'),
  password: Yup.string()
    .min(6, 'Minimum length of 8 characters')
    .required('**Required'),
  confirm_password: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .min(6, 'Minimum length of 8 characters')
    .required('**Required'),
});

export const ChangePasswordDataSchema = Yup.object().shape({
  old_password: Yup.string()
    .min(6, 'Minimum length of 8 characters')
    .required('**Required'),
  password: Yup.string()
    .min(6, 'Minimum length of 8 characters')
    .required('**Required'),
  confirm_password: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .min(6, 'Minimum length of 8 characters')
    .required('**Required'),
});

export const SignInDataSchema = Yup.object().shape({
  email: Yup.string().email('Invalid Email').required('**Required'),
  password: Yup.string()
    .min(6, 'Minimum length of 8 characters')
    .required('**Required'),
});

export const CreditCardShema = Yup.object().shape({
  name: Yup.string().min(1, 'Minimum length of 1').required('**Required'),
  number: Yup.string()
    .test(
      'test-number', // this is used internally by yup
      'Credit Card number is invalid', //validation message
      (value) => valid.number(value).isValid,
    ) // return true false based on validation
    .required(),
  expiration: Yup.string()
    .test(
      'test-number',
      'Expiry Date is invalid',
      (value) => valid.expirationDate(value).isValid,
    ) // return true false based on validation
    .required(),
  cvc: Yup.string()
    .test('test-number', 'CVC is invalid', (value) => valid.ccv(value).isValid) // return true false based on validation
    .required(),
});

export const signupInitialValues = {
  fullname: '',
  email: '',
  password: '',
  confirm_password: '',
};

export const changePasswordInitialValues = {
  old_password: '',
  password: '',
  confirm_password: '',
};
export const signinInitialValues = {
  email: '',
  password: '',
};

export const creditCardInitialValue = {
  name: '',
  number: '',
  cvc: '',
  expiration: '',
  type: '',
};

export const appData = {
  bio: {
    id: '',
    fullname: '',
    email: '',
    password: '',
    avatar: '',
    occupation: '',
    isSignedIn: false,
  },
  wishList: [],
  cartList: [],
  creditCardList: [],
  orderList: [],
  addressList: [],
};

export const itemData = {
  id: '',
  images: [],
  name: '',
  price: '',
  discounted: false,
  discountPrice: '',
  colors: [], //{name: red}...
  brand: '', //Gucci, Fendi...
  sex: '', //MALE, FEMALE
  sizes: '',
  type: '', //TOPWEAR, BOTTOMWEAR...SHOE, BAG, WATCH
  category: '', //Men, Women, Kids, Others={Bags, shoes
  wished: false,
  carted: false,
  ordered: false,
  orderInfo: {
    quantity: 0,
    color: '',
    size: '',
  },
  tag: [], //{name: TShirt}, {name: Jeans}, {name: WaistCoat}
  itemsSold: '',
};

export const creditCard = {
  id: '',
  name: '',
  number: '',
  cvv: '',
  valid: '',
  type: '',
};

export const address = {
  id: '',
  mainRoad: '',
  fullAddress: '',
  town: '',
  state: '',
  mobileNumber: '',
  isDefault: false,
  isSelected: 'false',
};
