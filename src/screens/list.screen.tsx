import React from 'react';
import { SafeAreaView, TouchableOpacity, View } from 'react-native';
import { MarketingSlider } from '../components/marketing-slider.component';
import { DATA } from '../config/travel';
import { SPACING } from '../config/theme';
import { Icon } from '../components/icon.component';

export const ListScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
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
              onPress={() => {}}>
              <Icon uri={item.imageUri} />
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
};
