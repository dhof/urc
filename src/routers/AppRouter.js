import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ExpenseDashboard from '../ExpenseDashboard';
import AddExpense from '../AddExpense';
import EditExpense from '../EditExpense';
import Help from '../Help';
import NotFound from '../NotFound';
import Header from '../Header';


const AppRouter = (
  <BrowserRouter>
  	<div>
	  	<Header />
	    <Switch>
			<Route path="/" component={ExpenseDashboard} exact={true} />
			<Route path="/create" component={AddExpense} />
			<Route path="/edit/:id" component={EditExpense} />
	      	<Route path="/help" component={Help} />
	  		<Route component={NotFound} />
	    </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter;