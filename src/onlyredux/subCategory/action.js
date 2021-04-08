import { ADD_SUBCATEGORY, EDIT_SUBCATEGORY } from "./type";

export const addSubCategory = (val) => {
	console.log("action", val);
	return {
		type: ADD_SUBCATEGORY,
		payload: val,
	};
};
export const updateSubCategory = (val) => {
	console.log("EDIT_SUBCATEGORY", val);
	return {
		type: EDIT_SUBCATEGORY,
		payload: val,
	};
};
