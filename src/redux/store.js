import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import categoryReducer from "../redux/category/reducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import subCategoryReducer from "./subCategory/index";
import productReducer from './products/index'

const reducer = combineReducers({
	categoryReducer,
	subCategoryReducer,
	productReducer
});
const persistConfig = {
	key: "root",
	storage,
};
const persistedReducer = persistReducer(persistConfig, reducer);

export const store = createStore(
	persistedReducer,
	compose(
		applyMiddleware(thunk),
		window.devToolsExtension ? window.devToolsExtension() : (f) => f
	)
	// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export const persistor = persistStore(store);
