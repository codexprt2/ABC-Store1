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
import { removeProduct } from "../../redux/products/action";

const useStyles = makeStyles({
	table: {
		minWidth: 650,
	},
});

const ProductTable = ({ handleEdit, remove, headers, product }) => {
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
					{product.map((item, index) => (
						<TableRow key={`${index}`}>
							<TableCell component='th' scope='row'>
								{item.name}
							</TableCell>
							<TableCell component='th' scope='row'>
								{item.selectedCategory.label}
							</TableCell>
							<TableCell component='th' scope='row'>
								{item.selectedSubCategory.label}
							</TableCell>
							<TableCell component='th' scope='row'>
								{item.desc}
							</TableCell>
							<TableCell component='th' scope='row'>
								{item.price}
							</TableCell>
							<TableCell component='th' scope='row'>
								{item.quantity}
							</TableCell>

							<TableCell align='right'>
								<button>
									<AiTwotoneEdit onClick={() => handleEdit(item)} />
								</button>
								<button>
									<RiDeleteBin5Line onClick={() => remove(item.id)} />
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
	const { productReducer } = store;
	return {
		product: productReducer.product.products,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		remove: (val) => dispatch(removeProduct(val)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductTable);
