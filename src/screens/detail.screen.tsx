import React, { useEffect, useRef } from 'react';
import {
  Animated,
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { BackIcon } from '../components/back-icon.component';
import { DATA } from '../config/travel';
import { ICON_SIZE, SPACING, width } from '../config/theme';
import { Icon } from '../components/icon.component';
import { SharedElement } from 'react-navigation-shared-element';

export const DetailScreen = ({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) => {
  const { item } = route?.params;
  const ref = useRef<any>();
  const selectedItemIndex = DATA.findIndex((i) => i.id === item.id);
  const mountedAnimated = useRef(new Animated.Value(0)).current;
  const activeIndex = useRef(new Animated.Value(selectedItemIndex)).current;
  const activeIndexAnimation = useRef(
    new Animated.Value(selectedItemIndex)
  ).current;

  const animation = (toValue: any, delay: number) =>
    Animated.timing(mountedAnimated, {
      toValue,
      duration: 500,
      delay,
      useNativeDriver: true,
    });

  useEffect(() => {
    Animated.parallel([
      Animated.timing(activeIndexAnimation, {
        toValue: activeIndex,
        duration: 300,
        useNativeDriver: true,
      }),
      animation(1, 500),
    ]).start();
  });

  const size = ICON_SIZE + SPACING * 2;
  const translateY = mountedAnimated.interpolate({
    inputRange: [0, 1],
    outputRange: [50, 0],
  });

  const translateX = activeIndexAnimation.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: [size, 0, -size],
  });

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <BackIcon
        onPress={() => {
          animation(0, 0).start(() => {
            navigation.goBack();
          });
        }}
      />
      <Animated.View
        style={{
          flexDirection: 'row',
          flexWrap: 'nowrap',
          marginVertical: 20,
          marginLeft: width / 2 - ICON_SIZE / 2 - SPACING,
          transform: [{ translateX }],
        }}>
        {DATA.map((item, index) => {
          const inputRange = [index - 1.2, index, index + 1.2];
          const opacity = activeIndexAnimation.interpolate({
            inputRange,
            outputRange: [0.6, 1, 0.6],
          });
          return (
            <TouchableOpacity
              key={item.id}
              style={{
                padding: SPACING,
              }}
              onPress={() => {
                activeIndex.setValue(index);
                ref.current.scrollToIndex({
                  index,
                  animated: true,
                });
              }}>
              <Animated.View style={{ alignItems: 'center', opacity }}>
                <SharedElement id={`item.${item.id}.icon`}>
                  <Icon uri={item.imageUri} />
                </SharedElement>
                <Text style={{ fontSize: 10 }}>{item.title}</Text>
              </Animated.View>
            </TouchableOpacity>
          );
        })}
      </Animated.View>
      <Animated.FlatList
        style={{ opacity: mountedAnimated, transform: [{ translateY }] }}
        ref={ref}
        data={DATA}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        bounces={false}
        initialScrollIndex={selectedItemIndex}
        showsHorizontalScrollIndicator={false}
        getItemLayout={(data, index) => ({
          length: width,
          offset: width * index,
          index,
        })}
        renderItem={({ item }) => {
          return (
            <ScrollView
              style={{
                width: width - SPACING * 2,
                margin: SPACING,
                backgroundColor: 'rgba(0, 0, 0, 0.2)',
                borderRadius: 16,
              }}>
              <View style={{ padding: SPACING }}>
                <Text style={{ fontSize: 16 }}>
                  {Array(50).fill(`${item.title} inner text \n`)}
                </Text>
              </View>
            </ScrollView>
          );
        }}
        onMomentumScrollEnd={(e) => {
          const newIndex = Math.floor(e.nativeEvent.contentOffset.x / width);
          activeIndex.setValue(newIndex);
        }}
      />
    </SafeAreaView>
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
