import firebase from "../config/firebaseConfig";

console.log("firebase :: ", firebase);

var dbRef = () => firebase.firestore();

export default dbRef;
