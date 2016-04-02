let React = require('react-native');
let MaterialIcon = require('react-native-vector-icons/MaterialIcons');

let {
  StyleSheet,
  TouchableOpacity
} = React;

let LeftButton = React.createClass({
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
    fontSize: 28,
    height: 30,
    color: '#9C9893',
    marginLeft: 12,
    bottom: 3
  },
});

module.exports = LeftButton;
