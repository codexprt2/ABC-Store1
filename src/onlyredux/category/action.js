import { ADD_CATEGORY, EDIT_CATEGORY, REMOVE_CATEGORY } from "./type";

export const addCategory = (val) => {
	console.log("action", val);
	return {
		type: ADD_CATEGORY,
		payload: val,
	};
};

export const editCategory = (index, val) => {
	console.log("123", index, val);
	return {
		type: EDIT_CATEGORY,
		payload: {
			index,
			val,
		},
	};
};
export const removeCategory = (id) => ({
	type: REMOVE_CATEGORY,
	payload: {
		id,
	},
});
