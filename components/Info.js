import React, {Component} from 'react';

import {
  ScrollView,
  TouchableHighlight,
  Text,
  View,
  Image,
  StyleSheet
} from 'react-native';

class Info extends Component {
  render() {
    return (
      <ScrollView style={styles.infoContent}>

      <TouchableHighlight style={styles.button} onPress={() => this.props.navigator.pop()}>
        <Image style={styles.closeBtn} source={require('./img/backBtn.png')}/>
      </TouchableHighlight>

        <Text style={styles.mainTitle}> Brewing Info </Text>

        <View style={styles.deviceContent}>
          <Image style={styles.deviceChemex} source={require('./img/chemexFull.png')}/>
          <View style={styles.textContent}>
            <Text style={styles.titleText}>
              Chemex
            </Text>
            <Text style={styles.description}>
              The Chemex is a pour-over method for making coffee. For using a chemex, first you wet the filter, then add your grounds. Use a little bit of water to pour on the grounds to let them bloom. This releases the CO2. After about 60 seconds or you notice the air is no longer releasing, add the rest of the water to the grounds, wetting evenly.
            </Text>
          </View>
        </View>

        <View style={styles.deviceContent}>
          <View style={styles.textContent}>
            <Text style={styles.titleText}>
              Chemex
            </Text>
            <Text style={styles.description}>
              The Chemex is a pour-over method for making coffee. For using a chemex, first you wet the filter, then add your grounds. Use a little bit of water to pour on the grounds to let them bloom. This releases the CO2. After about 60 seconds or you notice the air is no longer releasing, add the rest of the water to the grounds, wetting evenly.
            </Text>
          </View>
          <Image style={styles.deviceFrench} source={require('./img/frenchFull.png')}/>
        </View>

        <View style={styles.deviceContent}>
          <Image style={styles.deviceDrip} source={require('./img/dripFull.png')}/>
          <View style={styles.textContent}>
            <Text style={styles.titleText}>
              Chemex
            </Text>
            <Text style={styles.description}>
              The Chemex is a pour-over method for making coffee. For using a chemex, first you wet the filter, then add your grounds. Use a little bit of water to pour on the grounds to let them bloom. This releases the CO2. After about 60 seconds or you notice the air is no longer releasing, add the rest of the water to the grounds, wetting evenly.
            </Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  closeBtn: {
    width: 20,
    height: 20,
    marginTop: 50,
    marginLeft: 15
  },
  mainTitle: {
    width: 250,
    alignSelf: 'center',
    fontSize: 40,
    marginTop: -35,
    marginBottom: 25,
    textAlign: 'center'
  },
  infoContent: {
    flex: 1,
    backgroundColor: '#efefef',
  },
  deviceContent: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 20,
    paddingBottom: 20,
  },
  textContent: {
    width: 200
  },
  titleText: {
    fontSize: 24,
    marginBottom: 16
  },
  description: {},
  deviceChemex: {
    width: 85,
    height: 140,
    alignSelf: 'center'
  },
  deviceFrench: {
    width: 97,
    height: 140,
    alignSelf: 'center'
  },
  deviceDrip: {
    width: 99,
    height: 140,
    alignSelf: 'center'
  }
});

module.exports = Info;
