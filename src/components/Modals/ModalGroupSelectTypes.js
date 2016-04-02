let React = require('react-native');
let Modal   = require('react-native-modalbox');
let MaterialIcon = require('react-native-vector-icons/MaterialIcons');

let Line = require('../Line');
let ModalTags = require('./ModalTags');
let ModalContacts = require('./ModalContacts');

let {
  Dimensions,
  StyleSheet,
  View,
  ScrollView,
  ListView,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  Navigator
} = React;

let deviceScreen = Dimensions.get('window');
let deviceWidth = deviceScreen.width;
let deviceHeight = deviceScreen.height;

let ModalSelectTypes = React.createClass({
  getInitialState: function() {
    this.globalTags = [];
    this.globalMembers = null;
    return {
      text: null,
      contactsSelected: [],
      tagsAdded: []
    };
  },

  _pressData: ({}: {[key: number]: boolean}),

  componentWillMount: function() {
    this._pressData = {};
  },

  openModal(id) {
    this.refs.typesModalRef.open();
  },

  setTags(tags) {
    this.globalTags = tags;
    if(!(tags.length===0 && this.state.tagsAdded.length===0)) {
      this.setState({
        tagsAdded: tags
      });
    }
  },

  setContacts(contacts) {
    this.globalMembers = contacts;
    if(!(contacts.length===0 && this.state.contactsSelected.length===0)) {
      this.setState({
        contactsSelected: contacts
      });
    }
  },

  render(){
    return (
      <View>
        <Modal swipeToClose={false} style={styles.modalTypes} position={"bottom"} ref={"typesModalRef"}>
          <ScrollView>
            <View style={styles.rowCircles}>

              <View style={styles.leftHalf}>
                <View style={styles.viewCircleTags}>
                  <TouchableOpacity onPress={() => {this.refs.modalTagsRef.openModal()}}>
                    <View style={styles.circleTags}>
                      <MaterialIcon name="bookmark" style={styles.iconTags} />
                    </View>
                  </TouchableOpacity>
                </View>
                <View style={styles.viewTags}>
                {
                  this.state.tagsAdded.length === 0 ?
                    <View>
                      <Text style={styles.txtTags}>
                        No tags added
                      </Text>
                    </View>
                  :
                  <View style={{flex:1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center'}}>
                    {this.state.tagsAdded.map((val, index) => {
                      return (
                        <View key={index}>
                          <Text style={styles.txtTags} numberOfLines={2}>
                            {val}
                          </Text>
                        </View>
                      )
                    })}
                  </View>
                }
                </View>
              </View>

              <View style={styles.rightHalf}>
                <View style={styles.viewCircleConfig}>
                  {false ?
                  <TouchableOpacity>
                    <View style={styles.circleConfig}>
                      <MaterialIcon name="settings" style={styles.iconConfig} />
                    </View>
                  </TouchableOpacity> :
                  <View style={styles.circleConfig}>
                    <MaterialIcon name="settings" style={styles.iconConfig} />
                  </View>}
                </View>
                <View style={styles.viewConfigs}>
                  <Text style={styles.txtConfigs}>
                    24 hours
                  </Text>
                  {false ?
                  <Text style={styles.txtConfigs}>
                    No
                  </Text>: null}
                  {false ?
                  <Text style={styles.txtConfigs}>
                    No Tags Added
                  </Text>: null}
                </View>
              </View>

            </View>

            <View style={styles.rowCircleContacts}>
              <TouchableOpacity style={{alignItems: 'center'}} onPress={() => {this.refs.modalContactsRef.openModal()}}>
                <View style={styles.circleContacts}>
                  <MaterialIcon name="group-add" style={styles.iconContacts} />
                </View>
              </TouchableOpacity>
              <View style={styles.viewContacts}>
              {
                this.state.contactsSelected.length === 0 ?
                  <View>
                    <Text style={styles.txtContacts}>
                      No contacts added
                    </Text>
                  </View>
                :
                <View style={{flex:1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center'}}>
                  {this.state.contactsSelected.map((val, index) => {
                    return (
                      <View key={index} style={{width: deviceWidth/3-5}}>
                        <Text style={styles.txtContacts} numberOfLines={2}>
                          {val.displayName}
                        </Text>
                      </View>
                    )
                  })}
                </View>
              }
              </View>
            </View>
          </ScrollView>

          <View style={styles.viewFooterPost}>
            <Line style={{backgroundColor: '#DFDFD7', marginTop: 7, marginBottom: 10}}/>
            <View style={styles.viewCircleSend}>
              {
                this.state.contactsSelected.length === 0 ?
                  <View style={styles.circleSendDisable}>
                    <MaterialIcon name="send" style={styles.iconSendDisable} />
                  </View>
                :
                  <TouchableOpacity onPress={() => {this.createChannel();}}>
                    <View style={styles.circleSend}>
                      <MaterialIcon name="send" style={styles.iconSend} />
                    </View>
                  </TouchableOpacity>
              }
            </View>
          </View>
        </Modal>
        <ModalTags ref="modalTagsRef" setTagsCallback={this.setTags}/>
        <ModalContacts ref="modalContactsRef" user={this.props.user} setContactsCallback={this.setContacts}/>
      </View>
    )
  },

  createChannel() {
    this.refs.typesModalRef.close();
    this.props.completeModal(this.globalTags, this.globalMembers);
  }
});

let styles = StyleSheet.create({
  modalTypes: {
    height: deviceHeight/2 - 5
  },
  rowCircles : {
    flexDirection: 'row',
    marginTop: 20,
    padding: 5
  },
  leftHalf: {
    flex: 0.5,
    marginRight: 2
  },
  rightHalf: {
    flex: 0.5,
    marginLeft: 2,
    opacity: 0.4//disabling this for first release
  },
  viewCircleTags: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  circleTags: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 26,
    borderWidth: 2,
    borderColor: '#003f4b',
    width: 52,
    height: 52
  },
  iconTags: {
    fontSize: 30,
    height: 30,
    color: '#003f4b'
  },
  viewTags: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 5
  },
  txtTags: {
    borderRadius: 5,
    borderWidth: 1,
    padding: 3,
    marginTop: 2,
    marginBottom: 2,
    marginRight: 2,
    marginLeft: 2,
    borderColor: '#003f4b',
    color: '#003f4b',
    fontSize: 12
  },
  viewCircleConfig: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  circleConfig: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 26,
    borderWidth: 2,
    borderColor: '#003f4b',
    width: 52,
    height: 52
  },
  iconConfig: {
    fontSize: 30,
    height: 30,
    color: '#003f4b'
  },
  viewConfigs: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 5
  },
  txtConfigs: {
    borderRadius: 5,
    borderWidth: 1,
    padding: 3,
    marginTop: 2,
    marginBottom: 2,
    marginRight: 2,
    marginLeft: 2,
    borderColor: '#003f4b',
    color: '#003f4b',
    fontSize: 12
  },
  rowCircleContacts: {
    marginTop: 10,
    padding: 5
  },
  circleContacts: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 26,
    backgroundColor: '#003f4b',
    width: 52,
    height: 52
  },
  viewContacts: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 5,
    marginBottom: 5
  },
  txtContacts: {
    borderRadius: 5,
    borderWidth: 1,
    padding: 3,
    marginTop: 2,
    marginBottom: 2,
    marginRight: 2,
    marginLeft: 2,
    borderColor: '#003f4b',
    color: '#003f4b',
    fontSize: 12,
    textAlign: 'center'
  },
  iconContacts: {
    fontSize: 30,
    height: 30,
    color: 'white'
  },
  viewFooterPost: {
    bottom: 12
  },
  viewCircleSend: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  circleSend: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 28,
    backgroundColor: '#4b0c00',
    width: 56,
    height: 56
  },
  iconSend: {
    fontSize: 30,
    height: 30,
    color: 'white'
  },
  circleSendDisable: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 28,
    borderWidth: 2,
    borderColor: '#4b0c00',
    width: 56,
    height: 56,
    opacity: 0.2
  },
  iconSendDisable: {
    fontSize: 30,
    height: 30,
    color: '#4b0c00'
  }
});

module.exports = ModalSelectTypes;
