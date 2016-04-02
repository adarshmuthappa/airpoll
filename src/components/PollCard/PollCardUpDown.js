'use strict';

var React = require('react-native');
var {Icon} = require('react-native-icons');

var {
  AppRegistry,
  PixelRatio,
  StyleSheet,
  Text,
  View,
  Image,
  TabBarIOS,
  NavigatorIOS,
  ListView,
  TouchableHighlight,
  Dimensions,
  LayoutAnimation,
  Animated
} = React;

var deviceWidth = Dimensions.get('window').width;

var PollCardUpDown = React.createClass({

  getInitialState() {
    return {
        activeOption1: false,
        activeOption2: false,
        activeOption3: false,
        bounceValue1: new Animated.Value(1.0),
        bounceValue2: new Animated.Value(1.0),
        bounceValue3: new Animated.Value(1.0),
        opa1: new Animated.Value(1.0),
        opa2: new Animated.Value(1.0),
        opa3: new Animated.Value(1.0),
        opa4: new Animated.Value(1.0),
        data: {
          pollObject: {
            question: "Where should I go out to eat?",
            tag1: "food",
            tag2: "HANGRY",
            tag3: "NOW",
            option1: 'Cupa Joes',
            pollTypeActive: 'options'
          },
        }
    };
  },
  
  _upVote: function() {
    if(this.state.activeOption1===true) {
      Animated.parallel([
        Animated.timing(
          this.state.opa1,                 // Animate `bounceValue`
          {
            duration: 300,
            toValue: 1.0,                         // Animate to smaller size
          }
        ),
        Animated.timing(
          this.state.opa2,                 // Animate `bounceValue`
          {
            duration: 300,
            toValue: 1.0,                         // Animate to smaller size
          }
        ),
        Animated.timing(
          this.state.opa3,                 // Animate `bounceValue`
          {
            duration: 300,
            toValue: 1.0,                         // Animate to smaller size
          }
        ),
      ]).start();
      
      this.state.bounceValue1.setValue(1.0);
      
      this.setState({
        activeOption1: false,
        activeOption2: false,
        activeOption3: false,
      });
    }
    else if (this.state.activeOption1===false) {
      Animated.sequence([            // spring to start and twirl after decay finishes
        Animated.parallel([
          Animated.timing(
            this.state.bounceValue1,                 // Animate `bounceValue`
            {
              duration: 200,
              toValue: 1.1,                         // Animate to smaller size
            }
          ),
          Animated.timing(
            this.state.opa1,                 // Animate `bounceValue`
            {
              duration: 200,
              toValue: 1.0,                         // Animate to smaller size
            }
          ),
          Animated.timing(
            this.state.opa2,                 // Animate `bounceValue`
            {
              duration: 200,
              toValue: 0.4,                         // Animate to smaller size
            }
          ),
          Animated.timing(
            this.state.opa3,                 // Animate `bounceValue`
            {
              duration: 200,
              toValue: 0.4,                         // Animate to smaller size
            }
          ),
        ]),
        Animated.timing(
          this.state.bounceValue1,                 // Animate `bounceValue`
          {
            duration: 200,
            toValue: 1.0,                         // Animate to smaller size
          }
        ),
      ]).start();                    // start the sequence group

    //  Animated.sequence([            // spring to start and twirl after decay finishes
    //     Animated.spring(
    //       this.state.bounceValue,                 // Animate `bounceValue`
    //       {
    //         friction: 10,
    //         tension: 100,
    //         toValue: 1.2,
    //       }
    //     ),
    //     Animated.spring(
    //       this.state.bounceValue,                 // Animate `bounceValue`
    //       {
    //         friction: 10,
    //         tension: 100,
    //         toValue: 1.0,
    //       }
    //     ),
    // ]).start();                    // start the sequence group

      this.setState({
        activeOption1: true,
        activeOption2: false,
        activeOption3: false,
      });
    }
  },

  _mehVote: function() {
    if(this.state.activeOption2===true) {
      Animated.parallel([
        Animated.timing(
          this.state.opa1,                 // Animate `bounceValue`
          {
            duration: 300,
            toValue: 1.0,                         // Animate to smaller size
          }
        ),
        Animated.timing(
          this.state.opa2,                 // Animate `bounceValue`
          {
            duration: 300,
            toValue: 1.0,                         // Animate to smaller size
          }
        ),
        Animated.timing(
          this.state.opa3,                 // Animate `bounceValue`
          {
            duration: 300,
            toValue: 1.0,                         // Animate to smaller size
          }
        ),
      ]).start();

      this.state.bounceValue2.setValue(1.0);

      this.setState({
        activeOption1: false,
        activeOption2: false,
        activeOption3: false,
      });
    }
    else if (this.state.activeOption2===false) {
      Animated.sequence([            // spring to start and twirl after decay finishes
        Animated.parallel([
          Animated.timing(
            this.state.bounceValue2,                 // Animate `bounceValue`
            {
              duration: 200,
              toValue: 1.1,                         // Animate to smaller size
            },
          ),
          Animated.timing(
            this.state.opa1,                 // Animate `bounceValue`
            {
              duration: 200,
              toValue: 0.4,                         // Animate to smaller size
            }
          ),
          Animated.timing(
            this.state.opa2,                 // Animate `bounceValue`
            {
              duration: 200,
              toValue: 1.0,                         // Animate to smaller size
            }
          ),
          Animated.timing(
            this.state.opa3,                 // Animate `bounceValue`
            {
              duration: 200,
              toValue: 0.4,                         // Animate to smaller size
            }
          ),
        ]),
        Animated.timing(
          this.state.bounceValue2,                 // Animate `bounceValue`
          {
            duration: 200,
            toValue: 1.0,                         // Animate to smaller size
          }
        ),
      ]).start();

      this.setState({
        activeOption1: false,
        activeOption2: true,
        activeOption3: false,
      });
    }
  },
  
  _downVote: function() {
    if(this.state.activeOption3===true){
      Animated.parallel([
        Animated.timing(
          this.state.opa1,                 // Animate `bounceValue`
          {
            duration: 300,
            toValue: 1.0,                         // Animate to smaller size
          }
        ),
        Animated.timing(
          this.state.opa2,                 // Animate `bounceValue`
          {
            duration: 300,
            toValue: 1.0,                         // Animate to smaller size
          }
        ),
        Animated.timing(
          this.state.opa3,                 // Animate `bounceValue`
          {
            duration: 300,
            toValue: 1.0,                         // Animate to smaller size
          }
        ),
      ]).start();

      this.state.bounceValue3.setValue(1.0);

      this.setState({
        activeOption1: false,
        activeOption2: false,
        activeOption3: false,
      });
    }
    else if (this.state.activeOption3===false) {
      Animated.sequence([            // spring to start and twirl after decay finishes
        Animated.parallel([
          Animated.timing(
            this.state.bounceValue3,                 // Animate `bounceValue`
            {
              duration: 200,
              toValue: 1.1,                         // Animate to smaller size
            }
          ),
          Animated.timing(
            this.state.opa1,                 // Animate `bounceValue`
            {
              duration: 200,
              toValue: 0.4,                         // Animate to smaller size
            }
          ),
          Animated.timing(
            this.state.opa2,                 // Animate `bounceValue`
            {
              duration: 200,
              toValue: 0.4,                         // Animate to smaller size
            }
          ),
          Animated.timing(
            this.state.opa3,                 // Animate `bounceValue`
            {
              duration: 200,
              toValue: 1.0,                         // Animate to smaller size
            }
          ),
        ]),
        Animated.timing(
          this.state.bounceValue3,                 // Animate `bounceValue`
          {
            duration: 200,
            toValue: 1.0,                         // Animate to smaller size
          }
        ),
      ]).start();

      this.setState({
        activeOption1: false,
        activeOption2: false,
        activeOption3: true,
      });
    }
  },
  
  render: function () {
    if(this.state.data.pollObject.tag1)
      var tag1 = this.state.data.pollObject.tag1.length > 0;
    if(this.state.data.pollObject.tag2)
      var tag2 = this.state.data.pollObject.tag2.length > 0;
    if(this.state.data.pollObject.tag3)
      var tag3 = this.state.data.pollObject.tag3.length > 0;
    var tag123 = tag1>0 || tag2>0 || tag3>0;

    return (
      <View style={styles.feedCard}>
        
        <View style={styles.contentExceptImages}>
      
          <TouchableHighlight activeOpacity={0.5} underlayColor={"transparent"} onPress={this.goToTabsLayout}>
            <Text style={styles.pollQuestion}>{this.state.data.pollObject.question}</Text>
          </TouchableHighlight>
      
          {tag123 ?
          <View style={styles.pollTags}>
            {tag1 ?
              <TouchableHighlight activeOpacity={0.5} underlayColor={"transparent"} onPress={this.goToTabsLayout}>
                <Text style={styles.tag1}>{this.state.data.pollObject.tag1}</Text>
              </TouchableHighlight>
            : null}
            {tag2 ?
              <TouchableHighlight activeOpacity={0.5} underlayColor={"transparent"} onPress={this.goToTabsLayout}>
                <Text style={styles.tag2}>{this.state.data.pollObject.tag2}</Text>
              </TouchableHighlight>
            : null}
            {tag3 ?
              <TouchableHighlight activeOpacity={0.5} underlayColor={"transparent"} onPress={this.goToTabsLayout}>
                <Text style={styles.tag3}>{this.state.data.pollObject.tag3}</Text>
              </TouchableHighlight>
            : null}
          </View>
          : null}
        
          <TouchableHighlight
            activeOpacity={0.5}
            underlayColor={"transparent"}
            onPress={this._openFullScreenDisplay}
            style={styles.upDownBox}>
            <Text
              numberOfLines={8}
              style={styles.upDownBoxContent}>
              {this.state.data.pollObject.option1}
            </Text>
          </TouchableHighlight>

          <View style={styles.buttonRow}>
            <Animated.View
              style={[styles.upVote,
                {transform: [                        // `transform` is an ordered array
                  {scale: this.state.bounceValue1},  // Map `bounceValue` to `scale`
                ]},
                {opacity: this.state.opa1}
              ]}>
              <TouchableHighlight
                activeOpacity={0.8}
                underlayColor="transparent"
                onPress={this._upVote}>
                <Icon
                  name='fontawesome|smile-o'
                  size={30}
                  color='#30b0cb'
                  style={styles.smileO}
                  />
              </TouchableHighlight>
            </Animated.View>

            <Animated.View
              style={[styles.mehVote,
                {transform: [                        // `transform` is an ordered array
                  {scale: this.state.bounceValue2},  // Map `bounceValue` to `scale`
                ]},
                {opacity: this.state.opa2}
              ]}>
              <TouchableHighlight
                activeOpacity={0.8}
                underlayColor="transparent"
                onPress={this._mehVote}>
                <Icon
                name='fontawesome|meh-o'
                  size={30}
                  color='#30b0cb'
                style={styles.mehO}
                  />
              </TouchableHighlight>
            </Animated.View>

            <Animated.View
              style={[styles.downVote,
                {transform: [                        // `transform` is an ordered array
                  {scale: this.state.bounceValue3},  // Map `bounceValue` to `scale`
                ]},
                {opacity: this.state.opa3}
              ]}>
              <TouchableHighlight
                activeOpacity={0.8}
                underlayColor="transparent"
                onPress={this._downVote}>
                <Icon
                  name='fontawesome|frown-o'
                  size={30}
                  color='#30b0cb'
                  style={styles.frownO}
                  />
              </TouchableHighlight>
            </Animated.View>

          </View>

        </View>
        
      </View>
    );
  }
});

