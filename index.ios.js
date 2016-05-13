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

var {height, width} = Dimensions.get('window');

import Pili, {
    Streaming,
    Player
} from 'react-native-pili';

class pilipili extends Component {
  constructor() {
    super();
    this.state = {
      muted: false,
      started: true,
      text: '...'
    }
  }

  render() {
    return (
        <View style={styles.container}>
          <Player
              started={this.state.started}
              muted={this.state.muted}
              source={{
                          uri:"rtmp://live.hkstv.hk.lxdns.com/live/hks",
                          backgroundPlay: true,
                          //timeout: 10 * 1000,
                          //live:true,
                          //hardCodec:false,
                        }}
              style={{
                          height:200,
                          width:200,
                          //backgroundColor:'blue',
                          //left:0,
                          //top:0
                        }}
              onLoading={()=>this.setState({text: this.state.text + " loading"})}
              onPaused={()=>this.setState({text: "pause"})}
              onShutdown={()=>this.setState({text: "shutdown"})}
              onError={()=>this.setState({text: "error"})}
              onPlaying={()=>this.setState({text: this.state.text + " playing"})}
              />
          <TouchableHighlight onPress={this.start.bind(this)}>
            <Text style={{height:100,width:100}}>{this.state.started ? "Stop" : "Start"}</Text>
          </TouchableHighlight>

          <TouchableHighlight onPress={this.mute.bind(this)}>
            <Text style={{height:100,width:100}}>{this.state.muted ? "Sound" : "Mute"}</Text>
          </TouchableHighlight>

          <Text>{this.state.text}</Text>
        </View>
    );
  }

  onState() {
    this.setState({text: "loading"});
  }

  start() {
    this.setState({
      started: !this.state.started
    });
  }

  mute() {
    this.setState({
      muted: !this.state.muted
    });
  }
}

const styles = StyleSheet.create({
  container: {
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
