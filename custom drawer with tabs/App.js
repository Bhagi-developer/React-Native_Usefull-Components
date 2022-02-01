// In App.js in a new project
// ---------------
// passing stack navigator to Drawer Navigator as component
//HomeStack to Home and DetailStack to Detail
// this stack navigators are HomeStack and DetailStack
//Both are treated as Stack itself
//HomeStack has Home component and
//DetailStack has Detail component
// Above structure is for Drawer and Stack Navigator combine screen
//......................
//stack can be used as a component in drawer and tab also
// ..........................
//drawer -->tab-->stack screen this is order of navigators in which we can use next as component 


import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainScreen from './components/Screens/MainScreen';

import DrawerContent from "./components/Screens/DrawerContent";
import SupportScreen from "./components/Screens/SupportScreen";
import SettingScreen from "./components/Screens/SettingScreen";
import BookmarkScreen from "./components/Screens/BookmarkScreen";




const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props =><DrawerContent {...props} />}  >
        <Drawer.Screen name="App" component={MainScreen} />
         <Drawer.Screen name="SupportScreen" component={SupportScreen} />
          <Drawer.Screen name="SettingScreen" component={SettingScreen} />
           <Drawer.Screen name="BookmarkScreen" component={BookmarkScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
