import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, KeyboardAvoidingView, Dimensions } from 'react-native';
import { auth } from '../firebase/firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';



const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [screenWidth, setScreenWidth] = useState(Dimensions.get('window').width);
    
    // useEffect(() => {
    //     const onChange = () => {
    //         const width = Dimensions.get('window').width;
    //         setScreenWidth(width);
    //     };

    //     Dimensions.addEventListener('change', onChange);
    //     return () => {
    //         Dimensions.removeEventListener('change', onChange);
    //     };
    // }, []);

    const handleLogin = () => {
      auth
        signInWithEmailAndPassword(auth, email, password)
        .then(userCredentials => {
          const user = userCredentials.user;
          console.log('Logged in with:', user.email);
        })
        .catch(error => alert(error.message))
    }
  
    const handleSignup = () => {
        auth
        createUserWithEmailAndPassword(auth, email, password)
        .then(userCredentials => {
          const user = userCredentials.user;
          console.log('Registered with:', user.email);
        })
        .catch((error) => {
            alert(error.message);
        });
    };

    return (
        <KeyboardAvoidingView 
            style={styles.container}
            behavior="padding"
        >
            <View style={[styles.content, { width: screenWidth > 500 ? '50%' : '80%' }]}>
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
                    <Button title="Signup" onPress={handleSignup} color="#f1c40f" />
                </View>
            </View>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    content: {
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

