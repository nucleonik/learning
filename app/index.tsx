import React, { useEffect } from 'react';
import { View, SafeAreaView, ScrollView, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useRouter } from 'expo-router'; // Import useRouter for navigation

const Redirect = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/sign-in');
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
          }}
        >
          <Image
            style={{
              width: 200,
              alignItems: 'center',
              justifyContent: 'center',
              height: 200,
            }}
            source={require('../assets/images/react-logo.png')}
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor="black" style="dark" />
    </SafeAreaView>
  );
};

export default Redirect;
