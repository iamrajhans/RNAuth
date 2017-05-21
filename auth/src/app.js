import React, { Component } from 'react';
import {
  View
} from 'react-native';
import { Headers } from './components/common';

class App extends Component {
  render() {
    return (
      <View style={{ flex: 1}}>
        <Headers headerText='Authenticate' />
      </View>
    );
  }
}

export default App;
