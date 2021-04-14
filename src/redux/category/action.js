import * as categoryFirestore from "../../helper/firestoreFunctions/category";
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

export const updateCategoryData = (categoryVal) => {
	console.log("val here!!!", categoryVal);
	return {
		type: types.UPDATE_CATEGORY,
		payload: categoryVal,
	};
};
export const updateCategoryValue = (data, category) => (dispatch) => {
	// console.log("updateCategory", category);
	dispatch(setCategoryLoader(true));
	categoryFirestore.editCategory(data, category).then((categoryVal) => {
		// console.log("val here!!!", categoryVal);

		dispatch(updateCategoryData(categoryVal));
		dispatch(setCategoryLoader(false));
	});
};

export const deleteCategoryValue = (val) => {
	console.log("val 444", val);
	return {
		type: types.DELETE_CATEGORY,
		payload: val,
	};
};
export const deleteCategoryData = (val) => (dispatch) => {
	dispatch(setCategoryLoader(true));
	categoryFirestore.deleteCategory(val).then(() => {
		dispatch(deleteCategoryValue(val));
		dispatch(setCategoryLoader(false));
	});
};
