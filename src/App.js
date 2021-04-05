import "./App.css";
import AppRouter from "./AppRouter";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
	console.log("!!!", store);
	return (
		<Provider store={store}>
			<AppRouter />
		</Provider>
	);
}

export default App;
