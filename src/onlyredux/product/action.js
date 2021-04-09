import { ADD_PRODUCT, REMOVE_PRODUCT, EDIT_PRODUCT } from "./type";

export const addProduct = (val) => {
	console.log("product", val);
	return {
		type: ADD_PRODUCT,
		payload: val,
	};
};
export const updateProduct = (val) => {
	console.log("EDIT_PRODUCT", val);
	return {
		type: EDIT_PRODUCT,
		payload: val,
	};
};
export const removeProduct = (val) => {
	return {
		type: REMOVE_PRODUCT,
		payload: val,
	};
};
