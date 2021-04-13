// import { ADD_CATEGORY, REMOVE_CATEGORY, EDIT_CATEGORY } from "./type";

// const defaultState = {
// 	category: {
// 		categories: [],
// 	},
// };
// const categoryReducer = (state = defaultState, action) => {
// 	switch (action.type) {
// 		case ADD_CATEGORY: {
// 			return {
// 				category: [...state.category, action.payload],
// 			};
// 		}

// 		case EDIT_CATEGORY: {
// 			return {
// 				category: {
// 					...state.category,
// 					categories: [...UpdateCategory],
// 				},
// 			};
// 		}

// 		case REMOVE_CATEGORY: {
// 			return {
// 				...state,
// 				category: {
// 					categories: state.category.categories.filter(
// 						(item) => item.id !== action.payload.id
// 					),
// 				},
// 			};
// 		}

// 		default: {
// 			return state;
// 		}
// 	}
// };
// export default categoryReducer;
