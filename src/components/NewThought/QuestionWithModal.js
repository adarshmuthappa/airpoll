let React = require('react-native')
let Modal = require('react-native-modalbox');
let MaterialIcon = require('react-native-vector-icons/MaterialIcons');

let Line = require('../Line');

let {
  Dimensions,
  ListView,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity
} = React

let deviceScreen = Dimensions.get('window');
let deviceWidth = deviceScreen.width;
let deviceHeight = deviceScreen.height;

let sampleQuestions = [
  'Which one of the following do you suggest? Please give me your honest opinion.',
  'Which is better?',
  'Please rate',
  'What do you think?',
  'Which artist is most like Mumford and Sons?',
  'Which should I go for?',
  'Help me choose one?',
  'Which movie should I watch?',
  'Which brand should I consider?',
  'Which car manufacturer has the best safety record?',
  'Which movie should I watch?',
  'Which brand should I consider?'
];

let QuestionWithModal = React.createClass({
  getInitialState: function() {
    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return {
      text: '',
      dataSource: ds.cloneWithRows(sampleQuestions)
    };
  },

  _pressData: ({}: {[key: number]: boolean}),

  componentWillMount: function() {
    this._pressData = {};
  },

  blur() {
    this.refs.textInput.blur();
  },

  openModal() {
    this.refs.questionModalRef.open();
  },

  render(){
    let textLimit = 100;
    let remainder = textLimit - this.state.text.length;
    let remainderColor = remainder > 20 ? '#9C9893' : '#FF9393';
    this.props.textValue(this.state.text, this.props.optionNum);//this works but not sure if its the right way
    return (
      <View>
        <View style={styles.questionContainer}>
          <TextInput
            ref='textInput'
            placeholder={this.props.placeholder}
            multiline={true}
            maxLength={textLimit}
            onChangeText={(text) => {this.setState({text: text});this.props.textValue(text, this.props.optionNum);}}
            value={this.state.text}
            autoCorrect={false}
            style={styles.multiline}
          />
          <Text style={[styles.remainder, {color: remainderColor, fontWeight: 'bold'}]}>
            {remainder}
          </Text>
        </View>
        <Modal swipeToClose={false} style={styles.modalQuestions} position={"bottom"} ref={"questionModalRef"}>
          <View style={styles.rowQListHeader}>
            <View style={styles.viewQListHeader}>
              <Text style={styles.txtQListHeader}>
                Sample Questions
              </Text>
            </View>
            <TouchableOpacity style={styles.touchQListHeader} onPress={() => {this.refs.questionModalRef.close()}}>
              <MaterialIcon name="close" style={styles.iconCloseQList} />
            </TouchableOpacity>
          </View>
          <Line style={{backgroundColor: '#BFBFB3', marginTop: 0, marginBottom: 0}}/>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={this._renderRow}
            style={styles.listview}
          />
        </Modal>
      </View>
    )
  },

  _renderRow: function(rowData: string, sectionID: number, rowID: number) {
    return (
      <View>
        <TouchableOpacity onPress={() => this._pressRow(rowID)}>
          <View>
            <View style={styles.rowQList}>
              <View style={styles.viewQList}>
                <Text style={styles.txtQList}>
                  {sampleQuestions[rowID]}
                </Text>
              </View>
              <View style={styles.viewIconQList}>
                { this._pressData[rowID] === true ?
                  <MaterialIcon name="radio-button-checked" style={styles.iconCheckQList} />
                  : <MaterialIcon name="radio-button-unchecked" style={styles.iconCheckQList} />
                }
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <Line style={{backgroundColor: '#DFDFD7', width: deviceWidth-30, marginTop: 0, marginBottom: 0}}/>
      </View>
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
  }
});

var styles = StyleSheet.create({
  questionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    marginLeft: 5,
    marginRight: 10
  },
  multiline: {
    flex: 1,
    padding: 4,
    marginBottom: 4,
    marginTop: 4,
    fontSize: 16,
    height: 80
  },
  remainder: {
    textAlign: 'right',
    fontSize: 11
  },
  modalQuestions: {
    height: 2*(deviceHeight/3),
    backgroundColor: 'white'
  },
  rowQListHeader: {
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 10,
    paddingRight: 10,
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center'
  },
  viewQListHeader: {
    flex: 0.9,
    paddingLeft: 2
  },
  txtQListHeader: {
    color: '#003f4b',
    fontSize: 17,
  },
  touchQListHeader: {
    flex: 0.1,
    alignItems: 'center'
  },
  iconCloseQList: {
    fontSize: 25,
    height: 25,
    color: '#003f4b',
    textAlign: 'right'
  },
  listView: {
    backgroundColor: 'transparent'
  },
  rowQList: {
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 10,
    paddingRight: 10,
    flexWrap: 'wrap',
    flexDirection: 'row',
    backgroundColor: 'transparent',
    alignItems: 'center'
  },
  viewQList: {
    flex: 0.9,
    padding: 2
  },
  txtQList: {
    color: '#828282',
    fontSize: 13
  },
  viewIconQList: {
    flex: 0.1,
    alignItems: 'center'
  },
  iconCheckQList: {
    fontSize: 20,
    height: 20,
    color: '#008299',
    textAlign: 'right'
  }
});

module.exports = QuestionWithModal;
