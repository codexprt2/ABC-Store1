import React, { useState } from "react";
import TitleAppBar from "../components/TitleAppBar";
import ButtonTab from "../components/ButtonTab";
import "./style.css";
import Form from "../components/Form";
import TableComponent from "../components/TableComponent";

const CategoryPage = () => {
	const [isFormVisible, setisFormVisible] = useState(false);
	const [updateData, setUpdateData] = useState(null);

	const added = (val) => {
		setisFormVisible(val);
	};
	const handleEdit = (item) => {
		setisFormVisible(true);
		setUpdateData(item);
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
export default CategoryPage;
