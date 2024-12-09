import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';

const HomePage = () => {
  return (
    <SafeAreaView>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#2E2E2E',
          minHeight: '100%',
        }}
      >
        <Text style={{ color: 'white', fontSize: 28 }}>
          Welcome to Home Page!
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default HomePage;
