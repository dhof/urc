import React from 'react';
import ExpenseForm from './ExpenseForm';

const AddExpensePage = () =>  (
	<div>
		<h1>Add Expense</h1>
		<ExpenseForm />
	</div>
);

// const mapStateToProps = (state) => {
// 	return {
// 		expense: state.expenses
// 	}
// };


export default AddExpensePage;