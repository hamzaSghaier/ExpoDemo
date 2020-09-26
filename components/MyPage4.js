import React, { Component } from 'react';
import {  View, StyleSheet, Image, TouchableOpacity,Platform ,TextInput,SafeAreaView, ScrollView, AsyncStorage} from 'react-native';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import { createStackNavigator } from 'react-navigation'
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import { Input,Button,Text } from 'react-native-elements';
import { Card, CardItem, Body } from "native-base";
import MapView from 'react-native-maps';
import PopUpEchec from './PopUpEchec';
import Axios from 'axios';



class MyPage4 extends Component {

  state = {
    image: null,
 
 
      showAlertEchec: false,
      popUpContent: '',
  


  };



  handleSubmit = () => {
    //const { navigation } = this.props;
   // this.props.navigation.navigate('App');
   console.log('teel '+this.state.tel);
   console.log('pass '+this.state.password);
      var url = 'https://roadinspector.herokuapp.com/auth/reclamations';
      Axios.post(
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
  showAlert = () => {

      this.setState({
        showAlertEchec: true
      });


  };


  componentDidMount() {
    this.getPermissionAsync();
  }

  getPermissionAsync = async () => {
    if (Platform.OS !== 'web') {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  };

  _pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result.cancelled) {
        this.setState({ image: result.uri });
      }

      console.log(result);
    } catch (E) {
      console.log(E);
    }
  };





  render() {
    let { image } = this.state;
    
    return (
      <SafeAreaView >
      <ScrollView>

     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

<Text h3 style={{ marginBottom:50 }}>Informations</Text>
        <Input
        inputContainerStyle={{borderColor:'blue'}}
        label="Titre"
          placeholder='titre de réclamation'
        />
          <Input
          label="Description"
          style={{height:100,textAlignVertical: "top"}}
          placeholder='Décrire votre reclamation'
        />

        <Button   icon={
     <Icon
     name="camera"
     size={25}
     margin={20}
     color="white"
   />
  }
title="Ajouter des photos" onPress={this._pickImage}  />
       
       
        {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
        




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
  <MapView style={{ width: 200, height: 200 }} />
</Card>










        
        <Button
          icon={
            <Icon
              name="arrow-right"
              size={25}
              color="white"
            />
          }
         style={{ marginTop:25 }}
      title="Ajouter La Reclamation"
      onPress={() => {
        this.showAlert();
      }}
        />
     </View>
     <PopUpEchec
          popUpContent="Reclamation ajouter avec success"
          showpopUp={this.state.showAlertEchec}
          close={() => this.setState({ showAlertEchec: false })}
        ></PopUpEchec>
   
     </ScrollView>
    </SafeAreaView>  

   
    );
  }
}




const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    margin: 30,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  }
});


export default Page4Stack = createStackNavigator({

  MyPage4: {
    screen: MyPage4,
    navigationOptions: ({ navigation }) => ({
      headerTitle: "Ajout",
      headerLeft: <View><TouchableOpacity onPress={() => { navigation.toggleDrawer() }}><Icon name='menu' size={35} /></TouchableOpacity></View>
    })
  },

});
