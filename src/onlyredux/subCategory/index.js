import { ADD_SUBCATEGORY, EDIT_SUBCATEGORY, REMOVE_SUBCATEGORY } from "./type";

const defaultState = {
	subcategory: {
		subCategories: [
			{
				id: 1,
				name: "fashion",
				selectedCategory: {
					value: 0,
					label: "Fiction",
				},
			},
		],
	},
};
const subCategoryReducer = (state = defaultState, action) => {
	console.log("action.payload", action.payload);
	switch (action.type) {
		case ADD_SUBCATEGORY: {
			return {
				subcategory: {
					...state.subcategory,
					subCategories: [
						...state.subcategory.subCategories,
						{ id: state.subcategory.subCategories.length, ...action.payload },
					],
				},
			};
		}
		case EDIT_SUBCATEGORY: {
			const UpdateSubCategory = state.subcategory.subCategories;

			UpdateSubCategory[action.payload.id] = action.payload;

			return {
				subcategory: {
					...state.subcategory,
					subCategories: [...UpdateSubCategory],
				},
			};
		}
		case REMOVE_SUBCATEGORY: {
			console.log("&&&", action.payload);
			return {
				...state,
				subcategory: {
					subCategories: state.subcategory.subCategories.filter(
						(item) => item.id !== action.payload.id
					),
				},
			};
		}
		default: {
			return state;
		}
	}
};
export default subCategoryReducer;
