import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router'; // Use `useRouter` for navigation

const Home = () => {
  const router = useRouter(); // Get router instance

  const navigateToHomePage = () => {
    router.push('/(tabs)/(home)/home-two'); // Navigate to the second page
  };

  return (
    <SafeAreaView>
      <View
        style={{
          alignItems: 'center',
          backgroundColor: '#2E2E2E',
          paddingTop: 50,
          minHeight: '100%',
        }}
      >
        <View>
          <Image
            resizeMode="contain"
            style={{ height: 80, width: 290, marginTop: 30 }}
            source={require('../../assets/images/logokrishi.png')}
          />
        </View>
        <View style={{ marginTop: 60 }}>
          <Image
            style={{ height: 200, width: 200 }}
            source={require('../../assets/images/teacher-education.gif')}
          />
        </View>
        <View style={{ marginTop: 30, width: 300 }}>
          <Text style={{ color: 'white', fontSize: 28, textAlign: 'center' }}>
            All done!
          </Text>
        </View>
        <View style={{ width: 330 }}>
          <Text style={{ color: 'white', fontSize: 28, textAlign: 'center' }}>
            Let's try a lesson for free!
          </Text>
        </View>
        <TouchableOpacity onPress={navigateToHomePage}>
          <View
            style={{
              backgroundColor: 'white',
              width: 310,
              height: 40,
              borderWidth: 1,
              borderColor: 'white',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 20,
            }}
          >
            <Text
              style={{ textAlign: 'center', fontSize: 20, fontWeight: '400' }}
            >
              Next
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Home;
