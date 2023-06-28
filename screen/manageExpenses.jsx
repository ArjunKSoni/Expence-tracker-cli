import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Pressable } from 'react-native';
import Expenses from './dummy';

export default function ManageExpenses({ route, navigation }) {
    const date = route.params.date
    const name = route.params.name
    const cost = route.params.cost
    const id = route.params.id
    useEffect(() => {
        navigation.setOptions({ title: id === "add" ? "Add Expense" : "Edit Expense" })
    }, [])
    return (
        <View className="pt-3">
            <View className="flex item-center justify-around  py-1 flex-row">
                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => navigation.navigate("Home")}
                    style={{ minWidth: 90 }}
                    className="bg-sky-600 p-2 rounded-lg"
                >
                    <Text className="font-bold text-lg text-center">Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={0.5}
                    style={{ minWidth: 90 }}
                    className="bg-sky-600 p-2 rounded-lg"
                >
                    {id === "add" ? <Text className="font-bold text-lg text-center">Add</Text> : <Text className=" font-bold text-lg text-center">Update</Text>}
                </TouchableOpacity>
            </View>
            <View className="bg-slate-300 my-2" style={{ width: "100%", height: 2 }}></View>
        </View>
    );
}
