import db from "../firestore";

export const getCategories = () => {
	return new Promise((resolve) => {
		//  Get all categories from firestore
		db()
			.collection("category")
			.onSnapshot((snapshot) => {
				let categoryData = [];
				snapshot.docs.map((val) => {
					categoryData = [...categoryData, { id: val.id, ...val.data() }];
				});
				console.log("categoryData : ", categoryData);
				resolve(categoryData);
			});
	});
};

export const addCategory = (category) => {
	return new Promise((resolve, reject) => {
		//  Get add category in firestore

		db()
			.collection("category")
			.add({ name: category })
			.then((docRef) => {
				console.log("Document written with ID: ", docRef.id);
				getCategories().then((values) => {
					resolve(values);
				});
			})
			.catch((error) => {
				console.error("Error adding document: ", error);
				reject(error);
			});
	});
};

export const editCategory = (category) => {
	console.log("category123", category.id);
	return new Promise((resolve) => {
		//  Get edit category in firestore
		db().collection("category").doc(category.id).update({
			name: category.name,
		});
	});
};

export const deleteCategory = () => {
	return new Promise((resolve, reject) => {
		//  Get delete category in firestore
	});
};
