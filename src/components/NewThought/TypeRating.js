let React = require('react-native');
let Icon = require('react-native-vector-icons/Ionicons');

let {
  Dimensions,
  StyleSheet,
  Text,
  View,
} = React;

let deviceWidth = Dimensions.get('window').width;

let TypeRating = React.createClass({
  shouldComponentUpdate: function() {
      return false;
  },

  render: function () {
    return (
      <View style={styles.container}>
        <View style={styles.buttonRow}>
          <View style={styles.ratingBox}>
            <Text style={styles.txtRatingBox}>
              1.0
            </Text>
          </View>
          <View style={styles.ratingBox}>
            <Text style={styles.txtRatingBox}>
              1.5
            </Text>
          </View>
          <View style={styles.ratingBox}>
            <Text style={styles.txtRatingBox}>
              2.0
            </Text>
          </View>
          <View style={styles.ratingBox}>
            <Text style={styles.txtRatingBox}>
              2.5
            </Text>
          </View>
          <View style={styles.ratingBox}>
            <Text style={styles.txtRatingBox}>
              3.0
            </Text>
          </View>
          <View style={styles.ratingBox}>
            <Text style={styles.txtRatingBox}>
              3.5
            </Text>
          </View>
          <View style={styles.ratingBox}>
            <Text style={styles.txtRatingBox}>
              4.0
            </Text>
          </View>
          <View style={styles.ratingBox}>
            <Text style={styles.txtRatingBox}>
              4.5
            </Text>
          </View>
          <View style={styles.ratingBox}>
            <Text style={styles.txtRatingBox}>
              5.0
            </Text>
          </View>
        </View>
      </View>
    );
  }
});

let styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20
  },
  buttonRow: {
    flexDirection: 'row'
  },
  ratingBox: {
    backgroundColor: 'transparent',
    borderColor: '#003f4b',
    borderWidth: 2,
    borderRadius: 5,
    alignItems:'center',
    justifyContent:'center',
    paddingTop: 10,
    paddingBottom: 10,
    marginLeft: 2,
    marginRight: 2,
    width: (deviceWidth-56)/9,//calc. 56 = 20 from margin of container + 36 from marginleft and right from buttonrow
    height: 40
  },
  txtRatingBox: {
    color: '#003f4b',
    fontWeight: 'bold'
  },
});

module.exports = TypeRating;
