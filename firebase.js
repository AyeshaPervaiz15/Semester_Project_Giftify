
import { getApp, initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBCeZCLoGznYvvCC_s-VsLG4-nV3XheGjY",
  authDomain: "giftapp-37e78.firebaseapp.com",
  projectId: "giftapp-37e78",
  storageBucket: "giftapp-37e78.appspot.com",
  messagingSenderId: "1010981812963",
  appId: "1:1010981812963:web:86fb6a22ca8ee3b359a3d6"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

export {auth,db};