import React from "react";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { addCategoryValue, updateCategoryValue } from "../redux/action";

const Form = ({
	addCategory,
	added,
	isEdit,
	editData,
	onEditHandle,
	updateCategory,
}) => {
	const [catName, setCatName] = useState();

	const handleSubmit = (e) => {
		e.preventDefault();
		if (isEdit) {
			updateCategory(editData, catName);
			onEditHandle();
			setCatName("");
			added(false);
		} else {
			addCategory(catName);
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
const mapDispatchToProps = (dispatch) => ({
	addCategory: (val) => dispatch(addCategoryValue(val)),
	updateCategory: (val) => dispatch(updateCategoryValue(val)),
});

export default connect(null, mapDispatchToProps)(Form);
