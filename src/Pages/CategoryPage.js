import React, { useState } from "react";
import TitleAppBar from "../components/TitleAppBar";
import ButtonTab from "../components/ButtonTab";
import "./style.css";
import Form from "../components/Form";
import TableComponent from "../components/TableComponent";

const CategoryPage = () => {
	const [isFormVisible, setisFormVisible] = useState(false);

	const added = (val) => {
		setisFormVisible(val);
	};

	return (
		<React.Fragment>
			<TitleAppBar name='Category' />
			{isFormVisible && (
				<div>
					<Form added={added} />
				</div>
			)}
			<div className='categoryBtn'>
				<ButtonTab name='ADD NEW' onClick={() => setisFormVisible(true)} />
			</div>
			<div>
				<TableComponent />
			</div>
		</React.Fragment>
	);
};

export default CategoryPage;
