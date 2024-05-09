import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDYb1UMZnSsqtbRyfiErY7ASAm5lbFUI6E",
  authDomain: "dev-swop-desktop.firebaseapp.com",
  projectId: "dev-swop-desktop",
  storageBucket: "dev-swop-desktop.appspot.com",
  messagingSenderId: "364794937301",
  appId: "1:364794937301:web:b7d60b390d19c717d6475c",
};

const app = initializeApp(firebaseConfig);

export default app;
