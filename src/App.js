import "./App.css";
import AppRouter from "./AppRouter";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import Hoc from "./hoc/Hoc";
const App = () => {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<Hoc />
			</PersistGate>
		</Provider>
	);
};

export default App;
