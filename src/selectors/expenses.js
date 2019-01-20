// was formerly getFilteredExpenses: const getFilteredExpenses = 
// imported as selectedExpenses in src/components/ExpenseList.js
// the exporty default takes in two arguments:
//    1. array of expenses : expenses
//    2. an object of all of the filters
// and returns a filtered and sorted array of expenses.
// when imported in components/ExpenseList.js, the import is referred to as: selectExpenses and will show up as the value for expenses in the return  object in mapStateToProps as:
//   expenses: selectExpenses(state.expenses, state.filters), the key-value pair in the return object produced by the const mapStateToProps.
export default (expenses, {text, sortBy, startDate, endDate}) => {
   return expenses.filter((expense) => {
      const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
      const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
      const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

      return startDateMatch && endDateMatch && textMatch;
   }).sort((a, b) => {
      if (sortBy === 'date') {
         return a.createdAt < b.createdAt ? 1 : -1;
      } else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1;
      }
   });
}; 