import React, { Component } from 'react';
import {
  Image,
  View,
  Text,
  TextInput,
  StyleSheet,
  Alert,
  TouchableOpacity,
  AsyncStorage,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { createStackNavigator, NavigationActions, StackActions } from 'react-navigation';
import HomePage from './HomePage';
import RegisterPage from './RegisterPage';
import Axios from 'axios';
class Login extends Component {

  constructor(props) {
    super(props)
    this.state = {
      tel: '',
      password: '',
    }
  }

  componentDidMount() {
    // this.callAlert("Notice", "Email: johndoe@gmail.com | Password: 123456", null)
  }

  handleSubmit = () => {
    //const { navigation } = this.props;
   // this.props.navigation.navigate('App');
   console.log('teel '+this.state.tel);
   console.log('pass '+this.state.password);
      var url = 'https://roadinspector.herokuapp.com/auth/login';
      Axios.post(
        url,
        {},
        {
          // headers: { 'Access-Control-Allow-Origin': '*' },
          data: {
            tel: this.state.tel,
            password: this.state.password,
          },
        }
      )
        .then((res) => {
          //AsyncStorage.setItem('jwt', data.token);
          // AsyncStorage.setItem('jwt',res.data.token);
          // console.log('token onboarding', res.data);

          // AsyncStorage.setItem('imei', res.data.imei);
           AsyncStorage.setItem('firstName', res.data.firstName);
           AsyncStorage.setItem('token', res.data.token);
           console.log('token  '+res.data.token);
           console.log('token  '+res.data.firstName);

this.navigateToHomePage();         // alert('secccess connexion'+ res.data.token);
          //this.props.navigation.navigate('App');
          // this.setState({ loading: false });
        })
        .catch((error) => {
          alert('verifier votre numero Télephone et mot de passe');
         
        });
    
  };
  setEmail(tel) {
    this.setState({ tel })
  }

  setPassword(password) {
    this.setState({ password })
  }


  navigateToHomePage = () => {

    const resetAction = StackActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'HomePage' })
      ]
    });

    this.props.navigation.dispatch(resetAction);
  }


  navigateToRegisterPage = () => {
    this.props.navigation.navigate('RegisterPage');

  }


  auth() {
    if (this.state.email === '' || this.state.matricule === '') {
      // this.callAlert("Avertissement", "Veuillez remplir tous les champs svp", console.log("Erreur, champs vides"));
      this.navigateToHomePage()
    } else if (this.state.email === 'A' && this.state.password === 'A') {
      this.navigateToHomePage()
    } else {
      this.callAlert("Erreur", "Vos identifiants sont incorrects", console.log("Erreur, identifiants incorrects"));
    }
  }

  callAlert(title, message, func) {
    Alert.alert(
      title, message,
      [
        { text: 'OK', onPress: () => func },
      ],
      { cancelable: false }
    )
  }


  render() {
    const resizeMode = 'cover';
    const text = 'LOGIN';


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
              resizeMode,
            }}
            source={require('../assets/bg_app.png')}
          />

        </View>


        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            justifyContent: 'center',
          }}
        >
          <KeyboardAwareScrollView>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Image source={require('../assets/ri.jpg')} style={styles.image} />

              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 22,
                }}
              >
               connecter
              </Text>
            </View>

            <View style={styles.main}>
              <TextInput underlineColorAndroid='transparent' onChangeText={(text) => this.setEmail(text)} style={styles.input} placeholder="Télphone" />

              <TextInput underlineColorAndroid='transparent' onChangeText={(text) => this.setPassword(text)} style={styles.input} placeholder="Mot de passe" secureTextEntry={true} />

              <TouchableOpacity style={styles.buttonContainer} onPress={() =>  this.handleSubmit()} >
                <Text style={styles.buttonText}> SE CONNECTER </Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.buttonContainer2} onPress={() => this.navigateToRegisterPage()}>
                <Text style={styles.buttonText}> S'INSCRIR</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAwareScrollView>
        </View>



      </View>
    );
  }
}
const styles = StyleSheet.create({
  input: {
    height: 45,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    fontSize: 20,
    paddingLeft: 5,
    paddingRight: 5,
    backgroundColor: '#FFFFFF',
  },
  main: {
    margin: 20,
  },
  image: {
    marginBottom: 20,
    marginTop: 50,
    height: 80,
    width: 80,
    borderRadius :50

  },
  buttonContainer: {
    backgroundColor: '#5194ff',
    paddingVertical: 10,
    marginTop: 20,
    height: 50,
    borderRadius: 5
  },

  buttonContainer2: {
    backgroundColor: '#fcc358',
    paddingVertical: 10,
    marginTop: 20,
    height: 50,
    borderRadius: 5
  },

  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FFFFFF'
  },
  footer: {
    height: 30,
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 18,
    backgroundColor: 'gray',

  },
  copyright: {
    textAlign: 'center',
    margin: 20,
    fontSize: 14,
  },
});

export default LoginStack = createStackNavigator({
  Login: { screen: Login, navigationOptions: { headerTitle: "Tunisian-route-inspecteur" } },

  HomePage: {
    screen: HomePage, navigationOptions: { header: null }
  },

  RegisterPage: {
    screen: RegisterPage, navigationOptions: { headerTitle: "S'inscrir" }

  },


});
