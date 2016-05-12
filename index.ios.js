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
  View
} from 'react-native';

import Pili, {
    Streaming,
    Player
} from 'react-native-pili';

class pilipili extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Player
              source={{
                          uri:"rtmp://live.hkstv.hk.lxdns.com/live/hks",
                          //controller: true,
                          //timeout: 10 * 1000,
                          //live:true,
                          //hardCodec:false,
                        }}
              style={{
                          height:200,
                          width:200,
                        }}
              />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width:200,
    height:200,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('pilipili', () => pilipili);
