import * as React from 'react';
import { View, StyleSheet, Pressable, ScrollView } from 'react-native';
import { StatusBar } from 'react-native';
import { Container, Content } from 'native-base';
import { RFValue } from 'react-native-responsive-fontsize';
import NavigationBar from '../components/NavigationBar';
import { FourteenPxText, SixteenPxText } from '../components/Text';
import CheckoutAddress from '../components/CheckoutAddress';
import { PrimaryColor } from '../styles/color';
import CheckoutPayment from '../components/CheckoutPayment';
import CheckoutDelivery from '../components/CheckoutDelivery';
import { DHL } from '../svg/DeliveryLogo';
import { deliveryMethod } from '../api/datas';
import CheckoutInvoice from '../components/CheckoutInvoice';
import ButtonPrimaryBig from '../components/ButtonPrimaryBig';

export interface Props {}

export interface State {}

export default function Checkout(props: Props) {
  return (
    <Container style={styles.container}>
      <StatusBar
        translucent={true}
        barStyle={'dark-content'}
        backgroundColor={'transparent'}
      />
      <NavigationBar title={'Checkout'} />
      <Content
        style={styles.content}
        contentContainerStyle={styles.contentContainerStyle}
      >
        <View style={styles.addressWrapper}>
          <SixteenPxText
            text={'Shipping address'}
            styles={{ padding: RFValue(10) }}
          />
          <CheckoutAddress
            id={'001'}
            fullname={'Jane Doe'}
            address={'25 Ibrahim Taiwo Road'}
            city={'Ilorin'}
            state={'Kwara'}
            country={'Nigeria'}
          />
        </View>

        <View style={styles.addressWrapper}>
          <View style={styles.paymentHeading}>
            <SixteenPxText text={'Payment'} styles={{}} />
            <Pressable>
              <FourteenPxText text={'Change'} color={PrimaryColor} />
            </Pressable>
          </View>
          <CheckoutPayment
            name={'Jane Doe'}
            address={'25 Ibrahim Taiwo Road'}
            city={'Ilorin'}
            state={'Kwara'}
            country={'Nigeria'}
          />
        </View>

        <View style={styles.addressWrapper}>
          <View style={styles.paymentHeading}>
            <SixteenPxText text={'Delivery method'} styles={{}} />
          </View>
          <ScrollView
            contentContainerStyle={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-evenly',
            }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            {deliveryMethod.map((delivery: {}, index) => (
              <CheckoutDelivery
                key={`${delivery.id}-${delivery.name}`}
                {...delivery}
              />
            ))}
          </ScrollView>
        </View>
      </Content>

      <View style={styles.footer}>
        <CheckoutInvoice />
        <View style={styles.footerButton}>
          <ButtonPrimaryBig title={'SUBMIT ORDER'} />
        </View>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: { paddingTop: RFValue(20) },
  content: {},
  contentContainerStyle: {},
  addressWrapper: { marginBottom: RFValue(20) },
  paymentHeading: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: RFValue(10),
  },
  footer: {},
  footerButton: { alignItems: 'center', padding: RFValue(10) },
});
