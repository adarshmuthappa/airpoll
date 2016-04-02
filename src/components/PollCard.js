let React = require('react-native');
let Swiper = require('react-native-swiper-fork')

let FilledButton = require('./FilledButton');
let Line = require('./Line');
let TouchableSetActive = require('./TouchableSetActive');

let {
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
  Dimensions
} = React;

let deviceWidth = Dimensions.get('window').width;

let renderPagination = function (index, total, context) {
  return (
    <View style={{
      position: 'absolute',
      bottom: -25,
      right: 10,
      marginBottom: 20
    }}>
      <Text><Text style={{
        color: '#007aff',
        fontSize: 20,
      }}>{index + 1}</Text>/{total}</Text>
    </View>
  )
}

let PollCard = React.createClass({
  propTypes: {
    data: React.PropTypes.object.isRequired
  },

  getInitialState() {
    return {
        activeOption1: false,
        activeOption2: false,
        activeOption3: false,
        activeOption4: false,
    };
  },

  _onPressOption1: function() {
    if(this.state.activeOption1===false) {
      this.setState({
        activeOption1: true,
        activeOption2: false,
        activeOption3: false,
        activeOption4: false,
      });
    }
    else if (this.state.activeOption1===true) {
      this.setState({
        activeOption1: false,
        activeOption2: false,
        activeOption3: false,
        activeOption4: false,
      });
    }
  },

  _onPressOption2: function() {
    if(this.state.activeOption2===true)
    {
      this.setState({
        activeOption1: false,
        activeOption2: false,
        activeOption3: false,
        activeOption4: false,
      });
    }
    else if (this.state.activeOption2===false) {
      this.setState({
        activeOption1: false,
        activeOption2: true,
        activeOption3: false,
        activeOption4: false,
      });
    }
  },

  _onPressOption3: function() {
    if(this.state.activeOption3===true)
    {
      this.setState({
        activeOption1: false,
        activeOption2: false,
        activeOption3: false,
        activeOption4: false,
      });
    }
    else if (this.state.activeOption3===false) {
      this.setState({
        activeOption1: false,
        activeOption2: false,
        activeOption3: true,
        activeOption4: false,
      });
    }
  },

  _onPressOption4: function() {
    if(this.state.activeOption4===true)
    {
      this.setState({
        activeOption1: false,
        activeOption2: false,
        activeOption3: false,
        activeOption4: false,
      });
    }
    else if (this.state.activeOption4===false) {
      this.setState({
        activeOption1: false,
        activeOption2: false,
        activeOption3: false,
        activeOption4: true,
      });
    }
  },

  render: function () {
    let tag1 = this.props.data.pollObject.tag1.length > 0;
    let tag2 = this.props.data.pollObject.tag2.length > 0;
    let tag3 = this.props.data.pollObject.tag3.length > 0;
    let tag123 = tag1>0 || tag2>0 || tag3>0;

    let option1 = 0;
    let option2 = 0;
    let option3 = 0;
    let option4 = 0;
    if(this.props.data.pollObject.pollTypeActive==='options') {
      let option1 = this.props.data.pollObject.option1.length > 0;
      let option2 = this.props.data.pollObject.option2.length > 0;
      let option3 = this.props.data.pollObject.option3.length > 0;
      let option4 = this.props.data.pollObject.option4.length > 0;
    }

    let option12 = option1>0 || option2>0;
    let option34 = option3>0 || option4>0;
    let option5 = false;

    return (
      <View style={styles.feedCard}>

        <View style={styles.contentExceptImages}>

          <TouchableHighlight style={styles.button} activeOpacity={0.5} underlayColor={"white"} onPress={this.goToTabsLayout}>
            <View>
              <Text style={styles.pollQuestion}>{this.props.data.pollObject.question}</Text>
              <Line style={{backgroundColor:'#DD2C00'}} />
            </View>
          </TouchableHighlight>

          {tag123 ?
          <View style={styles.pollTags}>
            {tag1 ?
              <TouchableHighlight style={styles.button} activeOpacity={0.5} underlayColor={"white"} onPress={this.goToTabsLayout}>
                <Text style={styles.tag1}>{this.props.data.pollObject.tag1}</Text>
              </TouchableHighlight>
            : null}
            {tag2 ?
              <TouchableHighlight style={styles.button} activeOpacity={0.5} underlayColor={"white"} onPress={this.goToTabsLayout}>
                <Text style={styles.tag2}>{this.props.data.pollObject.tag2}</Text>
              </TouchableHighlight>
            : null}
            {tag3 ?
              <TouchableHighlight style={styles.button} activeOpacity={0.5} underlayColor={"white"} onPress={this.goToTabsLayout}>
                <Text style={styles.tag3}>{this.props.data.pollObject.tag3}</Text>
              </TouchableHighlight>
            : null}
          </View>
          : null}

          {option12 ?
            <View style={styles.pollOptionsFirstRow}>
              {option1 ?
                <TouchableSetActive
                  activeOpacity={0.5}
                  underlayColor={"white"}
                  onPress={this._onPressOption1}
                  style={[
                    !this.state.activeOption1 && styles.inactiveOption,
                    this.state.activeOption1 && styles.activeOption,
                  ]}>
                  <Text style={styles.alignTextOption}>{this.props.data.pollObject.option1}</Text>
                </TouchableSetActive>
              : null}
              {option2 ?
                <TouchableSetActive
                  activeOpacity={0.5}
                  underlayColor={"white"}
                  onPress={this._onPressOption2}
                  style={[
                    !this.state.activeOption2 && styles.inactiveOption,
                    this.state.activeOption2 && styles.activeOption,
                  ]}>
                  <Text style={styles.alignTextOption}>{this.props.data.pollObject.option2}</Text>
                </TouchableSetActive>
              : null}
            </View>
            : null}
          {option34 ?
            <View style={styles.pollOptionsSecondRow}>
              {option3 ?
                <TouchableSetActive
                  activeOpacity={0.5}
                  underlayColor={"white"}
                  onPress={this._onPressOption3}
                  style={[
                    !this.state.activeOption3 && styles.inactiveOption,
                    this.state.activeOption3 && styles.activeOption,
                  ]}>
                  <Text style={styles.alignTextOption}>{this.props.data.pollObject.option3}</Text>
                </TouchableSetActive>
              : null}
              {option4 ?
                <TouchableSetActive
                  activeOpacity={0.5}
                  underlayColor={"white"}
                  onPress={this._onPressOption4}
                  style={[
                    !this.state.activeOption4 && styles.inactiveOption,
                    this.state.activeOption4 && styles.activeOption,
                  ]}>
                  <Text style={styles.alignTextOption}>{this.props.data.pollObject.option4}</Text>
                </TouchableSetActive>
              : null}
            </View>
          : null}

        </View>

        <View style={styles.swiper}>
          <Swiper style={styles.wrapper} height={240}
            renderPagination={renderPagination}
            paginationStyle={{
              bottom: -23, left: null, right: 10,
            }} loop={true}>
            <View style={styles.slide} title={<Text numberOfLines={1}>Aussie tourist dies at Bali hotel</Text>}>
              <TouchableHighlight style={styles.a} activeOpacity={1.0} underlayColor={"white"} onPress={this.goToTabsLayout}>
                <Image style={styles.image} source={require('image!a')} />
              </TouchableHighlight>
            </View>
            <View style={styles.slide} title={<Text numberOfLines={1}>Big lie behind Nine’s new show</Text>}>
              <TouchableHighlight style={styles.a} activeOpacity={1.0} underlayColor={"white"} onPress={this.goToTabsLayout}>
                <Image style={styles.image} source={require('image!beach')} />
              </TouchableHighlight>
            </View>
            <View style={styles.slide} title={<Text numberOfLines={1}>Why Stone split from Garfield</Text>}>
              <TouchableHighlight style={styles.a} activeOpacity={1.0} underlayColor={"white"} onPress={this.goToTabsLayout}>
                <Image style={styles.image} source={require('image!a')} />
              </TouchableHighlight>
            </View>
            <View style={styles.slide} title={<Text numberOfLines={1}>Learn from Kim K to land that job</Text>}>
              <TouchableHighlight style={styles.a} activeOpacity={1.0} underlayColor={"white"} onPress={this.goToTabsLayout}>
                <Image style={styles.image} source={require('image!house')} />
              </TouchableHighlight>
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

let styles = StyleSheet.create({
  feedCard: {
    //marginHorizontal: 15,
    marginVertical: 1/PixelRatio.get(),
    // borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: 'white',
    // backgroundColor: 'rgb(85,172,238)',
    // opacity: 0.4,
  },
  contentExceptImages: {
    padding: 5,
  },
  pollTypeIndicator: {
    position: 'absolute',
    right: 0,
    top: 0,
    marginBottom: 5
  },
  pollTypeOptions: {
    padding: 4,
    color: 'white',
    backgroundColor: '#2196F3',
    textAlign: 'center'
  },
  pollTypeLike: {
    padding: 4,
    color: 'white',
    backgroundColor: '#E91E63',
    textAlign: 'center'
  },
  pollTypeRating: {
    padding: 4,
    color: 'white',
    backgroundColor: 'black',
    textAlign: 'center'
  },
  pollTypeRank: {
    padding: 4,
    color: 'white',
    backgroundColor: '#E9E9E9',
    textAlign: 'center'
  },
  pollQuestion: {
    marginTop: 10,
    // marginBottom: 15,
    fontSize: 18,
    textAlign: 'center'
  },
  pollTags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center'
  },
  tag1: {
    color: '#2196F3',
    borderRadius: 5,
    borderColor: '#2196F3',
    borderWidth: 1,
    paddingLeft: 5,
    paddingRight: 3,
    marginRight: 2,
    marginBottom: 5
  },
  tag2: {
    color: '#2196F3',
    borderRadius: 5,
    borderColor: '#2196F3',
    borderWidth: 1,
    paddingLeft: 5,
    paddingRight: 3,
    marginLeft: 2,
    marginRight: 2,
    marginBottom: 5
  },
  tag3: {
    color: '#2196F3',
    borderRadius: 5,
    borderColor: '#2196F3',
    borderWidth: 1,
    paddingLeft: 5,
    marginLeft: 2,
    marginRight: 2,
    paddingRight: 3,
    marginBottom: 5
  },
  pollOptionsFirstRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    marginRight: 10,
    marginLeft: 10,
  },
  pollOptionsSecondRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    marginRight: 10,
    marginLeft: 10,
  },
  inactiveOption: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F4F4F4',
    borderColor: '#2196F3',
    borderWidth: 1,
    borderRadius: 2,
    width: deviceWidth/2,
    height: deviceWidth/2 - 80,
    flex: 0.5,
    padding: 20,
    margin: 3,
    // shadowOpacity: 0.8,
    // shadowRadius: 2,
    // shadowOffset: {
    //   height: 1,
    //   width: 0
    // }
    // alignSelf: 'flex-start',
  },
  activeOption: {
    backgroundColor: '#2196F3',
    borderColor: '#2196F3',
    borderWidth: 1,
    borderRadius: 5,
    width: deviceWidth/2,
    height: deviceWidth/2 - 80,
    flex: 0.5,
    padding: 20,
    margin: 3,
    color: 'white'
  },
  alignTextOption: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
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

module.exports = PollCard;
