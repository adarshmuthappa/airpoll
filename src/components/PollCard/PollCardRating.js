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

var PollCardRating = React.createClass({

  getInitialState() {
    return {
        activeOption1: false,
        activeOption2: false,
        activeOption3: false,
        activeOption4: false,
        activeOption5: false,
        activeOption6: false,
        activeOption7: false,
        activeOption8: false,
        activeOption9: false,
        bounceValue1: new Animated.Value(1.0),
        bounceValue2: new Animated.Value(1.0),
        bounceValue3: new Animated.Value(1.0),
        bounceValue4: new Animated.Value(1.0),
        bounceValue5: new Animated.Value(1.0),
        bounceValue6: new Animated.Value(1.0),
        bounceValue7: new Animated.Value(1.0),
        bounceValue8: new Animated.Value(1.0),
        bounceValue9: new Animated.Value(1.0),
        opa1: new Animated.Value(1.0),
        opa2: new Animated.Value(1.0),
        opa3: new Animated.Value(1.0),
        opa4: new Animated.Value(1.0),
        opa5: new Animated.Value(1.0),
        opa6: new Animated.Value(1.0),
        opa7: new Animated.Value(1.0),
        opa8: new Animated.Value(1.0),
        opa9: new Animated.Value(1.0),
        data: {
          pollObject: {
            question: "Been there? Rate it please!",
            option1: 'Cupa Joes',
            pollTypeActive: 'options'
          },
        }
    };
  },
  
  _onPress1: function() {
    if(this.state.activeOption1===true) {
      Animated.sequence([            // spring to start and twirl after decay finishes
        Animated.timing(
          this.state.bounceValue1,                 // Animate `bounceValue`
          {
            duration: 200,
            toValue: 1.0,                         // Animate to smaller size
          }
        ),
        Animated.parallel([
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
              toValue: 1.0,                         // Animate to smaller size
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
              toValue: 1.0,                         // Animate to smaller size
            }
          ),
          Animated.timing(
            this.state.opa5,                 // Animate `bounceValue`
            {
              duration: 200,
              toValue: 1.0,                         // Animate to smaller size
            }
          ),
          Animated.timing(
            this.state.opa6,                 // Animate `bounceValue`
            {
              duration: 200,
              toValue: 1.0,                         // Animate to smaller size
            }
          ),
          Animated.timing(
            this.state.opa7,                 // Animate `bounceValue`
            {
              duration: 200,
              toValue: 1.0,                         // Animate to smaller size
            }
          ),
          Animated.timing(
            this.state.opa8,                 // Animate `bounceValue`
            {
              duration: 200,
              toValue: 1.0,                         // Animate to smaller size
            }
          ),
          Animated.timing(
            this.state.opa9,                 // Animate `bounceValue`
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
        activeOption4: false,
        activeOption5: false,
        activeOption6: false,
        activeOption7: false,
        activeOption8: false,
        activeOption9: false,
      });
    }
    else if (this.state.activeOption1===false) {
      if(this.state.bounceValue2._value!==1)
        this.state.bounceValue2.setValue(1.0);
      if(this.state.bounceValue3._value!==1)
        this.state.bounceValue3.setValue(1.0);
      if(this.state.bounceValue4._value!==1)
        this.state.bounceValue4.setValue(1.0);
      if(this.state.bounceValue5._value!==1)
        this.state.bounceValue5.setValue(1.0);
      if(this.state.bounceValue6._value!==1)
        this.state.bounceValue6.setValue(1.0);
      if(this.state.bounceValue7._value!==1)
        this.state.bounceValue7.setValue(1.0);
      if(this.state.bounceValue8._value!==1)
        this.state.bounceValue8.setValue(1.0);
      if(this.state.bounceValue9._value!==1)
        this.state.bounceValue9.setValue(1.0);

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
        ]),
        Animated.parallel([
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
          Animated.timing(
            this.state.opa5,                 // Animate `bounceValue`
            {
              duration: 200,
              toValue: 0.4,                         // Animate to smaller size
            }
          ),
          Animated.timing(
            this.state.opa6,                 // Animate `bounceValue`
            {
              duration: 200,
              toValue: 0.4,                         // Animate to smaller size
            }
          ),
          Animated.timing(
            this.state.opa7,                 // Animate `bounceValue`
            {
              duration: 200,
              toValue: 0.4,                         // Animate to smaller size
            }
          ),
          Animated.timing(
            this.state.opa8,                 // Animate `bounceValue`
            {
              duration: 200,
              toValue: 0.4,                         // Animate to smaller size
            }
          ),
          Animated.timing(
            this.state.opa9,                 // Animate `bounceValue`
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
        activeOption5: false,
        activeOption6: false,
        activeOption7: false,
        activeOption8: false,
        activeOption9: false,
      });
    }
  },

  _onPress2: function() {
    if(this.state.activeOption2===true) {
      Animated.sequence([            // spring to start and twirl after decay finishes
        Animated.timing(
          this.state.bounceValue2,                 // Animate `bounceValue`
          {
            duration: 200,
            toValue: 1.0,                         // Animate to smaller size
          }
        ),
        Animated.parallel([
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
              toValue: 1.0,                         // Animate to smaller size
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
              toValue: 1.0,                         // Animate to smaller size
            }
          ),
          Animated.timing(
            this.state.opa5,                 // Animate `bounceValue`
            {
              duration: 200,
              toValue: 1.0,                         // Animate to smaller size
            }
          ),
          Animated.timing(
            this.state.opa6,                 // Animate `bounceValue`
            {
              duration: 200,
              toValue: 1.0,                         // Animate to smaller size
            }
          ),
          Animated.timing(
            this.state.opa7,                 // Animate `bounceValue`
            {
              duration: 200,
              toValue: 1.0,                         // Animate to smaller size
            }
          ),
          Animated.timing(
            this.state.opa8,                 // Animate `bounceValue`
            {
              duration: 200,
              toValue: 1.0,                         // Animate to smaller size
            }
          ),
          Animated.timing(
            this.state.opa9,                 // Animate `bounceValue`
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
        activeOption4: false,
        activeOption5: false,
        activeOption6: false,
        activeOption7: false,
        activeOption8: false,
        activeOption9: false,
      });
    }
    else if (this.state.activeOption2===false) {
      if(this.state.bounceValue1._value!==1)
        this.state.bounceValue1.setValue(1.0);
      if(this.state.bounceValue3._value!==1)
        this.state.bounceValue3.setValue(1.0);
      if(this.state.bounceValue4._value!==1)
        this.state.bounceValue4.setValue(1.0);
      if(this.state.bounceValue5._value!==1)
        this.state.bounceValue5.setValue(1.0);
      if(this.state.bounceValue6._value!==1)
        this.state.bounceValue6.setValue(1.0);
      if(this.state.bounceValue7._value!==1)
        this.state.bounceValue7.setValue(1.0);
      if(this.state.bounceValue8._value!==1)
        this.state.bounceValue8.setValue(1.0);
      if(this.state.bounceValue9._value!==1)
        this.state.bounceValue9.setValue(1.0);

      Animated.sequence([            // spring to start and twirl after decay finishes
        Animated.parallel([
          Animated.timing(
            this.state.bounceValue2,                 // Animate `bounceValue`
            {
              duration: 200,
              toValue: 1.1,                         // Animate to smaller size
            }
          ),
          Animated.timing(
            this.state.opa2,                 // Animate `bounceValue`
            {
              duration: 200,
              toValue: 1.0,                         // Animate to smaller size
            }
          ),
        ]),
        Animated.parallel([
          Animated.timing(
            this.state.opa1,                 // Animate `bounceValue`
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
          Animated.timing(
            this.state.opa5,                 // Animate `bounceValue`
            {
              duration: 200,
              toValue: 0.4,                         // Animate to smaller size
            }
          ),
          Animated.timing(
            this.state.opa6,                 // Animate `bounceValue`
            {
              duration: 200,
              toValue: 0.4,                         // Animate to smaller size
            }
          ),
          Animated.timing(
            this.state.opa7,                 // Animate `bounceValue`
            {
              duration: 200,
              toValue: 0.4,                         // Animate to smaller size
            }
          ),
          Animated.timing(
            this.state.opa8,                 // Animate `bounceValue`
            {
              duration: 200,
              toValue: 0.4,                         // Animate to smaller size
            }
          ),
          Animated.timing(
            this.state.opa9,                 // Animate `bounceValue`
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
        activeOption1: false,
        activeOption2: true,
        activeOption3: false,
        activeOption4: false,
        activeOption5: false,
        activeOption6: false,
        activeOption7: false,
        activeOption8: false,
        activeOption9: false,
      });
    }
  },

  _onPress3: function() {
    if(this.state.activeOption3===true) {
      Animated.sequence([            // spring to start and twirl after decay finishes
        Animated.timing(
          this.state.bounceValue3,                 // Animate `bounceValue`
          {
            duration: 200,
            toValue: 1.0,                         // Animate to smaller size
          }
        ),
        Animated.parallel([
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
              toValue: 1.0,                         // Animate to smaller size
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
              toValue: 1.0,                         // Animate to smaller size
            }
          ),
          Animated.timing(
            this.state.opa5,                 // Animate `bounceValue`
            {
              duration: 200,
              toValue: 1.0,                         // Animate to smaller size
            }
          ),
          Animated.timing(
            this.state.opa6,                 // Animate `bounceValue`
            {
              duration: 200,
              toValue: 1.0,                         // Animate to smaller size
            }
          ),
          Animated.timing(
            this.state.opa7,                 // Animate `bounceValue`
            {
              duration: 200,
              toValue: 1.0,                         // Animate to smaller size
            }
          ),
          Animated.timing(
            this.state.opa8,                 // Animate `bounceValue`
            {
              duration: 200,
              toValue: 1.0,                         // Animate to smaller size
            }
          ),
          Animated.timing(
            this.state.opa9,                 // Animate `bounceValue`
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
        activeOption4: false,
        activeOption5: false,
        activeOption6: false,
        activeOption7: false,
        activeOption8: false,
        activeOption9: false,
      });
    }
    else if (this.state.activeOption3===false) {
      if(this.state.bounceValue1._value!==1)
        this.state.bounceValue1.setValue(1.0);
      if(this.state.bounceValue2._value!==1)
        this.state.bounceValue2.setValue(1.0);
      if(this.state.bounceValue4._value!==1)
        this.state.bounceValue4.setValue(1.0);
      if(this.state.bounceValue5._value!==1)
        this.state.bounceValue5.setValue(1.0);
      if(this.state.bounceValue6._value!==1)
        this.state.bounceValue6.setValue(1.0);
      if(this.state.bounceValue7._value!==1)
        this.state.bounceValue7.setValue(1.0);
      if(this.state.bounceValue8._value!==1)
        this.state.bounceValue8.setValue(1.0);
      if(this.state.bounceValue9._value!==1)
        this.state.bounceValue9.setValue(1.0);

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
            this.state.opa3,                 // Animate `bounceValue`
            {
              duration: 200,
              toValue: 1.0,                         // Animate to smaller size
            }
          ),
        ]),
        Animated.parallel([
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
            this.state.opa4,                 // Animate `bounceValue`
            {
              duration: 200,
              toValue: 0.4,                         // Animate to smaller size
            }
          ),
          Animated.timing(
            this.state.opa5,                 // Animate `bounceValue`
            {
              duration: 200,
              toValue: 0.4,                         // Animate to smaller size
            }
          ),
          Animated.timing(
            this.state.opa6,                 // Animate `bounceValue`
            {
              duration: 200,
              toValue: 0.4,                         // Animate to smaller size
            }
          ),
          Animated.timing(
            this.state.opa7,                 // Animate `bounceValue`
            {
              duration: 200,
              toValue: 0.4,                         // Animate to smaller size
            }
          ),
          Animated.timing(
            this.state.opa8,                 // Animate `bounceValue`
            {
              duration: 200,
              toValue: 0.4,                         // Animate to smaller size
            }
          ),
          Animated.timing(
            this.state.opa9,                 // Animate `bounceValue`
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
        activeOption1: false,
        activeOption2: false,
        activeOption3: true,
        activeOption4: false,
        activeOption5: false,
        activeOption6: false,
        activeOption7: false,
        activeOption8: false,
        activeOption9: false,
      });
    }
  },

  _onPress4: function() {
    if(this.state.activeOption4===true) {
      Animated.sequence([            // spring to start and twirl after decay finishes
        Animated.timing(
          this.state.bounceValue4,                 // Animate `bounceValue`
          {
            duration: 200,
            toValue: 1.0,                         // Animate to smaller size
          }
        ),
        Animated.parallel([
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
              toValue: 1.0,                         // Animate to smaller size
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
              toValue: 1.0,                         // Animate to smaller size
            }
          ),
          Animated.timing(
            this.state.opa5,                 // Animate `bounceValue`
            {
              duration: 200,
              toValue: 1.0,                         // Animate to smaller size
            }
          ),
          Animated.timing(
            this.state.opa6,                 // Animate `bounceValue`
            {
              duration: 200,
              toValue: 1.0,                         // Animate to smaller size
            }
          ),
          Animated.timing(
            this.state.opa7,                 // Animate `bounceValue`
            {
              duration: 200,
              toValue: 1.0,                         // Animate to smaller size
            }
          ),
          Animated.timing(
            this.state.opa8,                 // Animate `bounceValue`
            {
              duration: 200,
              toValue: 1.0,                         // Animate to smaller size
            }
          ),
          Animated.timing(
            this.state.opa9,                 // Animate `bounceValue`
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
        activeOption4: false,
        activeOption5: false,
        activeOption6: false,
        activeOption7: false,
        activeOption8: false,
        activeOption9: false,
      });
    }
    else if (this.state.activeOption4===false) {
      if(this.state.bounceValue1._value!==1)
        this.state.bounceValue1.setValue(1.0);
      if(this.state.bounceValue2._value!==1)
        this.state.bounceValue2.setValue(1.0);
      if(this.state.bounceValue3._value!==1)
        this.state.bounceValue3.setValue(1.0);
      if(this.state.bounceValue5._value!==1)
        this.state.bounceValue5.setValue(1.0);
      if(this.state.bounceValue6._value!==1)
        this.state.bounceValue6.setValue(1.0);
      if(this.state.bounceValue7._value!==1)
        this.state.bounceValue7.setValue(1.0);
      if(this.state.bounceValue8._value!==1)
        this.state.bounceValue8.setValue(1.0);
      if(this.state.bounceValue9._value!==1)
        this.state.bounceValue9.setValue(1.0);

      Animated.sequence([            // spring to start and twirl after decay finishes
        Animated.parallel([
          Animated.timing(
            this.state.bounceValue4,                 // Animate `bounceValue`
            {
              duration: 200,
              toValue: 1.1,                         // Animate to smaller size
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
        Animated.parallel([
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
            this.state.opa5,                 // Animate `bounceValue`
            {
              duration: 200,
              toValue: 0.4,                         // Animate to smaller size
            }
          ),
          Animated.timing(
            this.state.opa6,                 // Animate `bounceValue`
            {
              duration: 200,
              toValue: 0.4,                         // Animate to smaller size
            }
          ),
          Animated.timing(
            this.state.opa7,                 // Animate `bounceValue`
            {
              duration: 200,
              toValue: 0.4,                         // Animate to smaller size
            }
          ),
          Animated.timing(
            this.state.opa8,                 // Animate `bounceValue`
            {
              duration: 200,
              toValue: 0.4,                         // Animate to smaller size
            }
          ),
          Animated.timing(
            this.state.opa9,                 // Animate `bounceValue`
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
        activeOption1: false,
        activeOption2: false,
        activeOption3: false,
        activeOption4: true,
        activeOption5: false,
        activeOption6: false,
        activeOption7: false,
        activeOption8: false,
        activeOption9: false,
      });
    }
  },

  _onPress5: function() {
    if(this.state.activeOption5===true) {
      Animated.sequence([            // spring to start and twirl after decay finishes
        Animated.timing(
          this.state.bounceValue5,                 // Animate `bounceValue`
          {
            duration: 200,
            toValue: 1.0,                         // Animate to smaller size
          }
        ),
        Animated.parallel([
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
              toValue: 1.0,                         // Animate to smaller size
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
              toValue: 1.0,                         // Animate to smaller size
            }
          ),
          Animated.timing(
            this.state.opa5,                 // Animate `bounceValue`
            {
              duration: 200,
              toValue: 1.0,                         // Animate to smaller size
            }
          ),
          Animated.timing(
            this.state.opa6,                 // Animate `bounceValue`
            {
              duration: 200,
              toValue: 1.0,                         // Animate to smaller size
            }
          ),
          Animated.timing(
            this.state.opa7,                 // Animate `bounceValue`
            {
              duration: 200,
              toValue: 1.0,                         // Animate to smaller size
            }
          ),
          Animated.timing(
            this.state.opa8,                 // Animate `bounceValue`
            {
              duration: 200,
              toValue: 1.0,                         // Animate to smaller size
            }
          ),
          Animated.timing(
            this.state.opa9,                 // Animate `bounceValue`
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
        activeOption4: false,
        activeOption5: false,
        activeOption6: false,
        activeOption7: false,
        activeOption8: false,
        activeOption9: false,
      });
    }
    else if (this.state.activeOption5===false) {
      if(this.state.bounceValue1._value!==1)
        this.state.bounceValue1.setValue(1.0);
      if(this.state.bounceValue2._value!==1)
        this.state.bounceValue2.setValue(1.0);
      if(this.state.bounceValue3._value!==1)
        this.state.bounceValue3.setValue(1.0);
      if(this.state.bounceValue4._value!==1)
        this.state.bounceValue4.setValue(1.0);
      if(this.state.bounceValue6._value!==1)
        this.state.bounceValue6.setValue(1.0);
      if(this.state.bounceValue7._value!==1)
        this.state.bounceValue7.setValue(1.0);
      if(this.state.bounceValue8._value!==1)
        this.state.bounceValue8.setValue(1.0);
      if(this.state.bounceValue9._value!==1)
        this.state.bounceValue9.setValue(1.0);

      Animated.sequence([            // spring to start and twirl after decay finishes
        Animated.parallel([
          Animated.timing(
            this.state.bounceValue5,                 // Animate `bounceValue`
            {
              duration: 200,
              toValue: 1.1,                         // Animate to smaller size
            }
          ),
          Animated.timing(
            this.state.opa5,                 // Animate `bounceValue`
            {
              duration: 200,
              toValue: 1.0,                         // Animate to smaller size
            }
          ),
        ]),
        Animated.parallel([
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
              toValue: 0.4,                         // Animate to smaller size
            }
          ),
          Animated.timing(
            this.state.opa6,                 // Animate `bounceValue`
            {
              duration: 200,
              toValue: 0.4,                         // Animate to smaller size
            }
          ),
          Animated.timing(
            this.state.opa7,                 // Animate `bounceValue`
            {
              duration: 200,
              toValue: 0.4,                         // Animate to smaller size
            }
          ),
          Animated.timing(
            this.state.opa8,                 // Animate `bounceValue`
            {
              duration: 200,
              toValue: 0.4,                         // Animate to smaller size
            }
          ),
          Animated.timing(
            this.state.opa9,                 // Animate `bounceValue`
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
        activeOption1: false,
        activeOption2: false,
        activeOption3: false,
        activeOption4: false,
        activeOption5: true,
        activeOption6: false,
        activeOption7: false,
        activeOption8: false,
        activeOption9: false,
      });
    }
  },

  _onPress6: function() {
    if(this.state.activeOption6===true) {
      Animated.sequence([            // spring to start and twirl after decay finishes
        Animated.timing(
          this.state.bounceValue6,                 // Animate `bounceValue`
          {
            duration: 200,
            toValue: 1.0,                         // Animate to smaller size
          }
        ),
        Animated.parallel([
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
              toValue: 1.0,                         // Animate to smaller size
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
              toValue: 1.0,                         // Animate to smaller size
            }
          ),
          Animated.timing(
            this.state.opa5,                 // Animate `bounceValue`
            {
              duration: 200,
              toValue: 1.0,                         // Animate to smaller size
            }
          ),
          Animated.timing(
            this.state.opa6,                 // Animate `bounceValue`
            {
              duration: 200,
              toValue: 1.0,                         // Animate to smaller size
            }
          ),
          Animated.timing(
            this.state.opa7,                 // Animate `bounceValue`
            {
              duration: 200,
              toValue: 1.0,                         // Animate to smaller size
            }
          ),
          Animated.timing(
            this.state.opa8,                 // Animate `bounceValue`
            {
              duration: 200,
              toValue: 1.0,                         // Animate to smaller size
            }
          ),
          Animated.timing(
            this.state.opa9,                 // Animate `bounceValue`
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
        activeOption4: false,
        activeOption5: false,
        activeOption6: false,
        activeOption7: false,
        activeOption8: false,
        activeOption9: false,
      });
    }
    else if (this.state.activeOption6===false) {
      if(this.state.bounceValue1._value!==1)
        this.state.bounceValue1.setValue(1.0);
      if(this.state.bounceValue2._value!==1)
        this.state.bounceValue2.setValue(1.0);
      if(this.state.bounceValue3._value!==1)
        this.state.bounceValue3.setValue(1.0);
      if(this.state.bounceValue4._value!==1)
        this.state.bounceValue4.setValue(1.0);
      if(this.state.bounceValue5._value!==1)
        this.state.bounceValue5.setValue(1.0);
      if(this.state.bounceValue7._value!==1)
        this.state.bounceValue7.setValue(1.0);
      if(this.state.bounceValue8._value!==1)
        this.state.bounceValue8.setValue(1.0);
      if(this.state.bounceValue9._value!==1)
        this.state.bounceValue9.setValue(1.0);

      Animated.sequence([            // spring to start and twirl after decay finishes
        Animated.parallel([
          Animated.timing(
            this.state.bounceValue6,                 // Animate `bounceValue`
            {
              duration: 200,
              toValue: 1.1,                         // Animate to smaller size
            }
          ),
          Animated.timing(
            this.state.opa6,                 // Animate `bounceValue`
            {
              duration: 200,
              toValue: 1.0,                         // Animate to smaller size
            }
          ),
        ]),
        Animated.parallel([
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
              toValue: 0.4,                         // Animate to smaller size
            }
          ),
          Animated.timing(
            this.state.opa5,                 // Animate `bounceValue`
            {
              duration: 200,
              toValue: 0.4,                         // Animate to smaller size
            }
          ),
          Animated.timing(
            this.state.opa7,                 // Animate `bounceValue`
            {
              duration: 200,
              toValue: 0.4,                         // Animate to smaller size
            }
          ),
          Animated.timing(
            this.state.opa8,                 // Animate `bounceValue`
            {
              duration: 200,
              toValue: 0.4,                         // Animate to smaller size
            }
          ),
          Animated.timing(
            this.state.opa9,                 // Animate `bounceValue`
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
        activeOption1: false,
        activeOption2: false,
        activeOption3: false,
        activeOption4: false,
        activeOption5: false,
        activeOption6: true,
        activeOption7: false,
        activeOption8: false,
        activeOption9: false,
      });
    }
  },

  _onPress7: function() {
    if(this.state.activeOption7===true) {
      Animated.sequence([            // spring to start and twirl after decay finishes
        Animated.parallel([
          Animated.timing(
            this.state.bounceValue7,                 // Animate `bounceValue`
            {
              duration: 200,
              toValue: 1.0,                         // Animate to smaller size
            }
          ),
          Animated.timing(
            this.state.opa7,                 // Animate `bounceValue`
            {
              duration: 200,
              toValue: 1.0,                         // Animate to smaller size
            }
          ),
        ]),
        Animated.parallel([
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
              toValue: 1.0,                         // Animate to smaller size
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
              toValue: 1.0,                         // Animate to smaller size
            }
          ),
          Animated.timing(
            this.state.opa5,                 // Animate `bounceValue`
            {
              duration: 200,
              toValue: 1.0,                         // Animate to smaller size
            }
          ),
          Animated.timing(
            this.state.opa6,                 // Animate `bounceValue`
            {
              duration: 200,
              toValue: 1.0,                         // Animate to smaller size
            }
          ),
          Animated.timing(
            this.state.opa8,                 // Animate `bounceValue`
            {
              duration: 200,
              toValue: 1.0,                         // Animate to smaller size
            }
          ),
          Animated.timing(
            this.state.opa9,                 // Animate `bounceValue`
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
        activeOption4: false,
        activeOption5: false,
        activeOption6: false,
        activeOption7: false,
        activeOption8: false,
        activeOption9: false,
      });
    }
    else if (this.state.activeOption7===false) {
      if(this.state.bounceValue1._value!==1)
        this.state.bounceValue1.setValue(1.0);
      if(this.state.bounceValue2._value!==1)
        this.state.bounceValue2.setValue(1.0);
      if(this.state.bounceValue3._value!==1)
        this.state.bounceValue3.setValue(1.0);
      if(this.state.bounceValue4._value!==1)
        this.state.bounceValue4.setValue(1.0);
      if(this.state.bounceValue5._value!==1)
        this.state.bounceValue5.setValue(1.0);
      if(this.state.bounceValue6._value!==1)
        this.state.bounceValue6.setValue(1.0);
      if(this.state.bounceValue8._value!==1)
        this.state.bounceValue8.setValue(1.0);
      if(this.state.bounceValue9._value!==1)
        this.state.bounceValue9.setValue(1.0);

      Animated.sequence([            // spring to start and twirl after decay finishes
        Animated.parallel([
          Animated.timing(
            this.state.bounceValue7,                 // Animate `bounceValue`
            {
              duration: 200,
              toValue: 1.1,                         // Animate to smaller size
            }
          ),
          Animated.timing(
            this.state.opa7,                 // Animate `bounceValue`
            {
              duration: 200,
              toValue: 1.0,                         // Animate to smaller size
            }
          ),
        ]),
        Animated.parallel([
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
              toValue: 0.4,                         // Animate to smaller size
            }
          ),
          Animated.timing(
            this.state.opa5,                 // Animate `bounceValue`
            {
              duration: 200,
              toValue: 0.4,                         // Animate to smaller size
            }
          ),
          Animated.timing(
            this.state.opa6,                 // Animate `bounceValue`
            {
              duration: 200,
              toValue: 0.4,                         // Animate to smaller size
            }
          ),
          Animated.timing(
            this.state.opa8,                 // Animate `bounceValue`
            {
              duration: 200,
              toValue: 0.4,                         // Animate to smaller size
            }
          ),
          Animated.timing(
            this.state.opa9,                 // Animate `bounceValue`
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
        activeOption1: false,
        activeOption2: false,
        activeOption3: false,
        activeOption4: false,
        activeOption5: false,
        activeOption6: false,
        activeOption7: true,
        activeOption8: false,
        activeOption9: false,
      });
    }
  },

  _onPress8: function() {
    if(this.state.activeOption8===true) {
      Animated.sequence([            // spring to start and twirl after decay finishes
        Animated.parallel([
          Animated.timing(
            this.state.bounceValue8,                 // Animate `bounceValue`
            {
              duration: 200,
              toValue: 1.0,                         // Animate to smaller size
            }
          ),
          Animated.timing(
            this.state.opa8,                 // Animate `bounceValue`
            {
              duration: 200,
              toValue: 1.0,                         // Animate to smaller size
            }
          ),
        ]),
        Animated.parallel([
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
              toValue: 1.0,                         // Animate to smaller size
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
              toValue: 1.0,                         // Animate to smaller size
            }
          ),
          Animated.timing(
            this.state.opa5,                 // Animate `bounceValue`
            {
              duration: 200,
              toValue: 1.0,                         // Animate to smaller size
            }
          ),
          Animated.timing(
            this.state.opa6,                 // Animate `bounceValue`
            {
              duration: 200,
              toValue: 1.0,                         // Animate to smaller size
            }
          ),
          Animated.timing(
            this.state.opa7,                 // Animate `bounceValue`
            {
              duration: 200,
              toValue: 1.0,                         // Animate to smaller size
            }
          ),
          Animated.timing(
            this.state.opa9,                 // Animate `bounceValue`
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
        activeOption4: false,
        activeOption5: false,
        activeOption6: false,
        activeOption7: false,
        activeOption8: false,
        activeOption9: false,
      });
    }
    else if (this.state.activeOption8===false) {
      if(this.state.bounceValue1._value!==1)
        this.state.bounceValue1.setValue(1.0);
      if(this.state.bounceValue2._value!==1)
        this.state.bounceValue2.setValue(1.0);
      if(this.state.bounceValue3._value!==1)
        this.state.bounceValue3.setValue(1.0);
      if(this.state.bounceValue4._value!==1)
        this.state.bounceValue4.setValue(1.0);
      if(this.state.bounceValue5._value!==1)
        this.state.bounceValue5.setValue(1.0);
      if(this.state.bounceValue6._value!==1)
        this.state.bounceValue6.setValue(1.0);
      if(this.state.bounceValue7._value!==1)
        this.state.bounceValue7.setValue(1.0);
      if(this.state.bounceValue9._value!==1)
        this.state.bounceValue9.setValue(1.0);

      Animated.sequence([            // spring to start and twirl after decay finishes
        Animated.parallel([
          Animated.timing(
            this.state.bounceValue8,                 // Animate `bounceValue`
            {
              duration: 200,
              toValue: 1.1,                         // Animate to smaller size
            }
          ),
          Animated.timing(
            this.state.opa8,                 // Animate `bounceValue`
            {
              duration: 200,
              toValue: 1.0,                         // Animate to smaller size
            }
          ),
        ]),
        Animated.parallel([
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
              toValue: 0.4,                         // Animate to smaller size
            }
          ),
          Animated.timing(
            this.state.opa5,                 // Animate `bounceValue`
            {
              duration: 200,
              toValue: 0.4,                         // Animate to smaller size
            }
          ),
          Animated.timing(
            this.state.opa6,                 // Animate `bounceValue`
            {
              duration: 200,
              toValue: 0.4,                         // Animate to smaller size
            }
          ),
          Animated.timing(
            this.state.opa7,                 // Animate `bounceValue`
            {
              duration: 200,
              toValue: 0.4,                         // Animate to smaller size
            }
          ),
          Animated.timing(
            this.state.opa9,                 // Animate `bounceValue`
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
        activeOption1: false,
        activeOption2: false,
        activeOption3: false,
        activeOption4: false,
        activeOption5: false,
        activeOption6: false,
        activeOption7: false,
        activeOption8: true,
        activeOption9: false,
      });
    }
  },

  _onPress9: function() {
    if(this.state.activeOption9===true) {
      Animated.sequence([            // spring to start and twirl after decay finishes
        Animated.timing(
          this.state.bounceValue9,                 // Animate `bounceValue`
          {
            duration: 200,
            toValue: 1.0,                         // Animate to smaller size
          }
        ),
        Animated.parallel([
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
              toValue: 1.0,                         // Animate to smaller size
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
              toValue: 1.0,                         // Animate to smaller size
            }
          ),
          Animated.timing(
            this.state.opa5,                 // Animate `bounceValue`
            {
              duration: 200,
              toValue: 1.0,                         // Animate to smaller size
            }
          ),
          Animated.timing(
            this.state.opa6,                 // Animate `bounceValue`
            {
              duration: 200,
              toValue: 1.0,                         // Animate to smaller size
            }
          ),
          Animated.timing(
            this.state.opa7,                 // Animate `bounceValue`
            {
              duration: 200,
              toValue: 1.0,                         // Animate to smaller size
            }
          ),
          Animated.timing(
            this.state.opa8,                 // Animate `bounceValue`
            {
              duration: 200,
              toValue: 1.0,                         // Animate to smaller size
            }
          ),
          Animated.timing(
            this.state.opa9,                 // Animate `bounceValue`
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
        activeOption4: false,
        activeOption5: false,
        activeOption6: false,
        activeOption7: false,
        activeOption8: false,
        activeOption9: false,
      });
    }
    else if (this.state.activeOption9===false) {
      if(this.state.bounceValue1._value!==1)
        this.state.bounceValue1.setValue(1.0);
      if(this.state.bounceValue2._value!==1)
        this.state.bounceValue2.setValue(1.0);
      if(this.state.bounceValue3._value!==1)
        this.state.bounceValue3.setValue(1.0);
      if(this.state.bounceValue4._value!==1)
        this.state.bounceValue4.setValue(1.0);
      if(this.state.bounceValue5._value!==1)
        this.state.bounceValue5.setValue(1.0);
      if(this.state.bounceValue6._value!==1)
        this.state.bounceValue6.setValue(1.0);
      if(this.state.bounceValue7._value!==1)
        this.state.bounceValue7.setValue(1.0);
      if(this.state.bounceValue8._value!==1)
        this.state.bounceValue8.setValue(1.0);

      Animated.sequence([            // spring to start and twirl after decay finishes
        Animated.parallel([
          Animated.timing(
            this.state.bounceValue9,                 // Animate `bounceValue`
            {
              duration: 200,
              toValue: 1.1,                         // Animate to smaller size
            }
          ),
          Animated.timing(
            this.state.opa9,                 // Animate `bounceValue`
            {
              duration: 200,
              toValue: 1.0,                         // Animate to smaller size
            }
          ),
        ]),
        Animated.parallel([
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
              toValue: 0.4,                         // Animate to smaller size
            }
          ),
          Animated.timing(
            this.state.opa5,                 // Animate `bounceValue`
            {
              duration: 200,
              toValue: 0.4,                         // Animate to smaller size
            }
          ),
          Animated.timing(
            this.state.opa6,                 // Animate `bounceValue`
            {
              duration: 200,
              toValue: 0.4,                         // Animate to smaller size
            }
          ),
          Animated.timing(
            this.state.opa7,                 // Animate `bounceValue`
            {
              duration: 200,
              toValue: 0.4,                         // Animate to smaller size
            }
          ),
          Animated.timing(
            this.state.opa8,                 // Animate `bounceValue`
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
        activeOption1: false,
        activeOption2: false,
        activeOption3: false,
        activeOption4: false,
        activeOption5: false,
        activeOption6: false,
        activeOption7: false,
        activeOption8: false,
        activeOption9: true,
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
            style={[
              {transform: [                        // `transform` is an ordered array
                {scale: this.state.bounceValue1},  // Map `bounceValue` to `scale`
              ]},
              {opacity: this.state.opa1}
            ]}>
            <TouchableHighlight
              activeOpacity={0.2}
              underlayColor="transparent"
              style={[
                styles.itemInactive,
                this.state.activeOption1 && styles.itemActive
              ]}
              onPress={this._onPress1}>
              <Text 
                style={[
                  styles.itemTextInactive,
                  this.state.activeOption1 && styles.itemTextActive
                ]}
              >
                1.0
              </Text>
            </TouchableHighlight>
          </Animated.View>

          <Animated.View 
            style={[
              {transform: [                        // `transform` is an ordered array
                {scale: this.state.bounceValue2},  // Map `bounceValue` to `scale`
              ]},
              {opacity: this.state.opa2}
            ]}>
            <TouchableHighlight
              activeOpacity={0.2}
              underlayColor="transparent"
              style={[
                styles.itemInactive,
                this.state.activeOption2 && styles.itemActive
              ]}
              onPress={this._onPress2}>
              <Text 
                style={[
                  styles.itemTextInactive,
                  this.state.activeOption2 && styles.itemTextActive
                ]}
              >
                1.5
              </Text>
            </TouchableHighlight>
          </Animated.View>

          <Animated.View 
            style={[
              {transform: [                        // `transform` is an ordered array
                {scale: this.state.bounceValue3},  // Map `bounceValue` to `scale`
              ]},
              {opacity: this.state.opa3}
            ]}>
            <TouchableHighlight
              activeOpacity={0.2}
              underlayColor="transparent"
              style={[
                styles.itemInactive,
                this.state.activeOption3 && styles.itemActive
              ]}
              onPress={this._onPress3}>
              <Text 
                style={[
                  styles.itemTextInactive,
                  this.state.activeOption3 && styles.itemTextActive
                ]}
              >
                2.0
              </Text>
            </TouchableHighlight>
          </Animated.View>

          <Animated.View 
            style={[
              {transform: [                        // `transform` is an ordered array
                {scale: this.state.bounceValue4},  // Map `bounceValue` to `scale`
              ]},
              {opacity: this.state.opa4}
            ]}>
            <TouchableHighlight
              activeOpacity={0.2}
              underlayColor="transparent"
              style={[
                styles.itemInactive,
                this.state.activeOption4 && styles.itemActive
              ]}
              onPress={this._onPress4}>
              <Text 
                style={[
                  styles.itemTextInactive,
                  this.state.activeOption4 && styles.itemTextActive
                ]}
              >
                2.5
              </Text>
            </TouchableHighlight>
          </Animated.View>

          <Animated.View 
            style={[
              {transform: [                        // `transform` is an ordered array
                {scale: this.state.bounceValue5},  // Map `bounceValue` to `scale`
              ]},
              {opacity: this.state.opa5}
            ]}>
            <TouchableHighlight
              activeOpacity={0.2}
              underlayColor="transparent"
              style={[
                styles.itemInactive,
                this.state.activeOption5 && styles.itemActive
              ]}
              onPress={this._onPress5}>
              <Text 
                style={[
                  styles.itemTextInactive,
                  this.state.activeOption5 && styles.itemTextActive
                ]}
              >
                3.0
              </Text>
            </TouchableHighlight>
          </Animated.View>

          <Animated.View 
            style={[
              {transform: [                        // `transform` is an ordered array
                {scale: this.state.bounceValue6},  // Map `bounceValue` to `scale`
              ]},
              {opacity: this.state.opa6}
            ]}>
            <TouchableHighlight
              activeOpacity={0.2}
              underlayColor="transparent"
              style={[
                styles.itemInactive,
                this.state.activeOption6 && styles.itemActive
              ]}
              onPress={this._onPress6}>
              <Text 
                style={[
                  styles.itemTextInactive,
                  this.state.activeOption6 && styles.itemTextActive
                ]}
              >
                3.5
              </Text>
            </TouchableHighlight>
          </Animated.View>

          <Animated.View 
            style={[
              {transform: [                        // `transform` is an ordered array
                {scale: this.state.bounceValue7},  // Map `bounceValue` to `scale`
              ]},
              {opacity: this.state.opa7}
            ]}>
            <TouchableHighlight
              activeOpacity={0.2}
              underlayColor="transparent"
              style={[
                styles.itemInactive,
                this.state.activeOption7 && styles.itemActive
              ]}
              onPress={this._onPress7}>
              <Text 
                style={[
                  styles.itemTextInactive,
                  this.state.activeOption7 && styles.itemTextActive
                ]}
              >
                4.0
              </Text>
            </TouchableHighlight>
          </Animated.View>

          <Animated.View 
            style={[
              {transform: [                        // `transform` is an ordered array
                {scale: this.state.bounceValue8},  // Map `bounceValue` to `scale`
              ]},
              {opacity: this.state.opa8}
            ]}>
            <TouchableHighlight
              activeOpacity={0.2}
              underlayColor="transparent"
              style={[
                styles.itemInactive,
                this.state.activeOption8 && styles.itemActive
              ]}
              onPress={this._onPress8}>
              <Text 
                style={[
                  styles.itemTextInactive,
                  this.state.activeOption8 && styles.itemTextActive
                ]}
              >
                4.5
              </Text>
            </TouchableHighlight>
          </Animated.View>

          <Animated.View 
            style={[
              {transform: [                        // `transform` is an ordered array
                {scale: this.state.bounceValue9},  // Map `bounceValue` to `scale`
              ]},
              {opacity: this.state.opa9}
            ]}>
            <TouchableHighlight
              activeOpacity={0.2}
              underlayColor="transparent"
              style={[
                styles.itemInactive,
                this.state.activeOption9 && styles.itemActive
              ]}
              onPress={this._onPress9}>
              <Text 
                style={[
                  styles.itemTextInactive,
                  this.state.activeOption9 && styles.itemTextActive
                ]}
              >
                5.0
              </Text>
            </TouchableHighlight>
          </Animated.View>
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
    marginLeft: 5,
    marginRight: 5,
  },
  itemInactive: {
    backgroundColor: 'white',
    borderColor: '#30b0cb',
    borderWidth: 1,
    borderRadius: 5,
    alignItems:'center',
    justifyContent:'center',
    paddingTop: 10,
    paddingBottom: 10,
    marginLeft: 2,
    marginRight: 2,
    width: (deviceWidth-66)/9,//calc. 56 using 20 from feedcard size and 36 from marginleft and right from buttonrow and item
  },
  itemActive: {
    backgroundColor: '#30b0cb',
    borderColor: '#30b0cb',
    borderWidth: 1,
    borderRadius: 5,
    alignItems:'center',
    justifyContent:'center',
    paddingTop: 10,
    paddingBottom: 10,
    marginLeft: 2,
    marginRight: 2,
    width: (deviceWidth-66)/9,//calc. 56 using 20 from feedcard size and 36 from marginleft and right above and extra border
  },
  itemTextInactive: {
    color: '#30b0cb'
  },
  itemTextActive: {
    color: 'white'
  },
});

module.exports = PollCardRating;