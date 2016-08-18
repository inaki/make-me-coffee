import React, {Component} from 'react';
const dismissKeyboard = require('dismissKeyboard');

import {
  TextInput,
  Text,
  View,
  Alert,
  StyleSheet,
  LayoutAnimation
} from 'react-native';

class OuncesInput extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const lineStyle = () => {
      if(this.props.ounces <= 9) {
        return {width: 55};
      } else if (this.props.ounces <= 99) {
        return {width: 60};
      } else {
          Alert.alert('WTF?', 'That\'s too much coffee!');
          return {width: 70};
        }
      };
    return (
      <View style={styles.box}>
        <View style={[lineStyle(),styles.line]}>
          <Text style={styles.unit}>oz</Text>
        </View>
        <TextInput
          autoCapitalize='none'
          autoFocus={false}
          autoCorrect={false}
          onBlur={() => dismissKeyboard() }
          keyboardType='number-pad'
          style={styles.textInput}
          onChangeText={this.props.valsChange}
          placeholder='0'
          maxLength={3}
          ref={this.props.clearThis}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  box: {
    alignSelf: 'center',
  },
  textInput: {
    borderColor: 'transparent',
    fontFamily: 'Avenir Next',
    borderWidth: 2,
    marginTop: -25,
    fontSize: 26,
    width: 200,
    height: 80,
    textAlign: 'center',
  },
  line: {
    borderBottomColor: 'white',
    borderBottomWidth: 3,
    borderStyle: 'solid',
    left: 75,
    marginTop: 30,
    position: 'absolute'
  },
  unit: {
    color: 'white',
    fontFamily: 'Avenir Next',
    textAlign: 'right',
    marginTop: -20
  }
});


module.exports = OuncesInput;
