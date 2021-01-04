import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SignUpScreen from './screens/SignUp';

export default function App() {
  return (
    <View style={styles.container}>
      <SignUpScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: '10%',
    marginHorizontal: '5%'
  },
});
