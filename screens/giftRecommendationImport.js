import firebase from 'firebase/app';
import { auth } from "../firebase";
import 'firebase/firestore';

// Array of gift recommendations
const giftRecommendationImport = [
  {
    gender: 'male',
    age: 25,
    interest: 'sports',
    gift: 'Football Jersey',
  },
  {
    gender: 'female',
    age: 30,
    interest: 'fashion',
    gift: 'Designer Handbag',
  },
  {
    gender: 'male',
    age: 40,
    interest: 'technology',
    gift: 'Smartwatch',
  },
  {
    gender: 'female',
    age: 20,
    interest: 'books',
    gift: 'Bestselling Novel',
  },
  // Add more recommendations as needed
];

// Function to import gift recommendations into Firestore
const importGiftRecommendations = async () => {
  try {
    for (const recommendation of giftRecommendations) {
      await db.collection('giftRecommendations').add(recommendation);
    }
    console.log('Gift recommendations imported successfully!');
  } catch (error) {
    console.error('Error importing gift recommendations:', error);
  }
};

export default giftRecommendationImport;
