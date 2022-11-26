import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';


const firebaseConfig = {
    apiKey: "AIzaSyAlgxz_r8VtTSC5vDUcDFkAU6r42FLvGJ4",
    authDomain: "clonenetflix-e9388.firebaseapp.com",
    projectId: "clonenetflix-e9388",
    storageBucket: "clonenetflix-e9388.appspot.com",
    messagingSenderId: "714139599913",
    appId: "1:714139599913:web:742509e9dd3cd729970838"
};



if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;