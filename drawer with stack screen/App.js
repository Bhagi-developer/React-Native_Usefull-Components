// In App.js in a new project
// ---------------
// passing stack navigator to Drawer Navigator as component
//HomeStack to Home and DetailStack to Detail
// this stack navigators are HomeStack and DetailStack
//Both are treated as Stack itself
//HomeStack has Home component and 
//DetailStack has Detail component
// Above structure is for Drawer and Stack Navigator combine screen

import * as React from 'react';
import { View, Text,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './Screens/HomeScreen';
import DetailScreen from './Screens/DetailsScreen';

const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Details" component={DetailScreen} />
      </Drawer.Navigator>

    </NavigationContainer>
  );
}

export default App;