import { ADD_SUBCATEGORY, EDIT_SUBCATEGORY, REMOVE_SUBCATEGORY } from "./type";

export const addSubCategory = (val) => {
	console.log("action123", val);
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
export const removeSubCategory = (val) => {
	return {
		type: REMOVE_SUBCATEGORY,
		payload: val,
	};
};
