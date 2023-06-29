import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Pressable, TextInput } from 'react-native';
import { useSelector, useDispatch } from "react-redux"
import { remExpense, addExpense, updateExpense } from '../redux/expenses';

export default function ManageExpenses({ route, navigation }) {
    const date = route.params.date
    const name = route.params.name
    const cost = route.params.cost
    const id = route.params.id
    const ids = route.params.ids
    const dispatch = useDispatch()
    const [newdesc, setName] = useState("")
    const [newcost, setCost] = useState("")
    const [newDate, setDate] = useState("")

    const Expenses = useSelector((state) => { return state.Expenses.expense })
    useEffect(() => {
        if (id === "edit") {
            setName(name)
            setCost(`${cost}`)
            setDate(date)
        }
        navigation.setOptions({ title: id === "add" ? "Add Expense" : "Edit Expense" })
    }, [])
    return (
        <View className="pt-3">

            <View className="flex my-2 items-center justify-center">
                <Text style={{ width: "80%" }} className="text-black font-bold ">Amount</Text>
                <TextInput value={newcost} onChangeText={e => setCost(e)} keyboardType="decimal-pad" style={{ width: "80%" }} className="bg-slate-300 p-3 text-black  overflow-scroll font-bold rounded-xl" />
            </View>
            <View className="flex my-2 items-center justify-center">
                <Text style={{ width: "80%" }} className="text-black font-bold ">Date</Text>
                <TextInput value={newDate} onChangeText={e => setDate(e)} keyboardType="decimal-pad" style={{ width: "80%" }} maxLength={10} m placeholder='yyyy-mm-dd' placeholderTextColor={"gray"} className="bg-slate-300 p-3 text-black  overflow-scroll font-bold rounded-xl" />
            </View>
            <View className="flex my-2 items-center justify-center">
                <Text style={{ width: "80%" }} className="text-black font-bold">Expense Desc</Text>
                <TextInput value={newdesc} onChangeText={e => setName(e)} style={{ width: "80%" }} multiline={true} autoCapitalize="sentences" autoCorrect={true} className="bg-slate-300 p-3 text-black overflow-scroll font-bold rounded-xl" />
            </View>
            <View className="flex items-center justify-around  py-1 flex-row">
                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => navigation.navigate("Home")}
                    style={{ minWidth: 90 }}
                    className="bg-sky-600 p-2 rounded-lg"
                >
                    <Text className="font-bold text-lg text-center">Cancel</Text>
                </TouchableOpacity>
                {id === "add" ? <TouchableOpacity
                    onPress={() => { dispatch(addExpense({ value: { id: `ac${Math.random() * 1000}`, name: newdesc, date: newDate, cost: parseInt(newcost) } })); navigation.navigate("Home") }}
                    activeOpacity={0.5}
                    style={{ minWidth: 90 }}
                    className="bg-sky-600 p-2 rounded-lg"
                >
                    <Text className="font-bold text-lg text-center">Add</Text>
                </TouchableOpacity> :
                <TouchableOpacity
                        onPress={() => { dispatch(updateExpense({ value: { id: ids, name: newdesc, date: newDate, cost: parseInt(newcost) } })); navigation.navigate("Home") }}
                        activeOpacity={0.5}
                        style={{ minWidth: 90 }}
                        className="bg-sky-600 p-2 rounded-lg"
                    >
                        <Text className=" font-bold text-lg text-center">Update</Text>
                    </TouchableOpacity>}

            </View>
            <TouchableOpacity
                onPress={() => { dispatch(remExpense({ id: ids })); navigation.navigate("Home") }}
                activeOpacity={0.5}
                style={{ minWidth: 90 }}
                className="bg-sky-600 p-2 mt-2 rounded-lg"
            >
                <Text className="font-bold text-lg text-center">Delete</Text>
            </TouchableOpacity>
            <View className="bg-slate-300 my-2" style={{ width: "100%", height: 2 }}></View>
        </View>
    );
}
