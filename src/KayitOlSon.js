import { View, Text, TouchableOpacity, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React from 'react'
import HesapBasariliSvg from '../svg/HesapBasariliSvg';

const KayitOlSon = () => {
    const navigation = useNavigation();

    const handleMenuPress = (screenName) => {
        navigation.navigate(screenName); // İlgili sayfaya yönlendir
    };
    return (
        <>
            <View style={{
                width: '100%',
                height: '100%',
                backgroundColor: '#fff',
                justifyContent: 'center'
            }}>

                <HesapBasariliSvg height={230} width={230} style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: 90 }} />

                <View style={{
                    width: '90%',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                }}>

                    <Text style={{
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        width: '70%',
                        fontFamily: 'Poppins',
                        color: '#000',
                        fontSize: 27,
                        textAlign: 'center',
                        marginTop: 100
                    }}
                    >Hesabınız başarıyla
                        oluşturuldu</Text>

                    <Text style={{
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        width: '100%',
                        color: '#B9B9B9',
                        fontFamily: 'Poppins',
                        fontSize: 16,
                        fontWeight: 'light',
                        marginTop: 30,
                        textAlign: 'center',
                    }}><Text style={{ color: '#8CB75E' }}>konyam.app</Text>'in ayrıcalıklarla dünyasını keşfetmeye hazır mısın?</Text>


                    <TouchableOpacity onPress={() => handleMenuPress('AnasayfaG')}>
                        <View style={{
                            marginTop: 150,
                            height: 60,
                            width: '100%',
                            borderRadius: 8,
                            backgroundColor: '#8CB75E',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Text style={{
                                color: '#fff',
                                fontFamily: 'Poppins',
                                fontSize: 18,
                                fontWeight: 'light',
                                textAlign: 'center'
                            }}>
                                Keşfetmeye Başla
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
}

export default KayitOlSon