import React, { useRef } from 'react';
import {
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

export const DetailScreen = ({ navigation }: { navigation?: any }) => {
  const item = DATA[0];
  const ref = useRef<any>();
  const selectedItemIndex = DATA.findIndex((i) => i.id === item.id);
  console.log(DATA.length);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <BackIcon onPress={() => navigation.goBack()} />
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'nowrap',
          marginVertical: 20,
        }}>
        {DATA.map((item) => {
          return (
            <TouchableOpacity
              key={item.id}
              style={{
                padding: SPACING,
              }}
              onPress={() => {}}>
              <Icon uri={item.imageUri} />
            </TouchableOpacity>
          );
        })}
      </View>
      <FlatList
        ref={ref}
        data={DATA}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        bounces={false}
        initialScrollIndex={selectedItemIndex}
        style={{ flexGrow: 0, zIndex: 9999 }}
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
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
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
