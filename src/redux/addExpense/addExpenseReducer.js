import actionType from './addExpenseTypes';

const initialState = {
  expenseDB:[],

};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionType.ADD_EXPENSE:
        // console.log(action)
      return {
        ...state,
        // arr: [...state.arr, action.newItem]
        expenseDB: [...state.expenseDB, action.expenses],
        
      };
    case actionType.MINUS:
      return {
        ...state,
        value: state.value - 1,
      };
    default:
      return state;
  }
};
