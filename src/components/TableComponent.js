import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { AiTwotoneEdit } from "react-icons/ai";
import { RiDeleteBin5Line } from "react-icons/ri";
import { connect } from "react-redux";
import { removeCategory } from "../onlyredux/category/action";

const useStyles = makeStyles({
	table: {
		minWidth: 650,
	},
});

const TableComponent = ({ handleEdit, category, remove }) => {
	const classes = useStyles();
	console.log("category!!!!", category);

	return (
		<TableContainer component={Paper}>
			<Table className={classes.table} aria-label='simple table'>
				<TableHead>
					<TableRow>
						<TableCell>Category Name</TableCell>
						<TableCell align='right'>Category Id</TableCell>
						<TableCell align='right'>Action</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{category.map((row, index) => (
						<TableRow key={`${index}`}>
							<TableCell component='th' scope='row'>
								{row.name}
							</TableCell>
							<TableCell align='right'>{row.id}</TableCell>
							<TableCell align='right'>
								<button>
									<AiTwotoneEdit onClick={() => handleEdit(index, row)} />
								</button>
								<button>
									<RiDeleteBin5Line onClick={() => remove(row.id)} />
								</button>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};
const mapStateToProps = (store) => {
	console.log("Store", store);
	const { categoryReducer } = store;
	return {
		category: categoryReducer.category.categories,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		remove: (id) => dispatch(removeCategory(id)),
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(TableComponent);
