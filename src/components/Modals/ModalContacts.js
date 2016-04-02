let React = require('react-native');
let Parse = require('parse/react-native');
let ParseReact = require('parse-react/react-native');
let Modal   = require('react-native-modalbox');
let MaterialIcon = require('react-native-vector-icons/MaterialIcons');

let Line = require('../Line');
let LoadingScreen = require('../LoadingScreen');

let {
  Dimensions,
  ListView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} = React;

let deviceWidth = Dimensions.get('window').width;

let ModalContacts = React.createClass({
  mixins: [ParseReact.Mixin],

  observe: function() {
    return {
      users: (new Parse.Query(Parse.User).notEqualTo("objectId", this.props.user.objectId))
    };
  },

  getInitialState: function() {
    this._users = [];
    return {
      text: null,
      dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    };
  },

  _pressData: ({}: {[key: number]: boolean}),

  componentWillMount: function() {
    this._pressData = {};
  },

  openModal(id) {
    this.refs.contactsModalRef.open();
  },

  setContacts() {
    let pressedData = [];
    for (let i = 0; i < this._users.length; i++) {
      if(this._pressData[i]) {
        pressedData.push(this._users[i]);
      }
    }
    this.props.setContactsCallback(pressedData);
    this.refs.contactsModalRef.close();
  },

  render(){
    this._users = this.data.users;
    return (
      <Modal swipeToClose={false} style={styles.modal} position={"bottom"} ref={"contactsModalRef"}>
        <View style={styles.questionContainer}>
          <TextInput
            placeholder="Search for a contact"
            multiline={true}
            autoCorrect={false}
            onChangeText={(text) => {this.setState({text: text});}}
            value={this.state.text}
            style={styles.multiline}
          />
          <TouchableOpacity style={styles.touchQListHeader} onPress={this.setContacts}>
            <Text style={styles.txtQListHeader}>
              Done
            </Text>
          </TouchableOpacity>
        </View>
        <Line style={{backgroundColor: '#949494', marginTop: 0, marginBottom: 0}}/>
        {this.pendingQueries().length ?  <LoadingScreen /> :
          <ListView contentContainerStyle={styles.list}
            dataSource={this.state.dataSource.cloneWithRows(this._users)}
            renderRow={this._renderRow}
            contentInset={{bottom:49}}
            automaticallyAdjustContentInsets={false}
          />
        }
      </Modal>
    )
  },

  _renderRow: function(rowData: string, sectionID: number, rowID: number) {
    return (
      <View>
        <View style={styles.rowQList}>
          <TouchableOpacity style={styles.viewQList} onPress={() => this._pressRow(rowID)}>
            <Text style={styles.txtQList}>
              {rowData.displayName}
            </Text>
          </TouchableOpacity>
          <View style={styles.viewIconQList}>
            { this._pressData[rowID] === true ?
              <TouchableOpacity onPress={() => this._pressRow(rowID)}>
                <MaterialIcon name="check-box" style={styles.iconCheckQList} />
              </TouchableOpacity>
              :
              <TouchableOpacity onPress={() => this._pressRow(rowID)}>
                <MaterialIcon name="check-box-outline-blank" style={styles.iconCheckQList} />
              </TouchableOpacity>
            }
          </View>
        </View>
        <Line style={{backgroundColor: '#DFDFD7', width: deviceWidth-30, marginTop: 0, marginBottom: 0}}/>
      </View>
    );
  },

  _genRows: function(pressData: {[key: number]: boolean}): Array<string> {
    var dataBlob = [];
    for (var ii = 0; ii < this._users.length; ii++) {
      var pressedText = pressData[ii] ? ' (pressed)' : '';
      dataBlob.push('Row ' + ii + pressedText);
    }
    return dataBlob;
  },

  _pressRow: function(rowID: number) {
    this._pressData[rowID] = !this._pressData[rowID];
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(this._genRows(this._pressData))
    });
  },
});

let styles = StyleSheet.create({
  modal: {
  },
  rowQListHeader: {
    paddingTop: 10,
    paddingLeft: 15,
    paddingRight: 10,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  questionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10
  },
  multiline: {
    flex: 0.85,
    padding: 4,
    marginBottom: 4,
    marginTop: 4,
    fontWeight: 'bold',
    fontSize: 15,
    height: 40
  },
  touchQListHeader: {
    flex: 0.15,
    alignItems: 'center'
  },
  txtQListHeader: {
    color: '#003f4b',
    fontSize: 15,
    fontWeight: 'bold'
  },
  listView: {
    backgroundColor: 'transparent'
  },
  rowQList: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center'
  },
  viewQList: {
    paddingTop: 10,
    paddingBottom: 10,
    flex: 0.85,
    padding: 5
  },
  txtQList: {
    color: '#828282'
  },
  viewIconQList: {
    flex: 0.15,
    alignItems: 'center'
  },
  iconCheckQList: {
    fontSize: 23,
    height: 23,
    color: '#008299',
    textAlign: 'right'
  }
});

module.exports = ModalContacts;
