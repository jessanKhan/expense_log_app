import { createStore, applyMiddleware } from "redux"

import logger from "redux-logger"
import createSagaMiddleware from "redux-saga"

// import combinereducer from '../reducers';
import rootSaga from "./rootSaga"
import rootReducer from "./rootReducer"
import { persistStore, persistReducer } from "redux-persist"

import AsyncStorage from "@react-native-async-storage/async-storage"

const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware]

if (process.env.NODE_ENV === "development") {
  middleware.push(logger)
}

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whiteList: ["Home"],
}
const persistedReducer = persistReducer(persistConfig, rootReducer)
export const store = createStore(persistedReducer)

// sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store)
