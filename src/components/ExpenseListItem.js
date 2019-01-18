import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'; 
import { removeExpense } from '../actions/expenses'; // action generator

const ExpenseListItem = ({ dispatch, id, description, amount, createdAt }) => (
   <div>
      <h3>{description}</h3>
      <p>{amount} - {createdAt}</p>
      <button onClick={() => {
         dispatch(removeExpense({id})); // id value comes from the id passed into  ExpenseListItem. All of the properties have been destructured from the state object.
      }}>Remove</button>
   </div>
);
 export default connect()(ExpenseListItem);






// const ExpenseListItem = ({ dispatch, id, description, amount, createdAt }) => (
//    <div>
//       <Link to={`/edit/${id}`}>
//       <h3>{description}</h3>
//       </Link> 
//       <p>{amount} - {createdAt}</p>
//       <button onClick={() => {
//          dispatch(removeExpense({ id }));
//       }}>Remove</button>
//    </div>
// );

// export default connect()(ExpenseListItem); // gives us access to the dispatch prop