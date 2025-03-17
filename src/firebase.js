// Import necessary functions from Firebase SDK
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpEBYGhQxgWQOwhpodtaAsV-7MSYrSllg",
  authDomain: "bishwajitportfolio.firebaseapp.com",
  projectId: "bishwajitportfolio",
  storageBucket: "bishwajitportfolio.firebasestorage.app",
  messagingSenderId: "1054519553116",
  appId: "1:1054519553116:web:a6ad23417f4314fe7fca99",
  measurementId: "G-H70RSZ13BJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Initialize Analytics (if needed)
const analytics = getAnalytics(app);

// Export Firestore instance to use it in other parts of the app
export { db, analytics };
