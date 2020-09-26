import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Card, CardItem, Body } from "native-base";
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import { createStackNavigator } from 'react-navigation'
import { Input,Button } from 'react-native-elements';





class MyPage3 extends Component {

  constructor(props) {
    super(props)
  }


  render() {

    return (

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

          <Image
            style={{
              flex: 1,
              resizeMode: 'cover',
            }}
            source={require('../assets/bg_app.png')}
          />

        </View>

        <View style={styles.container}>

         
          <Text style={styles.paragraph}>
           Compte
            </Text>
          <Text style={styles.emailText}>
            Yassine Guezgez
            </Text>
      <Button
          type="outline"
          icon={
            <Icon
              name="arrow-left"
              size={25}
              color="white"
            />
          }
      style={{ marginTop:20,backgroundColor:'red' }}
      title="Déconnecter"
        />

        </View>

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
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000000',
  },

  emailText: {
    fontSize: 16,
    color: '#000000',
    textAlign: 'center',
    marginBottom: 5,
  },

  card: {
    height: 80,
    alignSelf: 'stretch',
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 5
  },

  cardRegime: {
    height: 70,
    alignSelf: 'stretch',
    marginLeft: 20,
    marginRight: 20,
    alignItems: 'center',
  },

  cardProgress: {
    height: 170,
    alignSelf: 'stretch',
    marginLeft: 20,
    marginRight: 20,
    alignContent: 'center',
  },

  cardTitle: {
    fontSize: 18,
    color: '#000000'
  },

  cardText: {
    fontSize: 22,
    color: 'grey',
    fontWeight: 'bold'
  }

});

export default Page1Stack = createStackNavigator({

  MyPage3: {
    screen: MyPage3,
    navigationOptions: ({ navigation }) => ({
      headerTitle: "Mon Profile",
      headerLeft: <View><TouchableOpacity onPress={() => { navigation.toggleDrawer() }}><Icon name='menu' size={35} /></TouchableOpacity></View>
    })
  },

});