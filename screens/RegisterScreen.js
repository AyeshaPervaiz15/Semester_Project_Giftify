import { StyleSheet, Text, View ,SafeAreaView,KeyboardAvoidingView,Pressable,TextInput, Alert,Button} from 'react-native'
import React ,{useState,useEffect} from 'react'
import { useNavigation } from '@react-navigation/native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../firebase';
//import { setDoc,doc } from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';



// const RegisterScreen = () => {
//     const [email,setEmail] = useState("");
//     const [password,setPassword] = useState("");
//     const [phone,setPhone] = useState("");
//     const navigation = useNavigation();
//     const register = () => {
//         if(email === "" || password === "" || phone === "" ){
//             Alert.alert(
//                 "Invalid Detials",
//                 "Please enter all the credentials",
//                 [
//                   {
//                     text: "Cancel",
//                     onPress: () => console.log("Cancel Pressed"),
//                     style: "cancel"
//                   },
//                   { text: "OK", onPress: () => console.log("OK Pressed") }
//                 ],
//                 { cancelable: false }
//               );
//         }
//         createUserWithEmailAndPassword(auth,email,password).then((userCredentials) => {
           
//             const user = userCredentials._tokenResponse.email;
//             const uid = auth.currentUser.uid;

//              setDoc(doc(db,"users",`${uid}`),{
//                  email:user,
//                  phone:phone
//              })
//         })
//     }
//   return (
//     <SafeAreaView  style={{
//         flex: 1,
//         backgroundColor: "white",
//         padding: 10,
//         alignItems: "center",
//       }}>
//     <KeyboardAvoidingView>
//         <View
//           style={{
//             justifyContent: "center",
//             alignItems: "center",
//             marginTop: 100,
//           }}
//         >
//           <Text style={{ color: "#8b0000", fontSize: 17, fontWeight: "700" }}>
//             Register
//           </Text>

//           <Text style={{ marginTop: 15, color: "gray", fontSize: 18, fontWeight: "500" }}>
//            Create an Account
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
//               placeholderTextColor={"grey"}
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
//               placeholderTextColor={"grey"}
//               style={{
//                 fontSize: password ? 18 : 18,
//                 borderBottomColor: "gray",
//                 borderBottomWidth: 1,
//                 marginVertical: 10,
//                 width: 300,
//               }}
//             />
//           </View>

//           <View style={{ marginTop: 15 }}>
//             <Text style={{ fontSize: 18, fontWeight: "600", color: "#8b0000" }}>
//               Phone
//             </Text>

//             <TextInput
//               value={phone}
//               onChangeText={(text) => setPhone(text)}
//               placeholder="Enter your phone"
//               placeholderTextColor={"grey"}
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
//         onPress={register}
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
//           <Text style={{textAlign:"center",color:"white",fontSize:17,fontWeight:"bold"}}>Register</Text>
//         </Pressable>

//         <Pressable onPress={() => navigation.goBack()} style={{marginTop:20}}>
//             <Text style={{textAlign:"center",color:"#ff8c00",fontSize:17}}>Already have an account? Sign In</Text>
//         </Pressable>
//       </KeyboardAvoidingView>
//     </SafeAreaView>
//   )
// }

// export default RegisterScreen

// const styles = StyleSheet.create({})

// import React, { useState, useEffect } from 'react';
// import { View, Text,TextInput, Button, StyleSheet } from 'react-native';
// import { auth } from './firebase';
//import { createUserWithEmailAndPassword } from 'firebase/auth';

const RegisterScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleSignUpPress = async () => {
    console.log('Signup clicked!');
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Handle Sign In');
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('user data:', user);
        // Handle successful login, navigate to another screen, etc.
        //navigation.reset({ index: 0, routes: [{ name: 'Home' }] });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert('Please fill the textFields first and provide us required info');
        // Handle login error, display error message, etc.
      });
  };

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        console.log('useEffect to check sign IN', user.email);
        // navigation.reset({ index: 0, routes: [{ name: "Home" }] });
      }
    });
  }, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#ff8c00',
        padding: 10,
        alignItems: 'center',
      }}
    >
      <KeyboardAvoidingView>
        <View style={styles.container}>
          <Text style={styles.text}>
             Welcome to the world of gifts
          </Text>
          <TextInput
            style={styles.input}
            placeholder="First Name"
            autoCapitalize="words"
          />
          <TextInput
            style={styles.input}
            placeholder="Last Name"
            autoCapitalize="words"
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />
          <Button
            title="Sign Up"
            onPress={handleSignUpPress}
            color="#8b0000"
          />
          <Pressable onPress={() => navigation.goBack()} style={{ marginTop: 20 }}>
            <Text style={{ textAlign: 'center', color: '#8b0000', fontSize: 17 }}>
              Already have an account? Sign In
            </Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'orange',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#8b0000',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default RegisterScreen;
