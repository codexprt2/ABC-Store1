import React, { useEffect } from "react";
import AppRouter from "../AppRouter";
import { connect } from "react-redux";
import { setSubCategories } from "../redux/subCategory/action";
import { setCategories } from "../redux/category/action";
import {setProductsValue} from '../redux/products/action'

const Hoc = ({ children, setCategoriesData, setSubCategoriesData, setProductsData }) => {
	useEffect(() => {
		setCategoriesData();
		setSubCategoriesData();
		setProductsData();
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
		setProductsData: () => dispatch(setProductsValue())

	};
};
export default connect(null, mapDispatchToProps)(Hoc);
