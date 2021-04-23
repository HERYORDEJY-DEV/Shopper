import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { StatusBar } from 'react-native';
import { Container, Content } from 'native-base';
import { RFValue } from 'react-native-responsive-fontsize';
import { SuccessBag } from '../svg/SuccessBag';
import { FourteenPxText, HeadlineText } from '../components/Text';
import ButtonPrimaryBig from '../components/ButtonPrimaryBig';

export interface Props {}

export interface State {}

export default function Success(props: Props) {
  return (
    <Container style={styles.container}>
      <StatusBar
        translucent={true}
        barStyle={'dark-content'}
        backgroundColor={'transparent'}
      />
      <View>
        <View style={{ marginVertical: RFValue(10) }}>
          <SuccessBag />
        </View>
        <View>
          <HeadlineText
            text={'Success!'}
            styles={{
              textAlign: 'center',
              marginVertical: RFValue(10),
              marginTop: RFValue(40),
            }}
          />
          <FourteenPxText
            styles={{ textAlign: 'center' }}
            text={
              'Your order will be delivered soon.\nThank you for choosing our app!'
            }
          />
        </View>
      </View>
      <View
        style={{ position: 'absolute', bottom: 0, marginBottom: RFValue(30) }}
      >
        <ButtonPrimaryBig title={'CONTINUE SHOPPING'} />
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: 'center', justifyContent: 'center' },
  content: {},
  contentContainerStyle: {},
});
