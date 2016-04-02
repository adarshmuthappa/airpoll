import store from 'react-native-simple-store';
import React, {
  Component,
  Navigator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

// let count = 1;

export default class LandingPage extends Component {

  constructor(props) {
    super(props);
    this.activeUser = null;
  }

  goToSignUpPage() {
    this.props.navigator.push({
      id: 'signup-page',
      sceneConfig: Navigator.SceneConfigs.FadeAndroid
    });
  }

  goToLoginPage() {
    this.props.navigator.push({
      id: 'login-page',
      sceneConfig: Navigator.SceneConfigs.FadeAndroid
    });
  }

  goToMainView() {
    this.props.navigator.push({
      id: 'tab-bar',
      sceneConfig: Navigator.SceneConfigs.FadeAndroid
    });
  }

  componentWillMount() {
    store.get('activeUser').then((value) => {
      this.activeUser = value;
      if(this.activeUser) {
        this.goToMainView();
        console.log('Success user')
      }
    });
  }

  // componentWillReceiveProps(nextProps) {
  //   // console.log(nextProps);
  //   if(nextProps.user && count>0) {
  //     this.goToMainView();
  //     count--;
  //   }
  // },

  render() {
    // console.log(this.props.user);
    return (
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Text style={styles.titlePart1}>
            air
            <Text style={styles.titlePart2}>
              poll
            </Text>
          </Text>
        </View>
        <View style={styles.midContainer}>
          <Text style={styles.appMessage}>
            Getting opinions has never been this fun! Make your most important decisions easier, better and quicker!
          </Text>
        </View>
        <View style={styles.bottomContainer}>
          <View style={{flexDirection: 'row', alignSelf: 'center'}}>
            <TouchableOpacity style={styles.buttonSignUp} onPress={this.goToSignUpPage}>
              <Text style={styles.signUpButtonText}>Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonLogin} onPress={this.goToLoginPage}>
              <Text style={styles.loginButtonText}>Log In</Text>
            </TouchableOpacity>
          </View>
          <View style={{opacity: 0.1}}>
            <TouchableOpacity style={styles.buttonTour}>
              <Text style={styles.tourButtonText}>Skip</Text>
            </TouchableOpacity>
         </View>
        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  topContainer: {
    flex: 0.3,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  midContainer: {
    flex: 0.3,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  bottomContainer: {
    flex: 0.4,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  titlePart1: {
    fontFamily: 'OpenSans-Semibold',
    fontSize: 30,
    color: '#494D5B',
    textAlign: 'center',
    margin: 10
  },
  titlePart2: {//inherits styles from titlePart1
    color: '#008299'
  },
  appMessage: {
    fontFamily: 'OpenSans-Light',
    fontWeight: 'bold',
    fontSize: 13,
    color: '#494D5B',
    textAlign: 'center'
  },
  buttonSignUp: {
    marginRight: 20,
    height: 70,
    width: 70,
    borderWidth: 2,
    borderRadius: 35,
    borderColor: '#008299',
    justifyContent: 'center',
    alignItems: 'center'
  },
  signUpButtonText: {
    padding: 2,
    fontFamily: 'OpenSans-Semibold',
    fontSize: 15,
    color: '#008299'
  },
  buttonLogin: {
    marginLeft: 20,
    height: 70,
    width: 70,
    borderWidth: 2,
    borderRadius: 35,
    borderColor: '#008299',
    justifyContent: 'center',
    alignItems: 'center'
  },
  loginButtonText: {
    padding: 1,
    fontFamily: 'OpenSans-Semibold',
    fontSize: 16,
    color: '#008299'
  },
  buttonTour:{
    marginTop: 15,
    height: 70,
    width: 70,
    borderWidth: 2,
    borderRadius: 35,
    borderColor: '#008299',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  },
  tourButtonText: {
    padding: 1,
    fontFamily: 'OpenSans-Semibold',
    fontSize: 16,
    color: '#008299'
  },
});
