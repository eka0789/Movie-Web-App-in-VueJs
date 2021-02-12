import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyDBxvcxKSrI0_Bw_B9UZcB60E_jQ0TTxII",
    authDomain: "movie-app-29c4b.firebaseapp.com",
    databaseURL: "https://movie-app-29c4b.firebaseio.com",
    projectId: "movie-app-29c4b",
    storageBucket: "movie-app-29c4b.appspot.com",
    messagingSenderId: "742078526866",
    appId: "1:742078526866:web:f9cb4b241e1ffca261bd4b"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase