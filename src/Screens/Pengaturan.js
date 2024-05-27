import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { auth } from '../firebase/firebase';

const Pengaturan = () => {
  const handleLogout = () => {
    auth.signOut();
  };

  return (
    <View>
      <Text>Pengaturan</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};
const styles = StyleSheet.create({
    buttonContainer: {
      alignItems: 'center',
      margin: 2,
    },
    button: {
      backgroundColor: 'green',
      borderRadius: 4,
      padding: 6,
      width: '90%',
      height:'55%'
    },
    buttonText: {
      color: 'white',
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
    },
  })


export default Pengaturan;

