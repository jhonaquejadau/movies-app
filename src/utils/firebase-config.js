import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAsJfG_tGudXjm5rBMmv1OXZr65Z4Qwk_I",
  authDomain: "movies-app-c45e8.firebaseapp.com",
  projectId: "movies-app-c45e8",
  storageBucket: "movies-app-c45e8.appspot.com",
  messagingSenderId: "511772077287",
  appId: "1:511772077287:web:5534d86790f3cf2240c642",
  measurementId: "G-V0H7RGC4R9"
};

const app = initializeApp(firebaseConfig);
export const  firebaseAuth = getAuth(app);