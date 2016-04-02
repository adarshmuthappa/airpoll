let React = require('react-native');
let Modal   = require('react-native-modalbox');
let MaterialIcon = require('react-native-vector-icons/MaterialIcons');
let store = require('react-native-simple-store');

let Line = require('../Line');

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

let ModalGroups = React.createClass({
  getInitialState: function() {
    return {
      text: null,
      groupsListStore: [],
      dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
    };
  },

  _pressData: ({}: {[key: number]: boolean}),

  componentWillMount: function() {
    this._pressData = {};
  },

  componentDidMount: function() {
    console.log('componentDidMount');
    store.get('channels').then((value) => {
      console.log(value);
      console.log(this.props);
      if(value.length!==0) {
        console.log('value!==0');
        this.setState({
          groupsListStore: value
        });
        this.groupsListStore = value;
      }
      else {
        this.setState({
          groupsListStore: 'Sorry, no groups found'
        });
      }
    });
  },

  openModal(id) {
    this.refs.groupsModalRef.open();
  },

  setGroups() {
    let pressedData = [];
    for (let i = 0; i < this.state.groupsListStore.length; i++) {
      if(this._pressData[i]) {
        pressedData.push(this.state.groupsListStore[i]);
      }
    }
    this.props.setGroupsCallback(pressedData);
    this.refs.groupsModalRef.close();
  },

  render(){
    console.log(this.state.groupsListStore)
    return (
      <Modal swipeToClose={false} style={styles.modal} position={"bottom"} ref={"groupsModalRef"}>
        <View style={styles.questionContainer}>
          <TextInput
            placeholder="Search for a group"
            multiline={true}
            autoCorrect={false}
            onChangeText={(text) => {this.setState({text: text});}}
            value={this.state.text}
            style={styles.multiline}
          />
          <TouchableOpacity style={styles.touchQListHeader} onPress={this.setGroups}>
            <Text style={styles.txtQListHeader}>
              Done
            </Text>
          </TouchableOpacity>
        </View>
        <Line style={{backgroundColor: '#DFDFD7', marginTop: 0, marginBottom: 0}}/>
        <ListView
          keyboardDismissMode={'on-drag'}
          dataSource={this.state.dataSource.cloneWithRows(this.state.groupsListStore)}
          renderRow={this._renderRow}
          style={styles.listview}
        />
      </Modal>
    )
  },

  _renderRow: function(rowData: string, sectionID: number, rowID: number) {
    return (
      <View>
        <View style={styles.rowQList}>
          <TouchableOpacity style={styles.viewQList} onPress={() => this._pressRow(rowID)}>
              <Text style={styles.txtQList}>
                {rowData.groupName}
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
    for (var ii = 0; ii < this.state.groupsListStore.length; ii++) {
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

module.exports = ModalGroups;
