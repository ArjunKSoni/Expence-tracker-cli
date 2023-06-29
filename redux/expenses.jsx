import {createSlice} from "@reduxjs/toolkit"
import Expenses from "../screen/dummy"

const Expense = createSlice({
    name: "Expense",
    initialState: { expense: Expenses },
    reducers:{
        addExpense: (state, action) => { state.expense.push(action.payload.value) },
        remExpense: (state, action) => { state.expense = state.expense.filter((e) => { return e.id != action.payload.id }) },
        updateExpense: (state, action) => { state.expense = state.expense.filter((e) => { return e.id != action.payload.value.id }); state.expense.push(action.payload.value) }
    }
})

export const addExpense = Expense.actions.addExpense
export const updateExpense = Expense.actions.updateExpense
export const remExpense = Expense.actions.remExpense

export default Expense.reducer