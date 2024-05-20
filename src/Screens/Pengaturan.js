import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Pengaturan = () => {
  return (
    <View>
      <Text>Pengaturan</Text>
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


