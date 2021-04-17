import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { addSubCategoryValue, updateSubCategoryValue } from "../../redux/subCategory/action";
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


	console.log("Edi",editData)
	const handleSubmit = (e) => {
		e.preventDefault();
		if (isEdit) {
			editSubCategory({
				id: editData.id,
				name,
				
				selectedCategory: {
					value: selectedCategory.value,
					label: selectedCategory.label,
				  },
			});
			onEditHandle();
			setName("");
			setSelectedCategory(null);
			added(false);
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
			setSelectedCategory(editData.selectedCategory);
			
		}
	}, [editData]);

	console.log("selectedCategory",selectedCategory)


	const onChangeCategory = (selectedCategory) => {
		setSelectedCategory(selectedCategory);
	};
	const catId = category.findIndex((category) => category == selectedCategory);
	console.log("catId",catId)
	console.log("category",category)

	return (
		<form
			onSubmit={(e) => {
				handleSubmit(e);
			}}>
			<label>Select Category:</label>
			<Select
				name='category'
				label={category.label}
				value={selectedCategory}
				onChange={onChangeCategory}
				options={category}
				className='select'></Select>
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
		addSubCategory: (val) => dispatch(addSubCategoryValue(val)),
		editSubCategory: (val) => dispatch(updateSubCategoryValue(val)),

	};
};

export default connect(null, mapDispatchToProps)(SubCategoryForm);
