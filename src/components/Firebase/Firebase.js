import { initializeApp } from "firebase/app";

import {getFirestore, collection, query, where, getDocs} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCk4H1GMHuEIUe66gVzZpspM4gZtSrKNJ4",
  authDomain: "coderhouse-e-commerce.firebaseapp.com",
  projectId: "coderhouse-e-commerce",
  storageBucket: "coderhouse-e-commerce.appspot.com",
  messagingSenderId: "299234941324",
  appId: "1:299234941324:web:80dce5f40edfd935c29ea9"
};


const fb = initializeApp(firebaseConfig);

export const db = getFirestore(fb);