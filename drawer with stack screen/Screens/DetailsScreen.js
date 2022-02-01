import * as React from 'react';
import { View, Text,Button } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const DetailStack = createNativeStackNavigator();

const Detail =({navigation})=> {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Detail Screen</Text>
      <Button title="go to Home"  
      onPress={() => navigation.navigate('Home')}/>
    </View>
  );
}

const DetailScreen=()=>{
return(
  <DetailStack.Navigator 
     screenOptions={{  
        headerStyle: {
            backgroundColor: '#008c26',
          },
           headerTintColor: '#fff',
        headerTitleStyle: {
           fontWeight: 'bold',
        }, }}>

        <DetailStack.Screen name="Detail" component={Detail}    
      options={{
           title: 'Detail',  
          }}
           />
          
         
       </DetailStack.Navigator>);
}
export default DetailScreen;
