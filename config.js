import firebase from "firebase"
// require ("@firebase/firestore")

var  firebaseConfig = {
  apiKey: "AIzaSyDHfOVxCpfmFo47K1gg1nQp234y6aMGTc4",
  authDomain: "bus-attendance-6b8ed.firebaseapp.com",
  databaseURL: "https://bus-attendance-6b8ed-default-rtdb.firebaseio.com",
  projectId: "bus-attendance-6b8ed",
  storageBucket: "bus-attendance-6b8ed.appspot.com",
  messagingSenderId: "373920939736",
  appId: "1:373920939736:web:e7cf1af3c34dc7f83a61ad"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase.firestore()
