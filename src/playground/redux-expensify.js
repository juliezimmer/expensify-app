import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// ADD_EXPENSE Action generator: the first argument is a destructured object with the id property pulled out. 
const addExpense = ({
   description = '', 
   note = '', 
   amount = 0, 
   createdAt = 0 } = {}) => ({ 
      type:'ADD_EXPENSE',
      expense: {
         id: uuid(),
         description : description,
         note: note,
         amount: amount,
         createdAt: createdAt
      }
});
// REMOVE_EXPENSE Action Generator
// argument is a destructured object with the id removed. 
const removeExpense = ({id} = {}) => ({
   type: 'REMOVE_EXPENSE',
   id: id 
});

// EDIT_EXPENSE action generator
const editExpense = (id, updates) => ({
   type: 'EDIT_EXPENSE',
   id: id,
   updates: updates
})

// SET_TEXT_FILTER action generator
const setTextFilter = (text = '') => ({
   type: 'SET_TEXT_FILTER',
   text: text
});

// SORT_BY_DATE
const sortByDate = () => ({
   type: 'SORT_BY_DATE'
});

// SORT_BY_AMOUNT
const sortByAmount = () => ({
   type: 'SORT_BY_AMOUNT'
});

// SET_START_DATE
const setStartDate = (startDate) => ({
   type: 'SET_START_DATE',
   startDate
 });
 
 // SET_END_DATE
 const setEndDate = (endDate) => ({
   type: 'SET_END_DATE',
   endDate
 });

// Expenses Reducer
const expensesReducerDefaultState = []; 
const expensesReducer = (state = expensesReducerDefaultState, action) => {  
   switch(action.type) {
      case 'ADD_EXPENSE':
         return [
            ...state, 
            action.expense //represents a new expense added by the user.
         ];
      case 'REMOVE_EXPENSE': // action or case will return a new array without the expense just removed. To avoid changing the state object directly, filter will be used on the array. filter does not change the array it is called on. It returns a new array with the subset of the values on the original array. 
         return state.filter(({ id }) => id !== action.id); // if this function returns true, then the item is kept in the array. If false, the item will be removed.
      case 'EDIT_EXPENSE':
         return state.map((expense) => {
            if (expense.id === action.id) {
               return {
                  ...expense,
                  ...action.updates
               };
            } else {
               return expense;
            };
         });
      default:
         return state;
      }
   };

// the default state is the empty object
const filtersReducerDefaultState = {
   text: '',
   sortBy: 'date',
   startDate: undefined,
   endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
   switch(action.type) {
      case 'SET_TEXT_FILTER':
         return {
            ...state,
            text: action.text
         };
      case 'SORT_BY_AMOUNT':
         return {
            ...state,
            sortBy:'amount'
         };
      case 'SORT_BY_DATE':
         return {
            ...state,
            sortBy:'date'
         };
         case 'SET_START_DATE':
         return {
           ...state,
           startDate: action.startDate
         };
       case 'SET_END_DATE':
         return {
           ...state,
           endDate: action.endDate
         };
      default:
         return state; // this is the current state
   }
};

// Get filtered/visible expenses (96)
// the filters object is being destructured to p
const getFilteredExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
   return expenses.filter((expense) => {
      const startDateMatch = typeof startDate !== 'number' || expenses.createdAt >= startDate;
      const endDateMatch = typeof endDate !== 'number' || expenses.createdAt <= endDate;
      const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

      return startDateMatch && endDateMatch && textMatch;
   }).sort((a,b) => {
      if (sortBy === 'date') {
         return a.createdAt < b.createdAt ? 1 : -1;
      } else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1;
      }
   });
}; 
const store = createStore(
   combineReducers({ 
      expenses: expensesReducer, 
      filters: filtersReducer
   })
);

store.subscribe(() => {
   const state = store.getState(); // returns entire expenses array + all filters.
   const filteredExpenses = getFilteredExpenses(state.expenses, state.filters); 
   console.log(filteredExpenses); 
});

// expenses added to the store by user
const expenseOne = store.dispatch(addExpense({
   description:'Rent', 
   amount: 100,
   createdAt: -21000
   })
  );
const expenseTwo = store.dispatch(addExpense({
   description:'Coffee', 
   amount: 300,
   createdAt: -1000
   })
);
// store.dispatch(editExpense(expenseTwo.expense.id, {amount: 500 }));
// store.dispatch(removeExpense({ id: expenseOne.expense.id }));

// store.dispatch(setTextFilter('ffe')); 
// store.dispatch(setTextFilter());

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(0)); 
// store.dispatch(setStartDate()); // startDate undefined
// store.dispatch(setEndDate(999)); 


const demoState = {
   expenses: [{
      id: 'asdasdasda', // will be auto-generated in the final app
      description: 'January rent', 
      notes: 'final payment on lease',
      amount: 54500,
      createdAt: 0
   }],
   filters: {
      text: 'rent', // filters expenses based on text entered.
      sortBy: 'amount', // date or amount may be used
      startDate: undefined,
      endDate: undefined
   }
};

