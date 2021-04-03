import "./App.css";
import AppRouter from "./AppRouter";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import { createFirestoreInstance } from "redux-firestore";
import firebase from "./config/firebaseConfig";

function App() {
	const rrfProps = {
		firebase,
		config: {},
		dispatch: store.dispatch,
		createFirestoreInstance,
	};

	return (
		<Provider store={store}>
			<ReactReduxFirebaseProvider {...rrfProps}>
				<AppRouter />
			</ReactReduxFirebaseProvider>
		</Provider>
	);
}

export default App;
