// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTJg5jLGhZArdBOraOgNm1KDg_XMVk8k4",
  authDomain: "ecommercecart-8f750.firebaseapp.com",
  projectId: "ecommercecart-8f750",
  storageBucket: "ecommercecart-8f750.appspot.com",
  messagingSenderId: "781856284894",
  appId: "1:781856284894:web:40ca1d4a11dd7f290ba24f",
  measurementId: "G-9C30YXF6RW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app)