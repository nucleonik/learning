import { View, Text } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';

const ExploreLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="explore" />
    </Stack>
  );
};

export default ExploreLayout;
