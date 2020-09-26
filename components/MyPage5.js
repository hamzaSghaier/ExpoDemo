import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity,Dimensions } from 'react-native';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import { createStackNavigator } from 'react-navigation'
import MapView from 'react-native-maps';


class MyPage5 extends Component {
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
          
        <MapView style={styles.mapStyle} />
      </View>



        

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    mapStyle: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
      },

    text: {
        margin: 30,
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#34495e',
    }

});


export default Page5Stack = createStackNavigator({

    MyPage5: {
        screen: MyPage5,
        navigationOptions: ({ navigation }) => ({
            headerTitle: "My Page 5",
            headerLeft: <View><TouchableOpacity onPress={() => { navigation.toggleDrawer() }}><Icon name='menu' size={35} /></TouchableOpacity></View>
        })
    },

});