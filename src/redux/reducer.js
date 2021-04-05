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
			return {
				category: {
					...state.category,
					categories: [...action.payload],
				},
			};
		}

		default: {
			return state;
		}
	}
};
export default categoryReducer;
