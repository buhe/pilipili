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

//<Player
//    started={this.state.started}
//    muted={this.state.muted}
//    source={{
//                          uri:"rtmp://live.hkstv.hk.lxdns.com/live/hks",
//                          backgroundPlay: true,
//                          //timeout: 10 * 1000,
//                          //live:true,
//                          //hardCodec:false,
//                        }}
//    style={{
//                          height:200,
//                          width:200,
//                          //backgroundColor:'blue',
//                          //left:0,
//                          //top:0
//                        }}
//    onLoading={()=>this.setState({text: this.state.text + " loading"})}
//    onPaused={()=>this.setState({text: "pause"})}
//    onShutdown={()=>this.setState({text: "shutdown"})}
//    onError={()=>this.setState({text: "error"})}
//    onPlaying={()=>this.setState({text: this.state.text + " playing"})}
//    />
//<TouchableHighlight onPress={this.start.bind(this)}>
//<Text style={{height:100,width:100}}>{this.state.started ? "Stop" : "Start"}</Text>
//</TouchableHighlight>
//
//<TouchableHighlight onPress={this.mute.bind(this)}>
//  <Text style={{height:100,width:100}}>{this.state.muted ? "Sound" : "Mute"}</Text>
//</TouchableHighlight>
//
//<Text>{this.state.text}</Text>

var zoom = 1;

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

class pilipili extends Component {
  constructor() {
    super();
    this.state = {
      stream: S1,
      muted: false,
      started: true,
      text: '...',
      focus:true,
      zoom: 1,
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
                onReady={()=>this.setState({text: "onReady"})} //onReady event
                onConnecting={()=>this.setState({text: "onConnecting"})} //onConnecting event
                onStreaming={()=>this.setState({text: "onStreaming"})} //onStreaming event
                onShutdown={()=>this.setState({text: "onShutdown"})} //onShutdown event
                onIOError={()=>this.setState({text: "onIOError"})} //onIOError event
                onDisconnected={()=>this.setState({text: "onDisconnected"})} //onDisconnected event
                />
          <Text>{this.state.text}</Text>
          <TouchableHighlight onPress={this.zoom1.bind(this)}>
            <Text style={{height:100,width:100}}>Zoom+</Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={this.zoom2.bind(this)}>
            <Text style={{height:100,width:100}}>Zoom-</Text>
          </TouchableHighlight>
        </View>
    );
  }

  zoom1() {
    zoom = zoom + 1;
    if (zoom < 0) {
      zoom = 1;
    }
    this.setState({zoom: zoom});
  }
  zoom2() {
    zoom = zoom - 1;
    if (zoom < 0) {
      zoom = 1;
    }
    this.setState({zoom: zoom});
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
