// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsCEBOwp1pi9LdzdIzNMYv-efU3dTwOOg",
  authDomain: "employedge-90d6f.firebaseapp.com",
  projectId: "employedge-90d6f",
  storageBucket: "employedge-90d6f.appspot.com",
  messagingSenderId: "8391615626",
  appId: "1:8391615626:web:404cbb187f8808fa287973"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const Auth = getAuth(app)

export default Auth