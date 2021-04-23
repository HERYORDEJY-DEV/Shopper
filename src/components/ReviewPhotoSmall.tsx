import * as React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { View, Image, Pressable, StyleSheet } from 'react-native';

export interface Props {
  source: string;
}

export interface State {}

export default class ReviewPhotoSmall extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {};
  }

  public render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require('../assets/images/image15.png')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: null,
    height: null,
    flex: 1,
    resizeMode: 'cover',
    overflow: 'hidden',
  },
  image: {
    width: RFValue(104),
    height: RFValue(104),
    overflow: 'hidden',
    borderRadius: RFValue(4),
  },
});
