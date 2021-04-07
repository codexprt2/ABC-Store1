import { ADD_CATEGORY, REMOVE_CATEGORY, EDIT_CATEGORY } from "./type";

const defaultState = {
	product: {
		products: [{ id: 1, name: "fashion" }],
	},
};
const categoryReducer = (state = defaultState, action) => {
	switch (action.type) {
		case ADD_CATEGORY: {
			return {
				category: {
					...state.category,
					categories: [
						...state.category.categories,
						{
							id: state.category.categories.length + 1,
							name: action.payload,
						},
					],
				},
			};
		}
		case EDIT_CATEGORY: {
			const UpdateCategory = state.category.categories;
			console.log("UpdateCategory", UpdateCategory);
			UpdateCategory[action.payload.index].name = action.payload.val;
			console.log("action.payload", action.payload);
			return {
				category: {
					...state.category,
					categories: [...UpdateCategory],
				},
			};
		}
		case REMOVE_CATEGORY: {
			console.log(state.category);

			return {
				...state,
				category: {
					categories: state.category.categories.filter(
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
export default categoryReducer;
