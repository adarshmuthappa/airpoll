let React = require('react-native');
let MaterialIcon = require('react-native-vector-icons/MaterialIcons');
let NavigationBar = require('react-native-navbar');

let PollCardOptionsText = require('../PollCard/PollCardOptionsText');
let LeftButton = require('../NavBar/LeftButton');
let RightButton = require('../NavBar/RightButton');
let Line = require('../Line');

let {
  Animated,
  AppRegistry,
  StyleSheet,
  ListView,
  Text,
  View,
  TouchableHighlight,
  Dimensions,
  Navigator,
  ScrollView
} = React;

let sampleQuestions = [
  'Account',
  'Settings',
  'Privacy Policy',
  'Sign Out',
];
let deviceScreen = Dimensions.get('window');
let deviceWidth = deviceScreen.width;
let deviceHeight = deviceScreen.height;

let ThoughtView = React.createClass({
  getInitialState() {
    this._activeOption = 0;
    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return {
      dataSource: ds.cloneWithRows(sampleQuestions),
      upVoteStatus: false,
      favStatus: false,
      bounceValue1: new Animated.Value(1.0),
      bounceValue2: new Animated.Value(1.0),
      opaUpVote: new Animated.Value(0.4),
      opaFavSelect: new Animated.Value(0.4)
    };
  },

  // _pressData: ({}: {[key: number]: boolean}),
  //
  // componentWillMount: function() {
  //   this._pressData = {};
  // },

  _upVote: function(rowID) {
    if(this.state.upVoteStatus===true) {
      Animated.timing(
        this.state.opaUpVote,                 // Animate `bounceValue`
        {
          duration: 500,
          toValue: 0.4,                         // Animate to smaller size
        }
      ).start();

      this.setState({
        upVoteStatus: false
      });
    }
    else if (this.state.upVoteStatus===false) {
      Animated.sequence([            // spring to start and twirl after decay finishes
        Animated.timing(
          this.state.bounceValue1,                 // Animate `bounceValue`
          {
            duration: 200,
            toValue: 1.3,                      // Animate to smaller size
          }
        ),
        Animated.parallel([
          Animated.timing(
            this.state.opaUpVote,                 // Animate `bounceValue`
            {
              duration: 200,
              toValue: 1.0,                         // Animate to smaller size
            }
          ),
          Animated.timing(
            this.state.bounceValue1,                 // Animate `bounceValue`
            {
              duration: 200,
              toValue: 1.0,                         // Animate to smaller size
            }
          )
        ]),
      ]).start();                    // start the sequence group

      this.setState({
        upVoteStatus: true
      });
    }
  },

  _favSelect: function(rowID) {
    if(this.state.favStatus===true) {
      Animated.timing(
        this.state.opaFavSelect,                 // Animate `bounceValue`
        {
          duration: 500,
          toValue: 0.4,                         // Animate to smaller size
        }
      ).start();

      this.setState({
        favStatus: false
      });
    }
    else if (this.state.favStatus===false) {
      Animated.sequence([            // spring to start and twirl after decay finishes
        Animated.timing(
          this.state.bounceValue2,                // Animate `bounceValue`
          {
            duration: 200,
            toValue: 1.3,                      // Animate to smaller size
          }
        ),
        Animated.parallel([
          Animated.timing(
            this.state.opaFavSelect,                 // Animate `bounceValue`
            {
              duration: 200,
              toValue: 1.0,                         // Animate to smaller size
            }
          ),
          Animated.timing(
            this.state.bounceValue2,                 // Animate `bounceValue`
            {
              duration: 200,
              toValue: 1.0,                         // Animate to smaller size
            }
          )
        ]),
      ]).start();                    // start the sequence group

      this.setState({
        favStatus: true
      });
    }
  },


  render: function() {
    console.log('Thought View Render');
    return (
      <View style={styles.fullScreen}>
        <NavigationBar
          tintColor={'white'}
          title={{
            title: 'Adarsh\'s Thought',
            tintColor: '#008299'
          }}
          leftButton={
            <LeftButton
              iconName="arrow-back"
              iconColor="#003F4B"
              onPress={() => {this.props.route.thoughtViewCallback(this._activeOption); this.props.navigator.pop();}}
            />
          }
        />
        <ScrollView
          automaticallyAdjustContentInsets={false}
          scrollEventThrottle={200}
          style={styles.scrollView}>
          <View style={{padding: 10}}>
            <PollCardOptionsText data={this.props.route.data} preSelectOption={this.props.route.preSelectOption} currentActiveOption={this.activeOption}/>
          </View>
          <Line style={{backgroundColor: '#B1B1A1'}}/>
          <View style={styles.viewDiscuss}>
            <Text style={styles.txtDiscuss}>
              Discussion
            </Text>
          </View>
          <Line style={{backgroundColor: '#B1B1A1'}}/>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={this._renderRow}
            automaticallyAdjustContentInsets={false}
          />
        </ScrollView>
      </View>
    );
  },

  _renderRow: function(rowData: string, sectionID: number, rowID: number) {
    return (
      <View style={styles.row}>
        <View style={styles.header}>
          <View style={styles.avatar}>
          </View>
          <View style={styles.createdBy}>
            <Text style={styles.txtCreatedBy}>
              Adarsh said
            </Text>
          </View>
          <View style={styles.createdAt}>
            <Text style={styles.txtCreatedAt}>
              17 hours ago
            </Text>
          </View>
        </View>
        <Line style={{backgroundColor: '#DFDFD7', width: deviceWidth - 20}}/>
        <View>
          <View style={styles.viewComment}>
            <Text style={styles.txtComment}>
              We definitely needed to win today. Sucks we couldnt. heh. maybe next time!
            </Text>
          </View>
        </View>
        <Line style={{backgroundColor: '#DFDFD7', width: deviceWidth - 20}}/>
        <View style={styles.footer}>
          <View style={styles.upVoteFooter}>
            <Animated.View
              style={[styles.upVoteSelect,
                {transform: [                        // `transform` is an ordered array
                  {scale: this.state.bounceValue1},  // Map `bounceValue` to `scale`
                ]},
                {opacity: this.state.opaUpVote}
              ]}>
              <TouchableHighlight
                activeOpacity={1.0}
                underlayColor={'transparent'}
                onPress={() => this._upVote(rowID)}>
                <MaterialIcon name="keyboard-arrow-up" style={styles.upArrowIcon} />
              </TouchableHighlight>
            </Animated.View>
            <Text style={styles.txtUpVoteCount}>
              12
            </Text>
          </View>
          <Animated.View
            style={[styles.favSelect,
              {transform: [                        // `transform` is an ordered array
                {scale: this.state.bounceValue2},  // Map `bounceValue` to `scale`
              ]},
              {opacity: this.state.opaFavSelect}
            ]}>
            <TouchableHighlight
              activeOpacity={1.0}
              underlayColor={'transparent'}
              onPress={() => this._favSelect(rowID)}>
              <MaterialIcon name="favorite" style={styles.favIcon} />
            </TouchableHighlight>
          </Animated.View>
        </View>
        <Line style={{backgroundColor: '#B1B1A1'}}/>
      </View>
    );
  },

  activeOption(option1, option2, option3, option4) {
    if(option1) {
      this._activeOption = 1;
    }
    else if(option2) {
      this._activeOption = 2;
    }
    else if(option3) {
      this._activeOption = 3;
    }
    else if(option4) {
      this._activeOption = 4;
    }
    else {
      this._activeOption = 0;
    }
  }
});

