// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
