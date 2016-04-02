let React = require('react-native');
let Modal   = require('react-native-modalbox');
let EntypoIcon = require('react-native-vector-icons/Entypo');

let Line = require('../Line');

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

let sampleQuestions = [
  'Which one of the following do you suggest? Please give me your honest opinion.',
  'Which is better?',
  'Which artist is most like Mumford and Sons?',
  'Which should I go for?',
  'Help me choose one?',
  'Which movie should I watch?',
  'Which brand should I consider?',
  'Which car manufacturer has the best safety record?',
  'Which movie should I watch?',
  'Which brand should I consider?'
];

let ModalQuestions = React.createClass({
  getInitialState: function() {
    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return {
      dataSource: ds.cloneWithRows(sampleQuestions),
    };
  },

  _pressData: ({}: {[key: number]: boolean}),

  componentWillMount: function() {
    this._pressData = {};
  },

  openModal(id) {
    this.refs.questionModalRef.open();
  },
  componentDidMount: function() {
    this.props.modalTypesRef(this);
  },

  render(){
    return (
      <Modal swipeToClose={false} style={styles.modal} position={"bottom"} ref={"questionModalRef"}>
        <View style={styles.rowQListHeader}>
          <Text style={styles.txtQListHeader}>
            Question List
          </Text>
          <TouchableOpacity style={styles.touchQListHeader} onPress={() => {this.refs.questionModalRef.close()}}>
            <EntypoIcon name="cross" style={styles.iconCloseQList} />
          </TouchableOpacity>
        </View>
        <Line style={{backgroundColor: '#949494', margin: 0}}/>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this._renderRow}
          style={styles.listview}
        />
      </Modal>
    )
  },

  _renderRow: function(rowData: string, sectionID: number, rowID: number) {
    return (
      <TouchableHighlight activeOpacity = {0.5} underlayColor = {'transparent'} onPress={() => this._pressRow(rowID)}>
        <View>
          <View style={styles.rowQList}>
            <Text style={styles.txtQList}>
              {sampleQuestions[rowID]}
            </Text>
            { this._pressData[rowID] === true ? <EntypoIcon name="check" style={styles.iconCheckQList} /> : null }
          </View>
          <Line style={{backgroundColor: '#DFDFD7', width: deviceWidth-30, margin: 0}}/>
        </View>
      </TouchableHighlight>
    );
  },

  _pressRow: function(rowID: number) {
    for (let ii = 0; ii < sampleQuestions.length && ii!==rowID; ii++) {
      if(this._pressData[ii]) {
        this._pressData[ii] = !this._pressData[ii];
      }
    }
    this._pressData[rowID] = !this._pressData[rowID];
    this.refs.questionModalRef.close();
    this.setState({
      text: sampleQuestions[rowID]
    });
  },
});

let styles = StyleSheet.create({
  modal: {
    height: deviceHeight - 240
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
  txtQListHeader: {
    color: '#07A186',
    fontSize: 15,
    fontWeight: 'bold'
  },
  touchQListHeader: {
    alignItems: 'center'
  },
  iconCloseQList: {
    fontSize: 26,
    height: 25,
    color: '#07A186',
    textAlign: 'right'
  },
  listView: {
    backgroundColor: 'transparent'
  },
  rowQList: {
    paddingTop: 1,
    paddingBottom: 1,
    paddingLeft: 15,
    paddingRight: 10,
    flexWrap: 'wrap',
    flexDirection: 'row',
    backgroundColor: 'transparent',
    alignItems: 'center'
  },
  txtQList: {
    flex: 1,
    color: '#828282'
  },
  iconCheckQList: {
    fontSize: 22,
    height: 20,
    color: '#07A186',
    textAlign: 'right',
    paddingRight: 5
  },
  label: {
    marginLeft: 5,
    padding: 5
  },
  txtLabel: {
    backgroundColor: 'blue',
    borderRadius: 3,
    fontSize: 10,
    color: 'white'
  }
});

module.exports = ModalQuestions;
