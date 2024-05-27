import React, { useState, useEffect } from 'react'

import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/Navigator/Navigation';
import Login from './src/login/login';
import { auth } from './src/firebase/firebase';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(setUser);
    return unsubscribe;
  }, []);

  return (
    <NavigationContainer>
      {user ? <Navigation/> : <Login/>}
    </NavigationContainer>
  );
}; 
  
export default App;
