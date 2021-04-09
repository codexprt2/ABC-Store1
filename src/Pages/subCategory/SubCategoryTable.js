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
import { removeSubCategory } from "../../onlyredux/subCategory/action";

const useStyles = makeStyles({
	table: {
		minWidth: 650,
	},
});

const SubCategoryTable = ({ handleEdit, remove, headers, subCategory }) => {
	const classes = useStyles();

	console.log("dataQWE", subCategory);

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
					{subCategory.map((item, index) => (
						<TableRow key={`${index}`}>
							<TableCell component='th' scope='row'>
								{item.name}
							</TableCell>
							<TableCell component='th' scope='row'>
								{/* {JSON.stringify(item)} */}
								{item.selectedCategory.label}
							</TableCell>

							<TableCell align='right'>
								<button>
									<AiTwotoneEdit onClick={() => handleEdit(index, item)} />
								</button>
								<button>
									<RiDeleteBin5Line onClick={() => remove(item)} />
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
	const { subCategoryReducer } = store;
	return {
		subCategory: subCategoryReducer.subcategory.subCategories,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		remove: (val) => dispatch(removeSubCategory(val)),
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(SubCategoryTable);
