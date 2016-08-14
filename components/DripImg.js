import React, {Component} from 'react';

import {
  Image,
  StyleSheet
} from 'react-native';

class DripImg extends Component {
  render() {
    return (
      <Image style={styles.device} source={require(`./img/dripEmpty.png`)}/>
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
  }
});

export default ({fill}) => {
  if(fill) {
    return <Image style={styles.device} source={require(`./img/dripFull.png`)}/>
  } else {
    return <Image style={styles.device} source={require(`./img/dripEmpty.png`)}/>
  }
}
