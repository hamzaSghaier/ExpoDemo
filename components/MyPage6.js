import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity,SafeAreaView, ScrollView } from 'react-native';
import { Card, CardItem, Body } from "native-base";
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import MapView from 'react-native-maps';
import { ListItem, Avatar ,Input,Button} from 'react-native-elements';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { createStackNavigator, NavigationActions, StackActions } from 'react-navigation';





 

class MyPage6 extends Component {

  constructor(props) {
    super(props)
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
          dégradation d'une route 
            </Text>
          <Text style={styles.emailText}>
            26/09/2020
            </Text>

          <Card style={styles.card}>
            <CardItem>
              <Body>
                <Text style={styles.cardTitle}>
                 Auteur
                </Text>
                <Text style={styles.cardText}>
                  ahmed msakni
                </Text>
              </Body>
            </CardItem>
          </Card>

          <Card style={styles.card}>
            <CardItem>
              <Body>
                <Text style={styles.cardTitle}>
                  Déscription
                </Text>
                <Text style={styles.cardText}>
                La pluie a endomager tot les rue de quartier ce qui rend le déplacement est diffecile
                </Text>
              </Body>
            </CardItem>
          </Card>

          <Card style={styles.card}>

          <CardItem>
              <Body>
              <Text style={styles.cardTitle}>
                 Images
                </Text>
                
                

              </Body>
            </CardItem>
                <Image source={require('../assets/route2.jpeg')} style={{ width: 'auto', height: 200 }} />
          </Card>
          <Card style={styles.card}>

          <CardItem>
              <Body>
              <Text style={styles.cardTitle}>
                 Position
                </Text>
                <View style={styles.container2}>
          
          
        </View>  
                

              </Body>
            </CardItem>
            <MapView style={styles.mapStyle} />
          </Card>
          
 <Card   style={styles.card} >
 <Body>
              <Text style={styles.cardTitle}>
                 Commentaires
                </Text>
                
                

              </Body>

<View style={{flex: 1, flexDirection: 'row',width:240}}>
    <Input
        inputContainerStyle={{borderColor:'blue'}}
        
          placeholder='Répondre par commentaire'
        />
        <Button
      icon={
      <Icon
      name="arrow-right"
      size={15}
      color="white"
    />
  }
  title="ajouter"
/></View>
</Card>
                  
         

        </View>


      </View>

      

      </ScrollView>
      </SafeAreaView>
     
    );
  }

}

const styles = StyleSheet.create({

  container2: {
    flex: 1,
    backgroundColor: '#fff',

},
mapStyle: {
    width:'auto',
    height:200,
  },

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
    height: 'auto',
    alignSelf: 'stretch',
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 20
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
    fontWeight: 'bold',

  }

});

export default Page6Stack = createStackNavigator({

  MyPage6: {
    screen: MyPage6,
    navigationOptions: ({ navigation }) => ({
      headerTitle: "Détails Reclamation",
      headerLeft: <View><TouchableOpacity onPress={() => { navigation.toggleDrawer() }}><Icon name='menu' size={35} /></TouchableOpacity></View>
    })
  },

});