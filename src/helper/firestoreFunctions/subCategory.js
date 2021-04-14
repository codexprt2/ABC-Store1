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
				console.log("subCategoryData : ", subCategoryData);
				resolve(subCategoryData);
			});
	});
};

export const addSubCategory = (subcategory) => {
	console.log("category1", subcategory);
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

export const editSubCategory = () => {};

export const deleteSubCategory = () => {};
