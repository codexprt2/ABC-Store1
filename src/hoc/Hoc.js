import React, { useEffect } from "react";
import AppRouter from "../AppRouter";
import { setCategories } from "../redux/category/action";

const Hoc = ({ children }) => {
	useEffect(() => {
		setCategories();
	}, []);
	return (
		<div>
			<AppRouter />
			{children}
		</div>
	);
};

export default Hoc;
