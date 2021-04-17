import db from "../firestore";

export const getProducts = () => {

    return new Promise((resolve) => {
		//  Get all categories from firestore
		db()
			.collection("product")
			.onSnapshot((snapshot) => {
				let productData = [];
				snapshot.docs.map((val) => {
					productData = [...productData, { id: val.id, ...val.data() }];
				});
				console.log("productData : ", productData);
				resolve(productData);
			});
	});


};

export const addProduct = (product) => {
	return new Promise((resolve, reject) => {
		//  Get add category in firestore
		let insertData = {
			name:product.name,
			description: product.desc,
			price: product.price,
			quantity:product.quantity,
			selectedCategoryId: product.selectedCategory.value,
			selectedSubCategoryId: product.selectedSubCategory.value
			
		};
		db()
			.collection("product")
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

export const editProduct = (product) => {
	return new Promise((resolve, reject) => {
		console.log("oo", product)
		//  Get edit category in firestore
		let updateData = { name: product.name,  description: product.desc, quantity: product.quantity, price: product.price, categoryId:product.selectedCategory.value, subCategoryId: product.selectedSubCategory.value };
		db()
			.collection("product")
			.doc(product.id)
			.update(updateData)
			.then(async (docRef) => {
				updateData = { id: product.id, ...updateData };
				resolve(updateData);
			})

			.catch((error) => {
				console.error("Error adding document: ", error);
				reject(error);
			});
	});


};

export const deleteProduct = (val) => {

	return new Promise((resolve, reject) => {
		//  Get delete category in firestore
		db()
			.collection("product")
			.doc(val)
			.delete()
			.then(resolve)
			.catch((error) => {
				console.error("Error removing document: ", error);
				reject(reject);
			});
	});
};
