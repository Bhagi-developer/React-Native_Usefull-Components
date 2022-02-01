import * as React from 'react';
import { Text, View } from 'react-native';
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
          backgroundColor: '#008c26',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
    </HomeStack.Navigator>
  );
};

const DetailStack = createNativeStackNavigator();

const DetailStackScreen = () => {
  return (
    <DetailStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#008c26',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <DetailStack.Screen
        name="Detail"
        component={DetailScreen}
        options={{
          title: 'Detail',
        }}
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
          tabBarIcon: () => (
            <MaterialCommunityIcons name="home" color="#000" size="50" />
          ),
        }}
      />
      <Tab.Screen name="Detail" component={DetailStackScreen}
      options={{
          tabBarLabel: 'Details',
          tabBarIcon: () => (
            <MaterialCommunityIcons name="bell-plus" color="#000" size="50" />
          ),
        }}
         />
      <Tab.Screen name="Profile" component={ProfileScreen} 
      options={{
          tabBarLabel: 'Profile',
          tabBarIcon: () => (
            <MaterialCommunityIcons name="face-profile" color="#000" size="50" />
          ),
        }}
        />
      <Tab.Screen name="Settings" component={SettingScreen} 
      options={{
          tabBarLabel: 'Settings',
          tabBarIcon: () => (
            <MaterialCommunityIcons name="account-settings" color="#000" size="50" />
          ),
        }}
        />
    </Tab.Navigator>
  );
};

export default MainScreen;
