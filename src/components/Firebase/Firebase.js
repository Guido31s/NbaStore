   
import firebase from 'firebase/app';

import 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyCk4H1GMHuEIUe66gVzZpspM4gZtSrKNJ4",
  authDomain: "coderhouse-e-commerce.firebaseapp.com",
  projectId: "coderhouse-e-commerce",
  storageBucket: "coderhouse-e-commerce.appspot.com",
  messagingSenderId: "299234941324",
  appId: "1:299234941324:web:80dce5f40edfd935c29ea9"
};

// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore();