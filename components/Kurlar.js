import { View, Text, Image } from 'react-native'
import React from 'react'

const Kurlar = () => {
    return (
        <View style={{
            width: '100%',
            height: 180,
            backgroundColor: '#F6F6F6',

        }}>

            <View style={{
                marginLeft: 'auto',
                marginRight: 'auto',
                flexDirection: 'row',
            }}>


                <View style={{
                    marginTop: 30,
                    width: 95,
                    height: 122,
                    backgroundColor: '#fff',
                    marginRight: 6
                }}>
                    <View style={{
                        borderTopLeftRadius: 6,
                        borderTopRightRadius: 6,
                        width: 95,
                        height: 5,
                        backgroundColor: '#8CB75E'
                    }} />
                    <Image style={{
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        marginTop: 12
                    }} source={require("../img/DolarImg.png")} />

                    <Text style={{
                        fontSize: 12,
                        fontFamily: 'Poppins',
                        fontWeight: 'bold',
                        marginTop: 12,
                        textAlign: 'center'
                    }}> DOLAR </Text>

                    <Text style={{
                        fontSize: 20,
                        fontFamily: 'Poppins',
                        fontWeight: 'bold',
                        textAlign: 'center'
                    }}> 30.50 </Text>

                    <Text style={{
                        fontSize: 12,
                        fontFamily: 'Poppins',
                        fontWeight: 'bold',
                        textAlign: 'center'
                    }}> TÜRK LİRASI </Text>

                </View>


                <View style={{
                    marginTop: 30,
                    width: 95,
                    height: 122,
                    backgroundColor: '#fff',
                    marginRight: 6
                }}>
                    <View style={{
                        borderTopLeftRadius: 6,
                        borderTopRightRadius: 6,
                        width: 95,
                        height: 5,
                        backgroundColor: '#D97070'
                    }} />
                    <Image style={{
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        marginTop: 12
                    }} source={require("../img/Euro.png")} />

                    <Text style={{
                        fontSize: 12,
                        fontFamily: 'Poppins',
                        fontWeight: 'bold',
                        marginTop: 12,
                        textAlign: 'center'
                    }}> EURO </Text>

                    <Text style={{
                        fontSize: 20,
                        fontFamily: 'Poppins',
                        fontWeight: 'bold',
                        textAlign: 'center'
                    }}> 30.50 </Text>

                    <Text style={{
                        fontSize: 12,
                        fontFamily: 'Poppins',
                        fontWeight: 'bold',
                        textAlign: 'center'
                    }}> TÜRK LİRASI </Text>

                </View>

                <View style={{
                    marginTop: 30,
                    width: 95,
                    height: 122,
                    backgroundColor: '#fff',
                    marginRight: 6
                }}>
                    <View style={{
                        borderTopLeftRadius: 6,
                        borderTopRightRadius: 6,
                        width: 95,
                        height: 5,
                        backgroundColor: '#FFBC57'
                    }} />
                    <Image style={{
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        marginTop: 12
                    }} source={require("../img/Altin.png")} />

                    <Text style={{
                        fontSize: 12,
                        fontFamily: 'Poppins',
                        fontWeight: 'bold',
                        marginTop: 12,
                        textAlign: 'center'
                    }}> GRAM ALTIN </Text>

                    <Text style={{
                        fontSize: 20,
                        fontFamily: 'Poppins',
                        fontWeight: 'bold',
                        textAlign: 'center'
                    }}> 1.193,43 </Text>

                    <Text style={{
                        fontSize: 12,
                        fontFamily: 'Poppins',
                        fontWeight: 'bold',
                        textAlign: 'center'
                    }}> TÜRK LİRASI </Text>

                </View>

                <View style={{
                    marginTop: 30,
                    width: 95,
                    height: 122,
                    backgroundColor: '#fff',
                    marginRight: 6
                }}>
                    <View style={{
                        borderTopLeftRadius: 6,
                        borderTopRightRadius: 6,
                        width: 95,
                        height: 5,
                        backgroundColor: '#5EA5B7'
                    }} />
                    <Image style={{
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        marginTop: 12
                    }} source={require("../img/Borsa.png")} />

                    <Text style={{
                        fontSize: 12,
                        fontFamily: 'Poppins',
                        fontWeight: 'bold',
                        marginTop: 12,
                        textAlign: 'center'
                    }}> DOLAR </Text>

                    <Text style={{
                        fontSize: 20,
                        fontFamily: 'Poppins',
                        fontWeight: 'bold',
                        textAlign: 'center'
                    }}> 8.665,68 </Text>

                    <Text style={{
                        fontSize: 12,
                        fontFamily: 'Poppins',
                        fontWeight: 'bold',
                        textAlign: 'center'
                    }}> TÜRK LİRASI </Text>

                </View>

            </View>
        </View>
    )
}

export default Kurlar