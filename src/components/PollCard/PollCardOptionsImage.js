'use strict';

var React = require('react-native');
var Swiper = require('react-native-swiper-fork');
var Lightbox = require('react-native-lightbox');

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

var PollCardOptionsImage = React.createClass({

  getInitialState() {
    return {
        activeOption1: false,
        activeOption2: false,
        activeOption3: false,
        activeOption4: false,
        bounceValue: new Animated.Value(1.0),
        bounceValue2: new Animated.Value(1.0),
        bounceValue3: new Animated.Value(1.0),
        bounceValue4: new Animated.Value(1.0),
        opa1: new Animated.Value(1.0),
        opa2: new Animated.Value(1.0),
        opa3: new Animated.Value(1.0),
        opa4: new Animated.Value(1.0),
        data: {
          pollObject: {
            question: "Where should I go out to eat?",
            tag1: "food",
            tag2: "hangry",
            tag3: "now",
            pollTypeActive: ''
          },
        }
    };
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

          <View style={styles.swiper}>
            <Swiper style={styles.wrapper} height={240}
              dot={<View style={{backgroundColor:'rgba(0,0,0,.2)', width: 6, height: 6,borderRadius: 3, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}
              activeDot={<View style={{backgroundColor: '#76e7fe', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}
              paginationStyle={{
                bottom: -23, left: null, right: 20,
              }} loop={true}>
              <View style={styles.slide} title={<Text numberOfLines={1}>Caption 1</Text>}>
                <Lightbox underlayColor="transparent">
                  <Image 
                    style={styles.image}
                    resizeMode="contain"
                    source={require('image!a')} />
                </Lightbox>
              </View>
              <View style={styles.slide} title={<Text numberOfLines={1}>Caption 2</Text>}>
                <Lightbox underlayColor="transparent">
                  <Image 
                    style={styles.image}
                    resizeMode="contain"
                    source={require('image!house')} />
                </Lightbox>
              </View>
              <View style={styles.slide} title={<Text numberOfLines={1}>Caption 3</Text>}>
                <Lightbox underlayColor="transparent">
                  <Image 
                    style={styles.image}
                    resizeMode="contain"
                    source={require('image!a')} />
                </Lightbox>
              </View>
              <View style={styles.slide} title={<Text numberOfLines={1}>Caption 4</Text>}>
                <Lightbox underlayColor="transparent">
                  <Image 
                    style={styles.image}
                    resizeMode="contain"
                    source={require('image!house')} />
                </Lightbox>
              </View>
              <View style={styles.slide} title={<Text numberOfLines={1}>Caption 5</Text>}>
                <Lightbox underlayColor="transparent">
                  <Image 
                    style={styles.image}
                    resizeMode="contain"
                    source={require('image!a')} />
                </Lightbox>
              </View>
            </Swiper>
          </View>

      </View>
    );
  }
});

// <FilledButton
//   style={{backgroundColor:'#0ea378'}}
//   highlightedColor='#007655'
//   title='a'
//   titleStyle={{color:'white'}}
//   onPress={this.buttonPressed}
// />

var styles = StyleSheet.create({
  feedCard: {
    marginVertical: 1/PixelRatio.get(),
    borderRadius: 3,
    overflow: 'hidden',
    backgroundColor: 'white',
    // backgroundColor: 'rgb(85,172,238)',
    // opacity: 0.4,
    width: deviceWidth,
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
    color: '#30b0cb',
    fontSize: 12,
    borderRadius: 5,
    borderColor: '#30b0cb',
    borderWidth: 1,
    paddingLeft: 5,
    paddingRight: 3,
    paddingBottom: 3,
    paddingTop: 3,
    marginRight: 2,
    fontStyle: 'italic'
  },
  tag2: {
    // fontFamily: 'Roboto-Italic',
    color: '#30b0cb',
    fontSize: 12,
    borderRadius: 5,
    borderColor: '#30b0cb',
    borderWidth: 1,
    paddingLeft: 5,
    paddingRight: 3,
    paddingBottom: 3,
    paddingTop: 3,
    marginLeft: 2,
    marginRight: 2,
    fontStyle: 'italic'
  },
  tag3: {
    // fontFamily: 'Roboto-Italic',
    color: '#30b0cb',
    fontSize: 12,
    borderRadius: 5,
    borderColor: '#30b0cb',
    borderWidth: 1,
    paddingLeft: 5,
    paddingRight: 3,
    paddingBottom: 3,
    paddingTop: 3,
    marginLeft: 2,
    fontStyle: 'italic'
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
    marginTop: 20,
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
    height: 240,
  },
  container: {
    width: 375,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
});

module.exports = PollCardOptionsImage;