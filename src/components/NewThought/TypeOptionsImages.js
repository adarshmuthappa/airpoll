let React = require('react-native');
let EvilIcon = require('react-native-vector-icons/EvilIcons');

let {
  AppRegistry,
  PixelRatio,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
  NativeModules: {
    UIImagePickerManager
  }
} = React;

let deviceWidth = Dimensions.get('window').width;
let deviceHeight = Dimensions.get('window').height;

let TypeOptionsImages = React.createClass({

  getInitialState() {
    this._lastPress = 0;
    return {
      imgOption1: null,
      imgOption2: null,
      imgOption3: null,
      imgOption4: null,
      imgOption5: null,
      imgOption6: null,
      imgOption7: null,
      imgOption8: null
    };
  },

  optionTapped(optionNumber) {
    let now = new Date().getTime();//double tap code

    const options = {
      title: '', // specify null or empty string to remove the title
      cancelButtonTitle: 'Cancel',
      takePhotoButtonTitle: 'Take Picture', // specify null or empty string to remove this button
      chooseFromLibraryButtonTitle: 'Choose from Library...', // specify null or empty string to remove this button
      customButtons: {
        'Remove Picture': 'removePicture', // [Button Text] : [String returned upon selection]
      },
      maxWidth: 400,
      maxHeight: 400,
      quality: 1.0,
      allowsEditing: false, // Built in iOS functionality to resize/reposition the image
      noData: false, // Disables the base64 `data` field from being generated (greatly improves performance on large photos)
      storageOptions: { // if this key is provided, the image will get saved in the documents directory (rather than a temporary directory)
        skipBackup: true, // image will NOT be backed up to icloud
        path: 'airpoll' // will save image at /Documents/airpoll rather than the root
      }
    };

    if(optionNumber===1 || optionNumber===2) {
      UIImagePickerManager.showImagePicker(options, (didCancel, response) => {
        console.log('Response = ', response);

        if (didCancel) {
          console.log('User cancelled image picker');
        }
        else {
          if (response.customButton) {
            if(optionNumber===1 && this.state.imgOption1!==null) {
              this.setState({
                imgOption1: null
              });
            }
            else if(optionNumber===2 && this.state.imgOption2!==null) {
              this.setState({
                imgOption2: null
              });
            }
          }
          else {
            // You can display the image using either:
            //const source = {uri: 'data:image/jpeg;base64,' + response.data, isStatic: true};
            const source = {uri: response.uri.replace('file://', ''), isStatic: true};

            if(optionNumber===1) {
              this.setState({
                imgOption1: source
              });
              this.props.getImageSrc(source,1);
            }
            else if(optionNumber===2) {
              this.setState({
                imgOption2: source
              });
              this.props.getImageSrc(source,2);
            }
          }
        }
      });
    }
    else {
      if(now - this._lastPress < 500) {
        UIImagePickerManager.showImagePicker(options, (didCancel, response) => {
          console.log('Response = ', response);

          if (didCancel) {
            console.log('User cancelled image picker');
          }
          else {
            if (response.customButton) {
              if(optionNumber===3 && this.state.imgOption3!==null) {
                this.setState({
                  imgOption3: null
                });
              }
              else if(optionNumber===4 && this.state.imgOption4!==null) {
                this.setState({
                  imgOption4: null
                });
              }
              if(optionNumber===5 && this.state.imgOption5!==null) {
                this.setState({
                  imgOption5: null
                });
              }
              else if(optionNumber===6 && this.state.imgOption6!==null) {
                this.setState({
                  imgOption6: null
                });
              }
              if(optionNumber===7 && this.state.imgOption7!==null) {
                this.setState({
                  imgOption7: null
                });
              }
              else if(optionNumber===8 && this.state.imgOption8!==null) {
                this.setState({
                  imgOption8: null
                });
              }
            }
            else {
              // You can display the image using either:
              //const source = {uri: 'data:image/jpeg;base64,' + response.data, isStatic: true};
              const source = {uri: response.uri.replace('file://', ''), isStatic: true};

              if(optionNumber === 3) {
                this.setState({
                  imgOption3: source
                });
                this.props.getImageSrc(source,3);
              }
              else if(optionNumber === 4) {
                this.setState({
                  imgOption4: source
                });
                this.props.getImageSrc(source,4);
              }
              else if(optionNumber === 5) {
                this.setState({
                  imgOption5: source
                });
                this.props.getImageSrc(source,5);
              }
              else if(optionNumber === 6) {
                this.setState({
                  imgOption6: source
                });
                this.props.getImageSrc(source,6);
              }
              else if(optionNumber === 7) {
                this.setState({
                  imgOption7: source
                });
                this.props.getImageSrc(source,7);
              }
              else if(optionNumber === 8) {
                this.setState({
                  imgOption8: source
                });
                this.props.getImageSrc(source,8);
              }
            }
          }
        });
      }
    }
    this._lastPress = now;
  },

  shouldComponentUpdate(nextProps, nextState) {
    if(nextState.imgOption1!==this.state.imgOption1 ||
       nextState.imgOption2!==this.state.imgOption2 ||
       nextState.imgOption3!==this.state.imgOption3 ||
       nextState.imgOption4!==this.state.imgOption4 ||
       nextState.imgOption5!==this.state.imgOption5 ||
       nextState.imgOption6!==this.state.imgOption6 ||
       nextState.imgOption7!==this.state.imgOption7 ||
       nextState.imgOption8!==this.state.imgOption8) {
      return true;
    }
    else {
      return false;
    }
  },

  render: function () {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.scrollView}
          automaticallyAdjustContentInsets={false}
          contentInset={{bottom: 169}}>
          <View style={styles.row}>
            <TouchableOpacity onPress={() => this.optionTapped(1)}>
              <View style={styles.optionBox}>
              { this.state.imgOption1 === null ?
                <View>
                  <EvilIcon name="image" style={styles.actionButtonIcon} />
                  <Text style={styles.txtImagePick}>Add a Photo</Text>
                </View> :
                <Image style={styles.optionBox,[this.state.imgOption1 && styles.plainBorder]} source={this.state.imgOption1} />
              }
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.optionTapped(2)}>
              <View style={styles.optionBox}>
                { this.state.imgOption2 === null ?
                  <View>
                    <EvilIcon name="image" style={styles.actionButtonIcon} />
                    <Text style={styles.txtImagePick}>Add a Picture</Text>
                  </View> :
                  <Image style={styles.optionBox,[this.state.imgOption2 && styles.plainBorder]} source={this.state.imgOption2} />
                }
                </View>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity onPress={() => this.optionTapped(3)}>
              { this.state.imgOption3 === null ?
                <View style={[styles.optionBox, styles.lowOpac]}>
                  <EvilIcon name="image" style={styles.actionButtonIcon} />
                  <Text style={styles.txtImagePick}>Add a Picture</Text>
                  <Text style={styles.txtImagePick}>(Tap twice to unlock)</Text>
                </View> :  <Image style={styles.optionBox,[this.state.imgOption3 && styles.plainBorder]} source={this.state.imgOption3} />
              }
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.optionTapped(4)}>
              { this.state.imgOption4 === null ?
                <View style={[styles.optionBox, styles.lowOpac]}>
                  <EvilIcon name="image" style={styles.actionButtonIcon} />
                  <Text style={styles.txtImagePick}>Add a Picture</Text>
                  <Text style={styles.txtImagePick}>(Tap twice to unlock)</Text>
                </View> : <Image style={styles.optionBox,[this.state.imgOption4 && styles.plainBorder]} source={this.state.imgOption4} />
              }
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity onPress={() => this.optionTapped(5)}>
              { this.state.imgOption5 === null ?
                <View style={[styles.optionBox, styles.lowOpac]}>
                  <EvilIcon name="image" style={styles.actionButtonIcon} />
                  <Text style={styles.txtImagePick}>Add a Picture</Text>
                  <Text style={styles.txtImagePick}>(Tap twice to unlock)</Text>
                </View> : <Image style={styles.optionBox,[this.state.imgOption5 && styles.plainBorder]} source={this.state.imgOption5} />
              }
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.optionTapped(6)}>
              { this.state.imgOption6 === null ?
                <View style={[styles.optionBox, styles.lowOpac]}>
                  <EvilIcon name="image" style={styles.actionButtonIcon} />
                  <Text style={styles.txtImagePick}>Add a Picture</Text>
                  <Text style={styles.txtImagePick}>(Tap twice to unlock)</Text>
                </View> : <Image style={styles.optionBox,[this.state.imgOption6 && styles.plainBorder]} source={this.state.imgOption6} />
              }
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity onPress={() => this.optionTapped(7)}>
              { this.state.imgOption7 === null ?
                <View style={[styles.optionBox, styles.lowOpac]}>
                  <EvilIcon name="image" style={styles.actionButtonIcon} />
                  <Text style={styles.txtImagePick}>Add a Picture</Text>
                  <Text style={styles.txtImagePick}>(Tap twice to unlock)</Text>
                </View> : <Image style={styles.optionBox,[this.state.imgOption7 && styles.plainBorder]} source={this.state.imgOption7} />
              }
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.optionTapped(8)}>
              { this.state.imgOption8 === null ?
                <View style={[styles.optionBox, styles.lowOpac]}>
                  <EvilIcon name="image" style={styles.actionButtonIcon} />
                  <Text style={styles.txtImagePick}>Add a Picture</Text>
                  <Text style={styles.txtImagePick}>(Tap twice to unlock)</Text>
                </View> : <Image style={styles.optionBox,[this.state.imgOption8 && styles.plainBorder]} source={this.state.imgOption8} />
              }
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
});

let styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20
  },
  scrollView: {
    height: deviceHeight
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
    marginLeft: 5
  },
  optionBox: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#003f4b',
    borderWidth: 1,
    width: deviceWidth/2,
    height: deviceWidth/2
  },
  plainBorder: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#F4F4F4',
    borderWidth: 1,
    width: deviceWidth/2,
    height: deviceWidth/2
  },
  txtImagePick: {
    marginTop: 5,
    color: '#003f4b'
  },
  lowOpac: {
    opacity: 0.4
  },
  actionButtonIcon: {
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 40,
    height: 30,
    color: '#003f4b'
  },
});

module.exports = TypeOptionsImages;
