import actionType from "./addExpenseTypes"

const initialState = {
  expenseDB: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actionType.ADD_EXPENSE:
      return {
        ...state,
        expenseDB: [...state.expenseDB, action.expenses],
      }

    default:
      return state
  }
}
