import React, { useState } from "react";
import TitleAppBar from "../components/TitleAppBar";
import ButtonTab from "../components/ButtonTab";
import "./style.css";
import Form from "../components/Form";
import TableComponent from "../components/TableComponent";
import { connect } from "react-redux";

const CategoryPage = ({ category }) => {
	const [isFormVisible, setisFormVisible] = useState(false);
	const [updateData, setUpdateData] = useState(null);
	const tableHeader = ["Category Name"];
	const added = (val) => {
		setisFormVisible(val);
	};
	const handleEdit = (index, editData) => {
		console.log("item", index, editData);
		setisFormVisible(true);
		setUpdateData({ index, ...editData });
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
				<ButtonTab name='ADD NEW' onClick={() => setisFormVisible(true)} />
			</div>
			<div>
				<TableComponent
					headers={tableHeader}
					handleEdit={handleEdit}
					data={category}
				/>
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
