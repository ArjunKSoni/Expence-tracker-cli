import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screen/home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ViewTask from './screen/ViewTask';
import ManageExpenses from './screen/manageExpenses';
import {Provider} from "react-redux"
import store from './redux/store';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


const App = () => {
  // const isDarkMode = useColorScheme() === 'dark';

  const BottoNav = () => {
    return(
    <Tab.Navigator screenOptions={{headerTintColor:"black"}}>
      <Tab.Screen name="Home" component={Home} options={{tabBarActiveTintColor:"black",title:"Expense Tracker",headerTitleAlign:"center",tabBarIcon:()=>{return<Image className="invert" style={{width:30,height:30}} resizeMode="contain" source={require("./img/home.png")}/>},tabBarActiveBackgroundColor:"#3c796b"}}/>
      <Tab.Screen name="ViewTask" component={ViewTask} options={{tabBarActiveTintColor:"black",headerTitleAlign:"center",tabBarIcon:()=>{return<Image style={{width:30,height:30}} resizeMode="contain" source={require("./img/task.png")}/>},tabBarActiveBackgroundColor:"#3c796b"}}/>
    </Tab.Navigator>
    )
  }

  return (
    <>
      <StatusBar barStyle='light-content' />
      <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="BottoNav" component={BottoNav} options={{headerShown:false}}/>
          <Stack.Screen name="ManageExpenses" component={ManageExpenses} options={{headerShown:true,title:"Manage Expenses",presentation:"modal",animation:"slide_from_bottom",headerTitleAlign:"center"}}/>
        </Stack.Navigator>
      </NavigationContainer>
      </Provider>
    </>
  );
};


export default App;