/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react"
import { useEffect } from "react"
import { useState, useCallback } from "react"
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from "react-native"
import { Button } from "react-native-elements"
import { useDispatch, useSelector } from "react-redux"
import TotalExpenses from "../../components/totalExpense"
import { increment, decrement } from "../../redux/home/homeAction"

const Home = ({ navigation }) => {
  return (
    <>
      <View style={{ flex: 1 }}>
        <View>
          <TotalExpenses />
        </View>
        <View style={{ flexDirection: "column", alignItems: "center" }}>
          <Button
            style={{ alignSelf: "center" }}
            onPress={() => navigation.navigate("AddExpense")}
            title="Add Expenses"
            buttonStyle={{
              width: 150,
              borderRadius: 6,
            }}
          />
        </View>
      </View>
    </>
  )
}

export default Home
