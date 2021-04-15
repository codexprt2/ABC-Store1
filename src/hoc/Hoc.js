import React, { useEffect } from "react";
import AppRouter from "../AppRouter";
import { connect } from "react-redux";
import { setSubCategories } from "../redux/subCategory/action";
import { setCategories } from "../redux/category/action";

const Hoc = ({ children, setCategoriesData, setSubCategoriesData }) => {
	useEffect(() => {
		setCategoriesData();
		setSubCategoriesData();
	}, []);
	return (
		<div>
			<AppRouter />
			{children}
		</div>
	);
};
const mapDispatchToProps = (dispatch) => {
	return {
		setCategoriesData: () => dispatch(setCategories()),
		setSubCategoriesData: () => dispatch(setSubCategories()),
	};
};
export default connect(null, mapDispatchToProps)(Hoc);