var styles = StyleSheet.create({
  feedCard: {
    marginVertical: 1/PixelRatio.get(),
    borderRadius: 3,
    overflow: 'hidden',
    backgroundColor: 'white',
    // backgroundColor: 'rgb(85,172,238)',
    // opacity: 0.4,
    width: deviceWidth-20,
  },
  contentExceptImages: {
    paddingTop: 5,
    paddingBottom: 5,
  },
  // pollTypeIndicator: {
  //   position: 'absolute',
  //   right: 0,
  //   top: 0,
  //   marginBottom: 5
  // },
  // pollTypeOptions: {
  //   padding: 4,
  //   color: 'white',
  //   backgroundColor: '#2196F3',
  //   textAlign: 'center',
  //   // fontFamily: 'Roboto-Italic',
  // },
  // pollTypeLike: {
  //   padding: 4,
  //   color: 'white',
  //   backgroundColor: '#E91E63',
  //   textAlign: 'center',
  //   // fontFamily: 'Roboto-Italic',
  // },
  // pollTypeRating: {
  //   padding: 4,
  //   color: 'white',
  //   backgroundColor: 'black',
  //   textAlign: 'center',
  //   // fontFamily: 'Roboto-Italic',
  // },
  // pollTypeRank: {
  //   padding: 4,
  //   color: 'white',
  //   backgroundColor: '#E9E9E9',
  //   textAlign: 'center',
  //   // fontFamily: 'Roboto-Italic',
  // },  
  pollQuestion: {
    marginTop: 5,
    marginBottom: 10,
    // fontFamily: 'OpenSans-Bold',
    fontSize: 20,
    textAlign: 'center',
    color: 'gray'
  },
  pollTags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center'
  },
  tag1: {
    // fontFamily: 'Roboto-Italic',
    color: 'gray',
    fontSize: 12,
    borderRadius: 5,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 5,
    paddingRight: 3,
    paddingBottom: 3,
    paddingTop: 3,
    marginRight: 2,
  },
  tag2: {
    // fontFamily: 'Roboto-Italic',
    color: '#76e7fe',
    fontSize: 12,
    borderRadius: 5,
    borderColor: '#76e7fe',
    borderWidth: 1,
    paddingLeft: 5,
    paddingRight: 3,
    paddingBottom: 3,
    paddingTop: 3,
    marginLeft: 2,
    marginRight: 2,
  },
  tag3: {
    // fontFamily: 'Roboto-Italic',
    color: '#76e7fe',
    fontSize: 12,
    borderRadius: 5,
    borderColor: '#76e7fe',
    borderWidth: 1,
    paddingLeft: 5,
    paddingRight: 3,
    paddingBottom: 3,
    paddingTop: 3,
    marginLeft: 2,
  },
  upDownBox: {
    height: 240,
    marginTop: 30,
    marginBottom: 10,
    marginRight: 10,
    marginLeft: 10,
    backgroundColor: 'white',
    borderColor: '#30b0cb',
    borderWidth: 2,
    borderRadius: 5,
    alignItems:'center',
    justifyContent:'center',
    padding: 10,
  },
  upDownBoxContent: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#30b0cb',
    backgroundColor: 'transparent',
  },
  buttonRow: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 15,
    marginRight: 15,
  },
  upVote: {
    flex: 0.3,
    alignItems:'flex-start',
    justifyContent:'flex-start',
  },
  mehVote: {
    flex: 0.4,
    alignItems:'center',
    justifyContent:'center',
  },
  downVote: {
    flex: 0.3,
    alignItems:'flex-end',
    justifyContent:'flex-end',
  },
  smileO: {
    width: 30,
    height: 30,
  },
  mehO: {
    width: 30,
    height: 30,
  },
  frownO: {
    width: 30,
    height: 30,
  },
});

module.exports = PollCardUpDown;