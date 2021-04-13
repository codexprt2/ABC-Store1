import React from "react";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
// import { addCategory, editCategory } from "../../onlyredux/category/action";
import { addCategoryValue, updateCategoryValue } from "../../redux/action";
const Form = ({
	added,
	isEdit,
	editData,
	onEditHandle,
	addCategoryData,
	updateCategory,
}) => {
	const [catName, setCatName] = useState();

	const handleSubmit = (e) => {
		e.preventDefault();

		if (isEdit) {
			updateCategory(editData.index, catName);
			onEditHandle();
			setCatName("");
			added(false);
		} else {
			addCategoryData(catName);
			added(false);
		}
	};

	useEffect(() => {
		if (isEdit && editData) {
			setCatName(editData.name);
		}
	}, [editData]);

	return (
		<form
			onSubmit={(e) => {
				handleSubmit(e);
			}}>
			<label>Category Name:</label>
			<br />
			<input
				name='CatName'
				type='text'
				value={catName}
				onChange={(e) => setCatName(e.target.value)}
			/>

			<br />
			<input type='submit' value='Add Me' />
		</form>
	);
};
const mapDispatchToProps = (dispatch) => {
	return {
		addCategoryData: (val) => dispatch(addCategoryValue(val)),
		updateCategory: (index, val) => dispatch(updateCategoryValue(index, val)),
	};
};

export default connect(null, mapDispatchToProps)(Form);
