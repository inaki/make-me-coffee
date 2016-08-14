import React, {Component} from 'react';

import {
  View,
  Text,
  StyleSheet
} from 'react-native';

class Instructions extends Component {
  render() {
    return (
      <View style={styles.instructions}>
        <Text style={styles.instructionsText}>{this.props.grains}</Text>
        <Text style={styles.instructionsText}>{this.props.water}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  instructions: {
  },
  instructionsText: {
    textAlign: 'center',
    fontSize: 28,
    lineHeight: 42
  }
});

module.exports = Instructions;
