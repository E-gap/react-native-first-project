// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// for database
const firebaseConfig = {
  apiKey: "AIzaSyCR3pOI_IwK9wg55E9uTV9S3lwRs_HTVOM",
  authDomain: "rn-first-project-ff4ec.firebaseapp.com",
  databaseURL: "https://rn-first-project-ff4ec-default-rtdb.firebaseio.com",
  projectId: "rn-first-project-ff4ec",
  storageBucket: "rn-first-project-ff4ec.appspot.com",
  messagingSenderId: "802156708381",
  appId: "1:802156708381:web:22ca304e5cc6f79e9c7cf4",
  measurementId: "G-ZYRRSS1PZ1",
};

//for firestore
/* const firebaseConfig = {
  apiKey: "AIzaSyAwY8kapyXgjZT5ZORp7DlSm7auXJCSkKU",
  authDomain: "first-firebase-13041.firebaseapp.com",
  projectId: "first-firebase-13041",
  storageBucket: "first-firebase-13041.appspot.com",
  messagingSenderId: "65166446389",
  appId: "1:65166446389:web:a03fe0c5806dbdca9f867c",
  measurementId: "G-9V1NZ56JS1",
}; */

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const storage = getStorage();
export const database = getDatabase(app);
