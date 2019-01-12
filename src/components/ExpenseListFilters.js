import React from 'react';
import { connect } from 'react-redux';
import {setTextFilter, sortByDate, sortByAmount } from '../actions/filters';

const ExpenseListFilters = (props) => (
   <div>
      <input type="text" value={props.filters.text} 
         onChange={(e) => {
            props.dispatch(setTextFilter(e.target.value));
         console.log(e.target.value);
      }}/>
      <select value={props.filters.sortBy}
         onChange={(e) => { // this ensures that as the selected option changes, it actually changes the store. As the store changes, the value is set.
            if (e.target.value === 'date') {
               props.dispatch(sortByDate());
            } else if (e.target.value === 'amount') {
               props.dispatch(sortByAmount());
            }
         }} >
         <option value="date">Date</option>
         <option value="amount">Amount</option>
      </select>
   </div>
);

// in this function, we pass state in as the argument, and we can return whatever we want from the state object.
const mapStateToProps = (state) => {
   // whatever we want from the Store is in the return object.
   return {
      filters: state.filters // this means that ExpenseListFilters will have access to props.filters.text
   };
};

export default connect(mapStateToProps)(ExpenseListFilters); 