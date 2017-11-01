import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';

const ExpenseDashboardPage = () =>  (
	<div>
		<h1>	
			<ExpenseList />
			<ExpenseListFilters />
		</h1>
	</div>
);


export default ExpenseDashboardPage;