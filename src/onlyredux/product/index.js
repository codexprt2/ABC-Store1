import { ADD_PRODUCT, REMOVE_PRODUCT, EDIT_PRODUCT } from "./type";

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
	},
};
const productReducer = (state = defaultState, action) => {
	switch (action.type) {
		case ADD_PRODUCT: {
			return {
				product: {
					...state.product,
					products: [
						...state.product.products,
						{ id: state.product.products.length, ...action.payload },
					],
				},
			};
		}

		case EDIT_PRODUCT: {
			const UpdateProduct = state.product.products;

			UpdateProduct[action.payload.id] = action.payload;

			return {
				product: {
					...state.product,
					products: [...UpdateProduct],
				},
			};
		}
		case REMOVE_PRODUCT: {
			console.log("&&&", action.payload);
			return {
				...state,
				product: {
					products: state.product.products.filter(
						(item) => item.id !== action.payload.id
					),
				},
			};
		}

		default: {
			return state;
		}
	}
};
export default productReducer;
