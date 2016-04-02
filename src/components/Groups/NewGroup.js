let React = require('react-native');
let Parse = require('parse/react-native');
let ParseReact = require('parse-react/react-native');
let NavigationBar = require('react-native-navbar');

let TextInputComponent = require('../TextInputComponent');
let LeftButton = require('../NavBar/LeftButton');
let RightButton = require('../NavBar/RightButton');
let Line = require('../Line');
let ModalGroupSelectTypes = require('../Modals/ModalGroupSelectTypes');

let {
  AlertIOS,
  Navigator,
  StyleSheet,
  View
} = React;

let NewGroup = React.createClass({
  getInitialState: function() {
    this.question = '';
    // this.tags = '';
    return {
    };
  },

  render(){
    return (
      <View style={styles.fullScreen}>
        <NavigationBar
          tintColor={'white'}
          title={{
            title: 'New Channel',
            tintColor: '#008299'
          }}
          leftButton={
            <LeftButton
              iconName={'close'}
              iconColor="#003f4b"
              onPress={() => this.props.navigator.pop()}
            />
          }
          rightButton={
            <RightButton
              iconName={'check'}
              iconColor="#003f4b"
              onPress={() => {this.openModalOptions()}}
            />
          }
        />
        <TextInputComponent ref="questionInput" placeholder="Enter channel name..." textValue={(text) => {this.question = text;}}/>
        <ModalGroupSelectTypes ref="modalTypesRef" user={this.props.route.user} completeModal={this.createChannel}/>
      </View>
    )
  },

  _goBack: function() {
    this.props.navigator.pop();
  },

  openModalOptions() {
    this.refs.questionInput.blur();//to hide keyboard if user directly presses on done button with keyboard open
    console.log(this.question);//done
    if(this.question.length > 0) {
      this.refs.modalTypesRef.openModal();
    }
    else {
      AlertIOS.alert(
        'No channel name...',
        'Please enter the channel name to continue'
      )
    }
  },

  createChannel(tags, _users) {
    // console.log(this.question);
    // console.log(tags);
    // console.log(this.props.route.user);
    // _users.push(this.props.route.user);//include current user in membersArray

    let temp = [];//remove null elements
    for(let i of _users)
      i && temp.push(i); // copy each non-empty value to the 'temp' array
    _users = temp;

    ParseReact.Mutation.Create('Groups', {
      groupName: this.question,
      tags: tags,
      user: this.props.route.user,
      // membersArray: _users,
      public: false
    }).dispatch().then(function(object) {
      ParseReact.Mutation.AddRelation(object, 'members', _users).dispatch()
    }, function (error) {
      console.log(error);
    });
    this.props.navigator.pop();
  }
});

let styles = StyleSheet.create({
  fullScreen: {
    flex: 1,
    backgroundColor: 'white'
  }
});

module.exports = NewGroup;
