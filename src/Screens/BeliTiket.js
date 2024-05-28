import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native'

const BeliTiket = () => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          {/* BOX 1 */}
          
          <View style={{width:'100%', height:'auto', justifyContent:'center', alignItems:'flex-start', marginBottom:10,
            borderColor:'black', borderWidth:2, borderRadius:4
          }}>
            <Image source={require('../../assets/images/gambar2.png')} style={{width:'100%', height:'40%'}}></Image>
            <Text style={{color:'black', fontSize:16, fontWeight:'bold', textAlign:'center'}}>Borneo Bike 30 menit</Text>
            <Text style={{color:'black', fontSize:16, fontWeight:'medium', textAlign:'center'}}>10 Januari 2024 - 31 Desember 2024</Text>
            <Text style={{color:'black', fontSize:16, fontWeight:'medium', textAlign:'center'}}>Rp. 10.000</Text>
          </View>
          {/* End Box */}
          {/* BOX 1 */}
          
          <View style={{width:'100%', height:'auto', justifyContent:'center', alignItems:'flex-start', marginBottom:10,
            borderColor:'black', borderWidth:2, borderRadius:4
          }}>
            <Image source={require('../../assets/images/gambar2.png')} style={{width:'100%', height:'40%'}}></Image>
            <Text style={{color:'black', fontSize:16, fontWeight:'bold', textAlign:'center'}}>Borneo Bike 30 menit</Text>
            <Text style={{color:'black', fontSize:16, fontWeight:'medium', textAlign:'center'}}>10 Januari 2024 - 31 Desember 2024</Text>
            <Text style={{color:'black', fontSize:16, fontWeight:'medium', textAlign:'center'}}>Rp. 10.000</Text>
          </View>
          {/* End Box */}
          {/* BOX 1 */}
          
          <View style={{width:'100%', height:'auto', justifyContent:'center', alignItems:'flex-start', marginBottom:10,
            borderColor:'black', borderWidth:2, borderRadius:4
          }}>
            <Image source={require('../../assets/images/gambar2.png')} style={{width:'100%', height:'40%'}}></Image>
            <Text style={{color:'black', fontSize:16, fontWeight:'bold', textAlign:'center'}}>Borneo Bike 30 menit</Text>
            <Text style={{color:'black', fontSize:16, fontWeight:'medium', textAlign:'center'}}>10 Januari 2024 - 31 Desember 2024</Text>
            <Text style={{color:'black', fontSize:16, fontWeight:'medium', textAlign:'center'}}>Rp. 10.000</Text>
          </View>
          {/* End Box */}
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

export default BeliTiket;

