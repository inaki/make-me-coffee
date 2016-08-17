import React, {Component} from 'react';
const dismissKeyboard = require('dismissKeyboard');

import {
  Image,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  LayoutAnimation
} from 'react-native';

class FrenchImg extends Component {
  constructor(props) {
    super(props);
  }

  componentWillUpdate() {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
  }

  render() {
    const marTop = this.props.fill === true ? {marginTop: 0} : {marginTop: 40};
    return  (
      <TouchableWithoutFeedback onPress={dismissKeyboard}>
          <View>
              <Image style={styles.device} source={require(`./img/frenchEmpty.png`)}/>
              <View style={styles.tank}>
                <View style={[marTop, styles.fill]}></View>
              </View>
          </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  device: {
    width: 102,
    height: 147,
    marginTop: 20,
    marginLeft: 10,
    marginBottom: 20,
    alignSelf: 'center',
  },
  tank: {
    backgroundColor: 'transparent',
    alignSelf: 'center',
    marginTop: -73,
    marginLeft: -3,
    marginBottom: 33,
    width: 60,
    height: 40,
    overflow: 'hidden',
  },
  fill: {
    backgroundColor: 'black',
    alignSelf: 'center',
    marginLeft: 0,
    width: 60,
    height: 40,
  }
});

export default FrenchImg;
