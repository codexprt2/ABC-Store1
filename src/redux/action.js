import * as categoryFirestore from "../helper/firestoreFunctions/category";
import * as types from "./types";

const setCategoryLoader = (val) => {
	return {
		type: types.SET_CATEGORY_LOADER,
		payload: val,
	};
};

const setCategoryData = (val) => {
	return {
		type: types.SET_CATEGORY,
		payload: val,
	};
};

export const addCategoryValue = (category) => (dispatch) => {
	dispatch(setCategoryLoader(true));
	categoryFirestore.addCategory(category).then((categoryVal) => {
		dispatch(setCategoryData(categoryVal));
		dispatch(setCategoryLoader(false));
	});
};
