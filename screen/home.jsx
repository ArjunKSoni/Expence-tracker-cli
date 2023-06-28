import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Pressable, Image } from 'react-native';
import { useSelector } from "react-redux"

export default function Home({ navigation }) {
    const [total, steTotal] = useState(0)
    let cost = 0
    const Expenses = useSelector((state) => { return state.Expenses.expense })
    useEffect(() => {
        navigation.setOptions({headerRight:()=>{
            return <Pressable android_ripple={{color:"white"}} onPress={()=>{navigation.navigate("ManageExpenses",{id:"add",name:"name",cost:"cost",date:"date"})}}><Image style={{width:20,height:20}} resizeMode="contain" source={require("../img/plus.png")}/></Pressable>
        },headerRightContainerStyle: {
            marginRight: 10,
          }})
        Expenses.map((e) => {
            cost = cost + parseInt(e.cost)
        })  
        steTotal(cost)
    }, [])
    return (
        <View and onPress={()=>{}}>
            <View className="flex item-center justify-around bg-orange-200 p-1 flex-row">
                <Text className="text-black">Total</Text>
                <Text className="text-black">Rs {total}</Text>
            </View>
            <View style={{width:"100%",marginBottom:50}}>
                <FlatList
                    data={Expenses}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => {
                        return (
                            <Pressable android_ripple={{color:"white"}} onPress={()=>{navigation.navigate("ManageExpenses",{id:"edit",name:item.name,cost:item.cost,date:`${item.date.getFullYear()}-${item.date.getMonth() + 1}-${item.date.getDate()}`})}} className="bg-slate-200 flex flex-row items-center justify-between px-5 py-2 my-1">
                                <View className="">
                                    <Text className="text-black font-bold">{item.name}</Text>
                                    <Text className="text-gray-500">{item.date.getFullYear()}-{item.date.getMonth() + 1}-{item.date.getDate()}</Text>
                                </View>
                                <Text style={{minWidth:80}} className="text-black text-center p-2 rounded-xl bg-white">Rs {item.cost}</Text>
                            </Pressable>
                        )
                    }}
                />
            </View>
        </View>
    );
}
