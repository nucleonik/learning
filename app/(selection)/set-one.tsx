import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import { router } from 'expo-router';

const SetOne = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const RouterPageTwo = () => {
    if (!selectedOption) {
      setErrorMessage('Please select an option before proceeding.');
    } else {
      setErrorMessage(''); // Clear any previous error message
      router.push('/(selection)/set-two');
    }
  };

  const handleOptionSelect = (option: any) => {
    setSelectedOption(option);
    setErrorMessage(''); // Clear error when an option is selected
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          backgroundColor: '#2E2E2E',
          paddingTop: 30,
          minHeight: '100%',
        }}
      >
        <View style={{ alignItems: 'center' }}>
          <Image
            resizeMode="contain"
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              height: 70,
              width: 280,
            }}
            source={require('../../assets/images/logokrishi.png')}
          />
        </View>

        <Text
          style={{
            color: 'white',
            fontSize: 18,
            marginTop: 20,
            textAlign: 'center',
          }}
        >
          Do you have any experience in farming?
        </Text>

        {/* Radio Buttons */}
        <View
          style={{
            marginTop: 20,
            alignItems: 'center',
            width: '100%',
          }}
        >
          {/* Option: No Experience */}
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 15,
              borderWidth: 2,
              borderColor: 'white',
              paddingLeft: 10,
              width: 280,
              paddingTop: 10,
              paddingBottom: 10,
            }}
            onPress={() => handleOptionSelect('I have no experience')}
          >
            <View
              style={{
                height: 20,
                width: 20,
                borderRadius: 10,
                borderWidth: 2,
                borderColor: 'white',
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: 10,
              }}
            >
              {selectedOption === 'I have no experience' && (
                <View
                  style={{
                    height: 10,
                    width: 10,
                    borderRadius: 5,
                    backgroundColor: 'white',
                  }}
                />
              )}
            </View>
            <Text style={{ color: 'white', fontSize: 16 }}>
              I have no experience
            </Text>
          </TouchableOpacity>

          {/* Option: Some Experience */}
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 15,
              paddingLeft: 10,
              width: 280,
              paddingTop: 10,
              paddingBottom: 10,
              borderWidth: 2,
              borderColor: 'white',
            }}
            onPress={() => handleOptionSelect('I have some experience')}
          >
            <View
              style={{
                height: 20,
                width: 20,
                borderRadius: 10,
                borderWidth: 2,
                borderColor: 'white',
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: 10,
              }}
            >
              {selectedOption === 'I have some experience' && (
                <View
                  style={{
                    height: 10,
                    width: 10,
                    borderRadius: 5,
                    backgroundColor: 'white',
                  }}
                />
              )}
            </View>
            <Text style={{ color: 'white', fontSize: 16 }}>
              I have some experience
            </Text>
          </TouchableOpacity>

          {/* Option: Lots of Experience */}
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              borderWidth: 2,
              borderColor: 'white',
              paddingLeft: 10,
              width: 280,
              paddingTop: 10,
              paddingBottom: 10,
            }}
            onPress={() => handleOptionSelect('I have lots of experience')}
          >
            <View
              style={{
                height: 20,
                width: 20,
                borderRadius: 10,
                borderWidth: 2,
                borderColor: 'white',
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: 10,
              }}
            >
              {selectedOption === 'I have lots of experience' && (
                <View
                  style={{
                    height: 10,
                    width: 10,
                    borderRadius: 5,
                    backgroundColor: 'white',
                  }}
                />
              )}
            </View>
            <Text style={{ color: 'white', fontSize: 16 }}>
              I have lots of experience
            </Text>
          </TouchableOpacity>

          {/* Error Message */}
          {errorMessage ? (
            <Text
              style={{
                color: 'red',
                fontSize: 14,
                marginTop: 10,
                marginLeft: 5,
              }}
            >
              {errorMessage}
            </Text>
          ) : null}

          {/* Next Button */}
          <TouchableOpacity
            onPress={RouterPageTwo}
            style={{
              borderWidth: 2,
              borderColor: 'white',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'white',
              width: 280,
              height: 45,
              marginTop: 30,
            }}
          >
            <View>
              <Text
                style={{
                  color: 'black',
                  fontSize: 20,
                  textAlign: 'center',
                }}
              >
                Next
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SetOne;
