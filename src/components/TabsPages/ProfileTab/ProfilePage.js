var React = require('react-native');
var ParallaxView = require('react-native-parallax-view');

var {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Image
} = React;

var deviceScreen = require('Dimensions').get('window');
var deviceWidth = deviceScreen.width;


var profilePage = React.createClass({
    render: function () {
      return (
        <ParallaxView
          ref={component => this._scrollView = component}
          backgroundSource={require('image!friendspier')}
          windowHeight={250}
          header={HEADER}>
          <View style={styles.loremBody}>
            <Text style={styles.loremText}>
              Lorem ipsum dolor sit amet, magna assum officiis ut duo, audire elaboraret in cum. Praesent periculis nam
              cu, an dicunt detracto nam. Nec salutandi iracundia ut, mea ea probo detraxit, ferri vituperatoribus est eu.
              Populo nemore qualisque vis te, at numquam persequeris duo.
            </Text>
            <Text style={styles.loremText}>
              Oportere indoctum scriptorem eos an, ne erant scripta repudiare est, cetero principes vim ea. Unum bonorum
              volutpat eu mea. Per fugit democritum in, omnis dicam ignota no quo. Quem justo erant sit eu, augue nulla
              feugiat ut mea, ex accumsan quaestio pro. Eum propriae imperdiet referrentur ne. Deleniti singulis inimicus
              an vim, ne qui mazim definitiones reprehendunt.
            </Text>
            <Text style={styles.loremText}>
              No soluta aliquip disputando sit. Porro oporteat no vim. Per ad evertitur concludaturque. Ad vim brute
              mandamus, nostrum maluisset no quo, nostrum ancillae scribentur ea sed. Quem odio consulatu vel an, ludus
              abhorreant sententiae id ius.
            </Text>
            <Text style={styles.loremText}>
              In mea menandri sapientem, quo gloriatur adolescens voluptatibus ei. Eu detraxit adolescens ius. Usu quando
              mandamus dissentiet et, persius apeirian dissentias in has. Pri id ignota mnesarchum honestatis, ei sed
              appareat sententiae consequuntur. Et magna ullamcorper est, mundi nusquam te eam. Graecis vivendum has in,
              cum appetere appellantur an.
            </Text>
            <Text style={styles.loremText}>
              Assum iisque forensibus an his, est adhuc errem aliquip ad, et ocurreret accommodare pri. Ne usu nostrud
              minimum, option latine consectetuer quo ut. Sed meis accumsan ea, ne per dolores quaerendum. Cibo aperiam
              repudiare at vix, putant virtute instructior per in. Alii quas persius et nam.
            </Text>
            <Text style={styles.loremText}>
              Etiam intellegat sea in. Impedit vivendo imperdiet cu sea, usu cu adhuc mucius necessitatibus, cu unum
              habemus dissentiunt vel. Reque affert vituperatoribus et per. Ut vim inani veniam concludaturque, sonet
              elaboraret consectetuer ne eos.
            </Text>
            <Text style={styles.loremText}>
              An latine perpetua consetetur usu, novum indoctum vulputate in ius. Ad altera fierent percipitur eam, saepe
              tation deserunt mei an. Harum primis nam no, ius no habeo dolorum voluptatum. Sonet dissentias dissentiet
              vel in, te has discere accumsan.
            </Text>
            <TouchableOpacity onPress={ () => {this._scrollView.scrollTo(0, 0);}}>
              <Text style={{color: '#00A7FF'}}>
                Scroll to top
              </Text>
            </TouchableOpacity>
          </View>
        </ParallaxView>
      );
    }
});

var styles = StyleSheet.create({
  a: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingVertical: 24
  },
  header: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingVertical: 0
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#353535'
  },
  loremBody: {
    paddingHorizontal: 10,
    paddingVertical: 6
  },
  loremText: {
    color: '#353535',
    paddingBottom: 10
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  circleProfile: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    marginRight: 15,
    marginLeft: 15,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 40,
    borderColor: '#3DE3F3',
    borderWidth: 2,
    width: 80,
    height: 80
  },
  circleProfileText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    color: '#3DE3F3'
  },
});

var HEADER = (
  <View style={styles.header}>
    <View style={styles.circleProfile}>
      <TouchableHighlight
        activeOpacity={0.5}
        underlayColor={"transparent"}
        onPress={this._onPressOption1}>
        <Text style={styles.circleProfileText}>
          Image
        </Text>
      </TouchableHighlight>
    </View>
    <Text style={styles.circleProfileText}>
      Image
    </Text>
  </View>
);

module.exports = profilePage;
