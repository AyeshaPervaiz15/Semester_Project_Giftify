import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { ModalPortal } from "react-native-modals";
import { Provider } from "react-redux";
import StackNavigator from "./StackNavigator";
import store from "./store";
//import

import React, { useEffect } from 'react';
// import giftRecommendationImport from './screens/giftRecommendationImport';

export default function App() {
  // useEffect(() => {
  //   giftRecommendationImport();
  // }, []);
  return (
    <>
      <Provider store={store}>
        <StackNavigator />
        <ModalPortal />
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
