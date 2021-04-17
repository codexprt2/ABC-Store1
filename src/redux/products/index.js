import * as types from "./types";
const defaultState = {
	product: {
		products: [
			{
				id: 1,
				name: "fashion",
				price: 100,
				quantity: 2,
				desc: "white top",
				selectedCategory: {
					value: 0,
					label: "Fiction",
				},
				selectedSubCategory: {
					value: 0,
					label: "Fiction",
				},
			},
		],
		loading:false,
	},
};
const productReducer = (state = defaultState, action) => {
	switch (action.type) {
		case types.SET_PRODUCTS_LOADER: {
			return {
				product: {
					...state.product,
					loading: action.payload,
				},
			};
		}
		case types.SET_PRODUCT:{

			const product1 = action.payload.productVal.map(function (pro) {
					var subcategory = action.payload.subcatdata.filter(function(sub){
						return sub.id === pro.selectedSubCategoryId

					})[0];
					return{id:pro.id, name: pro.name, desc: pro.description, price:pro.price, quantity: pro.quantity,selectedCategory:{label: subcategory.selectedCategory.label, value: subcategory.selectedCategory.value},selectedSubCategory:{label: subcategory.name, value:subcategory.id}}

				})
				
			return{
				product: {
					...state.product,
					products:[...product1],
				},
			}
		}



		case types.ADD_PRODUCT: {
			console.log("action", action.payload)
			const category = action.payload.catdata.filter(
				(item) => item.id == action.payload.productVal.selectedCategoryId
			);
			const subcategory = action.payload.subcatdata.filter(
				(item) => item.id == action.payload.productVal.selectedSubCategoryId
			);
			return {
				product: {
					...state.product,
					products: [
						...state.product.products,
						{
							id: action.payload.productVal.id,
							name: action.payload.productVal.name,
							price:action.payload.productVal.price,
							quantity: action.payload.productVal.quantity,
							desc: action.payload.productVal.description,
							
							selectedCategory: {label:category[0].name, value:category[0].id},
							selectedSubCategory: {label:subcategory[0].name, value:subcategory[0].id}

						},
					],
				},
			};
				
			
		}
		case types.REMOVE_PRODUCT: {
			const productData = state.product.products.filter(
				(item) => item.id !== action.payload
			);
			return {
				state,
				product: {
					products: [...productData],
				},
			};
		}

		case types.EDIT_PRODUCT: {
			console.log("action.payload", action.payload);
			const UpdateProduct = state.product.products;
			console.log("action.payload", UpdateProduct);

			const proId = UpdateProduct.findIndex((product) => product.id == action.payload.val.id);

			UpdateProduct[proId] = action.payload.val;
			console.log("UpdateSubCategory", UpdateProduct)

			return{

				product: {
					...state.product,
					products: [...UpdateProduct],
				},
			}
			
		}
		
		default: {
			return state;
		}
	}
};
export default productReducer;
