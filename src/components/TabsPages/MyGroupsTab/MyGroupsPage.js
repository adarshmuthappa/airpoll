let React = require('react-native');
let Parse = require('parse/react-native');
let ParseReact = require('parse-react/react-native');
let store = require('react-native-simple-store');
let NavigationBar = require('react-native-navbar');
let ActionButton = require('react-native-action-button');
let MaterialIcon = require('react-native-vector-icons/MaterialIcons');
let EntypoIcon = require('react-native-vector-icons/Entypo');
let EvilIcon = require('react-native-vector-icons/EvilIcons');

let LoadingScreen = require('../../LoadingScreen');

let {
  Dimensions,
  Image,
  ListView,
  Navigator,
  StatusBarIOS,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
  // NativeModules: {
  //   UIImagePickerManager
  // }
} = React;

let deviceScreen = Dimensions.get('window');
let deviceWidth = deviceScreen.width;

let MyGroupsTab = React.createClass({
  mixins: [ParseReact.Mixin],

  observe: function() {
    console.log('observe')
    if(this.groupsListStore.length > 0) {
      return {};
    }
    else {
      return {myGroups: (new Parse.Query('Groups')).equalTo('user', this.props.user).descending('createdAt')};
    }
  },

  getInitialState: function() {
    this.activeUser = null;
    this.groupsListStore = [];
    this.localStoreSaveFlag = false;
    return {
      groupsListStore: [],
      dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
      groupName: this.props.groupName,
      groups: {
        groupName: '',
        groupMembers: []
      }
    };
  },

  _pressData: ({}: {[key: number]: boolean}),

  // componentWillMount: function() {
  //   console.log('componentWillMount');
  // },

  componentDidMount: function() {
    console.log('componentDidMount');
    // console.log(this.data.myGroups);
    StatusBarIOS.setNetworkActivityIndicatorVisible(true);
    this._pressData = {};
    store.get('channels').then((value) => {
      console.log(value);
      console.log(this.props);
      if(value.length!==0) {
        console.log('value!==0');
        // this.setState({
        //   groupsListStore: value
        // });
        this.groupsListStore = value;
      }
        this.localStoreSaveFlag = true;
    });
   },

  // componentWillReceiveProps: function() {
  //   console.log('componentWillReceiveProps');
  //   console.log(this.data.myGroups);
  //   if(this.state.groupsListStore.length === 0 && this.pendingQueries().length === 0 && this.data.myGroups.length!==0) {
  //     console.log('Fill state with Parse data');
  //     this.setState({
  //       groupsListStore: this.data.myGroups
  //     });
  //     console.log(this.state.groupsListStore);
  //     StatusBarIOS.setNetworkActivityIndicatorVisible(false);
  //   }
  // },

  componentWillUpdate: function(nextProps, nextState) {
    console.log('componentWillUpdate');
    // console.log(this.data.myGroups);
    if(this.groupsListStore.length === 0 && this.pendingQueries().length === 0 && this.data.myGroups.length!==0) {
      console.log('Fill state with Parse data');
      this.groupsListStore = this.data.myGroups;
      // console.log(this.groupsListStore);
      StatusBarIOS.setNetworkActivityIndicatorVisible(false);
    }
  },

  componentDidUpdate: function(prevProps, prevState) {
    console.log('componentDidUpdate');
    // console.log(this.groupsListStore);
    if(this.groupsListStore.length > 0 && !this.pendingQueries().length) {
      StatusBarIOS.setNetworkActivityIndicatorVisible(false);
      store.get('channels').then((value) => {
        if(value.length===0) {
          store.save('channels', this.groupsListStore);
          console.log('Store saving')
        }
      });
    }
  },

  // shouldComponentUpdate: function() {
  //   if(!this.pendingQueries().length) {
  //     return false;
  //   }
  //   return true;
  // },

  groupImageTapped(rowID) {
    // const options = {
    //   title: 'Group Picture', // specify null or empty string to remove the title
    //   cancelButtonTitle: 'Cancel',
    //   takePhotoButtonTitle: 'Take Picture', // specify null or empty string to remove this button
    //   chooseFromLibraryButtonTitle: 'Choose from Library...', // specify null or empty string to remove this button
    //   customButtons: {
    //     'Remove Picture': 'removePicture', // [Button Text] : [String returned upon selection]
    //   },
    //   maxWidth: 400,
    //   maxHeight: 400,
    //   quality: 1.0,
    //   allowsEditing: false, // Built in iOS functionality to resize/reposition the image
    //   noData: false, // Disables the base64 `data` field from being generated (greatly improves performance on large photos)
    //   storageOptions: { // if this key is provided, the image will get saved in the documents directory (rather than a temporary directory)
    //     skipBackup: true, // image will NOT be backed up to icloud
    //     path: 'airpoll' // will save image at /Documents/airpoll rather than the root
    //   }
    // };

    // UIImagePickerManager.showImagePicker(options, (didCancel, response) => {
    //   console.log('Response = ', response);

    //   if (didCancel) {
    //     console.log('User cancelled image picker');
    //   }
    //   else {
    //     if (response.customButton) {
    //     }
    //     else {
    //       // You can display the image using either:
    //       //const source = {uri: 'data:image/jpeg;base64,' + response.data, isStatic: true};
    //       const source = {uri: response.uri.replace('file://', ''), isStatic: true};

    //       // if() {
    //       //   this.setState({});
    //       // }
    //     }
    //   }
    // });
  },

  newGroup() {
    this.props.navigator.push({
      id: 'new-group',
      sceneConfig: Navigator.SceneConfigs.FloatFromBottom,
      user: this.props.user
    });
  },

  newFeel() {
    this.props.navigator.push({
      id: 'new-thought',
      sceneConfig: Navigator.SceneConfigs.FloatFromBottom
    });
  },

  arraysEqual(arr1, arr2) {
    if(arr1.length !== arr2.length)
        return false;
    for(var i = arr1.length; i--;) {
        if(arr1[i] !== arr2[i])
            return false;
    }
    return true;
  },

  render: function() {
    // console.log(this.data.myGroups)
    // console.log(this.groupsListStore)
    // var a = this.arraysEqual(this.data.myGroups, this.groupsListStore)
    // console.log(a)
    return (
      <View style={styles.fullScreen}>
        <NavigationBar
          tintColor={'white'}
          title={{
            title: 'Channels',
            tintColor: '#008299'
          }}
        />
        {this.groupsListStore.length>0 ?
          <ListView
            contentContainerStyle={styles.list}
            dataSource={this.state.dataSource.cloneWithRows(this.groupsListStore)}
            renderRow={this._renderRow}
            contentInset={{bottom:49}}
            automaticallyAdjustContentInsets={false}
          />
          :
          this.pendingQueries().length===0 ?
          <View style={styles.viewEmptyState}>
            <EntypoIcon name="emoji-sad" style={styles.iconSadSmiley} />
            <Text style={styles.emptyStateMessage1}>
              Oops... No private channels
            </Text>
            <Text style={styles.emptyStateMessage2}>
              Use the button below to add some!
            </Text>
          </View> : <View style={styles.fullScreen}/>
        }
        <ActionButton outRangeScale={0.75} bgColor="rgba(0,0,0,0.65)" buttonColor="#494D5B" offsetX={23} offsetY={70}>
          <ActionButton.Item buttonColor='#9b59b6' title="New Channel" onPress={() => this.newGroup()}>
            <MaterialIcon name="group-add" style={styles.actionButtonIconLarge} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#3498db' title="New Thought" onPress={() => this.newFeel()}>
            <MaterialIcon name="edit" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#1abc9c' title="Edit Groups" onPress={() => {}}>
            <MaterialIcon name="settings" style={styles.actionButtonIcon} />
          </ActionButton.Item>
        </ActionButton>
      </View>
    );
  },

  _renderRow: function(rowData: string, sectionID: number, rowID: number) {
    return (
      <View>
        <View style={styles.row} >
          <TouchableHighlight activeOpacity={1.0} style={styles.viewGroupImage} onPress={() => this._pressRow(rowID)}>
            {false ? <Image source={require('image!friendspier')} style={styles.image} /> :
            <View style={[styles.groupImage,rowID%2===0 && styles.borderRightStyle]}>
              <EvilIcon name="image" style={styles.iconAddGroupImage} />
              <Image/>
            </View>}
          </TouchableHighlight>
          <View style={[styles.viewGroupDetails,rowID%2===0 && styles.borderRightStyle]}>
            <TouchableOpacity
              style={styles.groupDetails}
              onPress={() => this._pressRow(rowID)}>
              <View style={{flex:1}}>
                <View style={styles.viewGroupHeader}>
                  <Text style={styles.groupHeader}>
                    11 am
                  </Text>
                </View>
                <View style={styles.viewGroupName}>
                  <Text style={styles.groupName} numberOfLines={1}>
                  {rowData.groupName}
                  </Text>
                </View>
                <View style={styles.viewGroupMembers}>
                  <Text style={styles.groupMembers} numberOfLines={1}>
                  {rowData.groupTags}
                  </Text>
                </View>
                <View style={styles.viewGroupNotifs}>
                  <Text style={styles.groupNotifs} numberOfLines={1}>
                    2 new
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  },

  _pressRow: function(rowID: number) {
    this._pressData[rowID] = !this._pressData[rowID];
    // this.setState({
    //   dataSource: this.state.dataSource.cloneWithRows(this.groupsListStore)
    // });
    console.log(this.data.myGroups[rowID])
    console.log(this.groupsListStore[rowID])
    this.props.navigator.push({
      id: 'group-view',
      sceneConfig: Navigator.SceneConfigs.FadeAndroid,
      groupObject: this.groupsListStore[rowID]
    })
  }
});

let styles = StyleSheet.create({
  fullScreen: {
    flex: 1,
    backgroundColor: '#F5F8F9'
  },
  viewEmptyState: {
    flex: 1,
    backgroundColor: '#F5F8F9',
    justifyContent: 'center',
    alignItems: 'center'
  },
  emptyStateMessage1: {
    color: '#494D5B',
    fontSize: 16,
    marginTop: 15,
    marginBottom: 10,
    fontWeight: 'bold'
  },
  emptyStateMessage2: {
    color: '#9BB0C4',
    fontSize: 14
  },
  iconSadSmiley: {
    fontSize: 70,
    height: 70,
    color: '#494D5B'
  },
  list: {
    marginTop: 3,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  row: {
    height: 200,
    width: deviceWidth/2
  },
   viewGroupImage: {
    height: 120,
    width: deviceWidth/2
  },
  image: {
    height: 120,
    width: deviceWidth/2
  },
  groupImage: {
    height: 120,
    width: deviceWidth/2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F8F9'
  },
  iconAddGroupImage: {
    backgroundColor: 'transparent',
    fontSize: 70,
    height: 70,
    opacity: 0.4,
    color: '#008299'
  },
  borderRightStyle: {
    borderColor: '#E9E9E9',
    borderRightWidth: 1
  },
  viewGroupDetails: {
    height: 80,
    padding: 5,
    backgroundColor: 'white'
  },
  groupDetails: {
    flex: 1
  },
  viewGroupHeader: {
    flex: 0.15,
    paddingRight: 5,
    justifyContent: 'flex-start',
    alignItems: 'flex-end'
  },
  groupHeader: {
    fontSize: 11,
    color: '#BDBDBD'
  },
  viewGroupName: {
    flex: 0.3,
    paddingTop: 2,
    paddingLeft: 2,
    paddingRight: 2,
    justifyContent: 'flex-start'
  },
  groupName: {
    fontFamily: 'OpenSans-Semibold',
    fontSize: 17,
    color: '#003f4b'
  },
  viewGroupMembers: {
    flex: 0.3,
    paddingLeft: 2,
    paddingRight: 2,
    justifyContent: 'flex-start'
  },
  groupMembers: {
    fontSize: 11,
    color: '#008299'
  },
  viewGroupNotifs: {
    flex: 0.15,
    paddingRight: 2,
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  groupNotifs: {
    fontSize: 11,
    color: 'white',
    backgroundColor: '#3CBA54',
    borderRadius: 2,
    padding: 2
  },
  actionButtonIconLarge: {
    fontSize: 28,
    height: 28,
    color: 'white'
  },
  actionButtonIcon: {
    fontSize: 24,
    height: 24,
    color: 'white'
  }
});

module.exports = MyGroupsTab;
