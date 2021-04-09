import "./App.css";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import login from "./Pages/login";
import Dashboard from "./Pages/Dashboard";
import CategoryPage from "./Pages/category/CategoryPage";
import ProductPage from "./Pages/product/ProductPage";
import SubCategoryPage from "./Pages/subCategory/SubCategoryPage";

function AppRouter() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path='/'>
					<Dashboard />
				</Route>
				<Route exact path='/login' component={login} />
				<Route exact path='/category' component={CategoryPage} />
				<Route exact path='/subcategory' component={SubCategoryPage} />
				<Route exact path='/products' component={ProductPage} />
			</Switch>
		</BrowserRouter>
	);
}

export default AppRouter;
