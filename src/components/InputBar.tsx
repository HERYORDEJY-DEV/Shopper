import * as React from 'react';
import { View, StyleSheet, Pressable, TextInput } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { GrayColor, PrimaryColor, WhiteColor } from '../styles/color';
import { fourteenPxText } from '../styles/text';
import { CancelIcon, CheckIcon } from '../svg/CancelIcon';
import { ElevenPxText } from './Text';

export interface Props {
  placeholder?: string;
  placeholderTextColor?: string;
  value?: string;
  keyboardType?: string;
  errors?: any;
  correct?: any;
  touched?: boolean;
  onChangeText?: (e: string) => void;
  onBlur?: () => void;
}

export interface State {
  touched: boolean;
  text: string;
}

export default class AuthInput extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = { touched: false, text: '' };
  }

  onFocus = () => this.setState({ ...this.state, touched: true });
  onBlur = () => {
    this.setState({
      ...this.state,
      touched: this.state.text.length > 0 ? true : false,
    });
    // this.props.onBlur();
  };

  onChangeText = (text) => {
    this.setState({ ...this.state, text: text });
    this.props.onChangeText(text);
  };

  public render() {
    return (
      <View style={styles.container}>
        <View
          style={[
            styles.inputWrapper,
            {
              borderWidth: this.props.touched && this.props.errors ? 1 : 0,
              borderColor:
                this.props.touched && this.props.errors
                  ? PrimaryColor
                  : GrayColor,
            },
          ]}
        >
          {this.state.touched && (
            <ElevenPxText
              text={this.props.placeholder}
              color={this.props.errors ? PrimaryColor : GrayColor}
              styles={styles.label}
            />
          )}
          <View style={styles.body}>
            <TextInput
              {...this.props}
              onFocus={this.onFocus}
              // onBlur={this.props.onBlur}
              // onChangeText={this.props.onChangeText}
              placeholder={this.state.touched ? null : this.props.placeholder}
              style={styles.textInput}
              placeholderTextColor={GrayColor}
            />
            {this.props.touched && (
              <View style={styles.logo}>
                {this.props.errors ? (
                  <CancelIcon
                    width={RFValue(14)}
                    height={RFValue(14)}
                    fill={PrimaryColor}
                  />
                ) : (
                  <CheckIcon />
                )}
              </View>
            )}
          </View>
        </View>
        {this.props.touched && this.props.errors && (
          <ElevenPxText
            color={PrimaryColor}
            text={`${this.props.errors}`}
            styles={styles.error}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { marginBottom: RFValue(20) },
  inputWrapper: {
    // height: RFValue(64),
    backgroundColor: WhiteColor,
    paddingTop: RFValue(5),
    margin: RFValue(10),
    marginBottom: RFValue(5),
    borderRadius: RFValue(4),
    // alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 3,
  },
  textInput: {
    ...fourteenPxText,
    flex: 1,
    // height: RFValue(30),
    // alignItems: 'center',
    // justifyContent: 'center',
    margin: 0,
    paddingHorizontal: RFValue(10),
    // position: 'relative',
    // bottom: 0,
  },
  label: { paddingHorizontal: RFValue(10), height: RFValue(11) },
  logo: { flex: 0.1 },
  body: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  error: {
    paddingHorizontal: RFValue(20),
    paddingVertical: 0,
    lineHeight: RFValue(10),
  },
});
