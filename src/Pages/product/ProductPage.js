import React, { useState } from "react";
import TitleAppBar from "../../components/TitleAppBar";
import ButtonTab from "../../components/ButtonTab";
import ProductForm from "./ProductForm";
import "./style.css";
import ProductTable from "./ProductTable";

const ProductPage = () => {
	const [isFormVisible, setisFormVisible] = useState(false);
	const [updateData, setUpdateData] = useState(null);
	const [isTableVisible, setisTableVisible] = useState(true);
	const tableHeader = [
		"Product Name",
		"Category",
		"SubCategory",
		"Description",
		"Price",
		"Quantity",
	];
	const handleEdit = ( editData) => {
		setisFormVisible(true);
		setUpdateData({  ...editData });
		setisTableVisible(false);
	};
	const added = (val) => {
		setisFormVisible(val);
		setisTableVisible(!val);
	};
	const handleView = () => {
		setisFormVisible(true);
		setisTableVisible(false);
	};
	return (
		<React.Fragment>
			<TitleAppBar name='Products' />
			{isFormVisible && (
				<div>
					<ProductForm
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
					<ProductTable headers={tableHeader} handleEdit={handleEdit} />
				)}
			</div>
		</React.Fragment>
	);
};

export default ProductPage;
