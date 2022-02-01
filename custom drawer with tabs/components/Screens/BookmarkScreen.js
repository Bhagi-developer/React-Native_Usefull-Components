import * as React from 'react';
import { View, Text,Button } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const BookmarkScreen =({navigation})=> {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Bookmark Screen</Text>
    </View>
  );
}


export default BookmarkScreen;
