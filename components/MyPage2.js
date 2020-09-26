import React, { Component } from 'react';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import { createStackNavigator } from 'react-navigation'
import {  CardItem, Thumbnail, Left, Body } from 'native-base';
import { Text, View, StyleSheet, Image, TouchableOpacity,SafeAreaView, ScrollView, Switch } from 'react-native';
import { Card, ListItem, Button } from 'react-native-elements'

class MyPage2 extends Component {
  render() {
    return (
      <View style={styles.container}>


<Card>
            <Card.Title>Reclamation rue msaken</Card.Title>
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
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
  logo: {
    backgroundColor: "#056ecf",
    height: 128,
    width: 128,
  },

  card: {
    height: 350,
    alignSelf: 'stretch',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 100,
    borderRadius: 5
  },

});


export default Page2Stack = createStackNavigator({

  MyPage2: {
    screen: MyPage2,
    navigationOptions: ({ navigation }) => ({
      headerTitle: "Mes Reclamations",
      headerLeft: <View><TouchableOpacity onPress={() => { navigation.toggleDrawer() }}><Icon name='menu' size={35} /></TouchableOpacity></View>
    })
  },

});
