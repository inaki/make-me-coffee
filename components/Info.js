import React, {Component} from 'react';

import {
  ScrollView,
  TouchableWithoutFeedback,
  Text,
  View,
  Image,
  StyleSheet
} from 'react-native';

class Info extends Component {
  render() {
    return (
      <ScrollView style={styles.infoContent}>

      <TouchableWithoutFeedback style={styles.button} onPress={() => this.props.navigator.pop()}>
        <View style={styles.backBtnView}>
          <Image style={styles.backBtn} source={require('./img/backBtn.png')}/>
        </View>
      </TouchableWithoutFeedback>

        <Text style={styles.mainTitle}> Brewing Info </Text>

        <View style={styles.deviceContent}>
          <Image style={styles.deviceChemex} source={require('./img/chemexFull.png')}/>
          <View style={styles.textContent}>
            <Text style={styles.titleText}>
              Chemex
            </Text>
            <Text style={styles.description}>
              The Chemex is a pour-over method for making coffee. To use, first wet your filter, then add your grounds. Discard the water used to wet the filter. Pour a little bit of water on the grounds to let them ‘bloom’. This releases the CO2. After about 60 seconds, when you notice the air is released, add the rest of the water to the grounds, wetting them evenly.
            </Text>
          </View>
        </View>

        <View style={styles.deviceContent}>
          <View style={styles.textContent}>
            <Text style={styles.titleText}>
              French Press
            </Text>
            <Text style={styles.description}>
              The French Press (or press pot) is an immersion brewing method. To brew, first pour some hot water into the French Press to warm it up. Then add your coarsely ground coffee. Add about 10% of the total amount of water on the grounds to let them bloom for a few seconds. Stir, and then add the rest of the water. Press the plunger until the grounds are submerged. Let the coffee steep for 3:45 - 4:00 minutes until pressing the plunger all the way and serving your coffee.
            </Text>
          </View>
          <Image style={styles.deviceFrench} source={require('./img/frenchFull.png')}/>
        </View>

        <View style={styles.deviceContent}>
          <Image style={styles.deviceDrip} source={require('./img/dripFull.png')}/>
          <View style={styles.textContent}>
            <Text style={styles.titleText}>
              Drip Machine
            </Text>
            <Text style={styles.description}>
              Auto-Drip coffee is a drip brew method, which is similar to pour-over, except automated. To get the best cup of coffee with an auto-drip coffee maker, use fresh coffee and grind it to fine or medium grain right before you make it, with a burr grinder. Filtered water will also improve your cup. In general you want to do 1 or 2 tablespoons of ground coffee per six ounces of water. Depending on your taste, you may want to increase or decrease these amounts.
            </Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  backBtnView: {
    width: 50,
    height: 50,
    marginTop: 30,
    marginLeft: 15,
    padding: 10
  },
  backBtn: {
    width: 20,
    height: 20
  },
  mainTitle: {
    width: 240,
    alignSelf: 'center',
    fontSize: 40,
    marginTop: -55,
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
  description: {
    textAlign: 'justify'
  },
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
