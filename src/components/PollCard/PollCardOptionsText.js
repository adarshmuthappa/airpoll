var React = require('react-native');

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

var PollCardOptionsText = React.createClass({
  getInitialState() {
    console.log(this.props.preSelectOption);
    let selectOneAtleast = false;
    if(this.props.preSelectOption === 1 ||
      this.props.preSelectOption === 2 ||
      this.props.preSelectOption === 3 ||
      this.props.preSelectOption === 4) {
        selectOneAtleast = true;
      }
    return {
      activeOption1: this.props.preSelectOption === 1 ? true :false,
      activeOption2: this.props.preSelectOption === 2 ? true :false,
      activeOption3: this.props.preSelectOption === 3 ? true :false,
      activeOption4: this.props.preSelectOption === 4 ? true :false,
      bounceValue: new Animated.Value(1.0),
      bounceValue2: new Animated.Value(1.0),
      bounceValue3: new Animated.Value(1.0),
      bounceValue4: new Animated.Value(1.0),
      opa1: selectOneAtleast ? this.props.preSelectOption !== 1 ? new Animated.Value(0.4) : new Animated.Value(1.0) : new Animated.Value(1.0),
      opa2: selectOneAtleast ? this.props.preSelectOption !== 2 ? new Animated.Value(0.4) : new Animated.Value(1.0) : new Animated.Value(1.0),
      opa3: selectOneAtleast ? this.props.preSelectOption !== 3 ? new Animated.Value(0.4) : new Animated.Value(1.0) : new Animated.Value(1.0),
      opa4: selectOneAtleast ? this.props.preSelectOption !== 4 ? new Animated.Value(0.4) : new Animated.Value(1.0) : new Animated.Value(1.0),
    };
  },

  componentWillReceiveProps() {
  },

  _onPressOption1: function() {
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
        Animated.timing(
          this.state.opa4,                 // Animate `bounceValue`
          {
            duration: 300,
            toValue: 1.0,                         // Animate to smaller size
          }
        ),
      ]).start();

      this.state.bounceValue.setValue(1.0);

      this.setState({
        activeOption1: false,
        activeOption2: false,
        activeOption3: false,
        activeOption4: false,
      });

      this.props.currentActiveOption(false, false, false, false, this.props.rowNumber);
    }
    else if (this.state.activeOption1===false) {
      // this.state.bounceValue.setValue(1.0);     // Start normal
      Animated.sequence([            // spring to start and twirl after decay finishes
        Animated.timing(
          this.state.bounceValue,                 // Animate `bounceValue`
          {
            duration: 200,
            toValue: 1.1,                         // Animate to smaller size
          }
        ),
        Animated.parallel([
          Animated.timing(
            this.state.bounceValue,                 // Animate `bounceValue`
            {
              duration: 200,
              toValue: 1.0,                         // Animate to smaller size
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
          Animated.timing(
            this.state.opa4,                 // Animate `bounceValue`
            {
              duration: 200,
              toValue: 0.4,                         // Animate to smaller size
            }
          ),
        ]),
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
        activeOption4: false,
      });

      this.props.currentActiveOption(true, false, false, false, this.props.rowNumber);
    }
  },

  _onPressOption2: function() {
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
        Animated.timing(
          this.state.opa4,                 // Animate `bounceValue`
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
        activeOption4: false,
      });

      this.props.currentActiveOption(false, false, false, false, this.props.rowNumber);
    }
    else if (this.state.activeOption2===false) {
      Animated.sequence([            // spring to start and twirl after decay finishes
        Animated.timing(
          this.state.bounceValue2,                 // Animate `bounceValue`
          {
            duration: 200,
            toValue: 1.1,                         // Animate to smaller size
          }
        ),
        Animated.parallel([
          Animated.timing(
            this.state.bounceValue2,                 // Animate `bounceValue`
            {
              duration: 200,
              toValue: 1.0,                         // Animate to smaller size
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
          Animated.timing(
            this.state.opa4,                 // Animate `bounceValue`
            {
              duration: 200,
              toValue: 0.4,                         // Animate to smaller size
            }
          ),
        ]),
      ]).start();

      this.setState({
        activeOption1: false,
        activeOption2: true,
        activeOption3: false,
        activeOption4: false,
      });

      this.props.currentActiveOption(false, true, false, false, this.props.rowNumber);
    }
  },

  _onPressOption3: function() {
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
        Animated.timing(
          this.state.opa4,                 // Animate `bounceValue`
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
        activeOption4: false,
      });

      this.props.currentActiveOption(false, false, false, false, this.props.rowNumber);
    }
    else if (this.state.activeOption3===false) {
      Animated.sequence([            // spring to start and twirl after decay finishes
        Animated.timing(
          this.state.bounceValue3,                 // Animate `bounceValue`
          {
            duration: 200,
            toValue: 1.1,                         // Animate to smaller size
          }
        ),
        Animated.parallel([
          Animated.timing(
            this.state.bounceValue3,                 // Animate `bounceValue`
            {
              duration: 200,
              toValue: 1.0,                         // Animate to smaller size
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
          Animated.timing(
            this.state.opa4,                 // Animate `bounceValue`
            {
              duration: 200,
              toValue: 0.4,                         // Animate to smaller size
            }
          ),
        ]),
      ]).start();

      this.setState({
        activeOption1: false,
        activeOption2: false,
        activeOption3: true,
        activeOption4: false,
      });

      this.props.currentActiveOption(false, false, true, false, this.props.rowNumber);
    }
  },

  _onPressOption4: function() {
    if(this.state.activeOption4===true) {
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
        Animated.timing(
          this.state.opa4,                 // Animate `bounceValue`
          {
            duration: 300,
            toValue: 1.0,                         // Animate to smaller size
          }
        ),
      ]).start();

      this.state.bounceValue4.setValue(1.0);

      this.setState({
        activeOption1: false,
        activeOption2: false,
        activeOption3: false,
        activeOption4: false,
      });

      this.props.currentActiveOption(false, false, false, false, this.props.rowNumber);
    }
    else if (this.state.activeOption4===false) {
      Animated.sequence([            // spring to start and twirl after decay finishes
        Animated.timing(
          this.state.bounceValue4,                 // Animate `bounceValue`
          {
            duration: 200,
            toValue: 1.1,                         // Animate to smaller size
          }
        ),
        Animated.parallel([
          Animated.timing(
            this.state.bounceValue4,                 // Animate `bounceValue`
            {
              duration: 200,
              toValue: 1.0,                         // Animate to smaller size
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
              toValue: 0.4,                         // Animate to smaller size
            }
          ),
          Animated.timing(
            this.state.opa4,                 // Animate `bounceValue`
            {
              duration: 200,
              toValue: 1.0,                         // Animate to smaller size
            }
          ),
        ]),
      ]).start();

      this.setState({
        activeOption1: false,
        activeOption2: false,
        activeOption3: false,
        activeOption4: true,
      });

      this.props.currentActiveOption(false, false, false, true, this.props.rowNumber);
    }
  },
  // componentDidMount() {
  //   this.state.bounceValue.setValue(1.5);     // Start large
  //   Animated.spring(                          // Base: spring, decay, timing
  //     this.state.bounceValue,                 // Animate `bounceValue`
  //     {
  //       toValue: 0.8,                         // Animate to smaller size
  //       friction: 1,                          // Bouncier spring
  //     }
  //   ).start();                                // Start the animation
  // },

  getCurrentActiveOption() {
    if(this.state.activeOption1===true) {
      return 1;
    }
    if(this.state.activeOption2===true) {
      return 2;
    }
    if(this.state.activeOption3===true) {
      return 3;
    }
    if(this.state.activeOption4===true) {
      return 4;
    }
    else {
      return 0;
    }
  },

  render: function () {
    var tag1 = this.props.data.tags[0] ? 1 : 0;
    var tag2 = this.props.data.tags[1] ? 1 : 0;
    var tag3 = this.props.data.tags[2] ? 1 : 0;
    var tag123 = tag1>0 || tag2>0 || tag3>0;

    if(this.props.data.type==='optionsText') {
      if(this.props.data.optionsText[0])
        var option1 = this.props.data.optionsText[0].length > 0;
      if(this.props.data.optionsText[1])
        var option2 = this.props.data.optionsText[1].length > 0;
      if(this.props.data.optionsText[2])
        var option3 = this.props.data.optionsText[2].length > 0;
      if(this.props.data.optionsText[3])
       var option4 = this.props.data.optionsText[3].length > 0;
    }

    var option12 = option1>0 || option2>0;
    var option34 = option3>0 || option4>0;
    var option5 = false;

    return (
      <View style={styles.feedCard}>

        <View style={styles.contentExceptImages}>

          <View style={styles.pollQuestion}>
            <Text style={styles.txtPollQuestion}>{this.props.data.question}</Text>
          </View>

          {tag123 ?
          <View style={styles.pollTags}>
            {tag1 ?
              <Text style={styles.txtContentTags}>
                {this.props.data.tags[0]}
              </Text>
            : null}
            {tag2 ?
              <View style={{flexDirection: 'row'}}>
                <View style={styles.dot}/>
                <Text style={styles.txtContentTags}>
                  {this.props.data.tags[1]}
                </Text>
              </View>
            : null}
            {tag3 ?
              <View style={{flexDirection: 'row'}}>
                <View style={styles.dot}/>
                <Text style={styles.txtContentTags}>
                  {this.props.data.tags[2]}
                </Text>
              </View>
            : null}
          </View>
          : null}

          {option12 ?
            <View style={styles.pollOptionsFirstRow}>
              {option1 ?
                <Animated.View
                  style={[styles.animatedView,
                    {transform: [                        // `transform` is an ordered array
                      {scale: this.state.bounceValue},  // Map `bounceValue` to `scale`
                    ]},
                    {opacity: this.state.opa1}
                  ]}>
                  <TouchableHighlight
                    activeOpacity={0.5}
                    underlayColor={"transparent"}
                    onPress={this._onPressOption1}
                    style={[
                      styles.inactiveOption,
                      this.state.activeOption1 && styles.activeOption]}
                    >
                    <Text
                      numberOfLines={4}
                      style={[
                      styles.alignTextOptionInactive,
                      this.state.activeOption1 && styles.alignTextOptionActive]}>
                      {this.props.data.optionsText[0]}
                    </Text>
                  </TouchableHighlight>
                </Animated.View>
              : null}
              {option2 ?
                <Animated.View
                  style={[styles.animatedView,
                    {transform: [                        // `transform` is an ordered array
                      {scale: this.state.bounceValue2},  // Map `bounceValue` to `scale`
                    ]},
                    {opacity: this.state.opa2}
                  ]}>
                <TouchableHighlight
                  activeOpacity={0.5}
                  underlayColor={"transparent"}
                  onPress={this._onPressOption2}
                  style={[
                      styles.inactiveOption,
                      this.state.activeOption2 && styles.activeOption]}>
                  <Text
                    numberOfLines={4}
                    style={[
                      styles.alignTextOptionInactive,
                      this.state.activeOption2 && styles.alignTextOptionActive]}>
                    {this.props.data.optionsText[1]}
                  </Text>
                </TouchableHighlight>
              </Animated.View>
              : null}
            </View>
            : null}
          {option34 ?
            <View style={styles.pollOptionsSecondRow}>
              {option3 ?
                <Animated.View
                  style={[styles.animatedView,
                    {transform: [                        // `transform` is an ordered array
                      {scale: this.state.bounceValue3},  // Map `bounceValue` to `scale`
                    ]},
                    {opacity: this.state.opa3}
                  ]}>
                  <TouchableHighlight
                    activeOpacity={0.5}
                    underlayColor={"transparent"}
                    onPress={this._onPressOption3}
                    style={[
                      styles.inactiveOption,
                      this.state.activeOption3 && styles.activeOption]}>
                    <Text
                      numberOfLines={4}
                      style={[
                      styles.alignTextOptionInactive,
                      this.state.activeOption3 && styles.alignTextOptionActive]}
                    >
                      {this.props.data.optionsText[2]}
                    </Text>
                  </TouchableHighlight>
                </Animated.View>
              : null}
              {option4 ?
                <Animated.View
                  style={[styles.animatedView,
                    {transform: [                        // `transform` is an ordered array
                      {scale: this.state.bounceValue4},  // Map `bounceValue` to `scale`
                    ]},
                    {opacity: this.state.opa4}
                  ]}>
                  <TouchableHighlight
                    activeOpacity={0.5}
                    underlayColor={"transparent"}
                    onPress={this._onPressOption4}
                    style={[
                      styles.inactiveOption,
                      this.state.activeOption4 && styles.activeOption]}>
                    <Text
                      numberOfLines={4}
                      style={[
                      styles.alignTextOptionInactive,
                      this.state.activeOption4 && styles.alignTextOptionActive]}>
                      {this.props.data.optionsText[3]}
                    </Text>
                  </TouchableHighlight>
                </Animated.View>
              : null}
            </View>
          : null}

        </View>

      </View>
    );
  }
});

