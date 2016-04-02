var React = require('react-native');
let store = require('react-native-simple-store');
var Icon = require('react-native-vector-icons/MaterialIcons');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  NavigatorIOS,
  Navigator,
  StatusBarIOS,
  TabBarIOS,
  TouchableHighlight
} = React;

var TabsPage = React.createClass({

  getInitialState: function() {
    this.activeUser = null;
    return {
      selectedTab: 'myGroups',
      notifCount: 0,
      presses: 0
    };
  },

  componentWillMount: function() {
    StatusBarIOS.setHidden(false);
  },

  // _renderContentMyPolls: function() {
  //   var MyPollsPage = require('../MyPollsTab/MyPollsPage');
  //   return (
  //     <MyPollsPage user={this.props.user} navigator={this.props.navigator}/>
  //   );
  // },

  _renderContentMyGroups: function() {
    var MyGroupsPage = require('../MyGroupsTab/MyGroupsPage');
    return (
      <MyGroupsPage user={this.props.user} navigator={this.props.navigator}/>
    );
  },

  _renderContentWorldStream: function() {
    var WorldStreamPage = require('../WorldStreamTab/WorldStreamPage');
    return (
      <WorldStreamPage user={this.props.user} navigator={this.props.navigator}/>
    );
  },

  _renderContentProfilePage: function() {
    var ProfilePageNoParallax = require('../ProfileTab/ProfilePageNoParallax');
    return (
      <ProfilePageNoParallax navigator={this.props.navigator} signOut={this.props.onSignOut}/>
    );
  },

  render: function () {
    console.log('Tabs Render')
    return (
      <TabBarIOS
        selectedTab={this.state.selectedTab}
        tintColor={'#008299'}
        barTintColor={'#FFFFFF'}
        styles={styles.tabBar}>
        <Icon.TabBarItem
          title=""
          iconName="people-outline"
          selectedIconName="people"
          iconSize={30}
          selected={this.state.selectedTab === 'myGroups'}
          onPress={() => {
            this.setState({
              selectedTab: 'myGroups',
            });
          }}>
          {this._renderContentMyGroups()}
        </Icon.TabBarItem>
        <Icon.TabBarItem
          title=""
          iconName="public"
          selectedIconName="public"
          iconSize={24}
          selected={this.state.selectedTab === 'worldStream'}
          onPress={() => {
            this.setState({
              selectedTab: 'worldStream',
            });
          }}>
          {this._renderContentWorldStream()}
        </Icon.TabBarItem>
        <Icon.TabBarItem
          title=""
          iconName="person-outline"
          selectedIconName="person"
          iconSize={28}
          selected={this.state.selectedTab === 'profile'}
          onPress={() => {
            this.setState({
              selectedTab: 'profile',
            });
          }}>
          {this._renderContentProfilePage()}
        </Icon.TabBarItem>
      </TabBarIOS>
    );
  },
});

var styles = StyleSheet.create({
  tabBar : {
    backgroundColor: '#dfdfdf',
    flex: 1,
    color: '#ff0000',
    tintColor: '#877324'
  }
});

module.exports = TabsPage;
