import React from 'react';
import { AppRegistry } from 'react-native';
import Splash from './components/Splash';
import Login from './components/Login';


export default class App extends React.Component {

  constructor(props) {
    super(props);
   
  }



  render() {

    var mainScreen =<Login /> 

    return mainScreen

  }


}


AppRegistry.registerComponent("rn-app", () => App)