import firebase from 'firebase/app';
import 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD0tUrti6ME8RxDuNB-NcsLYFDWzfMcXOA",
    authDomain: "textum-2f8a1.firebaseapp.com",
    databaseURL: "https://textum-2f8a1.firebaseio.com",
    projectId: "textum-2f8a1",
    storageBucket: "textum-2f8a1.appspot.com",
    messagingSenderId: "773475458595",
    appId: "1:773475458595:web:9daf2365842e8a0f559b96",
    measurementId: "G-5SDVNSTR9L"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

export default firebase;