import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getFilteredExpenses  from './selectors/expenses'; // this is designated an export default in the selectors/expenses.js file.
import 'normalize.css/normalize.css';
import './styles/styles.scss';

// This is the Redux Store
const store = configureStore(); // this gives us access to store.dispatch, store.subscribe, store.getState

// Add an expense
// expense description is passed into the method as an object. this one only contains the description.
store.dispatch(addExpense({ description: 'Water bill', amount: 4500 }));
store.dispatch(addExpense({ description: 'Gas bill', createdAt: 1000}));
store.dispatch(addExpense({ description: 'Rent', amount: 109500 }));

// get the filtered expenses
const state = store.getState();
const filteredExpenses = getFilteredExpenses(state.expenses, state.filters);
console.log(filteredExpenses);
// console.log(store.getState()); // logs default state to the console

const jsx = ( // store refers to the name of the Redux Store, defined on line 14
   <Provider store={store}>
      <AppRouter />
   </Provider>
); 

ReactDOM.render(jsx, document.getElementById('app')); 





// store.dispatch(addExpense({ description:'Rent', amount: 109500 }));