import * as React from 'react';
import { Text, View,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from './HomeScreen';
import DetailScreen from './DetailsScreen';
import ProfileScreen from './ProfileScreen';
import SettingScreen from './SettingScreen';



const HomeStack = createNativeStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#00ad14',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
         headerShown: false
      }}>
      <HomeStack.Screen name="Home Screen" component={HomeScreen} />
    </HomeStack.Navigator>
  );
};

const DetailStack = createNativeStackNavigator();

const DetailStackScreen = () => {
  return (
    <DetailStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#ffffa1',
          color:"#000"
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
         headerShown: false
      }}>
      <DetailStack.Screen
        name="Detail Screen"
        component={DetailScreen}

        
      />
    </DetailStack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

const MainScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: '#000',
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarStyle:{
            backgroundColor:"#00ad14"
          },
          tabBarIcon: () => (
            <MaterialCommunityIcons name="home" color="#000" size={24}     />
          )
        }}
      />
      
      <Tab.Screen name="Detail" component={DetailStackScreen}
      options={{
          tabBarLabel: 'Details',
           tabBarStyle:{
            backgroundColor:"#ffffa1"
          },
          tabBarIcon: () => (
            <MaterialCommunityIcons name="bell-plus" color="#000" size={24}   />
          ),
        }}
         />
      <Tab.Screen name="Profile" component={ProfileScreen} 
      options={{
          tabBarLabel: 'Profile',
            tabBarStyle:{
            backgroundColor:"#4aacff"
          },
          tabBarIcon: () => (
            <MaterialCommunityIcons name="face-profile" color="#000" size={24}   />
          ),
        }}
        />
      <Tab.Screen name="Settings" component={SettingScreen} 
      options={{
          tabBarLabel: 'Settings',
           tabBarStyle:{
            backgroundColor:"#db8500"
          },
          tabBarIcon: () => (
            <MaterialCommunityIcons name="account-settings" color="#000" size={24}   />
          ),
        }}
        />
    </Tab.Navigator>
  );
};

export default MainScreen;
