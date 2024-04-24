import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity, Button } from 'react-native'

import AnasayfaG from '../src/AnasayfaG';
import SesliMesajSvg from '../svg/SesliMesajSvg';
import GorselSvg from '../svg/GorselSvg';
import VideoSvg from '../svg/VideoSvg';

const SesKayitGonder = () => {
    const navigation = useNavigation();

    const handleMenuPress = (screenName) => {
        navigation.navigate(screenName); // İlgili sayfaya yönlendir
    };

    return (
        <>
            <View style={{
                width: '100%'
            }}>
                <TouchableOpacity onPress={() => handleMenuPress('AnasayfaG')}>
                    <View style={{
                        width: '100%',
                        height: '100%',
                        backgroundColor: '#000',
                        opacity: 0.18,
                        zIndex: 1,
                        position: 'relative'
                    }}>
                        <AnasayfaG />
                    </View>
                </TouchableOpacity>
                <View style={{
                    marginTop: '66%',
                    width: '100%',
                    height: 625,
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
                            color: '#000',
                            fontFamily: 'Nunito Sans',
                            fontSize: 21,
                            marginTop: 40,
                            marginBottom: 10,
                        }}>Ses Kaydı Gönder</Text>
                        <Text style={{
                            color: '#000',
                            fontFamily: 'Nunito Sans',
                            fontSize: 14,
                            marginBottom: 20,
                            fontVariant: '400'
                        }}>Yaşadığınız olayın ses kaydını göndererek kullanıcıları bilgilendirebilirsiniz.
                            Mevcut üyelik seviyenizde tek seferde en fazla <Text style={{ color: '#8CB75E', fontWeight: 'bold' }}>10 saniyelik</Text> ses kayıtları gönderebilirsiniz.</Text>



                    </View>
                </View>
            </View>
        </>
    )
}

export default SesKayitGonder