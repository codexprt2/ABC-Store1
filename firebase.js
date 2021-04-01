// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyDnlygkogs2hQd8YigZQoimjyNmSJx_TgQ",
	authDomain: "abc-store-e3c1d.firebaseapp.com",
	projectId: "abc-store-e3c1d",
	storageBucket: "abc-store-e3c1d.appspot.com",
	messagingSenderId: "678901132677",
	appId: "1:678901132677:web:4e60ca35dc3fcf3278e8ec",
	measurementId: "G-7REDFP03ST",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
