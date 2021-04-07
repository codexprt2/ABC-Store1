import "./App.css";
import AppRouter from "./AppRouter";
import { Provider } from "react-redux";
import { store, persistor } from "./onlyredux/store";
import { PersistGate } from "redux-persist/integration/react";

const App = () => {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<AppRouter />
			</PersistGate>
		</Provider>
	);
};

export default App;
