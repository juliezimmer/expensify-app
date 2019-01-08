// holds action generators for expenses: ADD_EXPENSE, EDIT_EXPENSE, and REMOVE_EXPENSE
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
});