import React, {
  ActivityIndicatorIOS,
  Component,
  StyleSheet,
  View
} from 'react-native';

export default class LoadingScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicatorIOS
          animating={true}
          color="#008299"
          size="small"
          style={styles.spinner}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
