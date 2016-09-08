import React, { Component } from 'react';

import CoffeTabs from './components/CoffeeTabs';
import Info from './components/Info';

import {
  AppRegistry,
  Navigator,
  View
} from 'react-native';

class makeMeCoffee extends Component {
  renderScene(route, navigator) {
    switch (route.id) {
      case 'tab-bar':
        return <CoffeTabs navigator={navigator} />;
        break;
      case 'info':
        return <Info navigator={navigator}/>;
    }
  }

  render() {
    return (
      <Navigator
        ref="navigator"
        renderScene={this.renderScene}
    		initialRoute={{id: 'tab-bar'}}
				configureScene={(route) => {
      		return Navigator.SceneConfigs.FloatFromRight
        }}
			/>
    );
  }
}

AppRegistry.registerComponent('makeMeCoffee', () => makeMeCoffee);
