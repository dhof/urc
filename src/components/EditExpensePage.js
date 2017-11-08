import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

const EditExpensePage = (props) =>  {
console.log(props)
	return(
	<div>
		Editing Expense #: {props.match.params.id}
		<ExpenseForm 
			expense={props.expense}
			onSubmit={(expense) => {
				props.dispatch(editExpense(props.match.params.id, expense));
				props.history.push('/');
			}}
		/>
		<button onClick={((e) => {
			props.dispatch(removeExpense({ id: props.expense.id }))
			props.history.push('/');
			// console.log(props.expense.id)
		})}>Remove {props.expense.description}</button>
	</div>
	)
}

const mapStateToProps = (state, props) => {
	return {
		expense: state.expenses.find((expense) => expense.id === props.match.params.id)
	};
};

export default connect(mapStateToProps)(EditExpensePage);
