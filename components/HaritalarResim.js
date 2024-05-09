import { View, Text, Image } from 'react-native'
import React from 'react'
// import MapView from 'react-native-maps';
import BuyutmeSvg from '../svg/BuyutmeSvg'

const HaritalarResim = () => {
    return (
        <>
            <View style={{
                marginTop: 20,
                width: '95%',
                height: 215,
                backgroundColor: '#FFFFFF',
                borderWidth: 0.5,
                borderColor: '#E9E9E9',
                borderRadius: 11,
                marginLeft: 'auto',
                marginRight: 'auto'
            }}>
                <View style={{
                }}>

                    {/* bu kısımda ki kodlar üstte olacak  */}
                    <Text style={{
                        width: 125,
                        height: 30,
                        fontSize: 15,
                        fontFamily: 'Nunito Sans',
                        color: '#000',
                        backgroundColor: '#fff',
                        textAlign: 'center',
                        position: 'relative',
                        zIndex: 100,
                        position: 'absolute',
                        fontWeight: '500',
                        top: 10,
                        padding: 3
                    }}>Gündem <Text style={{ color: '#8CB75E' }}>Haritası</Text></Text>

                    <View style={{
                        width: 30,
                        height: 30,
                        backgroundColor: '#fff',
                        borderRadius: 5,
                        zIndex: 100,
                        position: 'absolute',
                        right: 25,
                        top: 20,
                    }}>
                        <BuyutmeSvg height={20} width={20} style={{ paddingTop: 30, marginLeft: 'auto', marginRight: 'auto' }} />
                    </View>

                    {/* bu kısımda ise resim altta kalacak  */}
                    <Image style={{
                        position: 'relative',
                        zIndex: 1,
                        height: '93%',
                        width: '95%',
                        borderRadius: 5,
                        marginTop: 10,
                        marginLeft: 8
                    }} source={require("../img/harita.png")} />

                    {/* <View>
                        <MapView
                            style={{
                                position: 'relative',
                                zIndex: 1,
                                height: '93%',
                                width: '95%',
                                borderRadius: 5,
                                marginTop: 10,
                                marginLeft: 8
                            }}
                            initialRegion={{
                                latitude: 37.78825,
                                longitude: -122.4324,
                                latitudeDelta: 0.0922,
                                longitudeDelta: 0.0421,
                            }}
                        />
                    </View> */}

                </View>
            </View >
        </>
    )
}

export default HaritalarResim