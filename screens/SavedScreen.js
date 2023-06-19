import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Image,
  Alert
} from "react-native";
import { AntDesign } from '@expo/vector-icons';

import React, { useLayoutEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import Header from "../components/Header";
import { Feather } from "@expo/vector-icons";
import { FontAwesome5 } from '@expo/vector-icons';
import { auth, db } from "../firebase";
import { FontAwesome } from '@expo/vector-icons';
import { addDoc, collection } from "firebase/firestore";


const SavedScreen = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [recipientAge, setRecipientAge] = useState('');
  const [interest, setInterest] = useState('');
  const [gift, setGift] = useState('');

  const handleAddToWishlist = () => {
    const collectionRef = collection(db, "wishlist");
    
  
    addDoc(collectionRef, {
      name,
      recipientAge,
      interest,
      gift,
    })
      .then(() => {
        console.log("Data added to Firestore successfully!");
        Alert.alert("Success", "Data added to Firestore successfully!");
        setName('');
      setRecipientAge('');
      setInterest('');
      setGift('');
        navigation.navigate('Wish', {
          name: name,
          recipientAge: recipientAge,
          interest: interest,
          gift: gift,
        });
      })
      .catch((error) => {
        console.error("Error adding data to Firestore: ", error);
        Alert.alert("Error", "Error adding data to Firestore");
      });
  };
  
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Recommend a gift",
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
      },
      headerStyle: {
        backgroundColor: "#8b0000",
        height: 110,
        borderBottomColor: "transparent",
        shadowColor: "transparent",
      },
    });
  }, []);

  return (
    <>
      <View>
        <Header />

        <ScrollView>
          <View
            style={{
              margin: 50,
              borderColor: "#FFC72C",
              borderWidth: 3,
              borderRadius: 6,
            }}
          >
            <Pressable
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
                paddingHorizontal: 10,
                borderColor: "#FFC72C",
                borderWidth: 2,
                paddingVertical: 15,
              }}
            >
              <AntDesign name="user" size={24} color="black" />
              <TextInput
                style={styles.input}
                value={name}
                onChangeText={setName}
                placeholder="Enter recipient's name"
              />
            </Pressable>

            <Pressable
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
                paddingHorizontal: 10,
                borderColor: "#FFC72C",
                borderWidth: 2,
                paddingVertical: 15,
              }}
            >
              <Feather name="calendar" size={24} color="black" />
              <TextInput
                style={styles.input}
                value={recipientAge}
                onChangeText={setRecipientAge}
                placeholder="Enter recipient's age"
                keyboardType="numeric"
              />
            </Pressable>

            <Pressable
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
                paddingHorizontal: 10,
                borderColor: "#FFC72C",
                borderWidth: 2,
                paddingVertical: 15,
              }}
            >
              <AntDesign name="hearto" size={24} color="black" />
              <TextInput
                style={styles.input}
                value={interest}
                onChangeText={setInterest}
                placeholder="Enter the interest"
              />
            </Pressable>

            <Pressable
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
                paddingHorizontal: 10,
                borderColor: "#FFC72C",
                borderWidth: 2,
                paddingVertical: 15,
              }}
            >
              <FontAwesome5 name="gifts" size={24} color="black" />
              <TextInput
                style={styles.input}
                value={gift}
                onChangeText={setGift}
                placeholder="Enter the gift name"
              />
            </Pressable>

            <Pressable
              onPress={handleAddToWishlist}
              style={{
                paddingHorizontal: 10,
                borderColor: "#FFC72C",
                borderWidth: 2,
                paddingVertical: 15,
                backgroundColor: "#8b0000",
              }}
              disabled={!name || !recipientAge || !interest || !gift}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 15,
                  fontWeight: "500",
                  color: "white",
                }}
              >
                Add to Wishlist
              </Text>
            </Pressable>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default SavedScreen;

const styles = StyleSheet.create({
  title: {
    color: 'white'
  },
  description: {
    color: 'white'
  },
  questionnaire: {
    color: '#8b0000',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 20,
    paddingBottom: 0
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingLeft: 10,
    color: "black",
  }
});
