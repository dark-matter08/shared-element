import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { ICON_SIZE } from '../config/theme';

export const Icon = ({ uri }: { uri: string }) => {
  return (
    <View style={style.imageContainer}>
      <Image source={{ uri }} style={style.image} />
    </View>
  );
};

const style = StyleSheet.create({
  imageContainer: {
    width: ICON_SIZE,
    height: ICON_SIZE,
    borderRadius: ICON_SIZE / 2,
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: ICON_SIZE * 0.6,
    height: ICON_SIZE * 0.6,
    resizeMode: 'contain',
  },
});
