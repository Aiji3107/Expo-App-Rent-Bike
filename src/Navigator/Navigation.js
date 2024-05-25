import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BeliTiket from '../Screens/BeliTiket';
import ScanQR from '../Screens/ScanQR';
import CekTiket from '../Screens/CekTiket';
import Transaksi from '../Screens/Transaksi';
import Pengaturan from '../Screens/Pengaturan';
import TutupBuku from '../Screens/TutupBuku';
import Antrian from '../Screens/Antrian'; 
import Login from '../Screens/login';

const Drawer = createDrawerNavigator();

function Navigation() {
  return (
      <Drawer.Navigator>
        <Drawer.Screen name="Antrian" component={Antrian} />
        <Drawer.Screen name="Beli Tiket" component={BeliTiket} />
        <Drawer.Screen name="Scan QR" component={ScanQR} />
        <Drawer.Screen name="Cek Tiket" component={CekTiket} />
        <Drawer.Screen name="Transaksi" component={Transaksi} />
        <Drawer.Screen name="Pengaturan" component={Pengaturan} />
        <Drawer.Screen name="Tutup Buku" component={TutupBuku} />
        <Drawer.Screen name="Login" component={Login} />
      </Drawer.Navigator>
  );
}

export default Navigation;
