import * as subCategoryFirestore from "../../helper/firestoreFunctions/subCategory";
import * as types from "./types";

const setSubCategoryLoader = (val) => {
	return {
		type: types.SET_SUBCATEGORY_LOADER,
		payload: val,
	};
};
const setSubCategoryData = (val, data) => {
	console.log("val", val, data);
	return {
		type: types.SET_SUBCATEGORY,
		payload: { val, data },
	};
};
export const addSubCategoryValue = (subcategory) => async (
	dispatch,
	getState
) => {
	const data = getState().categoryReducer.category.categories;
	console.log("subcategory", data);
	dispatch(setSubCategoryLoader(true));
	subCategoryFirestore.addSubCategory(subcategory).then((subcategoryVal) => {
		console.log("categoryval", subcategoryVal);

		dispatch(setSubCategoryData(subcategoryVal, data));
		dispatch(setSubCategoryLoader(false));
	});
};
