var React = require('react-native');
let Icon = require('react-native-vector-icons/Ionicons');

var GroupAttrsOld = require('./GroupAttrsOld');
var GroupAttrs = require('./GroupAttrs');

var {
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
  StatusBarIOS,
  TouchableWithoutFeedback,
  ScrollView,
  SliderIOS,
  SwitchIOS,
  SegmentedControlIOS,
  Navigator
} = React;

var deviceScreen = require('Dimensions').get('window');
var deviceWidth = deviceScreen.width;

var Contacts = React.createClass({
  getInitialState: function() {
    return {
    };
  },

  _goBack: function() {
    this.props.navigator.pop();
  },

  _finish: function() {

  },

  render: function() {
    return (
      <View style={{flex: 1}}>
          <View style={styles.container}>
            <View style={styles.toolbar}>
             <TouchableHighlight activeOpacity={"0.0"} underlayColor={"transparent"} onPress={this._goBack}>
                <Icon name="arrow-left-c" style={styles.backArrow} />
              </TouchableHighlight>
              <Text style={styles.toolbarTitle}>
                Contacts
              </Text>
                <TouchableHighlight activeOpacity={0.2} underlayColor={'transparent'} onPress={this._finish}>
                  <Text style={styles.toolbarButton}>Finish</Text>
                </TouchableHighlight>
            </View>
          </View>

      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5fcff',
    flex: 1,
  },
  toolbar: {
    backgroundColor:'transparent',
    paddingTop: 30,
    paddingBottom:10,
    flexDirection:'row',
  },
  toolbarButton: {
    fontSize: 16,
    color:'#E91E63',
    textAlign:'center',
    paddingRight: 10,
    paddingLeft: 10,
    fontWeight: 'bold'
  },
  toolbarDisabledButton: {
    fontSize: 16,
    color:'#474747',
    textAlign:'center',
    paddingRight: 10,
    paddingLeft: 10,
    fontWeight: 'bold'
  },
  toolbarTitle:{
    fontSize: 18,
    color:'#2196F3',
    textAlign:'center',
    fontWeight:'bold',
    flex:1,
  },
  titlePart2: {//inherits styles from titlePart1
    color: '#E91E63',
  },
  backArrow: {
    fontSize: 28,
    height: 30,
    color: '#07A186',
    marginLeft: 12,
    bottom: 3
  },
});

module.exports = Contacts;
