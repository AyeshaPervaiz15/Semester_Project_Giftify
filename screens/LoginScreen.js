import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  TextInput,
  Pressable,
  Image ,
  Button,
  TouchableOpacity
} from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../firebase";
import { signInWithEmailAndPassword, signInAnonymously } from 'firebase/auth';

// const LoginScreen = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigation = useNavigation();
//  const login = () => {
//      signInWithEmailAndPassword(auth,email,password).then((userCredential) => {
//         console.log("user credential", userCredential);
//         const user = userCredential.user;
//         console.log("user details", user);
//      })
//  }

//   useEffect(() => {
//     try {
//       const unsubscribe = auth.onAuthStateChanged((authUser) => {
//         if (authUser) {
//           navigation.navigate("Main");
//         }
//       });

//       return unsubscribe;
//     } catch (e) {
//       console.log(e);
//     }
//   }, []);

//   return (
//     <SafeAreaView
//       style={{
//         flex: 1,
//         backgroundColor: "white",
//         padding: 10,
//         alignItems: "center",
//       }}
//     >
//       <KeyboardAvoidingView>
//         <View
//           style={{
//             justifyContent: "center",
//             alignItems: "center",
//             marginTop: 100,
//           }}
//         >
//           <Text style={{ color: "#8b0000", fontSize: 17, fontWeight: "700" }}>
//             Sign In
//           </Text>

//           <Text style={{ color: "gray",marginTop: 15, fontSize: 18, fontWeight: "500" }}>
//             Sign In to Your Account
//           </Text>
//         </View>

//         <View style={{ marginTop: 50 }}>
//           <View>
//             <Text style={{ fontSize: 18, fontWeight: "600", color: "#8b0000" }}>
//               Email
//             </Text>

//             <TextInput
//               value={email}
//               onChangeText={(text) => setEmail(text)}
//               placeholder="Enter your email address"
//               placeholderTextColor={"gray"}
//               style={{
//                 fontSize: email ? 18 : 18,
//                 borderBottomColor: "gray",
//                 borderBottomWidth: 1,
//                 marginVertical: 10,
//                 width: 300,
//               }}
//             />
//           </View>

//           <View style={{ marginTop: 15 }}>
//             <Text style={{ fontSize: 18, fontWeight: "600", color: "#8b0000" }}>
//               Password
//             </Text>

//             <TextInput
//               value={password}
//               onChangeText={(text) => setPassword(text)}
//               secureTextEntry={true}
//               placeholder="Password"
//               placeholderTextColor={"gray"}
//               style={{
//                 fontSize: password ? 18 : 18,
//                 borderBottomColor: "gray",
//                 borderBottomWidth: 1,
//                 marginVertical: 10,
//                 width: 300,
//               }}
//             />
//           </View>
//         </View>

//         <Pressable
//         onPress={login}
//           style={{
//             width: 200,
//             backgroundColor: "#8b0000",
//             padding: 15,
//             borderRadius: 7,
//             marginTop: 50,
//             marginLeft: "auto",
//             marginRight: "auto",
//           }}
//         >
//           <Text
//             style={{
//               textAlign: "center",
//               color: "white",
//               fontSize: 17,
//               fontWeight: "bold",
//             }}
//           >
//             Login
//           </Text>
//         </Pressable>

//         <Pressable
//           onPress={() => navigation.navigate("Register")}
//           style={{ marginTop: 20 }}
//         >
//           <Text style={{ textAlign: "center", color: "#ff8c00", fontSize: 17 }}>
//             Don't have an account? Sign up
//           </Text>
//         </Pressable>
//       </KeyboardAvoidingView>
//     </SafeAreaView>
//   );
// };

// export default LoginScreen;

// const styles = StyleSheet.create({});

//import React, { useState, useEffect } from 'react';
//import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';
//import { auth } from './firebase';
//import { signInWithEmailAndPassword, signInAnonymously } from 'firebase/auth';
//import { useNavigation } from '@react-navigation/native';

const LoginScreen= () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLoginPress = async () => {
    console.log('Login clicked!');
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Handle Sign In');

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log('user data:', user);

      navigation.reset({
        index: 0,
        routes: [{ name: 'HomeScreen' }],
      });
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert('Failed to login:', errorMessage);
    }
  };

  const handleSignUpPress = () => {
    navigation.navigate('Register');
  };

  const handleResetPress = () => {
    // Perform reset logic here
  };

  const signInGuest = async () => {
    try {
      await signInAnonymously(auth);
      navigation.navigate('HomeScreen');
    } catch (error) {
      console.log('Failed to sign in as a guest user:', error);
    }
  };

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        console.log('useEffect to check sign IN', user.email);
        navigation.reset({ index: 0, routes: [{ name: 'HomeScreen' }] });
      }
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>GIFTIFY!</Text>
      <Image source={require('../assets/G9.png')} style={styles.image} />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Login" onPress={handleLoginPress} color="#8b0000" />
      <Text style={styles.label}>Forgot Password?</Text>
      <Button title="Reset" onPress={handleResetPress} color="#ff8c00" />
      <Text style={styles.label}>Don't have an account?</Text>
      <Button title="Sign Up" onPress={handleSignUpPress} color="#ff8c00"/>
      <View style={{ flex: 0.2 }}>
        <TouchableOpacity
          onPress={signInGuest}  // Removed navigation.navigate('HomeScreen') from here
        >
          <Text
            style={{
              textAlign: 'center',
              marginTop: 16,
              color: '#8b0000',
              fontSize: 17,
              fontWeight: 'bold',
              textDecorationLine: 'underline',
              textDecorationStyle:'solid',
              textAlign: 'center',
            }}
          >
            Guest User
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orange',
    paddingHorizontal: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  label: {
    marginTop: 10,
    marginBottom: 5,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#a52a2a',
   // textAlign: 'left',
    
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#8b0000',
  },
});

export default LoginScreen;
