import { ADD_CATEGORY, EDIT_CATEGORY, REMOVE_CATEGORY } from "./type";

export const addSubCategory = (val) => {
	console.log("action", val);
	return {
		type: ADD_CATEGORY,
		payload: val,
	};
};
