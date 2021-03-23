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
  Button,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import TotalExpenses from '../../components/totalExpense';
import {increment, decrement} from '../../redux/home/homeAction';

const Home = ({navigation}) => {
  const [value, setValue] = useState();
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.Home.value);

  const Increment = useCallback(() => dispatch(increment()));
  const Decrement = useCallback(() => dispatch(decrement()));
  useEffect(() => {
    console.log('value', counter);
  }, [counter]);
  return (
    <>
      <View>

      <View>
         <TotalExpenses/>
         <Text>{counter}</Text>
      </View>
        
        <Button onPress={()=> navigation.navigate("AddExpense")} title="Add Expenses"/>
        {/* <Button onPress={() => Increment()} title="Increment" />
        <Button onPress={() => Decrement()} title="Decrement" /> */}
      </View>
    </>
  );
};

export default Home;
