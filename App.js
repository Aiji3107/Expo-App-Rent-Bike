import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

function HomeScreen({ navigation }) {
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
}

function BeliTiket({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>INI Beli Tiket</Text>
    </View>
  );
}

function ScanQR({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>INI Scan QR</Text>
    </View>
  );
}

function CekTiket({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>INI Cek Tiket</Text>
    </View>
  );
}

function Transaksi({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>INI Transaksi</Text>
    </View>
  );
}

function Pengaturan({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>INI Pengaturan</Text>
    </View>
  );
}

function TutupBuku({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>INI Tutup Buku</Text>
    </View>
  );
}
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Antrian" component={HomeScreen} />
        <Drawer.Screen name="Beli Tiket" component={BeliTiket} />
        <Drawer.Screen name="Scan QR" component={ScanQR} />
        <Drawer.Screen name="Cek Tiket" component={CekTiket} />
        <Drawer.Screen name="Transaksi" component={Transaksi} />
        <Drawer.Screen name="Pengaturan" component={Pengaturan} />
        <Drawer.Screen name="Tutup Buku" component={TutupBuku} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

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