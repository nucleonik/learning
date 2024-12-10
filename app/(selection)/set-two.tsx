import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import { router } from 'expo-router';

const SetTwo = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const RouterPageThree = () => {
    if (!selectedOption) {
      setErrorMessage('Please select an option before proceeding.');
    } else {
      setErrorMessage(''); // Clear any previous error message
      router.push('/(selection)/set-three');
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
          alignItems: 'center',
          backgroundColor: '#2E2E2E',
          paddingTop: 30,
          minHeight: '100%',
        }}
      >
        <View>
          <Image
            resizeMode="contain"
            style={{ height: 70, width: 280, marginTop: 30 }}
            source={require('../../assets/images/logokrishi.png')}
          />
        </View>
        <Text
          style={{
            color: 'white',
            fontSize: 18,
            marginTop: 20,
            marginLeft: 10,
            textAlign: 'center',
          }}
        >
          What best describes you at this moment?
        </Text>

        {/* Radio Buttons */}
        <View
          style={{
            marginTop: 20,
            alignItems: 'center',
            width: '100%',
          }}
        >
          {/* Option: Entreprenuer */}
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
            onPress={() => handleOptionSelect('I am an enterprenuer')}
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
              {selectedOption === 'I am an enterprenuer' && (
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
              I am an enterprenuer
            </Text>
          </TouchableOpacity>

          {/* Option: I Study */}
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
            onPress={() => handleOptionSelect('I study')}
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
              {selectedOption === 'I study' && (
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
            <Text style={{ color: 'white', fontSize: 16 }}>I study</Text>
          </TouchableOpacity>

          {/* Option: I work */}
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
            onPress={() => handleOptionSelect('I work')}
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
              {selectedOption === 'I work' && (
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
            <Text style={{ color: 'white', fontSize: 16 }}>I work</Text>
          </TouchableOpacity>

          {/* Option: Others */}
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
              marginTop: 15,
            }}
            onPress={() => handleOptionSelect('Others')}
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
              {selectedOption === 'Others' && (
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
            <Text style={{ color: 'white', fontSize: 16 }}>Others</Text>
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
            onPress={RouterPageThree}
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

export default SetTwo;
