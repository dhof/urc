import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';

const ExpenseList = (props) => (
	<div>
		<h1>Expense List</h1>
		<ExpenseListItem />
		{props.expenses[0].note}
	</div>
);

const mapStateToProps = (state) =>  {
	return {
		expenses: state.expenses
	}
};


export default connect(mapStateToProps)(ExpenseList);