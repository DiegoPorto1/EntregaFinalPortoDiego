import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBxZiNzqMqNJdHIZvpBG3Va9bfqC3adt6o",
  authDomain: "proyectofinal-d2d49.firebaseapp.com",
  databaseURL: "https://proyectofinal-d2d49-default-rtdb.firebaseio.com",
  projectId: "proyectofinal-d2d49",
  storageBucket: "proyectofinal-d2d49.appspot.com",
  messagingSenderId: "981220918408",
  appId: "1:981220918408:web:d813bf198a3dfa10398b3d"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore (app)