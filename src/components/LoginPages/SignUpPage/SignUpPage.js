let React = require('react-native');
let Parse = require('parse/react-native');
let ParseReact = require('parse-react/react-native');
let MaterialIcon = require('react-native-vector-icons/MaterialIcons');
let NavigationBar = require('react-native-navbar');
let Overlay = require('react-native-overlay');

let LeftButton = require('../../NavBar/LeftButton');
let LoadingScreen = require('../../LoadingScreen');

let {
  ActivityIndicatorIOS,
  AlertIOS,
  Dimensions,
  Text,
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Image,
  Navigator
} = React;

let deviceScreen = Dimensions.get('window');
let deviceHeight = deviceScreen.width;
let deviceWidth = deviceScreen.width;

let SignUpPage = React.createClass({
  getInitialState: function() {
    return {
      username: '',
      email: '',
      password: '',
      animating: false
    };
  },

  containerTouched(event) {//to hide keyboard when clicked elsewhere from textinput
    this.refs.username.blur();
    this.refs.password.blur();
    return false;
  },

  goBack: function() {
    this.refs.username.blur();
    this.refs.password.blur();
    this.props.navigator.pop();
  },

  checkSignup: function() {
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
      this._doSignup();
    }
    else {
      //show alert
      AlertIOS.alert('Error','Please complete all fields',
        [{text: 'Okay', onPress: () => console.log('')}]);
    }
  },

  goToMainView: function() {
    this.props.navigator.replace({
      id: 'tab-bar',
      sceneConfig: Navigator.SceneConfigs.FadeAndroid
    });
  },

  _doSignup: function() {

    // $ionicLoading.show({
    //   content: 'Loading...',
    //   animation: 'fade-in',
    //   showBackdrop: true,
    //   maxWidth: 200,
    //   showDelay: 0
    // });
    let parent = this;
    let user = new Parse.User({
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
    });
    // user.signUp(null, {
    //   success: function(user) {
    //     parent.goToMainView();
    //   },
    //   error: function(user, error) {
    //     alert("Unable to sign up:  " + error.code + " " + error.message);
    //   }
    // });
    user.signUp(null).then(function(user) {
        parent.setState({animating: false});
        parent.goToMainView();
      }, function(error) {
        // signup failed
        parent.setState({animating: false});
        switch(error.code) {
          case 100 :  AlertIOS.alert('Connection Error','No internet connection',
                        [{text: 'Okay'}]);
                      break;
          case 101 :  AlertIOS.alert('SignUp Error','Invalid login parameters',
                        [{text: 'Okay'}]);
                      break;
          case 107 :  AlertIOS.alert('Login Error','No internet connection',
                        [{text: 'Okay'}]);
                      console.log(error)
                      break;
          case 124 :  AlertIOS.alert('Request Timeout Error','Check internet connection',
                        [{text: 'Okay', onPress: () => console.log('')}]);
                      break;
          case 125 :  AlertIOS.alert('SignUp Error','Invalid email address',
                        [{text: 'Okay'}]);
                      break;
          case 202 :  AlertIOS.alert('SignUp Error','Username already taken',
                        [{text: 'Okay'}]);
                      break;
          case 203 :  AlertIOS.alert('SignUp Error','Email already taken',
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

  render: function() {
    return (
      <View style={styles.container} onStartShouldSetResponder={this.containerTouched}>
        <NavigationBar
          tintColor={'white'}
          title={{
            title: 'Sign Up',
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
        <View style={styles.signUpContainer}>
          <TextInput
            ref="username"
            placeholder="Enter username"
            placeholderTextColor="gray"
            multiline={false}
            autoCorrect={false}
            autoFocus={false}
            onChangeText={(username) => {
              this.setState({username});
            }}
            style={styles.textInputDefault}
            value={this.state.username}
          />
          <TextInput
            ref="email"
            placeholder="Enter email"
            placeholderTextColor="gray"
            multiline={false}
            autoCorrect={false}
            autoFocus={false}
            onChangeText={(email) => {
              this.setState({email});
            }}
            style={styles.textInputDefault}
            value={this.state.email}
          />
          <TextInput
            ref="password"
            placeholder="Enter password"
            placeholderTextColor="gray"
            multiline={false}
            autoCorrect={false}
            autoFocus={false}
            secureTextEntry={true}
            onChangeText={(password) => {
              this.setState({password});
            }}
            style={styles.textInputDefault}
            value={this.state.password}
          />
          <TouchableOpacity style={styles.buttonSignUp} onPress={this.checkLogin}>
            <MaterialIcon name="check" style={styles.iconSignUpButton}/>
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
    color: '#2196F3',
    textAlign: 'center'
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
    // backgroundColor: '#2196F3',
    // borderRadius: 5
  },
  signUpContainer: {
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
  buttonSignUp: {
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
  iconSignUpButton: {
    fontSize: 25,
    height: 25,
    color: '#008299'
  }
});

module.exports = SignUpPage;
