import { createStore, combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import categoryReducer from "./index";
import thunk from "redux-thunk";
//Creating Store
// const reducer = combineReducers({});

const reducer = combineReducers({
	categories: categoryReducer,
});

export const store = createStore(
	reducer,

	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
