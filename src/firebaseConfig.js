// src/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDJYpQ5LKhg29Jt76d1HG8B2M7ApJHSmk4",
    authDomain: "app-auth-web.firebaseapp.com",
    projectId: "app-auth-web",
    storageBucket: "app-auth-web.appspot.com",
    messagingSenderId: "577958723905",
    appId: "1:577958723905:web:f635a54014e0703339a1c0"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
