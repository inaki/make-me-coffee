import React, {Component} from 'react';

import {
  Image,
  View,
  StyleSheet,
  LayoutAnimation
} from 'react-native';

class DripImg extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    }
  }

  componentWillUpdate() {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
  }

  render() {
    const marTop = this.props.fill === true ? {marginTop: 0} : {marginTop: 40};
    return  (
      <View>
        <Image style={styles.device} source={require(`./img/dripEmpty.png`)}/>
        <View style={styles.tank}>
          <View style={[marTop, styles.fill]}></View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  device: {
    width: 103,
    height: 142,
    marginTop: 30,
    marginBottom: 15,
    alignSelf: 'center',
  },
  tank: {
    backgroundColor: 'transparent',
    alignSelf: 'center',
    marginTop: -71,
    marginLeft: 38,
    marginBottom: 49,
    width: 37,
    height: 22,
    overflow: 'hidden',
  },
  fill: {
    backgroundColor: 'black',
    alignSelf: 'center',
    marginLeft: 0,
    width: 40,
    height: 40,
  }
});

export default DripImg;
