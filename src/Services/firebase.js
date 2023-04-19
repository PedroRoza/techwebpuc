import firebase from "firebase/app"
import "firebase/auth"
const firebaseConfig = {
    apiKey: "AIzaSyCEjAwC8YggzqLy2mpDsYaVysZKP8nYdGw",
    authDomain: "tecpuc-739f7.firebaseapp.com",
    projectId: "tecpuc-739f7",
    storageBucket: "tecpuc-739f7.appspot.com",
    messagingSenderId: "303777916849",
    appId: "1:303777916849:web:b47a2ddd3e51275f28ff90"
  };
  
  // Inicializa o Firebase
  const app = firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();

  export {firebase, auth, app}