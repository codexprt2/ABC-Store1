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
import { deleteCategoryData } from "../../redux/action";

const useStyles = makeStyles({
	table: {
		minWidth: 650,
	},
});

const TableComponent = ({ handleEdit, remove, headers, data }) => {
	const classes = useStyles();

	return (
		<TableContainer component={Paper}>
			<Table className={classes.table} aria-label='simple table'>
				<TableHead>
					<TableRow>
						{headers.map((item) => (
							<TableCell>{item}</TableCell>
						))}

						<TableCell align='right'>Action</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{data.map((row, index) => (
						<TableRow key={`${index}`}>
							<TableCell component='th' scope='row'>
								{row.name}
							</TableCell>
							<TableCell component='th' scope='row'>
								{index}
							</TableCell>

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

const mapDispatchToProps = (dispatch) => {
	return {
		remove: (id) => dispatch(deleteCategoryData(id)),
	};
};
export default connect(null, mapDispatchToProps)(TableComponent);
