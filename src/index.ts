// Import the functions you need from the SDKs you need
import { initializeApp } from "@firebase/app";
import { initializeFirestore } from "@firebase/firestore";

import postSasaSretanRodjendan from "./postSasaSretanRodjendan";
import useSasaSretanRodjendan from "./useSasaSretanRodjendan";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcnKLSFK5kzEE1sUtFG0fDiEja_IlCx8k",
  authDomain: "sasa-sretan-rodjendan.firebaseapp.com",
  projectId: "sasa-sretan-rodjendan",
  storageBucket: "sasa-sretan-rodjendan.appspot.com",
  messagingSenderId: "843107906749",
  appId: "1:843107906749:web:1429be7e389e120870b3d4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firestore
initializeFirestore(app);

export { postSasaSretanRodjendan, useSasaSretanRodjendan };
