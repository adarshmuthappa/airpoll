let React = require('react-native');
let TextInputOptionMandatory = require('./TextInputOptionMand');
let TextInputOptionOptional = require('./TextInputOptionOptnl');

let {
  DeviceEventEmitter,
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View
} = React;

let deviceHeight = Dimensions.get('window').height;

let TypeOptionsText = React.createClass({
  getInitialState() {
    return {
    };
  },

  // componentWillMount () {
  //   DeviceEventEmitter.addListener('keyboardWillShow', this.keyboardWillShow)
  //   DeviceEventEmitter.addListener('keyboardWillHide', this.keyboardWillHide)
  // },
  //
  // keyboardWillShow (e) {
  //   this.setState({keyboardSpace: -e.endCoordinates.height});
  //   // let newSize = Dimensions.get('window').height - e.endCoordinates.height;
  //   // this.refs.scrollView.props.contentInset.bottom = e.endCoordinates.height;
  //   // console.log(this.refs.scrollView.props.contentInset.bottom);
  //   // this.setState({});
  // },
  //
  // keyboardWillHide (e) {
  //   this.setState({keyboardSpace: 0});
  //   // this.setState({visibleHeight: Dimensions.get('window').height});
  //   // this.refs.scrollView.props.contentInset.bottom = 100;
  //   // console.log(this.refs.scrollView.props.contentInset.bottom);
  // },
  //
  // componentWillUnmount() {
  //   DeviceEventEmitter.removeListener('keyboardWillShow', this.keyboardWillShow)
  //   DeviceEventEmitter.removeListener('keyboardWillHide', this.keyboardWillHide)
  // },

  textValue(text, optionNum) {
    if(optionNum===1) {
      this.props.getTextSrc(text,1);
    }
    else if(optionNum===2) {
      this.props.getTextSrc(text,2);
    }
    else if(optionNum===3) {
      this.props.getTextSrc(text,3);
    }
    else if(optionNum===4) {
      this.props.getTextSrc(text,4);
    }
    else if(optionNum===5) {
      this.props.getTextSrc(text,5);
    }
    else if(optionNum===6) {
      this.props.getTextSrc(text,6);
    }
    else if(optionNum===7) {
      this.props.getTextSrc(text,7);
    }
    else if(optionNum===8) {
      this.props.getTextSrc(text,8);
    }
  },

  blur() {
    this.refs.option1.blur();
    this.refs.option2.blur();
    this.refs.option3.blur();
    this.refs.option4.blur();
    this.refs.option5.blur();
    this.refs.option6.blur();
    this.refs.option7.blur();
    this.refs.option8.blur();
  },

  onFocus(optionNumber) {
    // console.log(this.refs.sV.props);
    // if(optionNumber === 3 || optionNumber === 4) {
    //   this.refs.scrollView.scrollTo(100);
    // }
    // else if(optionNumber === 5 || optionNumber === 6) {
    //   this.refs.scrollView.scrollTo(240);
    // }
    // else if(optionNumber === 7 || optionNumber === 8) {
    //   this.refs.scrollView.scrollTo(350);
    // }
  },

  render: function () {
    return (
      <View style={styles.container}>
        <ScrollView
          ref="scrollView"
          contentContainerStyle={styles.scrollView}
          contentInset={{bottom: 275}}>
          <View style={styles.row}>
            <TextInputOptionMandatory ref="option1" optionNum={1} placeholder="Option 1" textValue={this.textValue}/>
            <TextInputOptionMandatory ref="option2" optionNum={2} placeholder="Option 2" textValue={this.textValue}/>
          </View>
          <View style={styles.row}>
            <TextInputOptionOptional focused={this.onFocus} ref="option3" optionNum={3} placeholder="Option 3" textValue={this.textValue}/>
            <TextInputOptionOptional focused={this.onFocus} ref="option4" optionNum={4} placeholder="Option 4" textValue={this.textValue}/>
          </View>
          <View style={styles.row}>
            <TextInputOptionOptional focused={this.onFocus} ref="option5" optionNum={5} placeholder="Option 5" textValue={this.textValue}/>
            <TextInputOptionOptional focused={this.onFocus} ref="option6" optionNum={6} placeholder="Option 6" textValue={this.textValue}/>
          </View>
          <View style={styles.row}>
            <TextInputOptionOptional focused={this.onFocus} ref="option7" optionNum={7} placeholder="Option 7" textValue={this.textValue}/>
            <TextInputOptionOptional focused={this.onFocus} ref="option8" optionNum={8} placeholder="Option 8" textValue={this.textValue}/>
          </View>
        </ScrollView>
      </View>
    );
  }
});

let styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: 'hidden',
    backgroundColor: 'transparent',
    marginTop: 20,
    height: deviceHeight
  },
  scrollView: {
    flex: 1
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 4,
    marginLeft: 4
  },
});

module.exports = TypeOptionsText;
