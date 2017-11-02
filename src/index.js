import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense  } from './actions/expenses';
// import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses'; 



const store = configureStore();

store.subscribe(() => {
	const state = store.getState();
	const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
	console.log(visibleExpenses)
})

store.dispatch(addExpense({ description: 'Water bill', note: 'Paid October water bill', amount: 8000, createdAt: 100 }));
store.dispatch(addExpense({ description: 'Gas bill', note: 'Paid October gas bill', amount: 5400, createdAt: 1200 }));
store.dispatch(addExpense({ description: 'Rent bill', note: 'Paid October rent bill', amount: 109400, createdAt: 500 }));
// store.dispatch(setTextFilter('water'));

const jsx = (
	<Provider store={store}>
		{AppRouter}
	</Provider>
);


render (
	jsx,
	document.getElementById('root')
);