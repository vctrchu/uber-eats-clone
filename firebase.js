import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA-K08rYGKtervs3BrzSMwrhStmi8NU9uY",
    authDomain: "rn-uber-eats-clone-44b0e.firebaseapp.com",
    projectId: "rn-uber-eats-clone-44b0e",
    storageBucket: "rn-uber-eats-clone-44b0e.appspot.com",
    messagingSenderId: "932043235528",
    appId: "1:932043235528:web:546483390d4c7286c245fd",
};

let app;

if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app();
}
export default firebase;
