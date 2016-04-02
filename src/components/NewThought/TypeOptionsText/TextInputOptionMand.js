let React = require('react-native');

let {
  AppRegistry,
  PixelRatio,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  ListView,
  TouchableHighlight,
  Dimensions,
  LayoutAnimation,
  Animated
} = React;

let deviceWidth = Dimensions.get('window').width;

let TextInputOptionsMand = React.createClass({
  getInitialState() {
    return {
      text: ''
    };
  },

  blur() {
    this.refs.txtInputMand.blur();
  },

  render: function () {
    let textLimit = 30;
    let remainder = textLimit - this.state.text.length;
    let remainderColor = remainder > 10 ? '#BABABA' : '#E91E63';
    return (
      <View style={styles.optionBox}>
        <TextInput
          ref="txtInputMand"
          placeholder={this.props.placeholder}
          placeholderTextColor="#003f4b"
          multiline={true}
          maxLength={textLimit}
          onChangeText={(text) => {
            this.setState({text: text});
          }}
          onEndEditing={() => {
            this.props.textValue(this.state.text, this.props.optionNum);
          }}
          autoCorrect={true}
          style={styles.txtMultilineInput}
        />
        <Text style={[styles.remainder, {color: remainderColor}]}>
          {remainder}
        </Text>
      </View>
    );
  }
});

let styles = StyleSheet.create({
  txtMultilineInput: {
    flex: 1,
    padding: 4,
    fontSize: 15,
    color: '#003f4b'
  },
  optionBox: {
    backgroundColor: 'transparent',
    borderColor: '#003f4b',
    borderWidth: 2,
    borderRadius: 5,
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    padding: 10,
    marginBottom: 8,
    marginRight: 4,
    marginLeft: 4,
    width: deviceWidth/2 - 40,
    height: deviceWidth/2 - 80
  },
  remainder: {
    textAlign: 'right',
    fontSize: 10,
    fontWeight: 'bold',
    alignSelf: 'flex-end'
  }
});

module.exports = TextInputOptionsMand;
