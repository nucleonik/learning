import { View, Text } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';

const HomeLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="home" />
      <Stack.Screen name="home-next" />
    </Stack>
  );
};

export default HomeLayout;
