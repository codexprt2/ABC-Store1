import { Category } from "@material-ui/icons";
import { ADD_CATEGORYNAME } from "./type";

// export const addCategory = (name) => ({
// 	type: ADD_CATEGORYNAME,
// 	payload: {
// 		name,
// 	},
// });

export const addCategory = (category) => {
	return (dispatch, getState, { getFirebase, getFirestore }) => {
		const firestore = getFirestore();
		firestore
			.collection("category")
			.add({
				...Category,
				categoryName: "sports",
				CategoryId: 123,
				createdAt: new Date(),
			})
			.then(() => {
				dispatch({ type: ADD_CATEGORYNAME, category });
			})
			.catch((err) => {
				dispatch({ type: "ADD_CATEGORYNAME_ERR", err });
			});
	};
};
