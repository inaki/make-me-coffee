import React, {Component} from 'react';

import {
  Image,
  StyleSheet
} from 'react-native';

class FrenchImg extends Component {
  render() {
    return (
      <Image style={styles.device} source={require(`./img/frenchEmpty.png`)}/>
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
  }
});

export default ({fill}) => {
  if(fill) {
    return <Image style={styles.device} source={require(`./img/frenchFull.png`)}/>
  } else {
    return <Image style={styles.device} source={require(`./img/frenchEmpty.png`)}/>
  }
}
