import { View, Text } from 'react-native'
import React from 'react'
import FotografGonder from './FotografGonder'
import UyariSvg from '../svg/UyariSvg'

const FotografHataMesaji = () => {
    return (
        <>
            <View style={{
                position: 'absolute',
                zIndex: 1
            }}>
                <FotografGonder />
            </View>
            <View style={{
                width: '100%',
                height: '100%',
                backgroundColor: '#000',
                opacity: 0.5,
                zIndex: 50
            }}>
                <View style={{
                    height: 320,
                    width: 400,
                    backgroundColor: '#fff',
                    borderRadius: 10,
                    justifyContent: 'center',
                    position: 'relative',
                    zIndex: 100
                }}>
                    <UyariSvg height={40} width={40} style={{
                        marginRight: 'auto',
                        marginLeft: 'auto'
                    }} />
                    <Text style={{
                        fontFamily: 'Nunito Sans',
                        fontSize: 18,
                        color: '#000',
                    }}>Mevcut üyelik seviyenizde tek seferde en fazla <Text style={{ color: '#8CB75E' }}>3 adet</Text> fotoğraf gönderebilirsiniz.</Text>
                    <View style={{
                        width: 164,
                        height: 52,
                        backgroundColor: '#8CB75E',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <Text style={{
                            fontFamily: 'Nunito Sans',
                            fontSize: 16,
                            color: '#fff',
                        }}>Anladım</Text>
                    </View>
                </View>
            </View>
        </>
    )
}

export default FotografHataMesaji