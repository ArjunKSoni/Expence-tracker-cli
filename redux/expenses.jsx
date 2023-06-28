import {createSlice} from "@reduxjs/toolkit"
import Expenses from "../screen/dummy"

const Expense = createSlice({
    name: "Expense",
    initialState: { expense: Expenses },
    reducers:{
        addExpense:(store,action)=>{},
        remExpense:(store,action)=>{},
        updateExpense:(store,action)=>{}
    }
})

export const addExpense = Expense.actions.addExpense
export const updateExpense = Expense.actions.updateExpense
export const remExpense = Expense.actions.remExpense

export default Expense.reducer