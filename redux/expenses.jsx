import {createSlice} from "@reduxjs/toolkit"

const Expenses=createSlice({
    name:"Expenses",
    initialState:{expense:[]},
    reducers:{
        addExpense:(store,action)=>{},
        remExpense:(store,action)=>{},
        updateExpense:(store,action)=>{}
    }
})

export const addExpense=Expenses.actions.addExpense
export const updateExpense=Expenses.actions.updateExpense
export const remExpense=Expenses.actions.remExpense

export default Expenses.reducer