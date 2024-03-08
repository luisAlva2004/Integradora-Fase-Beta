import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCO1ut1aCLkz961lhYMzDX9uMxtLHyn5uM",
  authDomain: "gabdo-c6ad7.firebaseapp.com",
  projectId: "gabdo-c6ad7",
  storageBucket: "gabdo-c6ad7.appspot.com",
  messagingSenderId: "925730310473",
  appId: "1:925730310473:web:39cd1dbe1d32e7be3d7298"
};

const appInt = initializeApp(firebaseConfig);
export default appInt;