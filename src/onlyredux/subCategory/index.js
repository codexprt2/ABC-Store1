import { ADD_SUBCATEGORY, EDIT_SUBCATEGORY } from "./type";

const defaultState = {
	subcategory: {
		subCategories: [
			// {
			// 	id: 1,
			// 	name: "fashion",
			// 	selectedCategory: {
			// 		value: 0,
			// 		label: "Fiction",
			// 	},
			// },
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
			return {};
		}

		default: {
			return state;
		}
	}
};
export default subCategoryReducer;
