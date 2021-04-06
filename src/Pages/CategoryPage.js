import React, { useState } from "react";
import TitleAppBar from "../components/TitleAppBar";
import ButtonTab from "../components/ButtonTab";
import "./style.css";
import Form from "../components/Form";
import TableComponent from "../components/TableComponent";
import { connect } from "react-redux";
import { editCategoryData } from "../redux/action";

const CategoryPage = ({ addToActiveCat }) => {
	const [isFormVisible, setisFormVisible] = useState(false);
	const [updateData, setUpdateData] = useState(null);

	const added = (val) => {
		setisFormVisible(val);
	};
	const handleEdit = (item) => {
		setisFormVisible(true);
		setUpdateData(item);
		addToActiveCat(item);
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
			<div className='categoryBtn'>
				<ButtonTab name='ADD NEW' onClick={() => setisFormVisible(true)} />
			</div>
			<div>
				<TableComponent handleEdit={handleEdit} />
			</div>
		</React.Fragment>
	);
};
const mapDispatchToProps = (dispatch) => {
	return {
		addToActiveCat: (val) => dispatch(editCategoryData(val)),
	};
};
export default connect(null, mapDispatchToProps)(CategoryPage);
