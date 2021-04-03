import { ADD_CATEGORYNAME } from "./type";

const defaultState = {
	category: [],
};

// const categoryReducer = (state = defaultState, action) => {
// 	console.log("payload   ", action.payload);
// 	switch (action.type) {
// 		case ADD_CATEGORYNAME: {

// 			return {
// 				...state,
// 				category: [
// 					...state.category,
// 					{
// 						id: state.category.length,
// 						name: action.payload.name,
// 					},
// 				],
// 			};
// 		}
// 		default:
// 			return state;
// 	}
// };

// const categoryReducer = (state = defaultState, action) => {
// 	switch (action.type) {
// 		case ADD_CATEGORYNAME:
// 			console.log("add category", action.category);
// 			return state;
// 		case "ADD_CATEGORYNAME_ERR":
// 			console.log("error category ", action.err);
// 			return state;
// 		default:
// 			return state;
// 	}
// };
export default categoryReducer;
