import React, {Component} from 'react';
const dismissKeyboard = require('dismissKeyboard');

import ChemexImg from './ChemexImg';
import FrenchImg from './FrenchImg';
import DripImg from './DripImg';
import OuncesInput from './OuncesInput';
import Instructions from './Instructions';

import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  TabBarIOS,
  TouchableWithoutFeedback,
  View
} from 'react-native';

class CoffeTabs extends Component {
  constructor() {
    super();
    this.state = {
      selectedTab: 'chemexTab',
      ounces: '0',
      water: '',
      grains: '',
      fill: false
    }
  }

  clearText() {
		this._textInput.setNativeProps({text: ''});
  }

  setTab(tabId) {
    this.setState({selectedTab: tabId});
  }

  howMuchGrains = (grams) => {
    // how much grains you need for the coffee you want
    // values are in ounces
    var grains = grams * 0.07642698;
    return Math.round(grains);
  }

  howMuchWater = (grams) => {
    // how much grains you need for the coffee you want
    // values are in ouces
    var water = grams * 1.21989218;
    return Math.round(water);
  }

  ouncesToGrams = (ounces) => {
    // convert ounces to grams
    var grams = ounces * 28.3495;
    return Math.round(grams);
  }

  setValues = (ounces) => {
    ounces = ounces;
    let coffeeGrams = this.ouncesToGrams(ounces);
    grains = this.howMuchGrains(coffeeGrams);
    water = this.howMuchWater(coffeeGrams);
    fill = true;
    this.setState({ounces, water, grains, fill});
  }

  resetValues = () => {
    ounces = '0';
    firstPour = '';
    water = '';
    grains = '';
    fill = false;
    this.setState({ounces, firstPour, water, grains, fill});
  }

  render() {
    return (
      <TabBarIOS tintColor="lightseagreen" >

        <TabBarIOS.Item
          title="French"
          icon={require("image!frenchIcon")}
          selected={this.state.selectedTab === 'frenchTab'}
          onPress={ () => {this.setTab('frenchTab'); this.resetValues(); this.clearText();} }>
          <View style={styles.tabContent}>
            <TouchableWithoutFeedback onPress={dismissKeyboard}>
              <View style={styles.whole}>
                <View style={styles.infoBtn}>
                <TouchableWithoutFeedback onPress={() => this.props.navigator.push({id: 'info'})}>
                  <Image style={styles.btn} source={require('./img/mugIcon.png')}/>
                </TouchableWithoutFeedback>
                </View>
                <View style={styles.greenCircle}>
                  <FrenchImg fill={this.state.fill}/>
                  <OuncesInput ounces={this.state.ounces} valsChange={this.setValues} clearThis={component => this._textInput = component}/>
                </View>
                <View style={styles.instructions} >
                  <Instructions fill={this.state.fill} grains={this.state.grains} water={this.state.water}/>
                </View>
              </View>
            </TouchableWithoutFeedback>

          </View>
        </TabBarIOS.Item>

        <TabBarIOS.Item
          title="Chemex"
          icon={require("image!chemexIcon")}
          selected={this.state.selectedTab === 'chemexTab'}
          onPress={ () => {this.setTab('chemexTab'); this.resetValues(); this.clearText();} }>
          <View style={styles.tabContent}>
            <TouchableWithoutFeedback onPress={dismissKeyboard}>
              <View style={styles.whole}>
                <View style={styles.infoBtn}>
                  <TouchableWithoutFeedback onPress={() => this.props.navigator.push({id: 'info'})}>
                    <Image style={styles.btn} source={require('./img/mugIcon.png')}/>
                  </TouchableWithoutFeedback>
                </View>
                <View style={styles.greenCircle}>
                  <ChemexImg fill={this.state.fill}/>
                  <OuncesInput ounces={this.state.ounces} valsChange={this.setValues} clearThis={component => this._textInput = component}/>
                </View>
                <View style={styles.instructions} >
                  <Instructions fill={this.state.fill} grains={this.state.grains} water={this.state.water}/>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TabBarIOS.Item>

        <TabBarIOS.Item
          title="Drip"
          icon={require("image!dripIcon")}
          selected={this.state.selectedTab === 'dripTab'}
          onPress={ () => {this.setTab('dripTab'); this.resetValues(); this.clearText();} }>
          <View style={styles.tabContent}>
            <TouchableWithoutFeedback onPress={dismissKeyboard}>
              <View style={styles.whole}>
                <View style={styles.infoBtn}>
                <TouchableWithoutFeedback onPress={() => this.props.navigator.push({id: 'info'})}>
                  <Image style={styles.btn} source={require('./img/mugIcon.png')}/>
                </TouchableWithoutFeedback>
                </View>
                <View style={styles.greenCircle}>
                  <DripImg fill={this.state.fill}/>
                  <OuncesInput ounces={this.state.ounces} valsChange={this.setValues} clearThis={component => this._textInput = component}/>
                </View>
                <View style={styles.instructions} >
                  <Instructions fill={this.state.fill} grains={this.state.grains} water={this.state.water}/>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TabBarIOS.Item>

      </TabBarIOS>
    );
  }
}

const styles = StyleSheet.create({
  tabContent: {
    flex: 1
  },
  whole: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  greenCircle: {
    backgroundColor: 'green',
    alignSelf: 'center',
    width: 250,
    height: 250,
    backgroundColor: '#50E3C2',
    borderRadius: 150
  },
  infoBtn: {
    alignSelf: 'flex-end'
  },
  instructions: {
    marginBottom: 150,
    height: 200,
    paddingTop: 30
  },
  btn: {
    width: 45,
    height: 45,
    margin: 25,
  }
});

module.exports = CoffeTabs;
