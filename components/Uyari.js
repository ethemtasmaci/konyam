import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React from 'react'
import AnasayfaK from '../src/AnasayfaK'

const Uyari = () => {
    const navigation = useNavigation();

    const handleMenuPress = (screenName) => {
        navigation.navigate(screenName); // İlgili sayfaya yönlendir
    };
    return (
        <>
            <View style={{
                width: '100%'
            }}>
                <TouchableOpacity onPress={() => handleMenuPress('AnasayfaK')}>
                    <View style={{
                        width: '100%',
                        height: '100%',
                        backgroundColor: '#000',
                        opacity: 0.18,
                        zIndex: 1,
                        position: 'relative'
                    }}>
                        <AnasayfaK />
                    </View>
                </TouchableOpacity>
                <View style={{
                    marginTop: '143%',
                    width: '100%',
                    height: 305,
                    backgroundColor: '#fff',
                    borderTopLeftRadius: 11,
                    borderTopRightRadius: 11,
                    zIndex: 100,
                    position: 'absolute'
                }}>
                    <View style={{
                        marginLeft: 25,
                        marginRight: 25
                    }}>
                        {/* bu kısım sürekleme kısmı buna basılı tutan kullanıcı bu kısımı alt tarafa doğru sürükleye bilecek */}
                        <View style={{
                            width: 85,
                            height: 5,
                            backgroundColor: '#F2F2F2',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            top: 20
                        }} />
                        <Text style={{
                            color: '#8CB75E',
                            fontFamily: 'Nunito Sans',
                            fontSize: 21,
                            marginTop: 40,
                            marginBottom: 10,
                        }}>Bilgi</Text>
                        <Text style={{
                            color: '#000',
                            fontFamily: 'Nunito Sans',
                            fontSize: 14,
                            marginBottom: 20,
                        }}>İçerik gönderebilmek için uygulamaya kayıt olmalı ve kullanıcı girişi yapmalısınız.</Text>

                        <TouchableOpacity onPress={() => handleMenuPress('GirisYap')}>
                            <View style={{
                                width: '100%',
                                height: 55,
                                backgroundColor: '#8CB75E',
                                borderRadius: 8,
                                marginLeft: 'auto',
                                marginRight: 'auto',
                            }}>
                                <Text style={{
                                    color: '#fff',
                                    textAlign: 'center',
                                    fontFamily: 'Nunito Sans',
                                    fontSize: 18,
                                    fontWeight: 'regular',
                                    marginTop: 12
                                }}>Giriş Yap</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => handleMenuPress('KayitOl')}>
                            <View style={{
                                width: '100%',
                                height: 55,
                                backgroundColor: '#fff',
                                borderColor: '#000',
                                borderWidth: 2,
                                borderRadius: 8,
                                marginLeft: 'auto',
                                marginRight: 'auto',
                                marginTop: 10
                            }}>
                                <Text style={{
                                    color: '#000',
                                    textAlign: 'center',
                                    fontFamily: 'Nunito Sans',
                                    fontSize: 18,
                                    fontWeight: 'regular',
                                    marginTop: 12
                                }}>Yeni Hesap Oluştur</Text>
                            </View>
                        </TouchableOpacity>

                    </View>
                </View>
            </View>
        </>
    )
}

export default Uyari