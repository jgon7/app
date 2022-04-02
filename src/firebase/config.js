
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyCOOLQQfLl4WltStdoeFIVYc5HchR5EmMI",
  authDomain: "appreact-37054.firebaseapp.com",
  projectId: "appreact-37054",
  storageBucket: "appreact-37054.appspot.com",
  messagingSenderId: "928402628378",
  appId: "1:928402628378:web:b7a571b3a2d4ee5f75d6a3",
  measurementId: "G-WN6YH4XX6G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const getFirestoreApp = ()  => {
    return app
};
