import * as types from "./types";

const defaultState = {
	subcategory: {
		subCategories: [],
		loading: false,
	},
};

const subCategoryReducer = (state = defaultState, action) => {
	switch (action.type) {
		case types.SET_SUBCATEGORY_LOADER: {
			return {
				subcategory: {
					...state.subcategory,
					loading: action.payload,
				},
			};
		}
		case types.SET_SUBCATEGORY: {
			console.log("DDDD", action.payload.data);
			const category = action.payload.data.filter(
				(item) => item.id == action.payload.val.categoryId
			);
			console.log("iii", category);
			return {
				subcategory: {
					...state.subcategory,
					subCategories: [
						...state.subcategory.subCategories,
						{
							name: action.payload.val.name,
							selectedCategory: category[0].name,
						},
					],
				},
			};
		}
	}
	return state;
};

export default subCategoryReducer;
