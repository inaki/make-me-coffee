import React, {Component} from 'react';
import ChemexImg from './ChemexImg';
import OuncesInput from './OuncesInput';

import {
  View,
  Image,
  StyleSheet
} from 'react-native';

class GreenInterface extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.greenCircle}>
        
        <OuncesInput valsChange={this.props.valsChange}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  greenCircle: {
    justifyContent: 'space-around',
    top: 100,
    width: 250,
    height: 250,
    backgroundColor: '#50E3C2',
    borderRadius: 150
  },
});

module.exports = GreenInterface;
