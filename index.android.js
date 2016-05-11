/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    View,
    TouchableHighlight
} from 'react-native';
import Pili, {
    Streaming,
    Player
} from 'react-native-pili';

//<Streaming
//    stream={this.state.stream}
//    style={{
//                        height:200,
//                        width:200,
//                      }}
//    zoom={this.state.zoom}
//    focus={this.state.focus}
//    />

//<Player
//    source={{
//                uri:"rtmp://live.hkstv.hk.lxdns.com/live/hks",
//                //controller: true,
//                timeout: 10 * 1000,
//                live:true,
//                hardCodec:false,
//              }}
//    style={{
//                height:200,
//                width:200,
//              }}
//    />

//var Demo = require('react-native-pili');

//var Video = require('react-native-video');

const S1 = {
  id: "buhe",
  title: "buhe",
  hub: "pilitest",
  publishKey: "6eeee8a82246636e",
  publishSecurity: "static",
  hosts: {publish: {rtmp: "pili-publish.pilitest.qiniucdn.com"}}
};

//rtmp://pili-publish.autodefault.qbox.net/pubhub/yihuan?key=123

const S2 = {
  id: "yihuan",
  title: "yihuan",
  hub: "pubhub",
  publishKey: "123",
  publishSecurity: "static",
  hosts: {publish: {rtmp: "pili-publish.autodefault.qbox.net"}}
};

var S = true;
var zoom = 1;

class pilipili extends Component {

  constructor() {
    super();
    this.state = {
      stream: S1,
      zoom: 1,
      focus: false,
      started: false
    }
  }

  render() {

    return (
        <View style={styles.container}>
          <Streaming
              stream={this.state.stream}
              style={{
                        height:200,
                        width:200,
                      }}
              zoom={this.state.zoom}
              focus={this.state.focus}
              profile={{
                video:{
                  fps:30,
                  bps:1000 * 1024,
                  maxFrameInterval:48
                },
                audio:{
                  rate:44100,
                  bitrate:96 * 1024
                },
              }}
              started={this.state.started}
              onReady={this.onReady.bind(this)}
              />

          <TouchableHighlight onPress={this._onPressButton.bind(this)}>
            <Text style={{height:100,width:100}}>Switch Stream</Text>
          </TouchableHighlight>

          <TouchableHighlight onPress={this.zoom.bind(this)}>
            <Text style={{height:100,width:100}}>Zoom</Text>
          </TouchableHighlight>

          <TouchableHighlight onPress={this.start.bind(this)}>
            <Text style={{height:100,width:100}}>{this.state.started ? "Stop" : "Start"}</Text>
          </TouchableHighlight>

          <Text>{this.state.text}</Text>
        </View>
    );
  }

  onReady(event){
    this.setState({text:'ready...'});
  }

  start(){
    this.setState({
      started:!this.state.started
    });
  }

  zoom() {
    zoom = zoom - 0.1;
    if (zoom < 0) {
      zoom = 1;
    }
    this.setState({zoom: zoom});
  }

  _onPressButton() {
    S = !S;
    var stream = S ? S1 : S2;
    this.setState({stream: stream});
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
