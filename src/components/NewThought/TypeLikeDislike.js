let React = require('react-native');
let OctIcon = require('react-native-vector-icons/Octicons');
let MaterialIcon = require('react-native-vector-icons/MaterialIcons');

let {
  StyleSheet,
  View,
} = React;

let TypeLikeDislike = React.createClass({
  shouldComponentUpdate: function() {
      return false;
  },

  render: function () {
    return (
      <View style={styles.container}>
        <MaterialIcon name="thumb-up" style={styles.actionButtonIcon} />
        <MaterialIcon name="thumbs-up-down" style={styles.actionButtonIcon} />
        <MaterialIcon name="thumb-down" style={styles.actionButtonIcon} />
      </View>
    );
  }
});

let styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20
  },
  circle: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#003f4b',
    width: 40,
    height: 40
  },
  actionButtonIcon: {
    fontSize: 30,
    height: 30,
    color: '#003f4b'
  },
});

module.exports = TypeLikeDislike;
