import {createSlice} from "@reduxjs/toolkit"
import Expenses from "../screen/dummy"
import { storeExpense } from "../http"
import { updateexpense } from "../http"
import { deleteExpense } from "../http"

const Expense = createSlice({
    name: "Expense",
    initialState: { expense: [] },
    reducers:{
        addExpense: (state, action) => {
            let id = ""
            async function store() {
                id = await storeExpense(action.payload.value);
            }
            store()
            // state.expense.unshift({ ...action.payload.value, id: id });
        },
        remExpense: (state, action) => {
            deleteExpense(action.payload.id)
            // state.expense = state.expense.filter((e) => { return e.id != action.payload.id })

        },
        updateExpense: (state, action) => {
            updateexpense(action.payload.id, action.payload.value)
            // state.expense = state.expense.filter((e) => { return e.id != action.payload.id });
            // state.expense.push({ ...action.payload.value, ["id"]: action.payload.id })

        },
        setExpenses: (state, action) => { state.expense = action.payload.expense.reverse() }
    }
})

export const addExpense = Expense.actions.addExpense
export const updateExpense = Expense.actions.updateExpense
export const remExpense = Expense.actions.remExpense
export const setExpenses = Expense.actions.setExpenses

export default Expense.reducer