let React = require('react-native');
let ActionButton = require('react-native-action-button');
let Icon = require('react-native-vector-icons/Ionicons');
let Parse = require('parse/react-native');
let ParseReact = require('parse-react/react-native');
let NavigationBar = require('react-native-navbar');
let MaterialIcon = require('react-native-vector-icons/MaterialIcons');

let LeftButton = require('../../NavBar/LeftButton');
let RightButton = require('../../NavBar/RightButton');
let Line = require('../../Line');
let LoadingScreen = require('../../LoadingScreen');
let PollCardOptionsText = require('../../PollCard/PollCardOptionsText');

let {
  AppRegistry,
  StyleSheet,
  ListView,
  Text,
  View,
  TouchableHighlight,
  Dimensions,
  Navigator
} = React;

let deviceScreen = Dimensions.get('window');
let deviceWidth = deviceScreen.width;
let deviceHeight = deviceScreen.height;

let TopicScene = React.createClass({
  mixins: [ParseReact.Mixin],

  observe: function(props, state) {
    console.log(props.route.groupObject)
    return {
      groupThoughts: new Parse.Query('Poll').descending('updatedAt')
    };
  },

  getInitialState() {
    this._activeOption = [];
    this._currentRow = -1;
    // let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return {
      items: [],
      dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
    };
  },

  _pressData: ({}: {[key: number]: boolean}),

  componentWillMount: function() {
    this._pressData = {};
  },

  componentDidMount: function() {
    var parent = this;
    // getPollsForGroup(parent).then(function(v) { 
    //   console.log(v);
    //   parent.setState({
    //     items: v
    //   });
    // }).catch(function(v) {
    //   console.log(v);
    // });
    // console.log(this.props.route.groupObject)
    // var query = new Parse.Query('Poll');
    // query.equalTo('groups', this.props.route.groupObject);
    // query.find().then(function(results) {
    //   console.log(results);
    //   parent.setState({
    //     items: results
    //   })
    // }, function(error) {
    //   // the save failed.
    // });
  },

  componentWillUpdate: function() {
    console.log('componentWillUpdate')
  },

  newFeel() {
    this.props.navigator.push({
      id: 'new-thought',
      sceneConfig: Navigator.SceneConfigs.FloatFromBottom
    });
  },

  // shouldComponentUpdate(nextState, nextProps) {
  //   console.log(nextState);
  //   console.log(nextProps);
  //   return true;
  // },

  render: function() {
    console.log('Group View Render');
    console.log(this.data.groupThoughts);
    console.log(this.state.items);
    return (
      <View style={styles.fullScreen}>
        <NavigationBar
          tintColor={'white'}
          title={{
            title: this.props.route.title,
            tintColor: '#008299'
          }}
          leftButton={
            <LeftButton
              iconName="arrow-back"
              iconColor="#003F4B"
              onPress={() => this.props.navigator.pop()}
            />
          }
        />
        {this.pendingQueries().length ?  <LoadingScreen /> :
          <ListView
            contentContainerStyle={styles.list}
            dataSource={this.state.dataSource.cloneWithRows(this.data.groupThoughts)}
            renderRow={this._renderRow}
            automaticallyAdjustContentInsets={false}
          />
        }
        <ActionButton outRangeScale={0.75} bgColor="rgba(0,0,0,0.65)" buttonColor="#494D5B">
          <ActionButton.Item buttonColor='#9b59b6' title="New Thought" onPress={() => this.newFeel()}>
            <MaterialIcon name="edit" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#3498db' title="Edit Group" onPress={() => {}}>
            <MaterialIcon name="settings" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#1abc9c' title="Other cool stuff" onPress={() => {}}>
            <MaterialIcon name="settings" style={styles.actionButtonIcon} />
          </ActionButton.Item>
        </ActionButton>
      </View>
    );
  },

  _renderRow: function(rowData: string, sectionID: number, rowID: number) {
    let secsTrue = 1;
    let minsTrue = 0;
    let hoursTrue = 0;
    let daysTrue = 0;
    let timeSince = (Math.abs(new Date() - rowData.createdAt))/(1000);//in secs

    if(timeSince>60) {
      timeSince = timeSince/60;//in minutes
      secsTrue = 0;
      minsTrue = 1;
      hoursTrue = 0;
      daysTrue = 0;
    }
    if(timeSince>60) {
      timeSince = timeSince/60;//in hours
      secsTrue = 0;
      minsTrue = 0;
      hoursTrue = 1;
      daysTrue = 0;
    }
    if(timeSince>24) {
      timeSince = timeSince/24;//in days
      secsTrue = 0;
      minsTrue = 0;
      hoursTrue = 0;
      daysTrue = 1;
    }
    timeSince = Math.round(timeSince);
    if(secsTrue) {
      timeSince = timeSince.toString() + ' secs';
    }
    else if(minsTrue) {
      timeSince = timeSince.toString() + ' mins';
    }
    else if(hoursTrue) {
      timeSince = timeSince.toString() + ' hrs';
    }
    else if(daysTrue) {
      timeSince = timeSince.toString() + ' days';
    }
    timeSince = timeSince + ' ago';

    console.log(rowData)
    return (
      <View style={styles.row}>
        <View style={styles.header}>
          <View style={styles.avatar}>
          </View>
          <View style={styles.createdDetails}>
            <Text style={styles.txtCreatedBy}>
              {rowData.user.username}
            </Text>
            <View style={styles.createdDetailsFooter}>
              <Text style={styles.txtCreatedAt}>
                {timeSince}
              </Text>
            </View>
          </View>
        </View>
        <TouchableHighlight
          activeOpacity={1.0}
          underlayColor={'transparent'}
          onPress={() => this._pressRow(rowID)}>
          <View style={styles.content}>
            <PollCardOptionsText ref="pollCardRef" currentActiveOption={this.currentActiveOptn} rowNumber={rowID} data={rowData} preSelectOption={this._activeOption[rowID]}/>
          </View>
        </TouchableHighlight>
        <Line style={{backgroundColor: '#ECE8E8', width: deviceWidth-40}}/>
        <View style={styles.footer}>
          <View style={styles.statusVotes}>
            <Text style={styles.txtStatusVotes}>
              4 votes
            </Text>
          </View>
          <View style={styles.statusResponses}>
            <Text style={styles.txtStatusResponses}>
              8 responses
            </Text>
          </View>
        </View>
        <Line style={{backgroundColor: '#ECE8E8', marginBottom: 0}}/>
      </View>
    );
  },

  currentActiveOptn(option1, option2, option3, option4, rowNumber) {
    if(option1) {
      this._activeOption[rowNumber] = 1;
    }
    else if(option2) {
      this._activeOption[rowNumber] = 2;
    }
    else if(option3) {
      this._activeOption[rowNumber] = 3;
    }
    else if(option4) {
      this._activeOption[rowNumber] = 4;
    }
    else {
      this._activeOption[rowNumber] = 0;
    }
  },

  setActiveOption(activeOption) {//from thought view
    if(this._activeOption[this._currentRow]!==activeOption) {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(this.state.items)
      });
      this._activeOption[this._currentRow] = activeOption;
    }
  },

  _pressRow: function(rowID: number) {
    // this._pressData[rowID] = !this._pressData[rowID];
    // this.setState({
    //   dataSource: this.state.dataSource.cloneWithRows(this.data.groupThoughts)
    // });
    this._currentRow = rowID;
    console.log(this.refs.pollCardRef);
    // let activeOption = this.refs.pollCardRef.getCurrentActiveOption();
    this.props.navigator.push({
      id: 'thought-view',
      sceneConfig: Navigator.SceneConfigs.FloatFromRight,
      data: this.data.groupThoughts[rowID],
      preSelectOption: this._activeOption[rowID],
      thoughtViewCallback: this.setActiveOption
    })
  },
});

