import React from "react";
import ButtonTab from "../components/ButtonTab";
import TitleAppBar from "../components/TitleAppBar";
import { useHistory } from "react-router-dom";
import "./style.css";

const Dashboard = () => {
	let history = useHistory();
	const handleCategory = () => {
		history.push("/category");
	};
	const handleProducts = () => {
		history.push("/products");
	};
	const handleSubCategory = () => {
		history.push("/subcategory");
	};
	return (
		<div>
			<div>
				<TitleAppBar />
			</div>
			<div className='container'>
				<div className='btnContainer'>
					<ButtonTab name='Category' onClick={handleCategory} />
				</div>
				<div className='btnContainer'>
					<ButtonTab name='SubCategory' onClick={handleSubCategory} />
				</div>
				<div className='btnContainer'>
					<ButtonTab name='Products' onClick={handleProducts} />
				</div>
				<div className='btnContainer'>
					<ButtonTab name='User' />
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
