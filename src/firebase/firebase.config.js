// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwPsH7RtjtTUzVZfs21oA2H28w1u4y9R4",
  authDomain: "disneytoy-f78ff.firebaseapp.com",
  projectId: "disneytoy-f78ff",
  storageBucket: "disneytoy-f78ff.appspot.com",
  messagingSenderId: "774080515332",
  appId: "1:774080515332:web:a407d2ae4eccd995421451"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;