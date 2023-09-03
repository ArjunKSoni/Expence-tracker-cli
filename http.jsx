import axios from "axios"
const url = "https://expense-tracker-db3e3-default-rtdb.firebaseio.com/"

export const storeExpense = async (expenseData) => {
    let res = await axios.post(url + "expenses.json", expenseData)
    return (res.data.name);
}

export const getExpenses = async () => {
    const expenses = []

    let data = await axios.get(url + "expenses.json")
    for (const key in data.data) {
        const expenseObject = {
            id: key,
            cost: data.data[key].cost,
            name: data.data[key].name,
            date: data.data[key].date,
        }
        expenses.push(expenseObject)
    }
    return expenses
}
export const updateexpense = (id, expenseData) => {
    axios.put(url + `expenses/${id}.json`, expenseData)
}

export const deleteExpense = (id) => {
    axios.delete(url + `expenses/${id}.json`)
}