let styles = StyleSheet.create({
  fullScreen: {
    flex: 1,
    backgroundColor: '#F5F8F9'
  },
  list: {
    marginTop: 3
  },
  row: {
    padding: 10,
    backgroundColor: 'white'
  },
  header: {
    flexDirection: 'row',
    paddingBottom: 15
  },
  avatar: {
    backgroundColor: '#E9E9E9',
    borderWidth: 1,
    borderColor: '#BFBFB3',
    height: 36,
    width: 36,
    borderRadius: 18,
    marginLeft: 2,
    marginRight: 10
  },
  createdDetails: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
    paddingTop: 2
  },
  createdDetailsFooter: {
    flexDirection: 'row'
  },
  txtCreatedBy: {
    fontSize: 15,
    color: '#474641',
    height: 18,
    marginBottom: 2
  },
  txtCreatedAt: {
    fontSize: 11,
    color: '#BFBFB3',
    fontWeight: 'bold'
  },
  dot: {
    height: 6,
    width: 6,
    borderRadius: 3,
    alignSelf: 'center',
    backgroundColor: '#BFBFB3',
    marginLeft: 5,
    marginRight: 5
  },
  txtContentTags: {
    color: '#9C9893',
    fontSize: 11,
    fontWeight: 'bold'
  },
  content: {
  },
  footer: {
    flexDirection: 'row',
    padding: 5,
    paddingTop: 8,
    paddingBottom: 8
  },
  statusVotes: {
    marginRight: 15
  },
  txtStatusVotes: {
    fontSize: 13,
    color: '#474641',
    fontWeight: 'bold'
  },
  statusResponses: {
  },
  txtStatusResponses: {
    fontSize: 13,
    color: '#474641',
    fontWeight: 'bold'
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  }
});

module.exports = TopicScene;
