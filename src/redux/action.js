import { ADD_CATEGORYNAME } from "./type";

export const addCategory = (name) => ({
	type: ADD_CATEGORYNAME,
	payload: {
		name,
	},
});
