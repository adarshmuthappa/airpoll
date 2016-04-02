let React = require('react-native');
let MaterialIcon = require('react-native-vector-icons/MaterialIcons');

let {
  StyleSheet,
  TouchableOpacity
} = React;

let RightButton = React.createClass({
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <MaterialIcon name={this.props.iconName} style={[styles.icon, {color: this.props.iconColor}]} />
      </TouchableOpacity>
    );
  }
});

let styles = StyleSheet.create({
  icon: {
    fontSize: 25,
    height: 30,
    color: '#9C9893',
    marginRight: 10,
    bottom: 3
  },
});

module.exports = RightButton;
