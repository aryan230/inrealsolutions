// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMmMYEwvmH_w6HXaHWsSXUwEa5JH800TY",
  authDomain: "inrealsolutions-d2909.firebaseapp.com",
  projectId: "inrealsolutions-d2909",
  storageBucket: "inrealsolutions-d2909.appspot.com",
  messagingSenderId: "10006711674",
  appId: "1:10006711674:web:144562bb25f48893141ac3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
