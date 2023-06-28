import {configureStore} from "@reduxjs/toolkit"
import expenses from "./expenses"

const store=configureStore({
    reducer:{Expenses:expenses}
})

export default store