import * as categoryFirestore from "../helper/firestoreFunctions/category";
import * as types from "./types";

const setCategoryLoader = (val) => {
	return {
		type: types.SET_CATEGORY_LOADER,
		payload: val,
	};
};

const setCategoryData = (val) => {
	console.log("val", val);
	return {
		type: types.SET_CATEGORY,
		payload: val,
	};
};

export const addCategoryValue = (category) => (dispatch) => {
	dispatch(setCategoryLoader(true));
	categoryFirestore.addCategory(category).then((categoryVal) => {
		console.log("categoryval", categoryVal);

		dispatch(setCategoryData(categoryVal));
		dispatch(setCategoryLoader(false));
	});
};

export const updateCategoryData = (val) => {
	return {
		type: types.UPDATE_CATEGORY,
		payload: val,
	};
};
export const updateCategoryValue = (category) => (dispatch) => {
	console.log("updateCategory", category);
	dispatch(setCategoryLoader(true));
	categoryFirestore.editCategory(category).then((categoryVal) => {
		dispatch(updateCategoryData(categoryVal));
		dispatch(setCategoryLoader(false));
	});
};

export const editCategoryData = (val) => {
	return {
		type: types.EDIT_CATEGORY,
		payload: val,
	};
};
