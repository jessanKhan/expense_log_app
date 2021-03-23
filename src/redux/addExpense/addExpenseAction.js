import actionType from './addExpenseTypes';

export function increment(expenses) {
  return {
    type: actionType.ADD_EXPENSE,
    expenses:expenses
  };
}
