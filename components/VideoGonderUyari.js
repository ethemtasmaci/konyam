import { View, Text, TouchableOpacity } from 'react-native'
import { RadioButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'


import FotografGonder from './FotografGonder'
import UyariSvg from '../svg/UyariSvg'
import VideoGonder from './VideoGonder';

const VideoGonderUyari = () => {
    const [value, setValue] = useState('');
    const navigation = useNavigation();

    const handleMenuPress = (screenName) => {
        navigation.navigate(screenName); // İlgili sayfaya yönlendir
    };
    return (
        <>
            <View style={{
                width: '100%',
                height: '100%'
            }}>
                <View style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    backgroundColor: '#000',
                    opacity: 0.2
                }}>
                    <VideoGonder />
                </View>
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    flex: 1,
                }}>
                    {/* üstten alttan ortalanacak kısım */}
                    <View style={{
                        backgroundColor: '#fff',
                        height: 320,
                        width: '94%',
                        borderRadius: 10,
                        position: 'relative',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>

                        <TouchableOpacity onPress={() => handleMenuPress('AnasayfaG')} style={{
                            marginLeft: 'auto',
                            backgroundColor: '#D6D6D6',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 50,
                            height: 40,
                            width: 40,
                            right: 15,
                        }}>
                            <Text style={{
                                fontSize: 12,
                            }}>
                                X
                            </Text>
                        </TouchableOpacity>

                        <UyariSvg height={50} width={50} style={{
                            marginBottom: 20
                        }} />

                        <Text style={{
                            color: '#000',
                            width: '100%',
                            fontSize: 18,
                            fontFamily: 'Nunito Sans',
                            fontWeight: '400',
                            textAlign: 'center',
                        }}>Mevcut üyelik seviyenizde tek seferde en fazla
                            <Text style={{ color: '#8CB75E' }}>  10 saniyelik</Text> video gönderebilirsiniz.</Text>
                        <TouchableOpacity onPress={() => handleMenuPress('VideoGonder')} style={{
                            width: 163,
                            height: 53,
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: '#8CB75E',
                            borderRadius: 26,
                            marginTop: 20
                        }}>
                            <Text style={{
                                color: '#fff',
                                fontSize: 16,
                                fontFamily: 'Poppins',
                                fontWeight: '400',
                            }}>Anladım</Text>
                        </TouchableOpacity>

                        <View>
                            <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
                                <View style={{ flexDirection: 'row', width: '100%', marginTop: 10 }}>
                                    <RadioButton.Item value="Onayli" color="#8CB75E" style={{ marginLeft: -15, marginRight: -15 }} />
                                    <Text style={{
                                        color: '#878787',
                                        fontSize: 14,
                                        fontFamily: 'Nunito Sans',
                                        marginTop: 16,
                                    }}>Bilgilendirme mesajını tekrar gösterme.</Text>
                                </View>
                            </RadioButton.Group>
                        </View>

                    </View>
                </View>
            </View>
        </>
    )
}

export default VideoGonderUyari