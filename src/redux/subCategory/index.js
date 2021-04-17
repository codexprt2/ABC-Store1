import * as types from "./types";

const defaultState = {
	subcategory: {
		subCategories: [],
		loading: false,
	},
};

const subCategoryReducer = (state = defaultState, action) => {
	switch (action.type) {
		case types.SET_SUBCATEGORY_LOADER: {
			return {
				subcategory: {
					...state.subcategory,
					loading: action.payload,
				},
			};
		}
		case types.SET_SUBCATEGORY: {

			const subcategory1 = action.payload.val.map(function (sub) {
				var category = action.payload.data.filter(function (cat){
					return cat.id === sub.categoryId
				})[0];
				return {id: sub.id, name: sub.name,  selectedCategory:{label: category.name, value:category.id}, };
			});
			
			console.log("magic here!!",subcategory1);
			
			

			return {
				subcategory: {
					...state.subcategory,
					subCategories:[...subcategory1],
				},
			};
		}
		case types.ADD_SUBCATEGORY: {
			const category = action.payload.data.filter(
				(item) => item.id == action.payload.val.categoryId
			);
			return {
				subcategory: {
					...state.subcategory,
					subCategories: [
						...state.subcategory.subCategories,
						{
							id: action.payload.val.id,
							name: action.payload.val.name,
							
							selectedCategory: {label:category[0].name, value:category[0].id},
						},
					],
				},
			};
		}

		case types.REMOVE_SUBCATEGORY: {
			const subcategoriesData = state.subcategory.subcategories.filter(
				(item) => item.id !== action.payload
			);
			return {
				state,
				subcategory: {
					subcategories: [...subcategoriesData],
				},
			};

		}	
		case types.EDIT_SUBCATEGORY:{
			console.log("action.payload", action.payload);
			const UpdateSubCategory = state.subcategory.subCategories;
			const subcatId = UpdateSubCategory.findIndex((subcategory) => subcategory.id === action.payload.val.id);

			UpdateSubCategory[subcatId] = action.payload.val;
			console.log("UpdateSubCategory", UpdateSubCategory)

			return{

				subcategory: {
					...state.subcategory,
					subCategories: [...UpdateSubCategory],
				},
			}
		}	
	}
	return state;
};

export default subCategoryReducer;
