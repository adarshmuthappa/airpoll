let React = require('react-native');
let Parse = require('parse/react-native');
let ParseReact = require('parse-react/react-native');
let NavigationBar = require('react-native-navbar');
let Swiper = require('react-native-swiper');
// let {swipeable} = require('react-native-gesture-recognizers');

let LeftButton = require('../NavBar/LeftButton');
let RightButton = require('../NavBar/RightButton');
let QuestionWithModal = require('./QuestionWithModal');
let TypeOptionsText = require('./TypeOptionsText/TypeOptionsText');
let TypeOptionsImages = require('./TypeOptionsImages');
let TypeYesNo = require('./TypeYesNo');
let TypeRating = require('./TypeRating');
let TypeLikeDislike = require('./TypeLikeDislike');
let Line = require('../Line');
let ModalSelectTypes = require('../Modals/ModalFeelSelectTypes');

// const { directions: { SWIPE_UP, SWIPE_LEFT, SWIPE_DOWN, SWIPE_RIGHT } } = swipeable;

let {
  AlertIOS,
  Dimensions,
  StyleSheet,
  View,
  ScrollView,
  ListView,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  Navigator
} = React;

let deviceScreen = Dimensions.get('window');
let deviceWidth = deviceScreen.width;
let deviceHeight = deviceScreen.height;

class Slide1 {
  render() {
    return (
      <View style={[styles.slide, styles.transparentSlide]}>
        <Text style={{textAlign: 'center'}}>
          Just the question? Alright! Lets go!
        </Text>
        <Text style={{marginTop: 120, color: '#BABABA', textAlign: 'center'}}>
          (Swipe left or right for more options!)
        </Text>
        <Text style={{marginTop: 20, color: '#BABABA', textAlign: 'center'}}>
          (Swipe up for some sample questions!)
        </Text>
      </View>
    );
  }
}

