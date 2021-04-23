import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { BlackColor, PrimaryColor } from '../styles/color';
import { LabelText } from './Text';

export interface Props {
  value?: string | number;
  type: 'sale' | 'new' | 'hot';
}

export interface State {}

export class LabelItem extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {};
  }

  public render() {
    return (
      <>
        {this.props.type === 'sale' && (
          <View style={styles.container}>
            <LabelText text={`-${this.props.value}%`} />
          </View>
        )}

        {this.props.type === 'hot' && (
          <View style={styles.container}>
            <LabelText text={'HOT'} />
          </View>
        )}

        {this.props.type === 'new' && (
          <View style={[styles.container, { backgroundColor: BlackColor }]}>
            <LabelText text={'NEW'} />
          </View>
        )}
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderRadius: RFValue(29),
    width: RFValue(40),
    height: RFValue(24),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: PrimaryColor,
  },
});
