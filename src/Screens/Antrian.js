import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native'

const Antrian = () => {
    return (
        <View style={{ flex: 1, margin: 70 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 10 }}>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Ambil Antrian Sepeda</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Ambil Antrian BOGEY</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ alignItems: 'center', flex: 1, flexDirection:'row' }}>
            <View>
              <Text>Antrian Berjalan Sepeda</Text>
              <Text style={{ textAlign: 'center' }}>0</Text>
            </View>
            <View>
              <Text>Antrian Berjalan BOGEY</Text>
              <Text style={{ textAlign: 'center' }}>0</Text>
            </View>
          </View>
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

export default Antrian;


