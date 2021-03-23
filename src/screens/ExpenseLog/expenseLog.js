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
  Image,
  StatusBar,
  Button,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {increment, decrement} from '../../redux/home/homeAction';


const ExpenseLog = () => {
  const [value, setValue] = useState();
  const dispatch = useDispatch();
  const expenseData = useSelector((state) => state.AddExpense.expenseDB);

  const Increment = useCallback(() => dispatch(increment()));
  const Decrement = useCallback(() => dispatch(decrement()));
  useEffect(() => {
    console.log('value', expenseData);
  }, [expenseData]);
  return (
    <>
      <View>
      <ScrollView>
      {expenseData.length > 0 && expenseData.map(data=>(
          <View style={styles.card}>
          {/* <Image style={styles.cardImage} source={{uri:item.image}}/> */}
          <View style={styles.cardHeader}>
            <View style ={{flex:1}}>
              <View style={{flexDirection:"row", justifyContent:"space-between"}}>
              <Text style={styles.title}>{data.amount}</Text>
              <Text style={styles.title}>{data.category}</Text>
              </View>
              
              <Text style={styles.description}>{data.note}</Text>
              
              <View style={styles.timeContainer}>
                <Image style={styles.iconData} source={{uri: 'https://img.icons8.com/color/96/3498db/calendar.png'}}/>
                <Text style={styles.time}>{data.date}</Text>
              </View>
              <Text style={styles.title}>{data.payment_mode}</Text>
            </View>
          </View>
          
        </View>
      ))}
      </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
    container:{
      flex:1,
      marginTop:20,
    },
    
    
    /******** card **************/
    card:{
      shadowColor: '#00000021',
      shadowOffset: {
        width: 2
      },
      shadowOpacity: 0.5,
      shadowRadius: 4,
      marginVertical: 8,
      backgroundColor:"white"
    },
    cardHeader: {
      paddingVertical: 17,
      paddingHorizontal: 16,
      borderTopLeftRadius: 1,
      borderTopRightRadius: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },

    
    /******** card components **************/
    title:{
      fontSize:18,
     
    }, 
    description:{
      fontSize:15,
      color:"#888",
    
      marginTop:5,
      marginBottom:5,
    },
    time:{
      fontSize:13,
      color: "#808080",
      marginTop: 5
    },
    icon: {
      width:25,
      height:25,
    },
    iconData:{
      width:15,
      height:15,
      marginTop:5,
      marginRight:5
    },
    timeContainer:{
      flexDirection:'row'
    },

  });  

export default ExpenseLog;
