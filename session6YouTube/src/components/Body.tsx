import {Text, StyleSheet, View, Image} from 'react-native';
import React, {PropsWithChildren} from 'react';

type BodyProps = PropsWithChildren<{
  video: any;
}>;

export const Body = ({video}: BodyProps): JSX.Element => {
  return (
    <View>
      <View style={styles.outerView}>
        <Image
          source={{uri: video.snippet.thumbnails.medium.url}}
          style={{height: 200, margin: 10}}
        />
        <View style={styles.videoDataView}>
          <Image
            source={{uri: video.snippet.thumbnails.default.url}}
            style={styles.profilePic}
          />
          <View style={styles.videoTextView}>
            <Text style={styles.title}>{video.snippet.title}</Text>
            <Text style={styles.channelTitle}>
              {video.snippet.channelTitle}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outerView: {
    backgroundColor: '#000000',
  },
  videoDataView: {
    flexDirection: 'row',
    margin: 10,
  },
  profilePic: {
    height: 50,
    width: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#ffffff',
  },
  videoTextView: {
    marginLeft: 20,
  },
  title: {
    color: '#ffffff',
  },
  channelTitle: {
    color: '#ffffff',
    fontSize: 11,
  },
});
