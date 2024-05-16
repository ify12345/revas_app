// ItemDetailScreen.js
import React from 'react';
import { View, Text, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ItemDetailScreen = ({ route }) => {
  const { item } = route.params;

  return (
    <SafeAreaView>
      {/* Display details of the clicked item */}
      <Text>{item.topic}</Text>
      <Image source={item.image} style={{ width: 80, height: 80 }} />
      <Text>Type of plastics: {item.types}</Text>
      <Text>Duration: {item.Duration}</Text>
      <Text>Volume(In tones): {item.volume}</Text>
      <Text>Price(in USD): {item.Price}</Text>
      {/* Add styling as needed */}
    </SafeAreaView>
  );
};

export default ItemDetailScreen;
