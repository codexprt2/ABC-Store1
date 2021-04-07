import React from "react";
import TitleAppBar from "../components/TitleAppBar";
import ButtonTab from "../components/ButtonTab";
import TableComponent from "../components/TableComponent";
import Form from "../components/Form";
import "./style.css";

const ProductPage = () => {
	return (
		<React.Fragment>
			<TitleAppBar name='Products' />
			<div className='addBtn'>
				<ButtonTab name='ADD NEW' />
			</div>
		</React.Fragment>
	);
};

export default ProductPage;
