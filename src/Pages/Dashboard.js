import React from "react";
import ButtonTab from "../components/ButtonTab";
import TitleAppBar from "../components/TitleAppBar";
import { useHistory } from "react-router-dom";
import "./style.css";

const Dashboard = () => {
	let history = useHistory();
	const redirect = () => {
		history.push("/category");
	};
	return (
		<div>
			<div>
				<TitleAppBar />
			</div>
			<div className='container'>
				<div className='btnContainer'>
					<ButtonTab name='Category' onClick={redirect} />
				</div>
				<div className='btnContainer'>
					<ButtonTab name='SubCategory' />
				</div>
				<div className='btnContainer'>
					<ButtonTab name='Products' />
				</div>
				<div className='btnContainer'>
					<ButtonTab name='User' />
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
