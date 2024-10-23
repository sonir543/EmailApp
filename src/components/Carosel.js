import React from 'react';
import { View, Text } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const CarouselComponent = ({ data }) => {
  const renderItem = ({ item }) => (
    <View>
      <Text>{item}</Text>
    </View>
  );

  return (
    <Carousel
      data={data}
      renderItem={renderItem}
      sliderWidth={300}
      itemWidth={250}
    />
  );
};

export default CarouselComponent;
