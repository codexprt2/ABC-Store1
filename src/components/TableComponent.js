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

const useStyles = makeStyles({
	table: {
		minWidth: 650,
	},
});

const TableComponent = ({ category }) => {
	const classes = useStyles();

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
					{category.map((item) => (
						<TableRow key={item.id}>
							<TableCell component='th' scope='row'>
								{item.name}
							</TableCell>
							<TableCell align='right'>{item.id}</TableCell>
							<TableCell align='right'>
								<button>
									<AiTwotoneEdit />
								</button>
								<button>
									<RiDeleteBin5Line />
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
	const { categoryReducer } = store;
	console.log("store!!!", store);
	return {
		category: categoryReducer.category.categories,
	};
};

export default connect(mapStateToProps, null)(TableComponent);
