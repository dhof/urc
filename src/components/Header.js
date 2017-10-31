import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
	<div>
		<h1>Expensify</h1>
			<NavLink to="/" exact={true} activeClassName="is-active">Home</NavLink><br/>
			<NavLink to="/create" activeClassName="is-active">Create Expense</NavLink><br/>
			<NavLink to="/help" activeClassName="is-active">Help Expense</NavLink><br/>
	</div>
)

export default Header;