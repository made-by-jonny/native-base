import React from "react";
import Main from './views/main'
import Login from './views/login'
import { createStackNavigator, createAppContainer } from "react-navigation";



const AppNavigator = createStackNavigator({
  Home: {
    screen: Login
  },
  Main: {
    screen: Main
  }
});

export default createAppContainer(AppNavigator);
