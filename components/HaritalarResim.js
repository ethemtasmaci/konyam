import { View, Text, Image } from 'react-native'
import React from 'react'
import BuyutmeSvg from '../svg/BuyutmeSvg'

const HaritalarResim = () => {
    return (
        <>
            <View style={{
                marginTop: 20,
                width: '95%',
                height: 215,
                backgroundColor: '#FFFFFF',
                borderWidth: 1,
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
                        height: 20,
                        fontSize: 15,
                        fontFamily: 'Nunito Sans',
                        color: '#000',
                        backgroundColor: '#fff',
                        textAlign: 'center',
                        position: 'relative',
                        zIndex: 100,
                        position: 'absolute',
                        top: 11,
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

                </View>
            </View>
        </>
    )
}

export default HaritalarResim