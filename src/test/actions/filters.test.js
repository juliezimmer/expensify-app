import moment from 'moment'; //used in the project in the filter genertors
import { 
   setStartDate, 
   setEndDate, 
   setTextFilter, 
   sortByDate, 
   sortByAmount 
} from '../../actions/filters';

// test for SET_START_DATE
test('should generate set start date action object', () => {
   const action = setStartDate(moment(0));
   // assertion
   expect(action).toEqual({
      type: 'SET_START_DATE',
      startDate: moment(0) 
   });
});

// for SET_END_DATE
test ('should generate set end date action object', () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
     type: 'SET_END_DATE',
     endDate: moment(0)
  });
});

// for SET_TEXT_FILTER
test('should generate set text filter object with text value', () => {
   const text = 'Something in';
   const action = setTextFilter(text);
   expect(action).toEqual({
      type: 'SET_TEXT_FILTER',
      text: text
   });
});

// for SET_TEXT_FILTER with default values
test('should generate set text filter object with default', () => {
   const action = setTextFilter();
   expect(action).toEqual({
      type: 'SET_TEXT_FILTER',
      text: ''
   });
});

// for SORT_BY_DATE
test('should generate ation action object for sort by date', () => {
   expect(sortByDate()).toEqual({
      type: 'SORT_BY_DATE'
   });
});

// for SORT_BY_AMOUNT
test('should generate ation action object for sort by amount', () => {
   expect(sortByAmount()).toEqual({
      type: 'SORT_BY_AMOUNT'
   });
});