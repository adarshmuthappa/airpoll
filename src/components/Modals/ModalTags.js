let React = require('react-native');
let Modal   = require('react-native-modalbox');

let Line = require('../Line');

let {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} = React;

let ModalTags = React.createClass({
  getInitialState: function() {
    this._lastPress = 0;
    return {
      text: null,
      tags: []
    };
  },

  onPressTag(index) {
    let now = new Date().getTime();//double tap code
    if(now - this._lastPress < 500) {
      if(index >= 0) {
        let tags = this.state.tags;
        tags.splice(index, 1);
        this.setState({
          tags: tags
        });
      }
    }
    this._lastPress = now;
  },

  openModal(id) {
    this.refs.tagsModalRef.open();
  },

  onReturnKeyPress() {
    let tags = this.state.tags;
    tags.push(this.state.text);
    this.setState({
      tags: tags,
      text: null
    });
  },

  setTags() {
    let tags = this.state.tags;
    this.props.setTagsCallback(tags);
    this.refs.tagsModalRef.close();
  },

  render(){
    return (
      <Modal swipeToClose={false} style={styles.modalTags} position={"bottom"} ref={"tagsModalRef"}>
        <View style={styles.questionContainer}>
          <TextInput
            editable={this.state.tags.length < 3 ? true : false}
            maxLength={20}
            autoCorrect={false}
            placeholder="Enter a tag (max. 3)"
            onSubmitEditing={this.onReturnKeyPress}
            onChangeText={(text) => {this.setState({text: text});}}
            value={this.state.text}
            style={styles.singleLine}
          />
          <TouchableOpacity style={styles.touchTagsHeader} onPress={this.setTags}>
            <Text style={styles.txtTagsHeader}>
              Done
            </Text>
          </TouchableOpacity>
        </View>
        <Line style={{backgroundColor: '#DFDFD7', marginTop: 0, marginBottom: 0}}/>
        <View style={styles.viewTags}>
          {
            this.state.tags.length === 0 ?
              <View>
                <Text style={[styles.txtTags, styles.redBorder]}>
                  No tags added
                </Text>
              </View>
            :
            <View style={{flex:1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center'}}>
              {this.state.tags.map((val, index) => {
                return (
                  <TouchableOpacity key={index} onPress={() => {this.onPressTag(index)}}>
                    <Text style={styles.txtTags} numberOfLines={2}>
                      {val}
                    </Text>
                  </TouchableOpacity>
                )
              })}
            </View>
          }
        </View>
      </Modal>
    )
  }
});

let styles = StyleSheet.create({
  modalTags: {
  },
  questionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10
  },
  singleLine: {
    flex: 0.85,
    padding: 4,
    marginBottom: 4,
    marginTop: 4,
    fontSize: 16,
    height: 40
  },
  touchTagsHeader: {
    flex: 0.15,
    alignItems: 'center'
  },
  txtTagsHeader: {
    color: '#003f4b',
    fontSize: 15,
    fontWeight: 'bold'
  },
  viewTags: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10
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
    fontSize: 14
  },
  redBorder: {
    borderColor: '#4b0c00',
    color: '#4b0c00'
  }
});

module.exports = ModalTags;
