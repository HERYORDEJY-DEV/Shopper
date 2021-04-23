import React, { Component } from 'react';
import { Text, StyleSheet, TextStyle } from 'react-native';
import {
  headlineText,
  elevenPxText,
  fourteenPxText,
  sixteenPxText,
  sixteenPxRegularText,
  descriptionText,
  labelText,
  headline2Text,
  headline3Text,
} from '../styles/text';

export interface Props {
  text: string;
  color?: string;
  styles?: object;
}

export class HeadlineText extends Component<Props> {
  constructor(props: Props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <Text
        style={[
          headlineText,
          {
            color: this.props.color ?? headlineText.color,
            ...this.props.styles,
          },
        ]}
      >
        {this.props.text}
      </Text>
    );
  }
}
//

export class Headline2Text extends Component<Props> {
  constructor(props: Props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <Text
        style={[
          headline2Text,
          {
            color: this.props.color ?? headline2Text.color,
            ...this.props.styles,
          },
        ]}
      >
        {this.props.text}
      </Text>
    );
  }
}
//

export class Headline3Text extends Component<Props> {
  constructor(props: Props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <Text
        style={[
          headline3Text,
          {
            color: this.props.color ?? headline3Text.color,
            ...this.props.styles,
          },
        ]}
      >
        {this.props.text}
      </Text>
    );
  }
}
//
export class ElevenPxText extends Component<Props> {
  constructor(props: Props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <Text
        style={[
          elevenPxText,
          {
            color: this.props.color ?? elevenPxText.color,
            ...this.props.styles,
          },
        ]}
      >
        {this.props.text}
      </Text>
    );
  }
}
////
export class LabelText extends Component<Props> {
  constructor(props: Props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <Text
        style={[
          labelText,
          { color: this.props.color ?? labelText.color, ...this.props.styles },
        ]}
      >
        {this.props.text}
      </Text>
    );
  }
}
//
export class FourteenPxText extends Component<Props> {
  constructor(props: Props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <Text
        {...this.props}
        style={[
          fourteenPxText,
          {
            color: this.props.color ?? fourteenPxText.color,
            ...this.props.styles,
          },
        ]}
      >
        {this.props.text}
      </Text>
    );
  }
}
//
export class SixteenPxText extends Component<Props> {
  constructor(props: Props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <Text
        style={[
          sixteenPxText,
          {
            color: this.props.color ?? sixteenPxText.color,
            ...this.props.styles,
          },
        ]}
      >
        {this.props.text}
      </Text>
    );
  }
}
//
export class SixteenPxRegularText extends Component<Props> {
  constructor(props: Props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <Text
        style={[
          sixteenPxRegularText,
          {
            color: this.props.color ?? sixteenPxRegularText.color,
            ...this.props.styles,
          },
        ]}
      >
        {this.props.text}
      </Text>
    );
  }
}
//
export class DescriptionText extends Component<Props> {
  constructor(props: Props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <Text
        style={[
          descriptionText,
          {
            color: this.props.color ?? descriptionText.color,
            ...this.props.styles,
          },
        ]}
      >
        {this.props.text}
      </Text>
    );
  }
}
//
const styles = StyleSheet.create({
  headlineText: { ...headlineText },
});
