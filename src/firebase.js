// Import the functions you need from the SDKs you need
import 'firebase/firestore';

import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJYpQ5LKhg29Jt76d1HG8B2M7ApJHSmk4",
  authDomain: "app-auth-web.firebaseapp.com",
  projectId: "app-auth-web",
  storageBucket: "app-auth-web.appspot.com",
  messagingSenderId: "577958723905",
  appId: "1:577958723905:web:f635a54014e0703339a1c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//firebase.initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

//const firestore = firebase.firestore();

//export { firestore };
/*firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();*/

    export { auth, db };

export default app;
