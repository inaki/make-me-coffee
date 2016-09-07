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
    const instructionStyle = this.props.fill === true ? {marginTop: 0} : {marginTop: 40};
    const instructionTextStyle = this.props.fill === true ? {color: 'black'} : {color: 'transparent'};
    const questionStyle = this.props.fill === false ? {marginTop: -20} : {position: 'absolute'};
    const questionTextStyle = this.props.fill === false ? {} : {color: 'transparent'};
    return (
      <TouchableWithoutFeedback onPress={dismissKeyboard}>
        <View style={instructionStyle}>
          <View style={questionStyle}>
            <Text style={[questionTextStyle,styles.questionText]}>How much Coffee do you want?</Text>
          </View>
          <Text style={[instructionTextStyle, styles.instructionsText]}>{this.props.grains}g<Text style={styles.lightFont}> of coffee</Text></Text>
          <Text style={[instructionTextStyle, styles.instructionsText]}>{this.props.water}g<Text style={styles.lightFont}> of water</Text></Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  questionText: {
    alignSelf: 'center',
    textAlign: 'center',
    fontFamily: 'Avenir Next',
    width: 200,
    fontSize: 30
  },
  instructionsText: {
    textAlign: 'center',
    fontWeight: '600',
    fontFamily: 'Avenir Next',
    fontSize: 28,
    lineHeight: 42
  },
  lightFont: {
    fontWeight: 'normal'
  },
  boldFont: {
    fontWeight: '600'
  }
});

module.exports = Instructions;
