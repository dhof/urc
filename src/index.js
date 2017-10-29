import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// ADD_EXPENSE
const addExpense = (
	{ 
		description = '', 
		note = '', 
		amount = 0, 
	}
) => ({
	type: 'ADD_EXPENSE',
	expense: {
		id: uuid(),
		description,
		note,
		amount,
		createdAt: Date.now()
	}
});

// REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
	type: 'REMOVE_EXPENSE',
	id
});

// EDIT_EXPENSE
const editExpense = ( id, updates ) => ({
	type: 'EDIT_EXPENSE',
	id,
	updates
})

// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
	type: 'SET_TEXT_FILTER',
	text
})

// SORT_BY_DATE
const sortByDate = () => ({
	type: 'SORT_BY_DATE'
})

// SORT_BY_AMOUNT
const sortByAmount = () => ({
	type: 'SORT_BY_AMOUNT'
})

// SET_START_DATE
const setStartDate = (date) => ({
	type: 'SET_START_DATE',
	date
})
// SET_END_DATE
const setEndDate = (date) => ({
	type: 'SET_END_DATE',
	date
})


// Expenses Reducer

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
	switch (action.type) {
		case 'ADD_EXPENSE':
			return [
				...state,
				action.expense
			]
		case 'REMOVE_EXPENSE':
			return state.filter(({ id }) => id !== action.id );
		case 'EDIT_EXPENSE':
			return state.map((expense) => {
				if(expense.id === action.id) {
					return {
						...expense,
						...action.updates
					}
				} else {
						return expense;
				}
			})
		default: 
			return state;
	}
};



// Filters Reducer

const filtersReducerDefaultState = {
	text: '',
	sortBy: 'date',
	startDate: undefined,
	endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
	switch (action.type) {
		case 'SET_TEXT_FILTER':
			return {
				...state,
				text: action.text
			}
		case 'SORT_BY_DATE':
			return {
				...state,
				sortBy: 'date'
			}
		case 'SORT_BY_AMOUNT':
			return {
				...state,
				sortBy: 'amount'
			}
		case 'SET_START_DATE':
			return {
				...state,
				startDate: action.date
			}
		case 'SET_END_DATE':
			return {
				...state,
				endDate: action.date
			}
		default:
			return state;
	}
}

// Store Creation

const store = createStore(
	combineReducers({
		expenses: expensesReducer,
		filters: filtersReducer
	}));

store.subscribe(() => {
	console.log(store.getState())
});

// const expenseOne = store.dispatch(addExpense({ description: 'Rent', note: 'January Rent', amount: 450}))
// const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300}))

// store.dispatch(removeExpense(expenseOne.expense));

// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));

// store.dispatch(setTextFilter('rent'));

// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

store.dispatch(setStartDate(125));
store.dispatch(setStartDate());
store.dispatch(setEndDate(1599));

// const demoState = {
// 	expenses: [{
// 		id: 'foo',
// 		description: 'January Rent',
// 		note: 'This was the final payment for that address',
// 		amount: 54500,
// 		createdAt: 0
// 	}],
// 	filters: {
// 		text: 'rent',
// 		sortBy: 'amount', // date or amount
// 		startDate: undefined,
// 		endDate: undefined
// 	}
// }