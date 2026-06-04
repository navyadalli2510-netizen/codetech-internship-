import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCIArTeWfVjJFOZtPP9JDuWs8bazxeCBx4",
  authDomain: "chatapp-bc9a4.firebaseapp.com",
  projectId: "chatapp-bc9a4",
  storageBucket: "chatapp-bc9a4.firebasestorage.app",
  messagingSenderId: "348029538073",
  appId: "1:348029538073:web:ff538299bd83b011ffff88",
  measurementId: "G-VY22Y0EK9H"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);