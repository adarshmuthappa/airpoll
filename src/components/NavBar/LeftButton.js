import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import React, {
  Component,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

export default class LeftButton extends Component {
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
    color: '#9C9893',
    marginTop: 12,
    marginLeft: 12,
    bottom: 3
  },
});
