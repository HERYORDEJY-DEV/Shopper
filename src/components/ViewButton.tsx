import * as React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { FilterIcon } from '../svg/FilterIcon';
import { UpDownIcon } from '../svg/UpDownIcon';
import { ViewIcon } from '../svg/ViewIcon';
import { ElevenPxText } from './Text';

export interface Props {}

export interface State {}

export default class ViewButton extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {};
  }

  public render() {
    return (
      <Pressable style={styles.container}>
        <ViewIcon />
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
