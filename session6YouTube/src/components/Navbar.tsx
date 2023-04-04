import {StyleSheet, View, TouchableOpacity} from 'react-native';
import React, {PropsWithChildren} from 'react';
import {Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

type NavbarProps = PropsWithChildren<{}>;

export const Navbar = ({}: NavbarProps): JSX.Element => {
  return (
    <View style={styles.navbarContainer}>
      <View style={styles.navbarView}>
        <Image
          style={styles.youtubeImage}
          source={require('../images/youtube.png')}
        />
        <View style={styles.navbarIcons}>
          <TouchableOpacity style={styles.icon}>
            <Icon name="search" size={25} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon}>
            <Icon name="account-circle" size={25} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navbarContainer: {
    marginTop: 20,
    height: 10,
  },
  navbarView: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  youtubeImage: {
    height: 23,
    width: 120,
  },
  navbarIcons: {
    flexDirection: 'row',
  },
  icon: {
    marginLeft: 10,
  },
});
