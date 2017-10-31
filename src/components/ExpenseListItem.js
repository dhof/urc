import React from 'react';
import { connect } from 'react-redux';

const ExpenseListItem = (props) => {
	const expensesDuh = props.expenses;
	const listExpenses = props.expenses.map((expense) =>
		<li>(expense)</li>
	);
	console.log('expenses ', props.expenses)
	console.log('listed ', listExpenses)
	return (
		<div>
			<div>
			</div>
			<ul>{listExpenses}</ul>
		</div>
	)
};


const mapStateToProps = (state) => {
	return {
		expenses: state.expenses
	}
}

export default connect(mapStateToProps)(ExpenseListItem);

