import React, {Component} from 'react';

import {
    View,
    StyleSheet
} from 'react-native';

class AnimArrow extends Component {
  render() {
    return (
      <View style={styles.arrow}></View>
    );
  }
}

const styles = StyleSheet.create({
  arrow: {
    width: 25,
    height: 0,
    borderStyle: 'solid',
    borderRightWidth: 25,
    borderRightColor: 'transparent',
    borderLeftWidth: 25,
    borderLeftColor: 'transparent',
    borderBottomWidth: 25,
    alignSelf: 'center'
  }
});

export default AnimArrow;