let styles = StyleSheet.create({
  fullScreen: {
    flex: 1,
    backgroundColor: '#F5F8F9'
  },
  scrollView: {
    height: deviceHeight,
    marginTop: 3,
    backgroundColor: 'white'
  },
  viewDiscuss: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  txtDiscuss: {
    color: '#008299',
    fontSize: 13,
    fontWeight: 'bold'
  },
  row: {
    paddingLeft: 10,
    paddingRight: 10
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingBottom: 10
  },
  avatar: {
    backgroundColor: '#D8D8D8',
    borderWidth: 1,
    borderColor: '#979797',
    height: 20,
    width: 20,
    borderRadius: 10,
    marginRight: 10,
  },
  createdBy: {
    flex: 1,
    flexDirection: 'column',
    alignSelf: 'center'
  },
  txtCreatedBy: {
    fontSize: 14,
    color: '#474641'
  },
  createdAt: {
    flex: 0.4,
    alignSelf: 'center'
  },
  txtCreatedAt: {
    fontSize: 12,
    color: '#BFBFB3',
    textAlign: 'right'
  },
  viewComment: {
    paddingTop: 10,
    paddingBottom: 10
  },
  txtComment: {
    color: '#474641'
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  upVoteFooter: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  upVoteSelect: {
    alignSelf: 'center'
  },
  upArrowIcon: {
    fontSize: 35,
    color: '#474641'
  },
  txtUpVoteCount: {
    fontSize: 11,
    color: '#BFBFB3',
    fontWeight: 'bold'
  },
  favSelect: {
    alignSelf: 'center',
    paddingRight: 3
  },
  favIcon: {
    fontSize: 22,
    color: '#474641'
  }
});

module.exports = ThoughtView;
