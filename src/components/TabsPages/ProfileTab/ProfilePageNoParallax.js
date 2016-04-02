var React = require('react-native');
var Parse = require('parse/react-native');
var ParseReact = require('parse-react/react-native');
var store = require('react-native-simple-store');
var Icon = require('react-native-vector-icons/MaterialIcons');

var {
  ListView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Image,
  Dimensions,
  Navigator
} = React;

var deviceScreen = Dimensions.get('window');
var deviceWidth = deviceScreen.width;

var Line = require('../../Line');

var sampleQuestions = [
  'Account',
  'Settings',
  'Privacy Policy',
  'Sign Out',
];

var ProfilePageNoParallax = React.createClass({
  mixins: [ParseReact.Mixin],

  observe: function() {
    return {
      user: ParseReact.currentUser
    };
  },

  getInitialState: function() {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return {
      dataSource: ds.cloneWithRows(this._genRows({}))
    };
  },

  _pressData: ({}: {[key: number]: boolean}),

  componentWillMount: function() {
    console.log(this.props.navigator);
    this._pressData = {};
  },

  goToAppFirstPage: function() {
    Parse.User.logOut();
    console.log(this.data.user);
    store.save('activeUser', null);
    store.get('channels').then((value) => {
      console.log(value);
    });
    store.save('channels', []);
    // this.props.navigator.immediatelyResetRouteStack([this.props.navigator.state.routeStack[0]])
    this.props.navigator.popToTop();
    // this.props.navigator.popToRoute(this.props.navigator.state.routeStack[0]);
    // this.props.navigator.resetTo(this.props.navigator.state.routeStack[0]);
    // this.props.navigator.push({
    //   id: 'first-page',
    //   from: 'logout',
    //   routeReset: this.props.navigator.state.routeStack[0],
    //   sceneConfig: Navigator.SceneConfigs.FadeAndroid
    // })
  },

  render: function () {
    return (
      <View style={styles.container}>
        <Image source={require('image!friendspier')} style={styles.coverImage} />
        <View style={styles.profileHeader}>
          <TouchableOpacity style={styles.avatar}>
            <Icon name="file-upload" style={styles.uploadIcon} />
            <Image/>
          </TouchableOpacity>
          <View style={styles.profileName}>
            <Text style={styles.txtProfileName}>
              Name
            </Text>
          </View>
        </View>
        <Line style={{backgroundColor:'#DD2C00', marginTop: 10, height: 1.5, width: deviceWidth - 50}} />
        <View style={styles.statsRow}>
          <View style={styles.statsCircleWrapper}>
            <Text style={styles.statsCircleNumber}>
              128
            </Text>
            <Text style={styles.statsCircleText}>
              Views
            </Text>
          </View>
          <View style={styles.statsCircleWrapperMiddle}>
            <Text style={styles.statsCircleNumber}>
              318
            </Text>
            <Text style={styles.statsCircleText}>
              Questions
            </Text>
          </View>
          <View style={styles.statsCircleWrapper}>
            <Text style={styles.statsCircleNumber}>
              920
            </Text>
            <Text style={styles.statsCircleText}>
              Comments
            </Text>
          </View>
        </View>
        <Line style={{backgroundColor:'#DD2C00', marginBottom: 5, height: 1.5, width: deviceWidth - 50}} />
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this._renderRow}
          initialListSize={4}
          style={styles.listview}
        />
      </View>
    );
  },

  _renderRow: function(rowData: string, sectionID: number, rowID: number) {
    return (
      <View style={{flex: 1}}>
        <TouchableHighlight activeOpacity = {0.1} underlayColor = {'transparent'} onPress={() => this._pressRow(rowID)}>
          <View>
            <View style={styles.row}>
              <Text style={styles.text}>
                {sampleQuestions[rowID]}
              </Text>
            </View>
          </View>
        </TouchableHighlight>
        <Line style={{backgroundColor:'#8F898E', height: 0.5, width: deviceWidth - 15}} />
      </View>
    );
  },

  _genRows: function(pressData: {[key: number]: boolean}): Array<string> {
    var dataBlob = [];
    for (var ii = 0; ii < sampleQuestions.length; ii++) {
      var pressedText = pressData[ii] ? ' (pressed)' : '';
      dataBlob.push('Row ' + ii + pressedText);
    }
    return dataBlob;
  },

  _pressRow: function(rowID: number) {
    for (var ii = 0; ii < sampleQuestions.length && ii!==rowID; ii++) {
      if(this._pressData[ii]) {
        this._pressData[ii] = !this._pressData[ii];
      }
    }

    if(rowID==3) {//signout user
      this.goToAppFirstPage();
    }

    this._pressData[rowID] = !this._pressData[rowID];
    this._text = sampleQuestions[rowID];
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(this._genRows(this._pressData))
    });
  },

});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  coverImage: {
    width: deviceWidth,
    height: 250,
    paddingBottom: 10
  },
  profileHeader: {
    flexDirection: 'row',
    position: 'absolute',
    top: 180,
    backgroundColor: 'transparent',
  },
  avatar: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#474641',
    height: 50,
    width: 50,
    borderRadius: 25,
    marginLeft: 20,
    marginRight: 10
  },
  uploadIcon: {
    alignSelf: 'center',
    backgroundColor: 'transparent',
    fontSize: 27,
    height: 27,
    color: '#474641'
  },
  profileName: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center'
  },
  txtProfileName: {
    fontSize: 15,
    color: '#3DE3F3'
  },
  statsRow: {
    flexDirection: 'row',
    // borderColor: '#8F898E',
    // borderWidth: 0.5,
   //margin: 5,
   //marginTop: 20,
    paddingTop: 15,
    paddingBottom: 15
  },
  statsCircleWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    // marginRight: 7,
    // marginLeft: 7,
    flex: 0.3,
    // borderRadius: (deviceWidth - 14 - 28 - 10)/6,
  },
  statsCircleWrapperMiddle: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    // marginRight: 7,
    // marginLeft: 7,
    flex: 0.3,
    // borderRadius: (deviceWidth - 14 - 28 - 10)/6,
    //borderColor: '#8F898E',
    // borderWidth: 0.5,
  },
  statsCircleNumber: {
    textAlign: 'center',
    fontSize: 28,
    color: '#E91E63'
  },
  statsCircleText: {
    textAlign: 'center',
    fontSize: 14,
    color: '#8F898E'
  },
  listView: {
    flex: 1,
    //paddingTop: 20,
    backgroundColor: 'black',
  },
  row: {
    flexDirection: 'row',
    backgroundColor:'transparent',
    margin: 10,
    paddingTop: 5,
    paddingBottom: 5,
    alignItems: 'center',
  },
  separator: {
    height: 0.5,
    backgroundColor: '#8F898E',
  },
});

module.exports = ProfilePageNoParallax;
