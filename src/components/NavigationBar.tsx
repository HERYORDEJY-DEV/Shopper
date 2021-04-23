import * as React from 'react';
import { View, Pressable, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { ChevronArrowLeft } from '../svg/ArrowIcon';
import { Headline3Text } from './Text';

export interface Props {
  title?: string;
  noLeft?: boolean;
  leftComponent?: React.ReactNode;
  rightComponent?: React.ReactNode;
  leftOnPress?: () => void;
  rightOnPress?: () => void;
}

export interface State {}

export default class NavigationBar extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {};
  }

  renderLeft = () => (
    <Pressable>{this.props.leftComponent ?? <ChevronArrowLeft />}</Pressable>
  );

  renderBody = () => (
    <View>
      <Headline3Text text={this.props.title} />
    </View>
  );

  renderRight = () => <Pressable>{this.props.rightComponent}</Pressable>;

  public render() {
    return (
      <View style={styles.container}>
        {!this.props.noLeft && this.renderLeft()}
        {this.renderBody()}
        {this.renderRight()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: RFValue(20),
    paddingHorizontal: RFValue(10),
  },
  leftContainer: {},
  bodyContainer: {},
  rightContainer: {},
});
