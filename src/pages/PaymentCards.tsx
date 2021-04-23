import * as React from 'react';
import { View, StyleSheet, Image, Pressable } from 'react-native';
import { StatusBar } from 'react-native';
import { Container, Content } from 'native-base';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';
import NavigationBar from '../components/NavigationBar';
import { ElevenPxText, SixteenPxText } from '../components/Text';

import { MastercardCard } from '../svg/Payment';
import { AddActiveIcon } from '../svg/AddIcon';
import PaymentCard from '../components/PaymentCard';
import RNBottomSheet from '../components/RNBottomSheet';
import AddNewCard from '../components/AddNewCard';
import { paymentCardBg, paymentMethods } from '../api/datas';
// import mastercardCard from '../assets/images/mastercardCard.svg';

export interface Props {}

export interface State {}

export default function PaymentMethod(props: Props) {
  const bottomSheetRef = React.createRef();

  const onAddCard = () => bottomSheetRef.current.open();

  return (
    <Container style={styles.container}>
      <StatusBar
        translucent={true}
        barStyle={'dark-content'}
        backgroundColor={'transparent'}
      />
      <NavigationBar title={'Payment methods'} />
      <Content
        style={styles.content}
        contentContainerStyle={styles.contentContainerStyle}
      >
        <SixteenPxText
          text={'Your payment cards'}
          styles={{ padding: RFValue(10) }}
        />
        {paymentMethods.map(({ type, ...pay }, index) => (
          <PaymentCard
            key={`${pay.id}-${pay.number}`}
            type={paymentCardBg[`${type}`]}
            {...pay}
          />
        ))}
        <PaymentCard
          name={'Oyebode Yusuf'}
          number={'5399412007917292'}
          expiration={'1221'}
          ccv={'123'}
          type={require('../assets/images/visaCard.png')}
        />
        <PaymentCard
          name={'Oyebode Yusuf'}
          number={'5399412007917292'}
          expiration={'1221'}
          ccv={'123'}
          type={require('../assets/images/mastercardCard.png')}
        />
      </Content>
      <View style={styles.addWrapper}>
        <Pressable onPress={onAddCard}>
          <AddActiveIcon width={RFValue(40)} height={RFValue(40)} />
        </Pressable>
      </View>
      <RNBottomSheet ref={bottomSheetRef} height={RFValue(470)}>
        <AddNewCard />
      </RNBottomSheet>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: { paddingTop: RFValue(20) },
  content: {},
  contentContainerStyle: {},
  imageBackground: {
    width: RFValue(400),
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
