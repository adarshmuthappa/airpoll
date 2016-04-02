let React = require('react-native');
let Parse = require('parse/react-native');
let ParseReact = require('parse-react/react-native');
let MaterialIcon = require('react-native-vector-icons/MaterialIcons');
let NavigationBar = require('react-native-navbar');
let store = require('react-native-simple-store');
let Overlay = require('react-native-overlay');

let LeftButton = require('../../NavBar/LeftButton');
let LoadingScreen = require('../../LoadingScreen');

let {
  AsyncStorage,
  ActivityIndicatorIOS,
  AlertIOS,
  Dimensions,
  Text,
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Image,
  StatusBarIOS,
  Navigator
} = React;

let deviceScreen = Dimensions.get('window');
let deviceHeight = deviceScreen.width;
let deviceWidth = deviceScreen.width;
let STORAGE_KEY = 'currentUser';

let LoginPage = React.createClass({
  mixins: [ParseReact.Mixin],

  observe: function() {
    return {
      user: ParseReact.currentUser
    };
  },

  containerTouched(event) {//to hide keyboard when clicked elsewhere from textinput
    this.refs.username.blur();
    this.refs.password.blur();
    return false;
  },

  getInitialState: function() {
    return {
      username: '',
      password: '',
      animating: false
    };
  },

  goBack: function() {
    this.refs.username.blur();
    this.refs.password.blur();
    this.props.navigator.pop();
  },

  checkLogin: function() {
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
  },

  goToMainView: function() {
    this.props.navigator.replace({
      id: 'tab-bar',
      sceneConfig: Navigator.SceneConfigs.FadeAndroid
    });
  },

  // async _onValueChange() {
  //   try {
  //     await AsyncStorage.setItem(STORAGE_KEY, 'user');
  //     console.log('Saved selection to disk: ' + 'user');
  //   } catch (error) {
  //     console.log('AsyncStorage error: ' + error.message);
  //   }
  // },

  _doLogin: function() {
    let parent = this;
    Parse.User.logIn(this.state.username, this.state.password).then(function() {
      parent.setState({animating: false});
      store.save('activeUser', parent.data.user);
      //parent._onValueChange();
      parent.goToMainView();
    }, function(error) {
      // login failed.
      console.log(error.code);
      parent.setState({animating: false});
      switch(error.code) {
        case 100 :  AlertIOS.alert('Connection Error','No internet connection',
                      [{text: 'Okay'}]);
                    break;
        case 101 :  AlertIOS.alert('Login Error','Invalid login parameters',
                      [{text: 'Okay'}]);
                    break;
        case 107 :  AlertIOS.alert('Connection Error','No internet connection',
                      [{text: 'Okay'}]);
                    break;
        case 124 :  AlertIOS.alert('Request Timeout Error','Check internet connection',
                      [{text: 'Okay'}]);
                    break;
        case 125 :  AlertIOS.alert('Login Error','Invalid email address',
                      [{text: 'Okay'}]);
                    break;
        case 209 :  AlertIOS.alert('Login Error','Invalid session. Please try again.',
                      [{text: 'Okay'}]);
                    break;
        default :  AlertIOS.alert('Login Error','Invalid login credentials',
                      [{text: 'Okay'}]);
                    break;
      }
    });
  },

  // render: function() {
  //   return (
  //     <View style={styles.container}>
  //       <View style={styles.bgImageWrapper}>
  //         <Image source={require('image!beach')} style={styles.bgImage} />
  //       </View>
  //       <TouchableHighlight activeOpacity={0.2} underlayColor={"transparent"} style={styles.button} onPress={this.goBack}>
  //         <Text style={styles.loginButtonText}>Back</Text>
  //       </TouchableHighlight>
  //       <TextInput
  //         placeholder="Enter username"
  //         placeholderTextColor="white"
  //         multiline={false}
  //         autoCorrect={false}
  //         autoFocus={false}
  //         onChangeText={(username) => {
  //           this.setState({username});
  //         }}
  //         style={styles.textInputDefault}
  //         value={this.state.username}
  //       />
  //       <TextInput
  //         placeholder="Enter password"
  //         placeholderTextColor="white"
  //         multiline={false}
  //         autoCorrect={false}
  //         autoFocus={false}
  //         secureTextEntry={true}
  //         onChangeText={(password) => {
  //           this.setState({password});
  //         }}
  //         style={styles.textInputDefault}
  //         value={this.state.password}
  //       />
  //       <FilledButton />
  //       <TouchableHighlight activeOpacity={0.2} underlayColor={"transparent"} style={styles.button} onPress={this.checkLogin}>
  //         <Text style={styles.loginButtonText}>LogIn</Text>
  //       </TouchableHighlight>
  //     </View>
  //   );
  // }
  render: function() {
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
              onPress={() => this.goBack()}
            />
          }
        />
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
        : null }
      </View>
    );
  }
});

let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  headerRow: {
    flexDirection: 'row',
    marginTop: 30,
    marginLeft: 5,
    marginRight: 5
  },
  icon: {
    fontSize: 28,
    height: 30,
    color: '#07A186',
    marginLeft: 12,
    bottom: 3
  },
  headerText: {
    flex:1,
    paddingLeft: -30,
    marginTop: 5,
    fontSize: 18,
    color: '#E91E63',
    textAlign: 'center'
  },
  bgImageWrapper: {
    position: 'absolute',
    top: 0, bottom: 0, left: 0, right: 0
  },
  bgImage: {
    flex: 1,
    resizeMode: 'cover'
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  spinner: {
    // position: 'absolute',
    // left: deviceWidth/2 - 25,
    // top: deviceHeight/2 - 25,
    // height: 50,
    // width: 50,
    // backgroundColor: '#E91E63',
    // borderRadius: 5
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

module.exports = LoginPage;
