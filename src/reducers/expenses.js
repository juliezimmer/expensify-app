// Expenses Reducer
const expensesReducerDefaultState = []; 
export default (state = expensesReducerDefaultState, action) => {  
   switch(action.type) {
      case 'ADD_EXPENSE':
         return [
            ...state, 
            action.expense //represents a new expense added by the user.
         ];
      case 'REMOVE_EXPENSE': // action or case will return a new array without the expense just removed,filter doesn't mutate state.   
         return state.filter(({ id }) => id !== action.id); // if true, then the item is kept in the array. If false, the item is removed.
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

   
