/**
 * Created by buhe on 16/6/13.
 */

import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    Dimensions,
} from 'react-native';
import Pili, {
    Streaming,
    Player
} from 'react-native-pili';

var {height, width} = Dimensions.get('window');

export default class PlayView extends Component {

  constructor() {
    super();
    this.state = {
      started: false
    }
  }

  render() {

    return (
        <View style={styles.container}>
          <Player
              source={{
                uri:"rtmp://pili-live-rtmp.pilitest.qiniucdn.com/pilitest/buhe",
                //controller: true,
                timeout: 10 * 1000,
                live:true,
                hardCodec:false,
              }}
              started={this.state.started}
              style={{
                height:height,
                width:width,
              }}
              //aspectRatio={1}
              onLoading={()=>this.setState({text: this.state.text + " loading"})}
              onPaused={()=>this.setState({text: this.state.text + " pause"})}
              onShutdown={()=>this.setState({text: this.state.text + " shutdown"})}
              onError={()=>this.setState({text: this.state.text + " error"})}
              onPlaying={()=>this.setState({text: this.state.text + " playing"})}

              />
          <View style={{position:'absolute',left:50,top:50,width:200,height:200}}>

            <TouchableHighlight onPress={this.start.bind(this)}>
              <Text style={{height:100,width:100}}>{this.state.started ? "Stop" : "Start"}</Text>
            </TouchableHighlight>

            <Text>{this.state.text}</Text>
          </View>
        </View>
    );
  }

  onReady(event) {
    this.setState({text: 'ready...'});
  }

  start() {
    this.setState({
      started: !this.state.started
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
