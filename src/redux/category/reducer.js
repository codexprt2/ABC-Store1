import * as types from "./types";

const defaultState = {
	category: {
		activeCategories: {},
		categories: [],
		loading: false,
	},
};

const categoryReducer = (state = defaultState, action) => {
	switch (action.type) {
		case types.SET_CATEGORY_LOADER: {
			return {
				category: {
					...state.category,
					loading: action.payload,
				},
			};
		}
		case types.SET_CATEGORY: {
			console.log("action.payload", action.payload);
			return {
				category: {
					...state.category,
					categories: [...action.payload],
				},
			};
		}
		case types.ADD_CATEGORY: {
			return {
				category: {
					...state.category,
					categories: [...state.category.categories, action.payload],
				},
			};
		}
		case types.UPDATE_CATEGORY: {
			console.log("action.payload", action.payload);
			const UpdateCategory = state.category.categories.map((obj) => {
				if (obj.id === action.payload.id) {
					return action.payload;
				} else {
					return obj;
				}
			});

			return {
				category: {
					...state.category,
					categories: [...UpdateCategory],
				},
			};
		}
		case types.DELETE_CATEGORY: {
			console.log("action.payload", action.payload);
			const categoriesData = state.category.categories.filter(
				(item) => item.id !== action.payload
			);
			console.log("categoriesData", categoriesData);
			return {
				state,
				category: {
					categories: [...categoriesData],
				},
			};
		}

		default: {
			return state;
		}
	}
};
export default categoryReducer;
