import { View, Text } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';

const SelectionLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="set-one" />
      <Stack.Screen name="set-two" />
      <Stack.Screen name="set-three" />
      <Stack.Screen name="set-four" />
    </Stack>
  );
};

export default SelectionLayout;
