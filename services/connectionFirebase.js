import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAaQv_gbbyhivQV_O00IQzbBRLt6DygB2s",
  authDomain: "applojacoffe.firebaseapp.com",
  projectId: "applojacoffe",
  storageBucket: "applojacoffe.appspot.com",
  messagingSenderId: "626634941509",
  appId: "1:626634941509:web:0c09419b603e875d60ef2c",
  measurementId: "G-FG12DNRQMT"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);