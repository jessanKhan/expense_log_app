/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import store from './src/redux/store';
import {Provider} from 'react-redux';
import RootNavigator from './src/routes/rootnavigator';

const App: () => React$Node = () => {
  return (
    <>
      <Provider store={store}>
        <RootNavigator />
      </Provider>
    </>
  );
};

export default App;
