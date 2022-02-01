import * as React from 'react';
import { View, Text,Button } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const HomeStack = createNativeStackNavigator();

const Home =({navigation})=> {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button title="go to details"  
      onPress={() => navigation.navigate('Detail')}/>
    </View>
  );
}

const HomeScreen=()=>{
return(
  <HomeStack.Navigator 
     screenOptions={{  
        headerStyle: {
            backgroundColor: '#008c26',
          },
           headerTintColor: '#fff',
        headerTitleStyle: {
           fontWeight: 'bold',
        }, }}>

        <HomeStack.Screen name="Home" component={Home}    
      options={{
           title: 'My home',  
          }}
           />
          
         
       </HomeStack.Navigator>);
}
export default HomeScreen;
