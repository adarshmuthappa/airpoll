// let Parse = require('parse/react-native');
// let ParseReact = require('parse-react/react-native');
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import NavigationBar from 'react-native-navbar';
import store from 'react-native-simple-store';
import Overlay from 'react-native-overlay';
import LeftButton from '../../NavBar/LeftButton';
import LoadingScreen from '../../LoadingScreen';
import React, {
  AlertIOS,
  Component,
  Dimensions,
  Navigator,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

let deviceHeight = Dimensions.get('window').width;
let deviceWidth = Dimensions.get('window').width;
let STORAGE_KEY = 'currentUser';

export default class LoginPage extends Component {
  // mixins: [ParseReact.Mixin],

  // observe: function() {
  //   return {
  //     user: ParseReact.currentUser
  //   };
  // },

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      animating: false
    };
  }

  containerTouched(event) {//to hide keyboard when clicked elsewhere from textinput
    this.refs.username.blur();
    this.refs.password.blur();
    return false;
  }


  goBack() {
    this.refs.username.blur();
    this.refs.password.blur();
    this.props.navigator.pop();
  }

  checkLogin() {
    let success = true;
    let state = this.state;
    for(let key in state){
      if(state[key].length <= 0){
        success = false;
      }
    }

    if(success) {
      this.setState({animating: true});
      this.refs.username.blur();
      this.refs.password.blur();
      this._doLogin();
    }
     else {
      //show alert
      AlertIOS.alert('Login Error','Please complete all fields',
        [{text: 'Okay'}]);
    }
  }

  goToMainView() {
    this.props.navigator.replace({
      id: 'tab-bar',
      sceneConfig: Navigator.SceneConfigs.FadeAndroid
    });
  }

  _doLogin() {
    // let parent = this;
    // Parse.User.logIn(this.state.username, this.state.password).then(function() {
    //   parent.setState({animating: false});
    //   store.save('activeUser', parent.data.user);
    //   //parent._onValueChange();
    //   parent.goToMainView();
    // }, function(error) {
    //   // login failed.
    //   console.log(error.code);
    //   parent.setState({animating: false});
    //   switch(error.code) {
    //     case 100 :  AlertIOS.alert('Connection Error','No internet connection',
    //                   [{text: 'Okay'}]);
    //                 break;
    //     case 101 :  AlertIOS.alert('Login Error','Invalid login parameters',
    //                   [{text: 'Okay'}]);
    //                 break;
    //     case 107 :  AlertIOS.alert('Connection Error','No internet connection',
    //                   [{text: 'Okay'}]);
    //                 break;
    //     case 124 :  AlertIOS.alert('Request Timeout Error','Check internet connection',
    //                   [{text: 'Okay'}]);
    //                 break;
    //     case 125 :  AlertIOS.alert('Login Error','Invalid email address',
    //                   [{text: 'Okay'}]);
    //                 break;
    //     case 209 :  AlertIOS.alert('Login Error','Invalid session. Please try again.',
    //                   [{text: 'Okay'}]);
    //                 break;
    //     default :  AlertIOS.alert('Login Error','Invalid login credentials',
    //                   [{text: 'Okay'}]);
    //                 break;
    //   }
    // });
    this.goToMainView();
  }

  render() {
    return (
      <View style={styles.container} onStartShouldSetResponder={this.containerTouched}>
        <NavigationBar
          tintColor={'white'}
          title={{
            title: 'Log In',
            tintColor: '#008299'
          }}
          leftButton={
            <LeftButton
              iconName={'arrow-back'}
              iconColor="#008299"
              onPress={() => this.goBack()}/>
          }/>
        <View style={styles.loginContainer}>
          <TextInput
            ref="username"
            placeholder="Enter username"
            placeholderTextColor="gray"
            autoCorrect={false}
            autoFocus={false}
            onChangeText={(username) => {
              this.setState({username});
            }}
            style={styles.textInputDefault}
            value={this.state.username}
          />
          <TextInput
            ref="password"
            placeholder="Enter password"
            placeholderTextColor="gray"
            autoCorrect={false}
            autoFocus={false}
            secureTextEntry={true}
            onChangeText={(password) => {
              this.setState({password});
            }}
            style={styles.textInputDefault}
            value={this.state.password}
          />
          <TouchableOpacity style={styles.buttonLogin} onPress={this.checkLogin}>
            <MaterialIcon name="check" style={styles.iconLoginButton}/>
          </TouchableOpacity>
        </View>
        {this.state.animating ?
          <Overlay isVisible={true}>
            <LoadingScreen/>
          </Overlay>
        : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  loginContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25
  },
  textInputDefault: {
    alignSelf: 'center',
    height: 40,
    width: 250,
    textAlign: 'center',
    marginTop: 5,
    fontSize: 13,
    padding: 10,
    color: 'black',
    backgroundColor: 'transparent',
    borderRadius: 5
  },
  buttonLogin: {
    marginTop: 20,
    padding: 3,
    height: 50,
    width: 50,
    borderWidth: 2,
    borderRadius: 25,
    borderColor: '#008299',
    justifyContent: 'center',
    alignItems: 'center'
  },
  iconLoginButton: {
    fontSize: 25,
    height: 25,
    color: '#008299'
  }
});
