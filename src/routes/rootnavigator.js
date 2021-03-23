import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer'
import Home from '../screens/Home/home';
import Icon from 'react-native-vector-icons/Ionicons';
import ExpenseLog from '../screens/ExpenseLog/expenseLog';
import AddExpenses from '../screens/AddExpense/addExpense';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


const HomeStack =({navigation})=>{
  return(
 
       <Stack.Navigator
    initialRouteName="Home"
    options={{
      headerLeft: () => (
        <Icon.Button
          name="ios-menu"
          backgroundColor="#696969"
          size={25}></Icon.Button>
      ),
      headerTitleAlign: 'center',
      headerTitleStyle: {
        color: '#2e64e5',
        fontFamily: 'Kufam-SemiBoldItalic',
        fontSize: 18,
      },
      headerStyle: {
        shadowColor: '#fff',
        elevation: 0,
      },
    }}>
    <Stack.Screen
      name="Home"
      component={Home}
      options={{
        headerLeft: () => (
          <Icon
            name="menu"
            size={25}
            onPress={() => navigation.openDrawer()}></Icon>
        ),
      }}
    />
     <Stack.Screen
      name="AddExpense"
      component={AddExpenses}
      options={{
        title:"Add Expenses",
        
      }}
    />
    </Stack.Navigator>
  )
}

const ExpenseLogStack =({navigation})=>{
  return(
 
       <Stack.Navigator
    initialRouteName="Home"
    options={{
      headerLeft: () => (
        <Icon.Button
          name="ios-menu"
          backgroundColor="#696969"
          size={25}></Icon.Button>
      ),
      headerTitleAlign: 'center',
      headerTitleStyle: {
        color: '#2e64e5',
        fontFamily: 'Kufam-SemiBoldItalic',
        fontSize: 18,
      },
      headerStyle: {
        shadowColor: '#fff',
        elevation: 0,
      },
    }}>
    <Stack.Screen
      name="ExpenseLog"
      component={ExpenseLog}
      options={{
        title:"Expense History",
        headerLeft: () => (
          <Icon
            name="menu"
            size={25}
            onPress={() => navigation.openDrawer()}></Icon>
        ),
      }}
    />
    </Stack.Navigator>
  )
}

const AppDrawer = ({navigation})=> {
  return (
    <Drawer.Navigator initialRouteName="Home">
    <Drawer.Screen
      name="Home"
      component={HomeStack}
      options={{
        title: 'Home',
        drawerIcon: ({focused, size}) => (
          <Icon name="md-home" size={35} color={focused ? '#7cc' : '#ccc'} />
        ),
      }}
    />
    <Drawer.Screen
      name="ExpenseLog"
      component={ExpenseLogStack}
      options={{
        title: 'Expense History',
        drawerIcon: ({focused, size}) => (
          <Icon name="md-home" size={35} color={focused ? '#7cc' : '#ccc'} />
        ),
      }}
    />
    </Drawer.Navigator>
  )
}



function RootNavigator() {
  return (
    <NavigationContainer>
    <AppDrawer/>
    </NavigationContainer>
  );
}

export default RootNavigator;
