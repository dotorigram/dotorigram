import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: 'AIzaSyBhaRiJhGfdOsjoSrFPUIHuRssdvW6NaAA',
  authDomain: 'instagram-490bd.firebaseapp.com',
  projectId: 'instagram-490bd',
  storageBucket: 'instagram-490bd.appspot.com',
  messagingSenderId: '840690280564',
  appId: '1:840690280564:web:0931dc4ef0f56a3e71c921',
  measurementId: 'G-RH78R356N2',
  serviceAccountId: 'my-client-id@my-project-id.iam.gserviceaccount.com',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//인증 및 앱 초기화

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
