// import Parse from require('parse/react-native');
// import ParseReact from require('parse-react/react-native');
import store from 'react-native-simple-store';
import FirstPage from './src/components/FirstPage/FirstPage';
import AppLandingPage from './src/components/LoginPages/LandingPage/LandingPage';
import LoginPage from './src/components/LoginPages/LoginPage/LoginPage';
// Parse.initialize('NXxA7ayrOBxizMjqlqamfcbVYq7t3Ti0Sh9bYptz', 'peDdshh8c0RUHlYJjO8N8xWEDbRwWJeBmTYiH7tf');

import React, {
  AppRegistry,
  Component,
  Navigator,
  StyleSheet,
  Text,
  View
} from 'react-native';

let STORAGE_KEY = 'currentUser';

class airpoll extends Component {
  // mixins: [ParseReact.Mixin],

  // observe: function() {
  //   return {
  //     user: ParseReact.currentUser
  //   };
  // }

  constructor(props) {
    super(props);
    this.activeUser = null;
  }

  componentWillMount() {
    store.get('activeUser').then((value) => {
      this.activeUser = value;
      console.log(value);
    });
  }

  signOutUser() {
    this.activeUser = null;
  }

  renderScene(route, navigator) {
    switch (route.id) {
      case 'first-page':
        return <FirstPage navigator={navigator} route={route}/>;
        break;
      case 'landing-page':
        return <AppLandingPage navigator={navigator} route={route} />;
        break;
      case 'login-page':
        return <LoginPage navigator={navigator} route={route}/>;
        break;
      // case 'signup-page':
      //   import SignUpPage from './src/components/LoginPages/SignUpPage/SignUpPage';
      //   return <SignUpPage navigator={navigator} route={route}/>;
      //   break;
      // case 'tab-bar':
      //   import TabsLayout from './src/components/TabsPages/TabsLayout/TabsLayout';
      //   return <TabsLayout navigator={navigator} route={route} user={this.data.user} onSignOut={this.signOutUser}/>;
      //   break;
      // case 'new-group':
      //   import GroupAttrs from './src/components/Groups/NewGroup';
      //   return <GroupAttrs navigator={navigator} route={route}/>;
      //   break;
      // case 'group-view':
      //   import GroupView from './src/components/Groups/GroupView';
      //   return <GroupView navigator={navigator} route={route}/>;
      //   break;
      // case 'thought-view':
      //   import ThoughtView from './src/components/Groups/ThoughtView';
      //   return <ThoughtView navigator={navigator} route={route}/>;
      //   break;
      // case 'new-thought':
      //   import NewThought from './src/components/NewThought/NewFeel';
      //   return <NewThought navigator={navigator} route={route} user={this.activeUser}/>;
      //   break;
      // case 'topic-scene':
      //   import TopicScene from './src/components/TabsPages/WorldStreamTab/TopicScene';
      //   return <TopicScene navigator={navigator} route={route}/>;
      //   break;
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={{id: 'landing-page'}}
        sceneStyle={styles.container}
        ref={(navigator) => { this.navigator = navigator; }}
        renderScene={this.renderScene}
        configureScene={(route) => ({
          ...route.sceneConfig || Navigator.SceneConfigs.FloatFromBottom,// extend off route.sceneConfig if provided, otherwise default to FloatFromRight
          gestures: route.gestures
        })}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    left: 0,
    flex: 1,
    backgroundColor: 'white'
  }
});

AppRegistry.registerComponent('airpoll', () => airpoll);
