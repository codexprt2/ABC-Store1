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
	console.log("category1", category);
	return new Promise((resolve, reject) => {
		//  Get add category in firestore
		let insertData = { name: category };
		db()
			.collection("category")
			.add(insertData)
			.then(async (docRef) => {
				insertData = { id: docRef.id, ...insertData };
				resolve(insertData);
			})
			.catch((error) => {
				console.error("Error adding document: ", error);
				reject(error);
			});
	});
};

export const editCategory = (data, category) => {
	console.log("category123", category, data);
	return new Promise((resolve, reject) => {
		//  Get edit category in firestore
		let updateData = { name: category };
		db()
			.collection("category")
			.doc(data.id)
			.update(updateData)
			.then(async (docRef) => {
				updateData = { id: data.id, ...updateData };
				resolve(updateData);
			})

			.catch((error) => {
				console.error("Error adding document: ", error);
				reject(error);
			});
	});
};

export const deleteCategory = (val) => {
	return new Promise((resolve, reject) => {
		//  Get delete category in firestore
		db()
			.collection("category")
			.doc(val)
			.delete()
			.then(resolve)
			.catch((error) => {
				console.error("Error removing document: ", error);
				reject(reject);
			});
	});
};
