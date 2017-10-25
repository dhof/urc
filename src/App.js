import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ExpenseDashboard from './ExpenseDashboard';
import AddExpense from './AddExpense';
import EditExpense from './EditExpense';
import Help from './Help';


const routes = (
  <BrowserRouter>
    <div>
      <Route path="/" component={ExpenseDashboard} exact={true} />
      <Route path="/create" component={AddExpense} exact={true} />
      <Route path="/edit" component={EditExpense} exact={true} />
      <Route path="/help" component={Help} exact={true} />
    </div>
  </BrowserRouter>
)



export default routes;
