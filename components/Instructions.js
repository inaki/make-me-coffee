import React, {Component} from 'react';
const dismissKeyboard = require('dismissKeyboard');

import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  LayoutAnimation
} from 'react-native';

class Instructions extends Component {
  constructor(props) {
    super(props);
  }

  componentWillUpdate() {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
  }

  render() {
    const showStyle = this.props.fill === true ? {marginTop: 0} : {marginTop: 40};
    return (
      <TouchableWithoutFeedback onPress={dismissKeyboard}>
        <View style={[showStyle, styles.instructions]}>
          <Text style={styles.instructionsText}>{this.props.grains}</Text>
          <Text style={styles.instructionsText}>{this.props.water}</Text>
        </View>
      </TouchableWithoutFeedback>
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
