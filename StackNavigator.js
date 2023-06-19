import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from '@expo/vector-icons';
import SavedScreen from "./screens/SavedScreen";
import Wish from "./screens/Wish";
import ProfileScreen from "./screens/ProfileScreen";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "./screens/LoginScreen";
import Splash from "./Splash";
import RegisterScreen from "./screens/RegisterScreen";
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
//import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import GiftRecommendationScreen from "./screens/GiftRecommendationScreen";
// import { EventRegister } from "react-native-event-listeners";
// import {useState,useEffect} from "react";

// const [darkMode,setDarkMode]= useState(false);
const StackNavigator = () => {
  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();
  //const Stack = createStackNavigator();


  function BottomTabs() {
    return (
      <Tab.Navigator tabBarOptions={{
        activeTintColor: "#8b0000", // Set active tab label color to red
        inactiveTintColor: "#ff8c00", // Set inactive tab label color to black
      }}>
        
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: "Dashboad",
            headerShown: false,
            //tabBarLabelStyle:{color:"#ff8c00"},
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Entypo name="home" size={24} color="#8b0000" />
              ) : (
                <AntDesign name="home" size={24} color="#ff8c00" />
              ),
          }}
        />

        <Tab.Screen
          name="Saved"
          component={SavedScreen}
          options={{
            tabBarLabel: "Recommed",
            headerShown: false,
            //tabBarLabelStyle:{color:"#ff8c00"},
            tabBarIcon: ({ focused }) =>
              focused ? (
                <AntDesign name="heart" size={24} color="#8b0000" />
              ) : (
                <AntDesign name="hearto" size={24} color="#ff8c00" />
              ),
          }}
        />

        <Tab.Screen
          name="Wish"
          component={Wish}
          options={{
            tabBarLabel: "Whishlist",
           // tabBarLabelStyle:{color:"#ff8c00"},
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                
                <FontAwesome name="list" size={24} color="#8b0000" />
              ) : (
                
                <Feather name="list" size={24} color="#ff8c00" />
              ),
          }}
        />

        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: "Profile",
            headerShown: false,
            //tabBarLabelStyle: ({ focused }) => ({
              //color: focused ? "#8b0000" : "#000000", // Set color to red when focused, black otherwise
           // }),
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Ionicons name="person" size={24} color="#8b0000" />
                
              ) : (
                <Ionicons name="person-outline" size={24} color="#ff8c00" />
              ),
          }}
        />
      </Tab.Navigator>
    );
  }
  return (
    <NavigationContainer>
    
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen 
  name="Splash" 
  component={Splash} 
  options={{
    headerStyle: { backgroundColor: '#e3492b' },
   headerTitleStyle: { color: 'white' }
  }} 
/>
     
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Register" component={RegisterScreen} options={{headerShown:false}}/>
        <Stack.Screen name="HomeScreen" component={BottomTabs} options={{headerShown:false}}/>
        <Stack.Screen
        name="GiftRecommendation"
        component={GiftRecommendationScreen}
        options={{headerShown:true}}
      />
       {/* <Stack.Screen name="Saved" component={SavedScreen} options={{ headerShown: false }} />
  <Stack.Screen name="Wish" component={Wish} options={{ headerShown: false }} /> */}
     
        
      
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
