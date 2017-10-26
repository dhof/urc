import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import './styles.css';
import ExpenseDashboard from './ExpenseDashboard';
import AddExpense from './AddExpense';
import EditExpense from './EditExpense';
import Help from './Help';
import NotFound from './NotFound';

const Header = () => (
	<div>
		<h1>Expensify</h1>
			<NavLink to="/" exact={true} activeClassName="is-active">Home</NavLink><br/>
			<NavLink to="/create" activeClassName="is-active">Create Expense</NavLink><br/>
			<NavLink to="/edit" activeClassName="is-active">Edit Expense</NavLink><br/>
			<NavLink to="/help" activeClassName="is-active">Help Expense</NavLink><br/>
	</div>
)

const routes = (
  <BrowserRouter>
  	<div>
	  	<Header />
	    <Switch>
			<Route path="/" component={ExpenseDashboard} exact={true} />
			<Route path="/create" component={AddExpense} />
			<Route path="/edit" component={EditExpense} />
	      	<Route path="/help" component={Help} />
	  		<Route component={NotFound} />
	    </Switch>
    </div>
  </BrowserRouter>
)



export default routes;
