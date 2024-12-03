import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';

const SetOne = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option: any) => {
    setSelectedOption(option);
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
          }}
        >
          Do You have any experience in farming?
        </Text>

        {/* Radio Buttons */}
        <View style={{ marginTop: 20, alignItems: 'flex-start', width: '80%' }}>
          {/* Option: Apple */}
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 15,
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

          {/* Option: Mango */}
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 15,
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

          {/*have lot of experince*/}
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
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
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SetOne;
