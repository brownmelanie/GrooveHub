// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVYclv70guTeqcVk-a_CDgw4cN7tPGLuI",
  authDomain: "groovehub-8beb7.firebaseapp.com",
  projectId: "groovehub-8beb7",
  storageBucket: "groovehub-8beb7.appspot.com",
  messagingSenderId: "374770580344",
  appId: "1:374770580344:web:002a3e4fa796aa695fe68d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore( app )