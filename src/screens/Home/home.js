import React from "react"
import { View } from "react-native"
import { Button } from "react-native-elements"
import TotalExpenses from "../../components/totalExpense"

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
