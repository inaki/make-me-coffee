import React, {Component} from 'react';

import {
  Image,
  StyleSheet
} from 'react-native';

class ChemexImg extends Component {
  render() {
    return (
      <Image style={styles.device} source={require(`./img/chemexEmpty.png`)}/>
    );
  }
}

const styles = StyleSheet.create({
  device: {
    width: 90,
    height: 147,
    marginTop: 20,
    marginBottom: 20,
    alignSelf: 'center',
  }
});

export default ({fill}) => {
  if(fill) {
    return <Image style={styles.device} source={require(`./img/chemexFull.png`)}/>
  } else {
    return <Image style={styles.device} source={require(`./img/chemexEmpty.png`)}/>
  }
}
