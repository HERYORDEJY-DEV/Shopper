import * as React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { FilterIcon } from '../svg/FilterIcon';
import { ElevenPxText } from './Text';

export interface Props {}

export interface State {}

export default class ListFilter extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {};
  }

  public render() {
    return (
      <Pressable style={styles.container}>
        <FilterIcon />
        <ElevenPxText
          text={'Filters'}
          styles={{ paddingHorizontal: RFValue(5) }}
        />
      </Pressable>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
