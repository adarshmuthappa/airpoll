let React = require('react-native');

let {
  StyleSheet,
  View,
  ActivityIndicatorIOS
} = React;

let LoadingScreen = React.createClass({
  render: function() {

    return (
      <View style={[styles.container, {backgroundColor: this.props.backgroundColorContainer}]}>
        <ActivityIndicatorIOS
          animating={true}
          color="#008299"
          size="small"
          style={styles.spinner}
        />
      </View>
    );
  }
});

let styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  spinner: {
    // height: 50,
    // width: 50,
    // backgroundColor: '#1FBAD6',
    // borderRadius: 5
  }
});

module.exports = LoadingScreen;
