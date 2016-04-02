import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import React, {
  Component,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

export default class RightButton extends Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <MaterialIcon name={this.props.iconName} style={[styles.icon, {color: this.props.iconColor}]} />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    fontSize: 25,
    height: 25,
    marginTop: 12,
    color: '#9C9893',
    marginRight: 10,
    bottom: 3
  },
});
