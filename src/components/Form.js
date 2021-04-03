import React from "react";
import { useState } from "react";
import { connect } from "react-redux";
import { addCategory } from "../redux/action";

const Form = ({ addCategory1, added }) => {
	const [catName, setCatName] = useState();

	const handleSubmit = (e) => {
		e.preventDefault();

		addCategory1(catName);
		added(false);
	};

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
		addCategory1: (data) => dispatch(addCategory(data)),
	};
};

export default connect(null, mapDispatchToProps)(Form);
