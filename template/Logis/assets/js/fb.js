import { initializeApp } from "firebase/app";
import { initializeApp } from "firebase/auth";
import { initializeApp } from "firebase/database";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyDEWizSHweYkjg51Q7xUCl1-Y3WQkBRVLI",
    authDomain: "rapidrepairs-4.firebaseapp.com",
    databaseURL: "https://rapidrepairs-4-default-rtdb.firebaseio.com",
    projectId: "rapidrepairs-4",
    storageBucket: "rapidrepairs-4.appspot.com",
    messagingSenderId: "567460102691",
    appId: "1:567460102691:web:8b542dcc39b923a2926796",
    measurementId: "G-SQMMBEY43H"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  export default app;