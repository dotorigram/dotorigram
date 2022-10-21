import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyAiyykF8ddk7Nj-9n7_vWOSTiwfPMfI8_8",
  authDomain: "dotorigram-49dcf.firebaseapp.com",
  projectId: "dotorigram-49dcf",
  storageBucket: "dotorigram-49dcf.appspot.com",
  messagingSenderId: "327763183414",
  appId: "1:327763183414:web:dbfe26da3fe266ea1e1597",
  measurementId: "G-CFXPGETBDB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Storage and get a reference to the service
export const storage = getStorage(app);

//인증 및 앱 초기화

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
