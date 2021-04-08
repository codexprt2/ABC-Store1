import React, { useState } from "react";
import TitleAppBar from "../components/TitleAppBar";
import "./style.css";
import ButtonTab from "../components/ButtonTab";
import SubCategoryTable from "../components/SubCategoryTable";
import { connect } from "react-redux";
import SubCategoryForm from "../components/SubCategoryForm";

const SubCategoryPage = ({ category, subCategory }) => {
	const [isFormVisible, setisFormVisible] = useState(false);
	const [updateData, setUpdateData] = useState(null);

	const tableHeader = ["SubCategory Name", "Category"];
	const added = (val) => {
		setisFormVisible(val);
	};

	const handleEdit = (index, editData) => {
		console.log("item", index, editData);
		setisFormVisible(true);
		setUpdateData({ index, ...editData });
	};
	return (
		<div>
			<TitleAppBar name='SubCategory' />

			{isFormVisible && (
				<div>
					<SubCategoryForm
						category={category}
						isEdit={!!updateData}
						added={added}
						editData={updateData}
						onEditHandle={() => setUpdateData(null)}
					/>
				</div>
			)}
			<div className='addBtn'>
				<ButtonTab name='ADD NEW' onClick={() => setisFormVisible(true)} />
			</div>

			<div>
				<SubCategoryTable
					headers={tableHeader}
					handleEdit={handleEdit}
					data={subCategory}
				/>
			</div>
		</div>
	);
};
const mapStateToProps = (store) => {
	const { categoryReducer, subCategoryReducer } = store;

	console.log(store);
	return {
		category: categoryReducer.category.categories.map((obj) => {
			return {
				value: obj.id,
				label: obj.name,
			};
		}),
		subCategory: subCategoryReducer.subcategory.subCategories,
	};
};
export default connect(mapStateToProps, null)(SubCategoryPage);
