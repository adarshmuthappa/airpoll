let React = require('react-native');
let MaterialIcon = require('react-native-vector-icons/MaterialIcons');

let {
  StyleSheet,
  View,
} = React;

let TypeYesNo = React.createClass({
  shouldComponentUpdate: function() {
      return false;
  },

  render: function () {
    return (
      <View style={styles.container}>
        <View style={styles.circle}>
          <MaterialIcon name="done" style={styles.actionButtonIcon} />
        </View>
        <View style={styles.circle}>
          <MaterialIcon name="close" style={styles.actionButtonIcon} />
        </View>
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
  }
});

module.exports = TypeYesNo;
