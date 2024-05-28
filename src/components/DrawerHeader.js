import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { auth } from '../firebase/firebase';

const CustomDrawerContent = (props) => {
  const user = auth.currentUser;

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.userArea}>
        <Text style={styles.userText}>Selamat Datang, {user ? user.email : 'Guest'}</Text>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  userArea: {
    padding: 20,
    backgroundColor: '#ddd',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  userText: {
    fontSize: 16,
    fontWeight: 'bold'
  }
});

export default CustomDrawerContent;