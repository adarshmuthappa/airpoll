let React = require('react-native')

let {
  Text,
  TextInput,
  StyleSheet,
  View
} = React

let QuestionInput = React.createClass({
  getInitialState: function() {
    return {
      text: '',
    };
  },

  blur() {
    this.refs.textInput.blur();
  },

  render(){
    let textLimit = 40;
    let remainder = textLimit - this.state.text.length;
    let remainderColor = remainder > 20 ? '#9C9893' : '#FF9393';
    this.props.textValue(this.state.text);//this works but not sure if its the right way
    return (
      <View style={styles.questionContainer}>
        <TextInput
          ref='textInput'
          placeholder={this.props.placeholder}
          multiline={true}
          maxLength={textLimit}
          onChangeText={(text) => {this.setState({text: text});this.props.textValue(text);}}
          value={this.state.text}
          autoCorrect={false}
          style={styles.multiline}
        />
        <Text style={[styles.remainder, {color: remainderColor, fontWeight: 'bold'}]}>
          {remainder}
        </Text>
      </View>
    )
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
  }
});

module.exports = QuestionInput;
