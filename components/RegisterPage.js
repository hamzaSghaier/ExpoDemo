import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity, Switch } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import PopUpEchec from './PopUpEchec';

export default class RegisterPage extends Component {

    constructor() {
        super();
        this.state = {
       
      showAlertEchec: false,
      popUpContent: '',
  


  };


    }

    showAlert = () => {

        this.setState({
          showAlertEchec: true
        });
  
  
    };


    handleSubmit = () => {
        //const { navigation } = this.props;
       // this.props.navigation.navigate('App');
       console.log('teel '+this.state.tel);
       console.log('pass '+this.state.password);
          var url = 'https://roadinspector.herokuapp.com/auth/register';
          Axios.post(
            url,
            {},
            {
              // headers: { 'Access-Control-Allow-Origin': '*' },
              data: {
                tel: this.state.tel,
                password: this.state.password,
                firstName : name,
                lastName: lastName,	
                address: adr
              },
            }
          )
            .then((res) => {
              //AsyncStorage.setItem('jwt', data.token);
              // AsyncStorage.setItem('jwt',res.data.token);
              // console.log('token onboarding', res.data);
    
              // AsyncStorage.setItem('imei', res.data.imei);
              // AsyncStorage.setItem('num_telephone', res.data.num_telephone);
               AsyncStorage.setItem('token', res.data.token);
               console.log('token  '+res.data.token);
    
    this.navigateToHomePage();         // alert('secccess connexion'+ res.data.token);
              //this.props.navigation.navigate('App');
              // this.setState({ loading: false });
            })
            .catch((error) => {
              alert('verifier votre numero Télephone et mot de passe');
             
            });
        
      };











    toggleSwitch1 = (value) => {
        this.setState({ switch1Value: value })
        console.log('Switch 1 is: ' + value)
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
                                Veuillez vous inscrir s'il vous plait
                            </Text>
                        </View>

                        <View style={styles.main}>
                            <Text>Nom</Text>
                            <TextInput underlineColorAndroid='transparent' style={styles.input} />
                            <Text>prénom</Text>
                            <TextInput underlineColorAndroid='transparent' style={styles.input} />
                            <Text>Télephone</Text>
                            <TextInput underlineColorAndroid='transparent' style={styles.input} />
                            <Text>Adresse</Text>
                            <TextInput underlineColorAndroid='transparent' style={styles.input} />
                            <Text>Mot de passe</Text>
                            <TextInput underlineColorAndroid='transparent' style={styles.input} secureTextEntry={true} />
                            <Text>Confirmer Mot de passe</Text>
                            <TextInput underlineColorAndroid='transparent' style={styles.input} secureTextEntry={true} />
                            <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>


                            </View>
                            <TouchableOpacity style={styles.buttonContainer}  onPress={() => {
        this.showAlert();
      }} >
                                <Text style={styles.buttonText}> VALIDER </Text>
                            </TouchableOpacity>
                            <PopUpEchec
          popUpContent="Inscrire avec success"
          showpopUp={this.state.showAlertEchec}
          close={() => this.setState({ showAlertEchec: false })}
        ></PopUpEchec>
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
        borderRadius: 50

    },

    buttonContainer: {
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
