import React from 'react';
import {
  AppRegistry
} from 'react-native';

import Header from './src/components/Header';

const App = () => (
  <Header headerText={'Albums'} />
);

export default App;

AppRegistry.registerComponent('albums', () => App);
