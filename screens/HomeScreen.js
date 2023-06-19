import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { ScrollView, Switch, StyleSheet, Text, TextInput, View, Pressable, Image } from "react-native";
import { Feather } from "@expo/vector-icons";
import { auth, db } from "../firebase";
import { addDoc, collection, doc, setDoc, onSnapshot } from "firebase/firestore";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [recipientGender, setRecipientGender] = useState("");
  const [recipientAge, setRecipientAge] = useState("");
  const [interest, setInterest] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const handleRecommendation = async () => {
    navigation.navigate("GiftRecommendation", {
      gender: recipientGender,
      age: recipientAge,
      interest: interest,
      darkMode: darkMode,
    });
  };

  const setThemePreference = async (value) => {
    try {
      const user = auth.currentUser;
      if (user) {
        const userId = user.uid;
        const userRef = doc(db, "users", userId);
        await setDoc(userRef, { darkMode: value }, { merge: true });

        // Update the theme immediately in the app
        setDarkMode(value);
      }
    } catch (error) {
      console.log("Error setting theme preference:", error);
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Dashboard",
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: "bold",
        color: darkMode ? "white" : "white",
      },
      headerStyle: {
        backgroundColor: darkMode ? "#8b0000" : "#8b0000",
        height: 110,
        borderBottomColor: "transparent",
        shadowColor: "transparent",
      },
    });
  }, [navigation, darkMode]);

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      const userId = user.uid;
      const userRef = doc(db, "users", userId);
      const unsubscribe = onSnapshot(userRef, (doc) => {
        const userData = doc.data();
        if (userData && userData.darkMode !== undefined) {
          setDarkMode(userData.darkMode);
        }
      });

      return () => unsubscribe();
    }
  }, []);

  const pressableData = [
    {
      title: '"Moto":',
      description: "Finding the perfect gift for your loved one can be challenging, but this shows how much you truly care.",
      style: {
        width: 200,
        height: 150,
        marginTop: 10,
        borderColor: darkMode ? "#ff8c00" : "#8b0000",
        backgroundColor: darkMode ? "#8b0000" : "#ff8c00",
        borderRadius: 10,
        padding: 10,
        marginHorizontal: 20,
        marginTop: 30,
      },
      logoStyle: styles.logo,
    },
    {
      title: '"Aim:"',
      description: "Our Aim is to make every happy moment more special",
      style: {
        width: 200,
        height: 150,
        marginTop: 10,
        borderColor: darkMode ? "#8b0000" : "#ff8c00",
        backgroundColor: darkMode ? "#ff8c00" : "#FFFFFF",
        borderWidth: 2,
        borderRadius: 10,
        padding: 20,
        marginHorizontal: 10,
        marginTop: 30,
      },
      logoStyle: styles.logo,
    },
    {
      title: '"Our logo:"',
      description: "",
      style: {
        width: 200,
        height: 150,
        marginTop: 10,
        borderColor: darkMode ? "#8b0000" : "#ff8c00",
        backgroundColor: darkMode ? "#ff8c00" : "#FFFFFF",
        borderWidth: 2,
        borderRadius: 10,
        padding: 20,
        marginHorizontal: 10,
        marginTop: 30,
      },
      logoStyle: styles.logo,
    },
    // Add more pressable data objects as needed
  ];

  return (
    <View style={darkMode ? styles.containerDark : styles.containerLight}>
      <Text style={styles.questionnaire}>Questionnaire:</Text>
      <Switch
        style={styles.switch}
        value={darkMode}
        onValueChange={(value) => {
          setDarkMode(value);
          setThemePreference(value);
        }}
      />
      <ScrollView>
        <View style={styles.contentContainer}>
          {/* Destination */}
          <Pressable style={styles.inputContainer}>
            <AntDesign name="user" size={24} color="black" />
            <TextInput
              style={styles.input}
              value={recipientGender}
              onChangeText={setRecipientGender}
              placeholder="Enter recipient's gender"
            />
          </Pressable>

          {/* Selected Dates */}
          <Pressable style={styles.inputContainer}>
            <Feather name="calendar" size={24} color="black" />
            <TextInput
              style={styles.input}
              value={recipientAge}
              onChangeText={setRecipientAge}
              placeholder="Enter recipient's age"
              keyboardType="numeric"
            />
          </Pressable>

          {/* Interests */}
          <Pressable style={styles.inputContainer}>
            <AntDesign name="hearto" size={24} color="black" />
            <TextInput
              placeholderTextColor="gray"
              style={styles.input}
              value={interest}
              onChangeText={setInterest}
              placeholder="Enter the interest:game/music/art"
            />
          </Pressable>

          {/* Recommend Button */}
          <Pressable onPress={handleRecommendation} style={styles.recommendButton}>
            <Text style={styles.recommendButtonText}>Recommend</Text>
          </Pressable>
        </View>

        <Text style={styles.chooseBestText}>"Choose Best for your loved ones"</Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {pressableData.map((item, index) => (
            <Pressable key={index} style={item.style}>
              <Text style={[styles.title, { color: darkMode ? "white" : "black" }]}>{item.title}</Text>
              <Text style={[styles.description, { color: darkMode ? "white" : "black" }]}>{item.description}</Text>
              <Image source={require("../assets/logo.png")} style={item.logoStyle} />
            </Pressable>
          ))}
        </ScrollView>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  containerLight: {
    flex: 1,
    backgroundColor: "white",
  },
  containerDark: {
    flex: 1,
    backgroundColor: "#8b0000",
  },
  contentContainer: {
    margin: 50,
    borderColor: "#FFC72C",
    borderWidth: 3,
    borderRadius: 6,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingHorizontal: 10,
    borderColor: "#FFC72C",
    borderWidth: 2,
    paddingVertical: 15,
  },
  input: {
    flex: 1,
  },
  recommendButton: {
    paddingHorizontal: 10,
    borderColor: "#FFC72C",
    borderWidth: 2,
    paddingVertical: 15,
    backgroundColor: "#8b0000",
  },
  recommendButtonText: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: "500",
    color: "white",
  },
  title: {
    color: "white",
  },
  description: {
    color: "white",
  },
  questionnaire: {
    color: "#8b0000",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: 20,
    paddingBottom: 0,
  },
  chooseBestText: {
    color: "#8b0000",
    marginHorizontal: 20,
    fontSize: 17,
    textAlign: "center",
    fontWeight: "500",
  },
  switch: {
    marginTop: 2,
  },
  logo: {
    width: 50,
    height: 50,
    marginTop: 10,
  },
});
