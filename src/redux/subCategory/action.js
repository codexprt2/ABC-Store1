import * as subCategoryFirestore from "../../helper/firestoreFunctions/subCategory";
import * as types from "./types";

const setSubCategoryLoader = (val) => {
	return {
		type: types.SET_SUBCATEGORY_LOADER,
		payload: val,
	};
};
const setSubCategoryData = (val, data) => {
	return {
		type: types.SET_SUBCATEGORY,
		payload: { val, data },
	};
};

export const setSubCategories = () => async (dispatch, getState) => {

	const data = getState().categoryReducer.category.categories;

	dispatch(setSubCategoryLoader(true));
	subCategoryFirestore.getSubCategories().then((subCategoryVal) => {
		dispatch(setSubCategoryData(subCategoryVal, data));
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

export const deleteSubCategoryValue = (val) => {
	return {
		type: types.REMOVE_SUBCATEGORY,
		payload: val,
	};
};

export const removeSubCategory = (val) => (dispatch) => {
	dispatch(setSubCategoryLoader(true));
	subCategoryFirestore.deleteSubCategory(val).then(() => {
		dispatch(deleteSubCategoryValue(val));
		dispatch(setSubCategoryLoader(false));
	});
};
export const updateSubCategoryData = (subcategoryVal,val) => {
	return {
		type: types.EDIT_SUBCATEGORY,
		payload: {subcategoryVal,val}
	}
}
export const updateSubCategoryValue = (val) => (dispatch) => {
	console.log("updateSubCategoryValue", val)
	dispatch(setSubCategoryLoader(true));
	subCategoryFirestore.editSubCategory(val).then((subcategoryVal) => {

		dispatch(updateSubCategoryData(subcategoryVal,val));
		dispatch(setSubCategoryLoader(false));
	});
};