import "./App.css";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import login from "./Pages/login";
import Dashboard from "./Pages/Dashboard";
import CategoryPage from "./Pages/CategoryPage";

function AppRouter() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path='/'>
					<Dashboard />
				</Route>
				<Route exact path='/login' component={login} />
				<Route exact path='/category' component={CategoryPage} />
			</Switch>
		</BrowserRouter>
	);
}

export default AppRouter;