let NewFeel = React.createClass({
  getInitialState: function() {
    this.pollTypeMap = ['questionOnly', 'optionsImages', 'optionsText', 'yesNo', 'rating', 'likeDislike'];
    this.swiperIndex = 0;
    this.question = '';
    this.optionsText = [],
    this.img1 = null;
    this.img2 = null;
    this.img3 = null;
    this.img4 = null;
    this.img5 = null;
    this.img6 = null;
    this.img7 = null;
    this.img8 = null;
    this.tx1 = '';
    this.tx2 = '';
    this.tx3 = '';
    this.tx4 = '';
    this.tx5 = '';
    this.tx6 = '';
    this.tx7 = '';
    this.tx8 = '';
    return {
    };
  },

  setImageOption(src, num) {
    if(num === 1) {
      this.img1 = src;
    }
    else if(num === 2) {
      this.img2 = src;
    }
    else if(num === 3) {
      this.img3 = src;
    }
    else if(num === 4) {
      this.img4 = src;
    }
    else if(num === 5) {
      this.img5 = src;
    }
    else if(num === 6) {
      this.img6 = src;
    }
    else if(num === 7) {
      this.img7 = src;
    }
    else if(num === 8) {
      this.img8 = src;
    }
  },

  setTextOption(src, num) {
    if(num === 1) {
      this.txt1 = src;
      this.optionsText[0] = src;
    }
    else if(num === 2) {
      this.txt2 = src;
      this.optionsText[1] = src;
    }
    else if(num === 3) {
      this.txt3 = src;
      this.optionsText[2] = src;
    }
    else if(num === 4) {
      this.txt4 = src;
      this.optionsText[3] = src;
    }
    else if(num === 5) {
      this.txt5 = src;
      this.optionsText[4] = src;
    }
    else if(num === 6) {
      this.txt6 = src;
      this.optionsText[5] = src;
    }
    else if(num === 7) {
      this.txt7 = src;
      this.optionsText[6] = src;
    }
    else if(num === 8) {
      this.txt8 = src;
      this.optionsText[7] = src;
    }
  },

  onSwipeBegin(direction, distance, velocity) {
    switch (direction.direction) {
      case SWIPE_LEFT:
        break;
      case SWIPE_RIGHT:
        break;
      case SWIPE_UP:
        this.refs.questionInput.openModal();
        break;
      case SWIPE_DOWN:
        break;
    }
  },

  renderPagination(index, total, context) {
    this.swiperIndex = index;
    return (
      <View>
      </View>
    )
  },

  render(){
    console.log('New Feel Render')
    return (
      <View style={styles.fullScreen}>

        <NavigationBar
          tintColor={'white'}
          title={{
            title: 'New Feel',
            tintColor: '#008299'
          }}
          leftButton={
            <LeftButton
              iconName={'close'}
              iconColor="#003F4B"
              onPress={() => this.props.navigator.pop()}
            />
          }
          rightButton={
            <RightButton
              iconName={'check'}
              iconColor="#003F4B"
              onPress={() => {this.openModalTypes()}}
            />
          }
        />

        <QuestionWithModal ref="questionInput" placeholder="Go on, ask a question!" textValue={(text) => {this.question = text;}}/>

        <ModalSelectTypes ref="modalTypesRef" finish={this.finishProcess}/>

        <Swiper
          style={styles.wrapper}
          height={deviceHeight}
          renderPagination={this.renderPagination}
          loop={true}>
          <View>
            <Slide1 onSwipeBegin={this.onSwipeBegin} />
          </View>
          <View style={styles.slide}>
            <TypeOptionsImages getImageSrc={this.setImageOption} />
          </View>
          <View style={styles.slide}>
            <TypeOptionsText ref="optionsTextInput" getTextSrc={this.setTextOption}/>
          </View>
          <View style={styles.slide}>
            <TypeYesNo />
          </View>
          <View style={styles.slide}>
            <TypeRating />
          </View>
          <View style={styles.slide}>
            <TypeLikeDislike />
          </View>
        </Swiper>

      </View>
    )
  },

  _goBack: function() {
    this.props.navigator.pop();
  },

  openModalTypes() {
    this.refs.questionInput.blur();//to hide keyboard if user directly presses on done button with keyboard open
    // this.refs.optionsTextInput.blur();//to hide keyboard if user directly presses on done button with keyboard open (causing crashing)
    //console.log(this.question);//done
    // console.log(this.swiperIndex);//done
    // console.log(this.txt1);//done
    // console.log(this.img1);//done
    // this.refs.typesModalRef.open();
    if(this.question.length > 0) {
      this.refs.modalTypesRef.openModal();
    }
    else {
      AlertIOS.alert(
        'No question...',
        'Please enter a question to continue'
      )
    }
    // this.props.navigator.pop();
  },

  finishProcess(tags, configs, groups) {
    let pollType = this.pollTypeMap[this.swiperIndex];
    console.log(this.swiperIndex);
    ParseReact.Mutation.Create('Poll', {
      question: this.question,
      type: pollType,
      tags: tags,
      optionsText: this.swiperIndex === 2 ? this.optionsText : undefined,
      user: this.props.user
    }).dispatch().then(function(object) {
      console.log(object);
      ParseReact.Mutation.AddRelation(object, 'groups', groups).dispatch()
    }, function (error) {
      console.log(error);
    });
    this.refs.modalTypesRef.closeModal();
    this.props.navigator.pop();
  }
});

// Slide1 = swipeable({//configure swiping gesture
//   setGestureState: false,
//   horizontal: false,
//   vertical: true,
//   continuous: false,
//   initialVelocityThreshold: 0.7
// })(Slide1);

let styles = StyleSheet.create({
  fullScreen: {
    flex: 1,
    backgroundColor: 'white'
  },
  scrollView: {
    height: deviceHeight
  },
  wrapper: {
    backgroundColor: 'transparent',
  },
  slide: {
    flex: 1
  },
  transparentSlide: {
    flex: 1,
    width: deviceWidth,
    height: deviceHeight,
    backgroundColor: 'transparent',
    marginTop: 80
  },
});

module.exports = NewFeel;
