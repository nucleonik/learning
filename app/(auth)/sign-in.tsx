import {
  View,
  Text,
  TouchableWithoutFeedback,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
  ActivityIndicator,
  Alert,
  Keyboard,
} from 'react-native';
import React, { useState } from 'react';
import { router, Stack } from 'expo-router';
import { TextInput } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const API_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:5000';

  //   const handleSignIn = async () => {
  //     if (!email || !password) {
  //       Alert.alert('Error', 'Please enter both email and password');
  //       return;
  //     }

  //     console.log('Sending:', { email, password }); // Log payload

  //     try {
  //       const response = await fetch(`${API_URL}/api/auth/signin`, {
  //         method: 'POST',
  //         headers: { 'Content-Type': 'application/json' },
  //         body: JSON.stringify({ email, password }),
  //       });

  //       const data = await response.json();
  //       console.log('Response:', response.status, data); // Log status and response

  //       if (response.ok) {
  //         await AsyncStorage.setItem('userToken', data.token);
  //         Alert.alert('Success', 'Signed in successfully');
  //         router.push('/(tabs)');
  //       } else {
  //         Alert.alert('Error', data.message || 'Failed to sign in');
  //       }
  //     } catch (error) {
  //       console.error('Error:', error);
  //       Alert.alert('Error', 'Failed to connect to server');
  //     }
  //   };
  const RouterHome = () => {
    router.push('/(selection)/set-one');
  };
  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <SafeAreaView style={{ backgroundColor: '#2E2E2E', flex: 1 }}>
        <ScrollView
          contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
          keyboardShouldPersistTaps="handled"
        >
          <View style={{ backgroundColor: '#2E2E2E', alignItems: 'center' }}>
            <Image
              resizeMode="contain"
              style={{ height: 70, width: 280 }}
              source={require('../../assets/images/logokrishi.png')}
            />
            <Text
              style={{
                fontSize: 20,
                marginTop: 50,
                marginBottom: 10,
                fontWeight: '500',
                color: 'white',
              }}
            >
              Sign In
            </Text>
            <TextInput
              style={{
                width: 260,
                height: 40,
                borderWidth: 1,
                borderColor: '#37474F',
                borderRadius: 4,
                marginBottom: 10, // Add spacing between inputs
                paddingLeft: 5,
                color: 'black',
                justifyContent: 'center',
                backgroundColor: 'white',
              }}
              placeholder="Email"
              onChangeText={setEmail}
              placeholderTextColor="#242424"
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <TextInput
              style={{
                width: 260,
                height: 40,
                borderWidth: 1,
                borderColor: '#37474F',
                borderRadius: 4,
                paddingLeft: 5,
                backgroundColor: 'white',
                color: 'black',
              }}
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              placeholderTextColor="#242424"
              secureTextEntry // Hide password input
            />
            {loading ? (
              <ActivityIndicator
                size="large"
                color="#60ADDD"
                style={{ marginTop: 10 }}
              />
            ) : (
              <TouchableOpacity onPress={RouterHome}>
                <View
                  style={{
                    height: 40,
                    width: 260,
                    backgroundColor: 'white',
                    borderRadius: 4,
                    marginTop: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Text style={{ color: 'dark', fontWeight: '600' }}>
                    Sign In
                  </Text>
                </View>
              </TouchableOpacity>
            )}
            <TouchableOpacity onPress={() => router.push('/')}>
              <Text style={{ color: 'white', fontSize: 16, marginTop: 10 }}>
                Forgot your Password?
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <StatusBar backgroundColor="#2E2E2E" style="light" />
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default SignIn;
