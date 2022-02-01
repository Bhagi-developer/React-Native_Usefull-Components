import * as React from 'react';
import { View, Text,Button } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const DetailScreen =({navigation})=> {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Detail Screen</Text>
      <Button title="go to Home"  
      onPress={() => navigation.navigate('Home')}/>
    </View>
  );
}


export default DetailScreen;
