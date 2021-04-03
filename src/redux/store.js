import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer, getFirebase } from "react-redux-firebase";

//Creating Store
// const reducer = combineReducers({});

const reducer = combineReducers({
	firebase: firebaseReducer,
	firestore: firestoreReducer,
});

export const store = createStore(
	reducer,
	applyMiddleware(thunk.withExtraArgument(getFirebase))
);