var styles = StyleSheet.create({
  feedCard: {
    marginVertical: 1/PixelRatio.get(),
    overflow: 'hidden',
    backgroundColor: 'white'
  },
  contentExceptImages: {
    paddingRight: 10,
    paddingLeft: 10,
    // paddingTop: 5,
    paddingBottom: 5,
    justifyContent: 'center'
  },
  pollQuestion: {
    // paddingTop: 20,
    paddingBottom: 5,
    // paddingLeft: 10,
    // paddingRight: 10,
    // alignSelf: 'center',
  },
  txtPollQuestion: {
    fontFamily: 'OpenSans-Semibold',
    color: '#474641',
    fontSize: 16,
    // textAlign: 'center'
  },
  pollTags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingLeft: 2,
    paddingRight: 2,
    paddingBottom: 15
  },
  dot: {
    height: 6,
    width: 6,
    borderRadius: 3,
    alignSelf: 'center',
    backgroundColor: '#008299',
    marginLeft: 5,
    marginRight: 5
  },
  txtContentTags: {
    color: '#008299',
    fontSize: 11,
    fontWeight: 'bold'
  },
  pollOptionsFirstRow: {
    flexDirection: 'row',
    // flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5
  },
  pollOptionsSecondRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  inactiveOption: {
    backgroundColor: 'white',
    borderColor: '#003F4B',
    borderWidth: 1,
    borderRadius: 5,
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    padding: 10,
    marginBottom: 8,
    marginRight: 4,
    marginLeft: 4,
    width: deviceWidth/2 - 40,
    height: deviceWidth/2 - 80,
    // shadowOpacity: 0.8,
    // shadowRadius: 2,
    // shadowOffset: {
    //   height: 1,
    //   width: 0
    // }
    // alignSelf: 'flex-start',
  },
  activeOption: {
    backgroundColor: 'white',
    borderColor: '#003F4B',
    borderWidth: 3,
    borderRadius: 5,
    flex: 1,
    alignItems:'center',
    justifyContent:'center',
    padding: 10,
    marginBottom: 8,
    marginRight: 4,
    marginLeft: 4,
    width: deviceWidth/2 - 40,
    height: deviceWidth/2 - 80,
  },
  animatedView: {
    backgroundColor: 'transparent',
  },
  alignTextOptionInactive: {
    textAlign: 'center',
    fontSize: 16,
    color: '#003F4B',
    backgroundColor: 'transparent'
  },
  alignTextOptionActive: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#003F4B',
    backgroundColor: 'transparent'
  },
  productImage: {
    width: 300,
    height: 200
  },
  userPicture: {
    borderRadius: 20,
    height: 40,
    width: 40
  },
  swiper: {
    marginBottom: 50
  },
  wrapper: {
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  image: {
    flex: 1,
    width: deviceWidth,
    height: 240
  },
  container: {
    width: 375,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
});

module.exports = PollCardOptionsText;
