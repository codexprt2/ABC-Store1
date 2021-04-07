import { ADD_SUBCATEGORY } from "./type";

const defaultState = {
	subcategory: {
		subCategories: [{ id: 1, name: "fashion" }],
	},
};
const subCategoryReducer = (state = defaultState, action) => {
	switch (action.type) {
		case ADD_CATEGORY: {
			return {};
		}

		default: {
			return state;
		}
	}
};
export default subCategoryReducer;
