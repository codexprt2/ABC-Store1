import db from "../firestore";

export const getSubCategories = () => {
	return new Promise((resolve) => {
		//  Get all categories from firestore
		db()
			.collection("subcategory")
			.onSnapshot((snapshot) => {
				let subCategoryData = [];
				snapshot.docs.map((val) => {
					subCategoryData = [...subCategoryData, { id: val.id, ...val.data() }];
				});
				resolve(subCategoryData);
			});
	});
};

export const addSubCategory = (subcategory) => {
	return new Promise((resolve, reject) => {
		//  Get add category in firestore
		let insertData = {
			name: subcategory.name,
			categoryId: subcategory.selectedCategory.value,
		};
		db()
			.collection("subcategory")
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


export const deleteSubCategory = (val) => {
	return new Promise((resolve, reject) => {
		//  Get delete category in firestore
		db()
			.collection("subcategory")
			.doc(val)
			.delete()
			.then(resolve)
			.catch((error) => {
				console.error("Error removing document: ", error);
				reject(reject);
			});
	});
};

export const editSubCategory = (subcategory) => {
	return new Promise((resolve, reject) => {
		//  Get edit category in firestore
		let updateData = { name: subcategory.name, categoryId:subcategory.selectedCategory.value};
		db()
			.collection("subcategory")
			.doc(subcategory.id)
			.update(updateData)
			.then(async (docRef) => {
				updateData = { id: subcategory.id, ...updateData };
				resolve(updateData);
			})

			.catch((error) => {
				console.error("Error adding document: ", error);
				reject(error);
			});
	});
};
