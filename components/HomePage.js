import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity,SafeAreaView, ScrollView, Switch, AsyncStorage } from 'react-native';
import { Card, ListItem, Button } from 'react-native-elements'
import { createStackNavigator, NavigationActions, StackActions,createDrawerNavigator } from 'react-navigation';
import DrawerContainer from './DrawerContainer';
import MyPage1 from './MyPage1';
import MyPage2 from './MyPage2';
import MyPage3 from './MyPage3';
import MyPage4 from './MyPage4';
import MyPage5 from './MyPage5';
import MyPage6 from './MyPage6';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import Axios from 'axios';

let resizeMode = 'cover';


class HomePage extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isEnabled: false,
     
    }
    this.toggleSwitch = this.toggleSwitch.bind(this);
  }

  toggleSwitch = (value) => this.setState({isEnabled : value});
  handleSubmit = () => {
    //const { navigation } = this.props;
   // this.props.navigation.navigate('App');
   console.log('teel '+this.state.tel);
   console.log('pass '+this.state.password);
      var url = 'https://roadinspector.herokuapp.com/auth/reclamations';
      Axios.get(
        url,
        {},

        
      ).then((res) => {
          //AsyncStorage.setItem('jwt', data.token);
          // AsyncStorage.setItem('jwt',res.data.token);
          // console.log('token onboarding', res.data);

          // AsyncStorage.setItem('imei', res.data.imei);
          // AsyncStorage.setItem('num_telephone', res.data.num_telephone);
           AsyncStorage.setItem('token', res.data.token);
           
           console.log('token  '+res.data.token);

          //this.props.navigation.navigate('App');
          // this.setState({ loading: false });
        })
        .catch((error) => {
          alert(' ');
         
        });
    
  };

  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }

  render() {
    return (
      <SafeAreaView >
      <ScrollView>
      <View
        style={{
          flex: 1,
          backgroundColor: '#eee',
        }}
      >

        <View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
        >

        </View>

        <View style={styles.container}>
        <Card>
            <Card.Title>Dégradation route  </Card.Title>

      <Switch
        trackColor={{ false: "red", true: "green" }}
        thumbColor={this.state.isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        //onValueChange={this.toggleSwitch(!this.state.isEnabled)}
        value={this.state.isEnabled}
      />
 
            <Card.Divider/>
            <Card.Image   source={require('../assets/route.jpeg')}></Card.Image>
            <Card.Divider/>
              <Text style={{marginBottom: 10}}>
                dégradations d'une route et du trottoire dans notre quartier et mauvaise étatt du rue
                
              </Text>
              <Button
                // icon={<Icon name='code' color='#ffffff' />}
                buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                title='Détails' 
                onPress={this.navigateToScreen('MyPage1')}
                 />
            
          </Card>
          <Card>
            <Card.Title>Reclamation </Card.Title>
            <Switch
        trackColor={{ false: "red", true: "green" }}
        thumbColor={this.state.isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        //onValueChange={this.toggleSwitch(!this.state.isEnabled)}
        value={!this.state.isEnabled}
      />
            <Card.Divider/>
            <Card.Image   source={require('../assets/route2.jpeg')}></Card.Image>
            <Card.Divider/>
              <Text style={{marginBottom: 10}}>
               La pluie a endomager tot les rue de quartier ce qui rend le déplacement est diffecile
                
              </Text>
              <Button
                icon={<Icon name='code' color='#ffffff' />}
                buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                title='Détails'
                
                onPress={this.navigateToScreen('MyPage6')}/>
         
            
          </Card>




          <Card>
            <Card.Title>Reclamation rue msaken</Card.Title>
            <Switch
        trackColor={{ false: "red", true: "green" }}
        thumbColor={this.state.isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        //onValueChange={this.toggleSwitch(!this.state.isEnabled)}
        value={!this.state.isEnabled}
      />
            <Card.Divider/>
            <Card.Image   source={require('../assets/route3.jpeg')}></Card.Image>
            <Card.Divider/>
              <Text style={{marginBottom: 10}}>
                damage par pluie
                
              </Text>
              <Button
                // icon={<Icon name='code' color='#ffffff' />}
                buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                title='Détails' />
            
          </Card>
         
        </View>

      </View>
      </ScrollView>
    </SafeAreaView> 
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },


  card: {
    height: 350,
    alignSelf: 'stretch',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 100,
    borderRadius: 5
  },

  cardTitle: {
    fontSize: 22,
    color: '#000000',
    textAlign: 'center',
  },

  cardText: {
    fontSize: 18,
    color: 'grey',
  }


})

const HomeStack = createStackNavigator({

  HomePage: {
    screen: HomePage,
    navigationOptions: ({ navigation }) => ({
      headerTitle: "Acceuil",
      headerLeft: <View><TouchableOpacity onPress={() => { navigation.toggleDrawer() }}><Icon name='menu' size={35} /></TouchableOpacity></View>
    })
  },

});


const DrawerStack = createDrawerNavigator({
  HomePage: { screen: HomeStack },
  MyPage1: { screen: MyPage1 },
  MyPage2: { screen: MyPage2 },
  MyPage3: { screen: MyPage3 },
  MyPage4: { screen: MyPage4 },
  MyPage5: { screen: MyPage5 },
  MyPage6: { screen: MyPage6 },

},
  {
    gesturesEnabled: false,
    contentComponent: DrawerContainer
  })


export default DrawerStack
