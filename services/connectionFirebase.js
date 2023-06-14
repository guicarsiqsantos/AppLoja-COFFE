//biblioteca do firebase
import firebase from 'firebase/compat/app';
//autenticação de email e senha
import 'firebase/compat/auth';
//trabalha com o banco de dados criado no firebase
import 'firebase/compat/database';

const firebaseConfig = {
  apiKey: "AIzaSyAaQv_gbbyhivQV_O00IQzbBRLt6DygB2s",
  authDomain: "applojacoffe.firebaseapp.com",
  databaseURL: "https://applojacoffe-default-rtdb.firebaseio.com",
  projectId: "applojacoffe",
  storageBucket: "applojacoffe.appspot.com",
  messagingSenderId: "626634941509",
  appId: "1:626634941509:web:0c09419b603e875d60ef2c",
  measurementId: "G-FG12DNRQMT"
};

if (!firebase.apps.length) {
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
}



export default firebase;