import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
	addSubCategory,
	updateSubCategory,
} from "../onlyredux/subCategory/action";
import Select from "react-select";
import "./style.css";

const SubCategoryForm = ({
	category,
	addSubCategory,
	added,
	isEdit,
	editData,
	onEditHandle,
	editSubCategory,
}) => {
	const [name, setName] = useState("");
	const [selectedCategory, setSelectedCategory] = useState(null);

	const catId = category.findIndex(
		(category) => category.name == selectedCategory
	);

	const onChangeCategory = (selectedCategory) => {
		setSelectedCategory(selectedCategory.name);
	};
	console.log("onChangeCategory", selectedCategory);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (isEdit) {
			editSubCategory({
				id: editData.index,
				name,
				selectedCategory: category[catId],
			});
			onEditHandle();
			setName("");
			setSelectedCategory(null);
		} else {
			addSubCategory({
				name,
				selectedCategory: category[catId],
			});
			added(false);
			setName("");
			setSelectedCategory(null);
		}
	};
	useEffect(() => {
		if (isEdit && editData) {
			setName(editData.name);
			setSelectedCategory(editData.selectedCategory.label);
		}
	}, [editData]);
	return (
		<form
			onSubmit={(e) => {
				handleSubmit(e);
			}}>
			<label>Select Category:</label>
			<Select
				name='category'
				label={category.name}
				value={selectedCategory}
				onChange={onChangeCategory}
				options={category}
				className='select'>
				{category.map((cat, index) => (
					<options key={`${index}`} value={cat.label}>
						{cat.label}
					</options>
				))}
			</Select>
			<br />
			{/* {JSON.stringify(category)} */}

			<label>SubCategory Name:</label>
			<br />
			<input
				name='name'
				type='text'
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>

			<br />

			<input type='submit' value='Add Me' />
		</form>
	);
};
const mapDispatchToProps = (dispatch) => {
	return {
		addSubCategory: (val) => dispatch(addSubCategory(val)),
		editSubCategory: (val) => dispatch(updateSubCategory(val)),
	};
};

export default connect(null, mapDispatchToProps)(SubCategoryForm);
