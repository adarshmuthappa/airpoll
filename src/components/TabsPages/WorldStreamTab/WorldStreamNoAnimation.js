var React = require('react-native');
var ActionButton = require('react-native-action-button');
var Icon = require('react-native-vector-icons/Ionicons');

var NavigationBar = require('react-native-navbar');
var LeftButton = require('../../NavBar/LeftButton');
var RightButton = require('../../NavBar/RightButton');
var Line = require('../../Line');

var {
  AppRegistry,
  StyleSheet,
  ListView,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
  Dimensions,
  Navigator,
  LayoutAnimation
} = React;

var sampleQuestions = [
  {
    circle1: {
      value: 'Food',
      color: '#9b59b6'
    },
    circle2: {
      value: 'UI',
      color: '#3498db'
    },
    circle3: {
      value: 'Sports',
      color: '#1abc9c'
    },
  },
];
var deviceScreen = Dimensions.get('window');
var deviceWidth = deviceScreen.width;
var deviceHeight = deviceScreen.height;

var WorldStream = React.createClass({
  getInitialState() {
    this._lastPress = 0;
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => true});
    return {
      dataSource: ds.cloneWithRows(sampleQuestions),
      animatedViewStyle: {
        height: 80,
        width: 80,
        borderRadius: 10,
        backgroundColor: '#E91E63',
      }
    };
  },
  _pressData: ({}: {[key: number]: boolean}),
  componentWillMount: function() {
    this._pressData = {};
  },

  render: function() {
    return (
      <View style={styles.fullScreen}>
        <NavigationBar
          tintColor={'white'}
          title={{
            title: 'World Stream',
            tintColor: '#FF9393'
          }}
        />
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this._renderRow}
          automaticallyAdjustContentInsets={false}
        />
        <ActionButton outRangeScale={0.75} bgColor="rgba(0,0,0,0.65)" buttonColor="#494D5B" offsetX={23} offsetY={70}>
          <ActionButton.Item buttonColor='#9b59b6' title="New Feel" onPress={() => {}}>
            <Icon name="android-create" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#3498db' title="Edit Group" onPress={() => {}}>
            <Icon name="android-notifications-none" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#1abc9c' title="Other cool stuff" onPress={() => {}}>
            <Icon name="android-done-all" style={styles.actionButtonIcon} />
          </ActionButton.Item>
        </ActionButton>
      </View>
    );
  },

  _renderRow: function(rowData: string, sectionID: number, rowID: number) {
    return (
      <View style={styles.row}>
        <View style={styles.viewCircleTopic}>
          <TouchableOpacity style={[styles.circleTopic, {backgroundColor: rowData.circle1.color}]} onPress={() => this._pressRow(rowID, 1)}>
            <Text style={styles.txtCircleTopic}>
              {rowData.circle1.value}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.viewCircleTopic}>
          <TouchableOpacity style={[styles.circleTopic, {backgroundColor: rowData.circle2.color}]} onPress={() => this._pressRow(rowID, 2)}>
            <Text style={styles.txtCircleTopic}>
              {rowData.circle2.value}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.viewCircleTopic}>
          <TouchableOpacity style={[styles.circleTopic, {backgroundColor: rowData.circle3.color}]} onPress={() => this._pressRow(rowID, 3)}>
            <Text style={styles.txtCircleTopic}>
              {rowData.circle3.value}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  },

  _pressRow: function(rowID: number, columnID: number) {
    this._pressData[rowID] = !this._pressData[rowID];

    let title = null;
    if(columnID===1)
      title = sampleQuestions[rowID].circle1.value;
    else if(columnID===2)
      title = sampleQuestions[rowID].circle2.value;
    else if(columnID===3)
      title = sampleQuestions[rowID].circle3.value;


    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(sampleQuestions)
    });

    this.props.navigator.push({
      id: 'topic-scene',
      sceneConfig: Navigator.SceneConfigs.VerticalUpSwipeJump,
      title: title
    });
  }
});

var styles = StyleSheet.create({
  fullScreen: {
    flex: 1,
    backgroundColor: 'white',
    height: deviceHeight
  },
  row: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 5,
    paddingRight: 5,
    flexDirection: 'row'
  },
  viewCircleTopic: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center'
  },
  circleTopic: {
    height: deviceWidth/3-40,
    width: deviceWidth/3-40,
    borderRadius: (deviceWidth/3-40)/2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  txtCircleTopic: {
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: 'transparent',
    textAlign: 'center'
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white'
  },
  normalViewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#E91E63',
    borderColor: '#E91E63',
    borderRadius: 10,
    width: 80,
    height: 80,
    shadowColor: 'black',
    shadowOpacity: 0.4,
    shadowRadius: 3,
    shadowOffset: {
      height: 6,
      width: 0
    }
  },
});

module.exports = WorldStream;
