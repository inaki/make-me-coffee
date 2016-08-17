import React, {Component} from 'react';
const dismissKeyboard = require('dismissKeyboard');

import {
  TextInput,
  View,
  StyleSheet
} from 'react-native';

class OuncesInput extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.box}>
        <TextInput
          autoCapitalize='none'
          autoFocus={false}
          autoCorrect={false}
          onBlur={() => dismissKeyboard() }
          keyboardType='number-pad'
          style={styles.textInput}
          onChangeText={this.props.valsChange}
          placeholder='0'
          ref={this.props.clearThis}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  box: {
    borderBottomWidth: 3,
    borderColor: 'white',
    width: 50,
    alignSelf: 'center',
  },
  textInput: {
    fontSize: 26,
    width: 50,
    height: 30,
    textAlign: 'center',
  }
});


module.exports = OuncesInput;
