import uuid from 'uuid';

// ADD_EXPENSE
const addExpense = (
	{ 
		description = '', 
		note = '', 
		amount = 0, 
		createdAt = Date.now()
	}
) => ({
	type: 'ADD_EXPENSE',
	expense: {
		id: uuid(),
		description,
		note,
		amount,
		createdAt
	}
});

// EDIT_EXPENSE
const editExpense = ( id, updates ) => ({
	type: 'EDIT_EXPENSE',
	id,
	updates
});

// REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
	type: 'REMOVE_EXPENSE',
	id
});

export { addExpense, editExpense, removeExpense };