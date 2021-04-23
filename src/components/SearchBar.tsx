import * as React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { GrayColor, WhiteColor } from '../styles/color';
import { sixteenPxRegularText } from '../styles/text';
import { SearchIcon } from '../svg/SearchIcon';

export interface Props {
  backgroundColor: string;
}

export interface State {}

export default class SearchBar extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {};
  }

  public render() {
    return (
      <View style={styles.container}>
        <SearchIcon width={RFValue(14)} height={RFValue(14)} />
        <TextInput
          placeholder={'Search'}
          style={[styles.textInput, sixteenPxRegularText]}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: WhiteColor,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: GrayColor,
    paddingHorizontal: RFValue(10),
    width: RFValue(343),
    height: RFValue(48),
  },
  textInput: { flex: 1, padding: RFValue(10), marginLeft: RFValue(0) },
});
