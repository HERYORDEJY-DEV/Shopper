import * as React from 'react';
import { View, StyleSheet, ImageBackground, Pressable } from 'react-native';
import { StatusBar } from 'react-native';
import { Container, Content } from 'native-base';
import { RFValue } from 'react-native-responsive-fontsize';
import NavigationBar from '../components/NavigationBar';
import { ElevenPxText, SixteenPxText } from '../components/Text';
import AddShippingAddress from './AddShippingAddress';

import { MastercardCard } from '../svg/Payment';
import { AddActiveIcon } from '../svg/AddIcon';
import PaymentCard from '../components/PaymentCard';
import RNBottomSheet from '../components/RNBottomSheet';
import AddNewCard from '../components/AddNewCard';
import { paymentCardBg, paymentMethods, shippingAddresses } from '../api/datas';
import AddressCard from '../components/AddressCard';
// import mastercardCard from '../assets/images/mastercardCard.svg';

export interface Props {}

export interface State {}

export default function ShippingAddress(props: Props) {
  const bottomSheetRef = React.createRef();

  const onAddCard = () => bottomSheetRef.current.open();

  return (
    <Container style={styles.container}>
      <StatusBar
        translucent={true}
        barStyle={'dark-content'}
        backgroundColor={'transparent'}
      />
      <NavigationBar title={'Shipping Addresses'} />
      <Content
        showsVerticalScrollIndicator={false}
        style={styles.content}
        contentContainerStyle={styles.contentContainerStyle}
      >
        <>
          {shippingAddresses.map((address, index) => (
            <AddressCard
              key={`${address.id}-${address.address}`}
              {...address}
            />
          ))}
        </>
      </Content>
      <View style={styles.addWrapper}>
        <Pressable onPress={onAddCard}>
          <AddActiveIcon width={RFValue(40)} height={RFValue(40)} />
        </Pressable>
      </View>
      <RNBottomSheet ref={bottomSheetRef} height={RFValue(470)}>
        <AddShippingAddress />
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
    position: 'absolute',
    right: 0,
    bottom: 0,
    margin: RFValue(10),
  },
});
