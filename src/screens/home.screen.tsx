import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';

export const HomeScreen = ({ navigation }: { navigation: any }) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#ddd',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('List');
        }}
        style={{
          width: '90%',
          height: 60,
          borderRadius: 10,
          borderColor: 'cyan',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'tomato',
        }}>
        <Text
          style={{
            fontSize: 19,
            color: 'white',
            fontWeight: '600',
          }}>
          Shared 1
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
