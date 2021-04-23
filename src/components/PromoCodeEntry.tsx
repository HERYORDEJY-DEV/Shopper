import * as React from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  Pressable,
  ScrollView,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { promoCodes } from '../api/datas';
import { GrayColor, WhiteColor } from '../styles/color';
import { fourteenPxText } from '../styles/text';
import { EnterArrowRight } from '../svg/ArrowIcon';
import PromoCodeCard from './PromoCodeCard';
import { Headline3Text } from './Text';

export interface Props {
  getPromoCode: (e: string) => void;
}

export interface State {
  code: string;
}

export default class PromoCodeEntry extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = { code: undefined };
  }

  public render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputWrapper}>
          <TextInput
            onChangeText={(text) =>
              this.setState({ ...this.state, code: text })
            }
            placeholder={'Enter your promo code'}
            placeholderTextColor={GrayColor}
            style={styles.textInput}
          />
          <Pressable onPress={() => this.props.getPromoCode(this.state.code)}>
            <EnterArrowRight />
          </Pressable>
        </View>
        <Headline3Text
          text={'Your Promo Codes'}
          styles={{ padding: RFValue(10) }}
        />
        <ScrollView style={styles.codesWrapper}>
          {promoCodes.map((code, index) => (
            <PromoCodeCard
              key={`${index}-${code}`}
              {...code}
              onApplyCode={this.props.getPromoCode}
            />
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { backgroundColor: '#eee', flex: 1 },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: RFValue(10),
    // paddingHorizontal: RFValue(10),
    // elevation: 3,
    backgroundColor: WhiteColor,
    borderRadius: RFValue(4),
  },

  codesWrapper: {
    // alignItems: 'center',
    padding: RFValue(10),
    marginBottom: RFValue(20),
  },
  textInput: {
    ...fourteenPxText,
    flex: 1,

    marginRight: RFValue(10),
  },
});
