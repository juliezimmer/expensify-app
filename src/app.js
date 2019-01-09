import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import  getFilteredExpenses  from './selectors/expenses'; // this is designated an export default in the selectors/expenses.js file.

import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore(); // this gives us access to store.dispatch, store.subscribe, store.getState

// Add an expense
// expense description is passed into the method as an object. this one only contains the description.
store.dispatch(addExpense({ description:'Water bill' }))
store.dispatch(addExpense({ description:'Gas bill' }))

// set a text filter
store.dispatch(setTextFilter('water'));

// get the filtered expenses
const state = store.getState();
const filteredExpenses = getFilteredExpenses(state.expenses, state.filters);
console.log(filteredExpenses);
console.log(store.getState()); // logs default state to the console

ReactDOM.render(<AppRouter />, document.getElementById('app')); 

