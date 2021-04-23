import * as React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import { StatusBar } from 'react-native';
import { Container, Content } from 'native-base';
import { RFValue } from 'react-native-responsive-fontsize';
import { SearchIcon } from '../svg/SearchIcon';
import NavigationBar from '../components/NavigationBar';
import {
  GrayColor,
  NavIconColor,
  SuccessColor,
  WhiteColor,
} from '../styles/color';
import { FourteenPxText, SixteenPxText } from '../components/Text';
import { _creditCardMask, _currency } from '../utils/textFormatter';
import OrderItem from '../components/OrderItem';
import { MasterCardIcon } from '../svg/Payment';
import ButtonSecondaryOutlineSmall from '../components/ButtonSecondaryOutlineSmall';
import ButtonPrimarySmall from '../components/ButtonPrimarySmall';
import { fourteenPxText } from '../styles/text';

export interface Props {}

export interface State {}

export default function OrderDetails(props: Props) {
  const renderLeft = () => (
    <View style={styles.leftContainer}>
      <SixteenPxText text={'Order № 1947034'} />
      <FourteenPxText text={'01-01-2021'} color={GrayColor} />
    </View>
  );

  const renderTrackingNo = () => (
    <View style={[styles.leftContainer, { marginTop: RFValue(10) }]}>
      <FourteenPxText text={'Tracking number:'} color={GrayColor} />
      <FourteenPxText
        text={'IW3475453455'}
        styles={{ fontFamily: 'Metropolis-Bold' }}
      />
    </View>
  );

  const renderBody = () => (
    <View style={[styles.leftContainer, { marginTop: RFValue(10) }]}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <FourteenPxText
          text={'3 items'}
          styles={{ fontFamily: 'Metropolis-Bold', paddingLeft: RFValue(5) }}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <FourteenPxText text={'Delivered'} color={SuccessColor} />
      </View>
    </View>
  );

  const renderDetails = () => (
    <View style={[styles.leftContainer, { marginTop: RFValue(10) }]}></View>
  );

  const renderHeader = () => (
    <View style={styles.headerWrapper}>
      {renderLeft()}
      {renderTrackingNo()}
      {renderBody()}
    </View>
  );

  const renderOrderInvoice = () => (
    <View style={styles.infoWrapper}>
      <FourteenPxText
        text={'Order information'}
        styles={{ marginBottom: RFValue(20) }}
      />

      {/* Shipping Address */}
      <View style={styles.invoiceItem}>
        <FourteenPxText
          text={'Shipping Address:'}
          color={GrayColor}
          styles={styles.invoiceItemLeft}
        />
        <FourteenPxText
          styles={styles.invoiceItemRight}
          text={'3 Newbridge Court ,Chino Hills, CA 91709, United States'}
        />
      </View>

      {/* Payment Method */}
      <View style={styles.invoiceItem}>
        <FourteenPxText
          text={'Payment Method:'}
          color={GrayColor}
          styles={styles.invoiceItemLeft}
        />
        <View
          style={[
            styles.invoiceItemRight,
            { flexDirection: 'row', alignItems: 'center' },
          ]}
        >
          <MasterCardIcon />
          <FourteenPxText
            text={`${_creditCardMask(5007651675678906)}`}
            styles={{ marginHorizontal: RFValue(10) }}
          />
        </View>
      </View>

      {/* Delivery Method */}
      <View style={styles.invoiceItem}>
        <FourteenPxText
          text={'Delivery Method:'}
          color={GrayColor}
          styles={styles.invoiceItemLeft}
        />
        <FourteenPxText
          styles={styles.invoiceItemRight}
          text={`FedEx, 3-4 days, ${_currency(123)}`}
        />
      </View>

      {/* Discount */}
      <View style={styles.invoiceItem}>
        <FourteenPxText
          text={'Discount:'}
          color={GrayColor}
          styles={styles.invoiceItemLeft}
        />
        <FourteenPxText
          styles={styles.invoiceItemRight}
          text={`10%, mypromocode2021`}
        />
      </View>

      {/* Total amount */}
      <View style={styles.invoiceItem}>
        <FourteenPxText
          text={'Total Amount:'}
          color={GrayColor}
          styles={styles.invoiceItemLeft}
        />
        <FourteenPxText
          styles={styles.invoiceItemRight}
          text={`${_currency(123)}`}
        />
      </View>
    </View>
  );

  return (
    <Container style={styles.container}>
      <StatusBar
        translucent={true}
        barStyle={'dark-content'}
        backgroundColor={'transparent'}
      />
      <NavigationBar
        title={'Order details'}
        rightComponent={
          <Pressable>
            <SearchIcon
              fill={NavIconColor}
              width={RFValue(17.49)}
              height={RFValue(17.49)}
            />
          </Pressable>
        }
      />
      {renderHeader()}
      <Content
        style={styles.content}
        contentContainerStyle={styles.contentContainerStyle}
      >
        <OrderItem />
        <OrderItem />
        <OrderItem />
        {/*  */}
        {renderOrderInvoice()}
      </Content>
      <View style={styles.footer}>
        <ButtonSecondaryOutlineSmall
          title={'Reorder'}
          width={RFValue(160)}
          height={RFValue(36)}
          titleStyles={fourteenPxText}
        />
        <ButtonPrimarySmall
          title={'Leave feedback'}
          width={RFValue(160)}
          height={RFValue(36)}
          titleStyles={{ ...fourteenPxText, color: WhiteColor }}
        />
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: { paddingTop: RFValue(20) },
  content: {},
  contentContainerStyle: { padding: RFValue(10) },
  headerWrapper: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: RFValue(10),
    // marginBottom: RFValue(20),
    overflow: 'hidden',
    backgroundColor: WhiteColor,
    borderBottomWidth: RFValue(0.5),
    borderBottomColor: GrayColor,
  },
  leftContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    overflow: 'hidden',
    alignItems: 'center',
  },
  bodyContainer: {
    paddingVertical: RFValue(20),
  },
  rightContainer: {
    flexDirection: 'row',
    // padding: RFValue(10),
    alignItems: 'center',
    // justifyContent: 'space-around',
  },
  invoiceWrapper: { flex: 1 },
  invoiceItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flex: 1,
    marginBottom: RFValue(20),
  },
  invoiceItemLeft: { marginRight: RFValue(0), flex: 0.4 },
  invoiceItemRight: { marginRight: RFValue(0), flex: 0.6 },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: RFValue(20),
  },
});
