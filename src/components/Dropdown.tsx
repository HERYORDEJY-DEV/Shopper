import * as React from 'react';
import {
  View,
  StyleProp,
  ViewStyle,
  TextStyle,
  StyleSheet,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { RFValue } from 'react-native-responsive-fontsize';
import Icon from 'react-native-vector-icons/Feather';
import { GrayColor, PrimaryColor, WhiteColor } from '../styles/color';
import { fourteenPxText } from '../styles/text';
import { ChevronArrowDown, ChevronArrowUp } from '../svg/ArrowIcon';

export interface Props {
  items?: { label: string; value: string }[];
  width?: number;
  height?: number;
  onOpen?: () => void;
  onClose?: () => void;
  defaultValue?: string;
  containerStyle?: {};
  style?: {};
  itemStyle?: {};
  onChangeItem?: () => void;
  labelStyle?: {};
  dropDownStyle?: {};
  selectedLabelStyle?: {};
  placeholder?: string | 'Select'; active?: boolean
}

export interface State {
  country: string;
  countries: string;
  active: boolean;
}

type ItemType = {
  label: any; // required
  value: any; // required
  icon?: () => JSX.Element;
  hidden?: boolean;
  untouchable?: boolean;
  parent?: any;
  disabled?: boolean;
  selected?: boolean;
  viewStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
};

export default class Dropdown extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = { country: 'uk', countries: 'uk', active: false };
    this.controller;
  }

  onOpen = () => this.setState({ ...this.state, active: true });
  onClose = () => this.setState({ ...this.state, active: false });

  public render() {
    return (
      <>
        <View>
          <DropDownPicker
            placeholder={this.props.placeholder}
            onOpen={this.props.onOpen}
            onClose={this.props.onClose}
            controller={(instance) => (this.controller = instance)}
            items={this.props.items}
            defaultValue={this.props.defaultValue}
            containerStyle={{
              height: this.props.height ?? RFValue(40),
              width: this.props.width ?? RFValue(100),
              ...this.props.containerStyle,
            }}
            style={[
              styles.style,
              {
                borderColor: this.state.active ? PrimaryColor : GrayColor,
                ...this.props.style,
              },
            ]}
            itemStyle={{
              justifyContent: 'flex-start',
              ...this.props.itemStyle,
            }}
            onChangeItem={(item) =>
              this.setState({
                country: item.value,
              })
            }
            labelStyle={fourteenPxText}
            dropDownStyle={[styles.dropDownStyle, this.props.dropDownStyle]}
            autoScrollToDefaultValue={true}
            customArrowDown={() => <ChevronArrowDown />}
            customArrowUp={() => <ChevronArrowUp />}
            selectedLabelStyle={{
              ...this.props.selectedLabelStyle,
            }}
          />
        </View>
      </>
    );
  }
}

export class MultiDropdown extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = { country: 'uk', countries: 'uk', active: false };
    this.controller;
  }

  onOpen = () => this.setState({ ...this.state, active: true });
  onClose = () => this.setState({ ...this.state, active: false });

  public render() {
    return (
      <>
        <View>
          <DropDownPicker
            controller={(instance) => (this.controller = instance)}
            items={[
              {
                label: 'UK',
                value: 'uk',
                icon: () => <Icon name='flag' size={18} color='#900' />,
              },
              {
                label: 'France',
                value: 'france',
                icon: () => <Icon name='flag' size={18} color='#900' />,
              },
            ]}
            multiple={true}
            multipleText='%d items have been selected.'
            min={0}
            max={10}
            defaultValue={this.state.countries}
            containerStyle={{ height: 40 }}
            itemStyle={{
              justifyContent: 'flex-start',
            }}
            onChangeItem={(item) =>
              this.setState({
                countries: item, // an array of the selected items
              })
            }
          />
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  dropDownStyle: { padding: RFValue(20), flex: 1 },
  containerStyle: { padding: RFValue(20) },
  style: {
    backgroundColor: WhiteColor,
    borderTopLeftRadius: RFValue(8),
    borderTopRightRadius: RFValue(8),
    borderBottomLeftRadius: RFValue(8),
    borderBottomRightRadius: RFValue(8),
    borderWidth: 1,
  },
});
