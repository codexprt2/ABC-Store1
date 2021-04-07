import React, { useState } from "react";
import TitleAppBar from "../components/TitleAppBar";
import "./style.css";
import ButtonTab from "../components/ButtonTab";
import TableComponent from "../components/TableComponent";
import { connect } from "react-redux";

const SubCategoryPage = () => {
	const [isFormVisible, setisFormVisible] = useState(false);

	const category = ["123", "123"];

	const tableHeader = ["SubCategory Name"];
	const added = (val) => {
		setisFormVisible(val);
	};

	const handleEdit = (index, editData) => {
		console.log("item", index, editData);
		setisFormVisible(true);
		// setUpdateData({ index, ...editData });
	};
	return (
		<div>
			<TitleAppBar name='SubCategory' />
			<div className='addBtn'>
				<ButtonTab name='ADD NEW' />
			</div>
			<div>
				<TableComponent
					headers={tableHeader}
					handleEdit={handleEdit}
					data={category}
				/>
			</div>
		</div>
	);
};
const mapStateToProps = (store) => {
	console.log("Store", store);
	const { categoryReducer } = store;
	return {
		category: categoryReducer.category.categories,
	};
};
export default connect(mapStateToProps, null)(SubCategoryPage);
