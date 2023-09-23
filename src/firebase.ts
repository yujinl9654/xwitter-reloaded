// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBKZdKaql2DrddzlE5oKIxVHlXezWA2m_g',
  authDomain: 'xwitter-reloaded.firebaseapp.com',
  projectId: 'xwitter-reloaded',
  storageBucket: 'xwitter-reloaded.appspot.com',
  messagingSenderId: '751506541570',
  appId: '1:751506541570:web:092288e56f863bb9032b1b',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
