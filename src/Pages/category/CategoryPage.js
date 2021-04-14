import React, { useEffect, useState } from "react";
import TitleAppBar from "../../components/TitleAppBar";
import ButtonTab from "../../components/ButtonTab";
import "./style.css";
import Form from "./Form";
import TableComponent from "./TableComponent";
import { connect } from "react-redux";

const CategoryPage = ({ category }) => {
	const [isFormVisible, setisFormVisible] = useState(false);
	const [isTableVisible, setisTableVisible] = useState(true);

	const [updateData, setUpdateData] = useState(null);
	const tableHeader = ["Category Name", "Category Id"];
	const added = (val) => {
		setisFormVisible(val);
		setisTableVisible(!val);
	};
	const handleEdit = (index, editData) => {
		setisFormVisible(true);
		setUpdateData({ index, ...editData });
		setisTableVisible(false);
	};
	const handleView = () => {
		setisFormVisible(true);
		setisTableVisible(false);
	};

	return (
		<React.Fragment>
			<TitleAppBar name='Category' />
			{isFormVisible && (
				<div>
					<Form
						added={added}
						isEdit={!!updateData}
						editData={updateData}
						onEditHandle={() => setUpdateData(null)}
					/>
				</div>
			)}
			<div className='addBtn'>
				<ButtonTab name='ADD NEW' onClick={handleView} />
			</div>
			<div>
				{isTableVisible && (
					<TableComponent
						headers={tableHeader}
						handleEdit={handleEdit}
						data={category}
					/>
				)}
			</div>
		</React.Fragment>
	);
};
const mapStateToProps = (store) => {
	console.log("Store", store);
	const { categoryReducer } = store;
	return {
		category: categoryReducer.category.categories,
	};
};
export default connect(mapStateToProps, null)(CategoryPage);
