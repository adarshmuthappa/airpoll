'use strict';

var React = require('react-native');
var Parse = require('parse/react-native');
var ParseReact = require('parse-react/react-native');

var PollCard = require('../../PollCard');
var LoadingScreen = require('../../LoadingScreen');
var PollCreate = require('../../PollCreate/PollCreate');
var NavBarMyPolls = require('./NavBarMyPolls');

var {
  Text,
  StyleSheet,
  TextInput,
  View,
  TouchableHighlight,
  ActivityIndicatorIOS,
  Image,
  StatusBarIOS,
  ListView,
  ScrollView,
  Navigator
} = React;

// class myPollsTab extends ParseComponent {
//   constructor() {
//     super();
//     // Initialize MyComponent
//     // ...
//   }
//
//   // By extending ParseComponent, it is possible to observe queries
//   observe(props, state) {
//     return {
//       NewPolls: new Parse.Query('NewPolls')
//     };
//   }
//
//   render() {
//     // Render MyComponent
//     // ...
//   }
// }

var MyPollsTab = React.createClass({
  mixins: [ParseReact.Mixin],

  observe: function() {
    return {
      user: ParseReact.currentUser,
      myPolls: (new Parse.Query('NewPoll')).equalTo('user', this.props.user).descending('createdAt')
    };
  },

  getInitialState() {
    return {
      templateDataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
    };
  },

  renderRow: function (rowData) {
    return (
      <PollCard key={rowData.pollObject.pollID} data={rowData} />
    );
  },

  _makePoll: function() {
    this.props.navigator.push({
      id: 'poll-create',
      sceneConfig: Navigator.SceneConfigs.FloatFromBottom,
    })
  },

  render: function() {
    console.log(this.data.user);
    return (
      <View style={styles.fullScreen}>
        <NavBarMyPolls callbackMakePoll={this._makePoll}/>
        {!this.data.myPolls.length ?  <LoadingScreen /> :
          <ListView
            dataSource={this.state.templateDataSource.cloneWithRows(this.data.myPolls)}
            renderRow={this.renderRow}
            contentInset={{bottom:49}}
            automaticallyAdjustContentInsets={false}
          />
        }
      </View>
    );
  }
});

var styles = StyleSheet.create({
  fullScreen: {
    flex: 1,
    backgroundColor: '#E9E9E9',
  },
});

module.exports = MyPollsTab;
