import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import { StyleSheet, View, Text, Image } from "react-native"
import { useSelector } from "react-redux"

const TotalExpenses = () => {
  const [value, setValue] = useState()
  const counter = useSelector((state) => state.AddExpense.expenseDB)

  useEffect(() => {
    class ExpenseAllData extends Array {
      sum(key) {
        console.log(key, "Key")
        return this.reduce((a, b) => a + (parseFloat(b[key]) || 0), 0)
      }
    }
    const traveler = new ExpenseAllData(...counter)
    setValue(traveler.sum("amount"))
  }, [counter])
  return (
    <View>
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <View style={{ flex: 1 }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text style={styles.title}>Total Expenses</Text>
              <Text style={styles.title2}>${value}</Text>
            </View>

            <View style={styles.timeContainer}>
              <Image
                style={styles.iconData}
                source={{
                  uri: "https://img.icons8.com/color/96/3498db/calendar.png",
                }}
              />
              <Text style={styles.time}>
                {Date().toString().substring(0, 15)}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },

  card: {
    shadowColor: "#00000021",
    height: 100,
    shadowOffset: {
      width: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    marginVertical: 8,
    backgroundColor: "white",
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  title: {
    fontSize: 18,
  },
  title2: {
    fontSize: 35,
  },
  description: {
    fontSize: 15,
    color: "#888",

    marginTop: 5,
    marginBottom: 5,
  },
  time: {
    fontSize: 16,
    color: "#808080",
    marginTop: 5,
    textAlignVertical: "center",
  },
  icon: {
    width: 40,
    height: 40,
  },
  iconData: {
    width: 25,
    height: 25,
    marginTop: 5,
    marginRight: 5,
  },
  timeContainer: {
    flexDirection: "row",
  },
})

export default TotalExpenses
