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
  Image,
  StatusBar,
  Button,
  Modal,
  Pressable,
} from "react-native"
import { useDispatch, useSelector } from "react-redux"

import { RadioButton } from "react-native-paper"
import { Month, Category, Week } from "../../components/data/data"

const ExpenseLog = () => {
  const [value, setValue] = useState()
  const [valueR, setValueR] = React.useState("")

  const [modalVisible, setModalVisible] = useState(false)
  const [modal2Visible, setModal2Visible] = useState(false)

  const expenseData = useSelector((state) => state.AddExpense.expenseDB)
  const [view_Log, setView_log] = useState(expenseData)

  const handlefirstSelection = (value) => {
    setModal2Visible(!modal2Visible)
    setModalVisible(!modalVisible)
    console.log(filterCategory(value), value)
    setView_log(filterCategory(value))
  }
  const handleSecondSelection = (value) => {
    setModal2Visible(!modal2Visible)
    setModalVisible(!modalVisible)
    console.log(filterMonth(value), value)
    setView_log(filterMonth(value))
  }
  const handleThirdSelection = (value) => {
    setModal2Visible(!modal2Visible)
    setModalVisible(!modalVisible)
    console.log(filterWeek(value), value)
    setView_log(filterWeek(value))
  }

  const filterCategory = (value) => {
    const result = expenseData.filter((data) =>
      data.category === value ? data : null
    )

    return result
  }

  const filterMonth = (value) => {
    const result = expenseData.filter((data) =>
      data.month === value ? data : null
    )

    return result
  }
  const filterWeek = (value) => {
    const result = expenseData.filter((data) =>
      data.category === value ? data : null
    )

    return result
  }
  useEffect(() => {
    console.log("value", expenseData, value)
  }, [expenseData, valueR, value])

  return (
    <>
      <View>
        <Button title="open" onPress={() => setModalVisible(!modalVisible)} />
        <View style={styles.centeredView}>
          <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible)
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <RadioButton.Group
                  onValueChange={(newValue) => setValueR(newValue)}
                  value={valueR}
                >
                  <View style={styles.radioButtonView}>
                    <Text style={styles.radioText}>Category</Text>
                    <RadioButton value="Category" />
                  </View>
                  <View style={styles.radioButtonView}>
                    <Text style={styles.radioText}>Month</Text>
                    <RadioButton value="Month" />
                  </View>
                  {/* <View style={styles.radioButtonView}>
                    <Text style={styles.radioText}>Week</Text>
                    <RadioButton value="Week" />
                  </View> */}
                </RadioButton.Group>
                <Button
                  title="open"
                  onPress={() => setModal2Visible(!modal2Visible)}
                />
              </View>
            </View>
          </Modal>
        </View>
        {modal2Visible == true && (
          <View style={styles.centeredView}>
            <Modal
              animationType="fade"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                setModal2Visible(!modal2Visible)
              }}
            >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <RadioButton.Group
                    onValueChange={(newValue) => setValue(newValue)}
                    value={value}
                  >
                    {valueR === "Month"
                      ? Month.map((data) => (
                          <View style={styles.radioButtonView}>
                            <Text style={styles.radioText}>{data.label}</Text>
                            <RadioButton value={data.value} />
                          </View>
                        ))
                      : valueR === "Week"
                      ? Week.map((data) => (
                          <View style={styles.radioButtonView}>
                            <Text style={styles.radioText}>{data.label}</Text>
                            <RadioButton value={data.value} />
                          </View>
                        ))
                      : Category.map((data) => (
                          <View style={styles.radioButtonView}>
                            <Text style={styles.radioText}>{data.label}</Text>
                            <RadioButton value={data.value} />
                          </View>
                        ))}
                  </RadioButton.Group>
                  <Button
                    title="FIlter"
                    onPress={() =>
                      valueR === "Category"
                        ? handlefirstSelection(value)
                        : valueR == "Month"
                        ? handleSecondSelection(value)
                        : handleThirdSelection(value)
                    }
                  />
                </View>
              </View>
            </Modal>
          </View>
        )}
        <ScrollView>
          {view_Log.length > 0 &&
            view_Log.map((data) => (
              <View style={styles.card}>
                {/* <Image style={styles.cardImage} source={{uri:item.image}}/> */}
                <View style={styles.cardHeader}>
                  <View style={{ flex: 1 }}>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <Text style={styles.title}>${data.amount}</Text>
                      <Text style={styles.title}>{data.category}</Text>
                    </View>

                    <Text style={styles.description}>{data.note}</Text>

                    <View style={styles.timeContainer}>
                      <Image
                        style={styles.iconData}
                        source={{
                          uri:
                            "https://img.icons8.com/color/96/3498db/calendar.png",
                        }}
                      />
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
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  radioButtonView: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  radioText: {
    textAlignVertical: "center",
  },
  /******** card **************/
  card: {
    shadowColor: "#00000021",
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

  /******** card components **************/
  title: {
    fontSize: 18,
  },
  description: {
    fontSize: 15,
    color: "#888",

    marginTop: 5,
    marginBottom: 5,
  },
  time: {
    fontSize: 13,
    color: "#808080",
    marginTop: 5,
  },
  icon: {
    width: 25,
    height: 25,
  },
  iconData: {
    width: 15,
    height: 15,
    marginTop: 5,
    marginRight: 5,
  },
  timeContainer: {
    flexDirection: "row",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "#2726278c",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
})

export default ExpenseLog
