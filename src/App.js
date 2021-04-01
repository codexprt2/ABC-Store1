import logo from "./logo.svg";
import "./App.css";
import { Redirect, Route, Switch } from "react-router-dom";
import login from "./Pages/login";
import Dashboard from "./Pages/Dashboard";

function App() {
	return (
		<Switch>
			<Route exact path='/'>
				<Dashboard />
			</Route>
			<Route exact path='/login' component={login} />
			<Route path='' render={() => "404 not found!!!"} />
		</Switch>
	);
}

export default App;
