import { StatusBar } from 'react-native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import ButtonPrimaryBig from './src/components/ButtonPrimaryBig';
import { PrimaryColor, WhiteColor } from './src/styles/color';
import { RFValue } from 'react-native-responsive-fontsize';
import FastRunningIcon from './src/components/Svg';
import ProfileIcon from './src/components/Svg copy';
import { ProfileIconActive, ProfileIconInactive } from './src/svg/ProfileIcon';
import {
  FavoriteIconActivated,
  FavoriteIconInactive,
  FavoriteIconPressed,
} from './src/svg/FavoriteIcon';
import ButtonSecondaryOutlineBig from './src/components/ButtonSecondaryOutlineBig';
import SearchBar from './src/components/SearchBar';
import { HeadlineText } from './src/components/Text';
import ButtonPrimarySmall from './src/components/ButtonPrimarySmall';
import ButtonSecondaryOutlineSmall from './src/components/ButtonSecondaryOutlineSmall';
import ButtonReview from './src/components/ButtonReview';
import { Container, Content } from 'native-base';
import ButtonSearchBig from './src/components/ButtonSearchBig';
import ButtonCameraBig from './src/components/ButtonCameraBig';
import ButtonAddBagSmall from './src/components/ButtonAddBagSmall';
import ButtonAddFavoriteSmall from './src/components/ButtonAddFavoriteSmall';
import ButtonAdd from './src/components/ButtonAdd';
import ButtonGoogle from './src/components/ButtonGoogle';
import ButtonFacebook from './src/components/ButtonFacebook';
import Dropdown from './src/components/Dropdown';
import ButtonCheckbox from './src/components/ButtonCheckbox';
import ButtonSwitch from './src/components/ButtonSwitch';
import ButtonTagOrdinary from './src/components/ButtonTagOrdinary';
import ButtonTagSmall from './src/components/ButtonTagSmall';
import { LabelHot, LabelNew, LabelSale } from './src/components/Label';
import ListFilter from './src/components/ListFilter';
import PriceFilter from './src/components/PriceFilter';
import ViewButton from './src/components/ViewButton';
import RangeSlider from './src/components/RangeSlider';
import { ColorIconAtive, ColorIconInactive } from './src/svg/ColorIcon';
import { StarIconActive, StarIconInactive } from './src/svg/StarIcon';
import {
  HomeIconActive,
  HomeIconInactive,
  ShopIconActive,
  ShopIconInactive,
  BagTabIconActive,
  BagTabIconInactive,
  FavTabIconActive,
  FavTabIconInactive,
  ProfileTabIconActive,
  ProfileTabIconInactive,
  BagTabIconInactive2,
} from './src/svg/TabBarIcons';
import { BagIconInactive } from './src/svg/BagIcon';
import RNBottomSheet from './src/components/RNBottomSheet';
import Bagitem from './src/components/BagItem';
import {
  QuantityMinusIcon,
  QuantityPlusIcon,
} from './src/svg/QuantityPlusMinu';
import CatalogItem from './src/components/CatalogItem';
import OrderItem from './src/components/OrderItem';
import CategoryCard from './src/components/CategoryCard';
import FavoriteItem from './src/components/FavoriteItemRectangle';
import PromoCodeCard from './src/components/PromoCodeCard';
import ProductMainItem from './src/components/ProductMainItem';
import AddressCard from './src/components/AddressCard';
import OrderCard from './src/components/OrderCard';
import PopUpWindow from './src/components/PopUpWindow';
import ReviewPhotoSmall from './src/components/ReviewPhotoSmall';
import VisualSearch from './src/pages/VisualSearch';
import VisualSearchFinding from './src/pages/VisualSearchFinding';
import MainPage from './src/pages/tab/MainPage';
import MainPage2 from './src/pages/tab/MainPage2';
import Categories from './src/pages/tab/Categories';
import Categories2 from './src/pages/Categories2';
import Catalog1 from './src/pages/Catalog1';
import FavoriteItemSquare from './src/components/FavoriteItemSquare';
import Catalog2 from './src/pages/Catalog2';
import Filters from './src/pages/Filters';
import Brand from './src/pages/Brand';
import ProductCard from './src/pages/ProductCard';
import Checkout from './src/pages/Checkout';
import RatingAndReviews from './src/pages/RatingAndReviews';
import RNImagePicker from './src/components/RNImagePicker';
import ExpoImagePicker from './src/components/ExpoImagePicker';
import Favorites from './src/pages/tab/Favorites';
import MyBag from './src/pages/tab/MyBag';
import ShippingAddress from './src/pages/ShippingAddress';
import PaymentCards from './src/pages/PaymentCards';
import AddShippingAddress from './src/pages/AddShippingAddress';
import Success from './src/pages/Success';
import MyProfile from './src/pages/tab/MyProfile';
import MyOrders from './src/pages/MyOrders';
import DemoPage from './src/pages/DemoPage';
import OrderDetails from './src/pages/OrderDetails';
import Settings from './src/pages/Settings';
import SignUp from './src/pages/auth/SignUp';
import SignIn from './src/pages/auth/SignIn';
import ForgotPassword from './src/pages/auth/ForgotPassword';
import { isValid } from 'cc-validate';
import * as Payment from 'payment';
import valid from 'card-validator';
import AppNavigation from './src/navigation';

let result = isValid('5061021053232139619');
let result2 = valid.number('5399412007917292').card.niceType;

export default function App() {
  let [fontsLoaded] = useFonts({
    'Metropolis-Regular': require('./src/assets/fonts/Metropolis-Regular.otf'),
    'Metropolis-Bold': require('./src/assets/fonts/Metropolis-Bold.otf'),
    'Metropolis-Black': require('./src/assets/fonts/Metropolis-Black.otf'),
    'Metropolis-Medium': require('./src/assets/fonts/Metropolis-Medium.otf'),
    'Metropolis-SemiBold': require('./src/assets/fonts/Metropolis-SemiBold.otf'),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return <AppNavigation />;
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    margin: RFValue(10),
  },
});
