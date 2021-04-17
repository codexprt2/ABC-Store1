import * as productFirestore from "../../helper/firestoreFunctions/products";
import * as types from "./types";

const setProductLoader = (val) => {
	return {
		type: types.SET_PRODUCTS_LOADER,
		payload: val,
	};
};

const setProductData = (productVal,subcatdata) => {
	return {
		type: types.SET_PRODUCT,
		payload: {productVal,subcatdata},
	};
};

export const setProductsValue = () => (dispatch,getState) => {
	const subcatdata = getState().subCategoryReducer.subcategory.subCategories;


	dispatch(setProductLoader(true));
	productFirestore.getProducts().then((productVal) => {
		dispatch(setProductData(productVal,subcatdata));
		dispatch(setProductLoader(false));
	});
};

const addProductData = (productVal, catdata, subcatdata) => {
	return {
		type: types.ADD_PRODUCT,
		payload: { productVal, catdata, subcatdata },
	};
};

export const addProductValue = (product) => async (
	dispatch,
	getState
) => {
	console.log("Product here",product)
	const catdata = getState().categoryReducer.category.categories;
	const subcatdata = getState().subCategoryReducer.subcategory.subCategories;

	dispatch(setProductLoader(true));
	productFirestore.addProduct(product).then((productVal) => {
		dispatch(addProductData(productVal, catdata, subcatdata));
		dispatch(setProductLoader(false));
	});
};


export const deleteSubCategoryValue = (val) => {
	return{

		type: types.REMOVE_PRODUCT,
			payload: val,
	}

}

export const removeProduct = (val) => (dispatch) => {
	console.log("editProduct", val);
	dispatch(setProductLoader(true));
	productFirestore.deleteProduct(val).then(() => {
		dispatch(deleteSubCategoryValue(val));
	
		dispatch(setProductLoader(false));
	});
}
export const updateProductData = (productVal,val) =>  {
	return {
		type: types.EDIT_PRODUCT,
		payload: {productVal,val}
	}

}

export const updateProductValue = (val) => (dispatch) => {
	console.log("updateProductValue",val)
	dispatch(setProductLoader(true));
	productFirestore.editProduct(val).then((productVal) => {

		dispatch(updateProductData(productVal,val));
		dispatch(setProductLoader(false));
	});
};