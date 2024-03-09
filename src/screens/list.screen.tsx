import React from 'react';
import { SafeAreaView, TouchableOpacity, View } from 'react-native';
import { MarketingSlider } from '../components/marketing-slider.component';
import { DATA } from '../config/travel';
import { SPACING } from '../config/theme';
import { Icon } from '../components/icon.component';
import { SharedElement } from 'react-navigation-shared-element';
import { BackIcon } from '../components/back-icon.component';

export const ListScreen = ({ navigation }: { navigation: any }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <BackIcon
        onPress={() => {
          navigation.goBack();
        }}
      />
      <MarketingSlider />
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
          marginVertical: 20,
        }}>
        {DATA.map((item) => {
          return (
            <TouchableOpacity
              key={item.id}
              style={{
                padding: SPACING,
                // backgroundColor: '#ddd',
              }}
              onPress={() => {
                navigation.push('Details', { item });
              }}>
              <SharedElement id={`item.${item.id}.icon`}>
                <Icon uri={item.imageUri} />
              </SharedElement>
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
};
