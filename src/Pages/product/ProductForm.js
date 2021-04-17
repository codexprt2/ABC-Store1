import React, { useState, useEffect } from "react";
import Select from "react-select";
import "./style.css";
import { connect } from "react-redux";
import { addProductValue,updateProductValue } from "../../redux/products/action";

const ProductForm = ({
	added,
	category,
	subcategory,
	addProductData,
	isEdit,
	editData,
	onEditHandle,
	editProductData,
}) => {
	const [name, setName] = useState("");
	const [price, setPrice] = useState("");
	const [quantity, setQuantity] = useState("");
	const [desc, setDesc] = useState("");
	const [selectedCategory, setSelectedCategory] = useState(null);
	const [selectedSubCategory, setSelectedSubCategory] = useState(null);

	const catId = category.findIndex(
		(category) => category== selectedCategory
	);
	console.log("editData",editData)

	const subCatId = subcategory.findIndex(
		(subcategory) => subcategory == selectedSubCategory
	);
	const handleSubmit = (e) => {
		e.preventDefault();
		if (isEdit) {
			editProductData({
				id: editData.id,
				name,
				price,
				quantity,
				desc,
				selectedCategory: {
					value: selectedCategory.value,
					label: selectedCategory.label,
				  },
				selectedSubCategory: {
					value:selectedSubCategory.value,
					label:selectedSubCategory.label
				},
			});
			onEditHandle();
			setName("");
			setPrice("");
			setQuantity("");
			setDesc("");
			setSelectedCategory(null);
			setSelectedSubCategory(null);
			added(false);
		} else {
			addProductData({
				name,
				price,
				quantity,
				desc,
				selectedCategory: category[catId],
				selectedSubCategory: subcategory[subCatId],
			});
			added(false);
			setName("");
			setPrice("");
			setQuantity("");
			setDesc("");
			setSelectedCategory(null);
			setSelectedSubCategory(null);
		}
	};

	const onChangeCategory = (selectedCategory) => {
		setSelectedCategory(selectedCategory);
	};
	console.log("selectedCategory",selectedCategory)


	const onChangeSubCategory = (selectedSubCategory) => {
		setSelectedSubCategory(selectedSubCategory);
	};
	useEffect(() => {
		if (isEdit && editData) {
			setName(editData.name);
			setPrice(editData.price);
			setQuantity(editData.quantity);
			setDesc(editData.desc);
			setSelectedCategory(editData.selectedCategory);
			setSelectedSubCategory(editData.selectedSubCategory);
		}
	}, [editData]);

	return (
		<form
			onSubmit={(e) => {
				handleSubmit(e);
			}}>
			<label>Product Name:</label>
			<br />
			<input
				name='name'
				type='text'
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
			<br />
			<label>Select Category:</label>
			<Select
				name='category'
				// label={category.label}
				value={selectedCategory}
				onChange={onChangeCategory}
				options={category}
				className='select'
			/>
			<br />
			<label>Select SubCategory:</label>
			<Select
				value={selectedSubCategory}
				onChange={onChangeSubCategory}
				options={subcategory}
				className='select'
			/>
			<br />
			<label> Description:</label>
			<br />
			<textarea
				name='name'
				type='text'
				value={desc}
				className='teaxtArea'
				onChange={(e) => setDesc(e.target.value)}
			/>
			<br />
			<br />
			<label for='quantity'>Quantity:</label>
			<input
				type='number'
				id='quantity'
				name='quantity'
				min='1'
				max='20'
				value={quantity}
				onChange={(e) => setQuantity(e.target.value)}
			/>
			<br />
			<br />
			<label for='price'>Price:</label>
			<input
				type='number'
				id='price'
				name='price'
				min='100'
				max='5000'
				value={price}
				onChange={(e) => setPrice(e.target.value)}
			/>
			<br />
			<br />
			<input type='submit' value='Add Me' />
		</form>
	);
};
const mapStateToProps = (store) => {
	const { categoryReducer, subCategoryReducer } = store;

	console.log(store);
	return {
		category: categoryReducer.category.categories.map((obj) => {
			return {
				value: obj.id,
				label: obj.name,
			};
		}),
		subcategory: subCategoryReducer.subcategory.subCategories.map((obj) => {
			return {
				value: obj.id,
				label: obj.name,
			};
		}),
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		addProductData: (val) => dispatch(addProductValue(val)),
		editProductData: (val) => dispatch(updateProductValue(val)),
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductForm);
