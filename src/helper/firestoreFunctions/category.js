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
	return new Promise((resolve) => {
		//  Get edit category in firestore

		db.collection("category")
			.where("category.id", "==", category.id)
			.get()
			.then(function (querySnapshot) {
				querySnapshot.forEach(function (doc) {
					console.log(doc.id, " => ", doc.data());
					resolve(doc.update({ name: category }));
				});
			});
	});
};

export const deleteCategory = () => {
	return new Promise((resolve, reject) => {
		//  Get delete category in firestore
	});
};
