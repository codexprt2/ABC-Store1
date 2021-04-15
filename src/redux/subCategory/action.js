import * as subCategoryFirestore from "../../helper/firestoreFunctions/subCategory";
import * as types from "./types";

const setSubCategoryLoader = (val) => {
	return {
		type: types.SET_SUBCATEGORY_LOADER,
		payload: val,
	};
};
const setSubCategoryData = (val) => {
	return {
		type: types.SET_SUBCATEGORY,
		payload: val,
	};
};

export const setSubCategories = () => (dispatch) => {
	dispatch(setSubCategoryLoader(true));
	subCategoryFirestore.getSubCategories().then((subCategoryVal) => {
		dispatch(setSubCategoryData(subCategoryVal));
		dispatch(setSubCategoryLoader(false));
	});
};
const addSubCategoryData = (val, data) => {
	return {
		type: types.ADD_SUBCATEGORY,
		payload: { val, data },
	};
};

export const addSubCategoryValue = (subcategory) => async (
	dispatch,
	getState
) => {
	const data = getState().categoryReducer.category.categories;
	dispatch(setSubCategoryLoader(true));
	subCategoryFirestore.addSubCategory(subcategory).then((subcategoryVal) => {
		dispatch(addSubCategoryData(subcategoryVal, data));
		dispatch(setSubCategoryLoader(false));
	});
};
