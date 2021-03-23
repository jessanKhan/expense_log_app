/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {useEffect} from 'react';
import {useState, useCallback} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
  Pressable,
  Platform,
  ToastAndroid
} from 'react-native';
import {Input } from 'react-native-elements'
import {useDispatch, useSelector} from 'react-redux';
import {increment} from '../../redux/addExpense/addExpenseAction';
import { Formik } from 'formik';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Feather';
import DateTimePickerModal from "react-native-modal-datetime-picker";

import {categoryValues, paymentModes} from '../../components/data/data'


const AddExpenses
 = ({navigation}) => {
  const [value, setValue] = useState();
  const [category, setCategory] =useState("")
  const [paymentMode, setPaymentMode] =useState("")
  const [formData,setFormData]=useState()
  const dispatch = useDispatch();
  const counter = useSelector((state) => state);

  const Increment = useCallback((expenses) => dispatch(increment(expenses)));
  const Decrement = useCallback(() => dispatch(decrement()));
 




  const [date, setDate] = useState(Date().toString().substring(0,15));


  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.log("A date has been picked: ", date);
    setDate(date)
    hideDatePicker();
  };



const onsubmit=(value)=>{
 
if (value.amount ==""||category==""||paymentMode =="") {
    ToastAndroid.showWithGravity(
        "Can not leave any field empty",
        ToastAndroid.SHORT,
        ToastAndroid.CENTER
      );
} else {
    Increment({
        amount: value.amount,
        note:value.note,
        category:category,
        payment_mode:paymentMode,
        date: date.toString().substring(0,15)
    })
    ToastAndroid.showWithGravity(
        "Expense added to the account",
        ToastAndroid.SHORT,
        ToastAndroid.CENTER
      ); 
}

}

useEffect(()=> {
  console.log(counter)  
},[counter])


  return (
    
      <View style={{flex:1}}>
            <Formik
            initialValues={{ amount:"",note:"", category:"",payment_mode:"" }}
            onSubmit={values => onsubmit(values)}
            >
     {({ handleChange, handleBlur, handleSubmit, values }) => (
       <View>
        
         <Input
  placeholder='Amount' 
  keyboardType="numeric"
  onChangeText={handleChange('amount')}
  onBlur={handleBlur('amount')}
  value={values.amount}
/>

<View>
    <DropDownPicker
    items={categoryValues}
    defaultValue={category}
    containerStyle={{height: 40}}
    style={{backgroundColor: '#fafafa'}}
    itemStyle={{
        justifyContent: 'flex-start'
    }}
    dropDownStyle={{backgroundColor: '#fafafa'}}
    onChangeItem={item => setCategory(item.value)}
/>
    </View>


<View>

<View style={{flexDirection:"row",justifyContent:'space-between',backgroundColor:"#fff"}}>
<Text style={{fontSize:16, textAlignVertical:"center"}}>Date</Text>
<Pressable
        onPress={() => {
            showDatePicker()
        }}
        style={({ pressed }) => [
          {
            backgroundColor: pressed
              ? 'rgb(210, 230, 255)'
              : 'white'
          },
          {
            borderRadius: 8,
            padding: 6
          }
        ]}>
        {({ pressed }) => (
          <Text style={ {
            fontSize: 16
          }}>
            {pressed ? "Date picking": date.toString().substring(0,15)}
          </Text>
        )}
      </Pressable>
     
</View>

<DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>

    <View>
    <DropDownPicker
    items={paymentModes}
    defaultValue={paymentMode}
    containerStyle={{height: 40}}
    style={{backgroundColor: '#fafafa'}}
    itemStyle={{
        justifyContent: 'flex-start',
       
         
    }}
    dropDownStyle={{backgroundColor: '#fafafa'}}
    onChangeItem={item => setPaymentMode(item.value)}
    
/>
    </View>

   
<Input
  placeholder='Note'
  onChangeText={handleChange('note')}
  onBlur={handleBlur('note')}
  value={values.note}
/><View style={{ zIndex:-1 }}>
<Button onPress={handleSubmit} title="Submit" />
</View>
        
       </View>
     )}
   </Formik>
      </View>
    
  );
};

export default AddExpenses;
