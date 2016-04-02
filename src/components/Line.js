var React = require('react-native');
var {
  Dimensions,
  StyleSheet,
  View
} = React;

var deviceScreen = Dimensions.get('window');
var deviceWidth = deviceScreen.width;

var Line = React.createClass({
    propTypes:{
        style: View.propTypes.style,
    },
  render: function() {
    return (
      <View style={[styles.line, this.props.style]} />
    );
  }
});

var styles = StyleSheet.create({
  line: {
    marginTop: 0,
    marginBottom: 0,
    height: 1,
    width: deviceWidth,
    alignSelf: 'center',
    backgroundColor: 'white',
    transform: [{rotate: '0deg'}],
  },
});

module.exports = Line;
