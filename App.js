import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import appIndex from './src/pages/Index';
import Contacts from './src/pages/Contacts/';
import Information from './src/pages/Information/';
import AppCamera from './src/pages/Camera';

// const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function Tabs(){
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={appIndex} />
      <Tab.Screen name="Contacts" component={Contacts}/>
      <Tab.Screen name="Camera" component={AppCamera} />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator>
        <Stack.Screen name="Contacts" component={Contacts} />
        <Stack.Screen name="Information" component={Information} />
      </Stack.Navigator> */}
      <Drawer.Navigator>
        <Drawer.Screen name="Contacts" component={Contacts} />
        <Drawer.Screen name="Information" component={Information} />
        <Drawer.Screen name="Camera" component={AppCamera} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
