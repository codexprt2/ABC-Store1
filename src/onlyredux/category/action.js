import { ADD_CATEGORY, EDIT_CATEGORY, REMOVE_CATEGORY } from "./type";

export const addCategory = (val) => async (dispatch, getState) => {
	//	Firebase Add Category Function
	//	const addedCategory = await categoryFb.addCategory(val)

	dispatch({
		type: ADD_CATEGORY,
		// payload: addedCategory,
	});
};

export const editCategory = (index, val) => async (dispatch, getState) => {
	//	Firebase Add Category Function
	//	const editedCategory = await categoryFb.editCategory(val)

	dispatch({
		type: EDIT_CATEGORY,
		// payload: editedCategory,
	});
};
export const removeCategory = (id) => ({
	type: REMOVE_CATEGORY,
	payload: {
		id,
	},
});
