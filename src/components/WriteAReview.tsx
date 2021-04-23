import React from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Pressable,
  Image,
  Text,
  ScrollView,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Thumbnail, Textarea } from 'native-base';
import { ElevenPxText, Headline3Text } from './Text';
import StarRating from './StarRating';
import { GrayColor, WhiteColor } from '../styles/color';
import { descriptionText } from '../styles/text';
import { AddPhotoIcon, CameraIcon } from '../svg/CameraIcon';
import ButtonPrimaryBig from './ButtonPrimaryBig';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

export interface Props {}

export interface State {
  fileUri?: string;
  filepath?: { data: string; uri: string };
  fileData: string;
  picUrls?: string[];
}

export default class WriteAReview extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      filepath: {
        data: '',
        uri: '',
      },
      fileData: '',
      fileUri: '',
      picUrls: [],
    };
  }

  launchImageLibrary = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchImageLibrary(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        const source = { uri: response.uri };
        console.log('response', JSON.stringify(response));
        this.setState({
          ...this.state,
          filePath: response,
          fileData: response.data,
          fileUri: response.uri,
          picUrls: [...this.state.picUrls, response.uri],
        });
      }
    });
  };

  renderFileUri(url) {
    // if (this.state.fileUri) {
    //   return (
    //     <Image source={{ uri: this.state.fileUri }} style={styles.images} />
    //   );
    // } else {
    return (
      <View style={styles.ImageSections} key={url}>
        <Image source={{ uri: url }} style={styles.images} />
      </View>
    );
  }
  // }

  public render() {
    return (
      <View style={styles.container}>
        <View style={{ alignItems: 'center', paddingHorizontal: RFValue(60) }}>
          <Headline3Text text={'What is your rate?'} styles={styles.heading} />
          <StarRating
            showValue={false}
            starHeight={RFValue(36)}
            starWidth={RFValue(36)}
            showValue={false}
          />
          <Headline3Text
            text={'Please share your opinion about the product'}
            styles={{ textAlign: 'center', marginVertical: RFValue(20) }}
          />
        </View>
        <View>
          <View style={styles.textInputContainer}>
            <Textarea
              style={styles.textInput}
              placeholder={'Your Review'}
              placeholderTextColor={GrayColor}
              multiline={true}
            />
          </View>
        </View>
        <ScrollView
          style={{ flex: 1 }}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
          bounces={false}
          contentContainerStyle={styles.photoRowWrapper}
        >
          {this.state.picUrls.length > 0 && (
            <View style={styles.photoRowWrapper}>
              {this.state.picUrls.map((url, index) => this.renderFileUri(url))}
            </View>
          )}
          <Pressable
            style={styles.addPhotoButton}
            onPress={this.launchImageLibrary}
          >
            <AddPhotoIcon />
            <ElevenPxText
              text={'Add your photos'}
              styles={{
                fontFamily: 'Metropolis-SemiBold',
                paddingTop: RFValue(10),
              }}
            />
          </Pressable>
        </ScrollView>
        <View style={styles.sendWrapper}>
          <ButtonPrimaryBig title={'SEND A REVIEW'} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: RFValue(10),
    backgroundColor: '#f9f9f9f1',
    flex: 1,
  },
  textInputContainer: {
    backgroundColor: WhiteColor,

    height: RFValue(148),
  },
  textInput: {
    ...descriptionText,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    margin: RFValue(10),
    marginVertical: RFValue(5),
    // flex: 1,
    height: RFValue(148),
  },
  heading: { textAlign: 'center', marginBottom: RFValue(10) },
  photoRowWrapper: {
    // height: RFValue(122),
    // width: RFValue(133),
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginVertical: RFValue(30),
  },
  addPhotoButton: {
    height: RFValue(104),
    width: RFValue(104),
    alignItems: 'center',
    justifyContent: 'center',
  },
  sendWrapper: { alignItems: 'center', marginVertical: RFValue(20) },
  ImageSections: {
    width: RFValue(140),
    height: RFValue(140),
    borderRadius: RFValue(4),
    overflow: 'hidden',
    marginRight: RFValue(10),
  },
  images: {
    width: null,
    height: null,
    flex: 1,
    resizeMode: 'contain',
  },
});
