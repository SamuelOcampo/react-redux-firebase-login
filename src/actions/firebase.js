import firebase from 'firebase';

const config = {
    apiKey: "YOUR-API-KEY",
    authDomain: ".firebaseapp.com",
    databaseURL: "https://firebaseio.com",
    projectId: "",
    storageBucket: ".appspot.com",
    messagingSenderId: ""
};
firebase.initializeApp(config);

export default firebase;