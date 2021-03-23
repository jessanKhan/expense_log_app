import { combineReducers } from "redux"

import Home from "./home/homeReducer"
import AddExpense from "./addExpense/addExpenseReducer"

export default combineReducers({
  Home,
  AddExpense,
})
