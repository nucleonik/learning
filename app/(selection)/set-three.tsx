import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import { router } from 'expo-router';

const SetThree = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const RouterPageThree = () => {
    if (!selectedOption) {
      setErrorMessage('Please select an option before proceeding.');
    } else {
      setErrorMessage(''); // Clear any previous error message
      router.push('/(selection)/set-four');
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
            marginLeft: -95,
          }}
        >
          What is your age group?
        </Text>

        {/* Radio Buttons */}
        <View
          style={{
            marginTop: 20,
            alignItems: 'flex-start',
            width: '80%',
          }}
        >
          {/* Option:under 18 */}
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
            onPress={() => handleOptionSelect('less than 18 years')}
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
              {selectedOption === 'less than 18 years' && (
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
              less than 18 years
            </Text>
          </TouchableOpacity>

          {/* Option: 19-24 */}
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
            onPress={() => handleOptionSelect('19-24')}
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
              {selectedOption === '19-24' && (
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
            <Text style={{ color: 'white', fontSize: 16 }}>19-24</Text>
          </TouchableOpacity>

          {/* Option: 25-34 */}
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
            onPress={() => handleOptionSelect('25-34')}
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
              {selectedOption === '25-34' && (
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
            <Text style={{ color: 'white', fontSize: 16 }}>25-34</Text>
          </TouchableOpacity>

          {/* Option: 35 plus */}
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
            onPress={() => handleOptionSelect('35 plus')}
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
              {selectedOption === '35 plus' && (
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
            <Text style={{ color: 'white', fontSize: 16 }}>35 plus</Text>
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

export default SetThree;
