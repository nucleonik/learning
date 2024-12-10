import { Stack, Tabs } from 'expo-router';
import React from 'react';
import { Image, Platform, StyleSheet } from 'react-native';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 10,
          textAlign: 'center',
          marginBottom: 10,
        },
        tabBarStyle: {
          backgroundColor: 'black', // Set the tab bar background color to black
          borderTopWidth: 0, // Optional: remove the top border for a cleaner look
          height: Platform.OS === 'ios' ? 80 : 57,
        },
        tabBarActiveTintColor: 'white', // Active icon color
        tabBarInactiveTintColor: '#666666', // Inactive icon shadow color
      }}
    >
      {/* Home Tab */}
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <Image
              source={
                focused
                  ? require('../../assets/images/house.png')
                  : require('../../assets/images/house.png')
              }
              style={[
                styles.icon,
                { marginBottom: 1, height: 20, width: 24, tintColor: color },
              ]} // Apply the color dynamically
            />
          ),
        }}
      />

      {/* Explore Tab */}
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color, focused }) => (
            <Image
              source={
                focused
                  ? require('../../assets/images/search.png')
                  : require('../../assets/images/search.png')
              }
              style={[
                styles.icon,
                { marginBottom: 1, height: 24, width: 24, tintColor: color },
              ]}
            />
          ),
        }}
      />

      {/* Menu Tab */}
      <Tabs.Screen
        name="menu"
        options={{
          title: 'Menu',
          tabBarIcon: ({ color, focused }) => (
            <Image
              source={
                focused
                  ? require('../../assets/images/setting.png')
                  : require('../../assets/images/setting.png')
              }
              style={[
                styles.icon,
                { marginBottom: 1, height: 24, width: 24, tintColor: color },
              ]}
            />
          ),
        }}
      />

      {/* Stack Navigation Example */}
      <Stack.Screen name="home-redirect" />
    </Tabs>
  );
}

// Custom styles for the icons
const styles = StyleSheet.create({
  icon: {
    width: 28,
    height: 28,
    marginBottom: -5, // Adjust the vertical alignment of icons if needed
  },
});
