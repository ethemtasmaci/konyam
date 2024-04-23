import { View, Text, TouchableOpacity, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React from 'react'

const ParolaUnuttumSon = () => {
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

                <Image style={{ height: 220, width: 180, marginLeft: 'auto', marginRight: 'auto', marginTop: 90 }} source={require('../img/HesapBasarili.png')} />

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
                    >Parolanız başarıyla
                        değiştirildi.</Text>

                    <Text style={{
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        color: '#B9B9B9',
                        fontFamily: 'Poppins',
                        fontSize: 16,
                        fontWeight: 'light',
                        marginTop: 30,
                        textAlign: 'center',
                    }}>Yeni parolanız ile giriş yaparak <Text style={{ color: '#8CB75E' }}>konyam.app</Text>'in benzersiz özelliklerinden yararlanmaya devam edebilirsiniz.</Text>


                    <TouchableOpacity onPress={() => handleMenuPress('GirisYap')}>
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
                                Giriş Yap
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
}

export default ParolaUnuttumSon