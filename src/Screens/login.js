import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const Login= () => {
    const [email, setEmail ] = useState('');
    const [password, setPassword] = useState('');
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleLogin = () => {
        //logika login (test)
        console.log('email:', email);
        console.log('password:', password);
        setIsModalVisible(false);
    }

    const handleClose = () => {
        setIsModalVisible(false);
    }
  return (
    <View style={styles.Container}>
      <View style={styles.Content}>
        <Text style={styles.title}>Login</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Email"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          placeholder="Password"
          secureTextEntry
        />
        <View style={styles.buttonContainer}>
          <Button title="Login" onPress={handleLogin} color="#3498db" />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Close" onPress={handleClose} color="#e74c3c" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // semi-transparent black background
  },
  Content: {
    width: '80%',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    elevation: 3,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
    borderRadius: 4,
  },
  buttonContainer: {
    marginBottom: 16,
  },
});

export default Login;
