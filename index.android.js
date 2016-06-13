/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    View,
    Dimensions,
    TouchableHighlight
} from 'react-native';

import MainView from './MainView.js';

class pilipili extends Component {
  constructor() {
    super();
  }

  render() {
    return <MainView />
  }
}


AppRegistry.registerComponent('pilipili', () => pilipili);
