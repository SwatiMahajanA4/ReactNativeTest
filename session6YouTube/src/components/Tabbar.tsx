import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import React, {PropsWithChildren} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

type TabbarProps = PropsWithChildren<{}>;

export const Tabbar = ({}: TabbarProps): JSX.Element => {
  return (
    <View style={styles.tabView}>
      <TouchableOpacity style={styles.tabButton}>
        <Icon name="home" size={25} />
        <Text style={styles.tabName}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tabButton}>
        <Icon name="whatshot" size={25} />
        <Text style={styles.tabName}>WhatsHot</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tabButton}>
        <Icon name="subscriptions" size={25} />
        <Text style={styles.tabName}>Subscription</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tabButton}>
        <Icon name="add-alert" size={25} />
        <Text style={styles.tabName}>Activity</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tabButton}>
        <Icon name="folder" size={25} />
        <Text style={styles.tabName}>Account</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  tabView: {
    flexDirection: 'row',
    marginTop: 10,
    marginHorizontal: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tabButton: {
    alignItems: 'center',
  },
  tabName: {},
});
