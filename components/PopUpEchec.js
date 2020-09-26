import React, { Component } from 'react';
import {
    View,
    StyleSheet, Text, Modal, Image, TouchableOpacity, ScrollView,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


class PopUpEchec extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    componentDidMount() {
    }
    close = () => {
        this.props.close();
    }
    submit = () => {
        this.props.submit() ;
    }
    render() {
        
        let { showpopUp, popUpContent ,selectedMnt} = this.props;
         //popUpContent = "Réclamation Ajouter avec success";


        return (
            <Modal animationType="fade" transparent={true} visible={showpopUp} >
                <View style={{ flex: 1, backgroundColor: '#5558609c', borderTopWidth: 1, borderColor: '#3c3c3c00', alignContent: "center", justifyContent: "center", alignItems: "center" }}>

                    <View style={styles.container}>
                  
<View style={{ justifyContent: 'center', alignItems: 'center' }} >
                            <Image source={require("../assets/success.png")} style={{ width: 80, height: 80 }} />
                            <Text style={{ color: '#555', fontSize: 15, borderRadius: 10, textAlign: "center", padding: 10 }}></Text>
                        </View>

                            <Text style={{ color: 'black', fontSize: 16, borderRadius: 10, textAlign: "center", padding: 10 }}>{popUpContent}</Text>

                        <View style={{flexDirection: "row",justifyContent: 'center', alignItems: 'center' }}>
                        <View style={styles.footer}>

                            <TouchableOpacity style={[styles.btn]} onPress={() => {
                                this.close()
                            }}>
                    <LinearGradient
                            // Background Linear Gradient
                            colors={['blue', '#00C6FB']}
                            start={[1.9, 0.1]}
                            style={{
                                position: 'absolute',
                                borderRadius : 11 ,
                                left: 0,
                                right: 0,
                                top: 0,
                                height: "100%",
                            }}
                        />
                        <Text style={{ fontSize: 18, color: "#fff" }} >Ok</Text>
                            </TouchableOpacity>
                        </View>
                      
                        </View>
                    </View>
                </View>

            </Modal>
        );
    }
}
export default PopUpEchec


const styles = StyleSheet.create({
    container: {
        borderRadius: 8,
        flexDirection: "column",
        width: 300,
        height: 250,
        paddingTop: 10,
        // margin: 20,
        borderWidth: 1,
        borderColor: "white",
        backgroundColor: "#fff",
    },
    amenIcon: {
        width: 60,
        height: 60,
        alignSelf: "center",
        marginTop: -40,
        borderRadius: 30
    },
    footer: {
        height: 50,
        width: '40%',
        alignSelf: "flex-start",
        
    },
    footer2: {
        height: 50,
        width: 90,
        alignSelf: "flex-start",
    },
    btn: {
        flex: 1,
        margin : 5 ,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7,
    },
    btnF: {
        flex: 1,
        backgroundColor: "#fff",
        margin : 5 ,
        borderWidth : 0,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7,
  
    },
});
