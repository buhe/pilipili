import React ,{
    Component
} from 'react'

import {Text,StyleSheet} from 'react-native'
import PlayView from './PlayView.js';
import StreamingView from './StreamingView.js';

export default class MainView extends Component {
  constructor() {
    super();
    this.state = {}
  }

  render() {
    return <StreamingView />
  }
}

const styles = StyleSheet.create({});