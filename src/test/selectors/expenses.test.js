import moment from 'moment';
import selectExpenses from '../../selectors/expenses';

// teest data for this testing file
const expenses = [
   {
      id: '1',
      description: 'Gum',
      note: '',
      amount: 195,
      createdAt: 0
   },
   {
      id: '2',
      description: 'Rent',
      note: '',
      amount: 199500,
      createdAt: moment(0).subtract(4, 'days').valueOf() // .subtract() is a moment method
   },
   {
      id: '3',
      description: 'Credit Card',
      note: '',
      amount: 4500,
      createdAt: moment(0).add(4, 'days').valueOf() //.add() is a moment method
   },
]

// test for text filter used on expenses
test('should filter by text value', () => {
   const filters = {
      text: 'e',
      sortBy: 'date',
      startDate: undefined,
      endDate: undefined
   };
   const result = selectExpenses(expenses, filters);
   expect(result).toEqual([expenses[2], expenses[1]]);
});

// for start date filter
test('should filter by startDate', () => {
   const filters = {
      text: '',
      sortBy: 'date',
      startDate: moment(0),
      endDate: undefined
   };
   const result = selectExpenses(expenses, filters);
   expect(result).toEqual([expenses[2], expenses[0]]);
});

// for filter by endDate
test('should filter by endDate', () => {
   const filters = {
      text: '',
      sortBy: 'date',
      startDate: undefined,
      endDate: moment(0).add(2, 'days')
   };
   const result = selectExpenses(expenses, filters);
   expect(result).toEqual([expenses[0], expenses[1]]);
});

// for sort by date
test('should sort by date', () => {
   const filters = {
      text: '',
      sortBy: 'date',
      startDate: undefined,
      endDate: undefined
   };
   const result = selectExpenses(expenses, filters);
   expect(result).toEqual([expenses[2], expenses[0], expenses[1]]);
});

// for sort by amount
test('should sort by amount', () => {
   const filters = {
      text: '',
      sortBy: 'amount',
      startDate: undefined,
      endDate: undefined
   };
   const result = selectExpenses(expenses, filters);
   expect(result).toEqual([expenses[1], expenses[2], expenses[0]]);
});
