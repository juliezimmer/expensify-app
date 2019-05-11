import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

// removeExpense jest test 
test('should set up remove expense action object', () => {
   const action = removeExpense({ id: '123abc'});
   expect(action).toEqual({
      type: 'REMOVE_EXPENSE',
      id: '123abc'
   }); 
});

// editExpense jest test
test('should set up expense action object', () => {
   const action = editExpense('123abc', { note:'New note value' });
   expect(action).toEqual({
      type: 'EDIT_EXPENSE',
      id: '1231bc',
      updates: {
         note: 'New note value'
      }
   })
});

// for ADD_EXPENSE jset testing
test('should set up add expense action object with provided values', () => {
   // define data that is passed to the ADD_EXPENSE action creator
   const expenseData = {
      description: 'Rent',
      amount: 109500,
      createdAt: 1000,
      note: 'This was last months rent'
   };
   // pass it to the ADD_EXPENSE action generator with the expenseData created above
   const action = addExpense(expenseData);
   // make assertion -  need to use expect.any()
   expect(action).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
         ...expenseData,
         id: expect.any(String)
      }
   })
});

test('should set up add expense action object with default values', () => {
   // Call addExpense  with no data/arguments
   const action = addExpense();
  
   // Assert the value of the return object
   expect(action).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
         id: expect.any(String),
         description: '',
         note: '',
         amount: 0,
         createdAt: 0
      }
   });
});