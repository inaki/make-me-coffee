import React, {Component} from 'react';

import {
  Image,
  View,
  StyleSheet,
  LayoutAnimation
} from 'react-native';

class ChemexImg extends Component {
  constructor(props) {
    super(props);
  }

  componentWillUpdate() {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
  }

  render() {
    const marTop = this.props.fill === true ? {marginTop: 0} : {marginTop: 50};
    return  (
      <View>
        <View style={styles.tank}>
          <View style={[marTop, styles.fill]}></View>
        </View>
        <Image style={styles.device} source={require(`./img/chemexEmpty.png`)}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  device: {
    width: 90,
    height: 147,
    marginTop: -175,
    marginBottom: 16,
    alignSelf: 'center',
  },
  tank: {
    width: 84,
    height: 0,
    marginTop: 120,
    marginLeft: 82,
    marginBottom: 34,
    borderBottomWidth: 45,
    borderBottomColor: 'white',
    borderLeftWidth: 20,
    borderLeftColor: 'white',
    borderRightWidth: 20,
    borderRightColor: 'white',
    borderStyle: 'solid',
    overflow: 'hidden',
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  fill: {
    backgroundColor: 'black',
    alignSelf: 'center',
    marginLeft: 0,
    width: 80,
    height: 50,
  }
});

export default ChemexImg;
