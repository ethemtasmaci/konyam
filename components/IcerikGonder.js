import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React from 'react'

import AnasayfaG from '../src/AnasayfaG';
import SesliMesajSvg from '../svg/SesliMesajSvg';
import GorselSvg from '../svg/GorselSvg';
import VideoSvg from '../svg/VideoSvg';

const IcerikGonder = () => {
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
                            color: '#000',
                            fontFamily: 'Nunito Sans',
                            fontSize: 21,
                            marginTop: 40,
                            marginBottom: 10,
                        }}>İçerik Gönder</Text>
                        <Text style={{
                            color: '#000',
                            fontFamily: 'Nunito Sans',
                            fontSize: 14,
                            marginBottom: 20,
                            fontVariant: 'light'
                        }}>Çevrenizde gerçekleşen olayları bizimle paylaşarak uygulamayı kullanan diğer kullanıcıların da bu olaylardan haberdar olmasını sağlayabilirsiniz.</Text>

                        <View style={{
                            flexDirection: 'row'
                        }}>
                            <TouchableOpacity onPress={() => handleMenuPress('SesKayitGonder')} style={{
                                width: '32%',
                                height: 90,
                                backgroundColor: '#AAD879',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: 6,
                                marginRight: 10,
                            }}>
                                <SesliMesajSvg height={70} width={70} style={{ marginBottom: -12, marginTop: -10 }} />
                                <Text style={{
                                    color: '#fff',
                                    fontFamily: 'Nunito Sans',
                                    fontSize: 16,
                                    fontVariant: 'Regular'
                                }}>Ses Kaydı</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={{
                                width: '32%',
                                height: 90,
                                backgroundColor: '#68BED2',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: 6,
                                marginRight: 10,
                            }}>
                                <GorselSvg height={70} width={70} style={{ marginBottom: -12, marginTop: -10 }} />
                                <Text style={{
                                    color: '#fff',
                                    fontFamily: 'Nunito Sans',
                                    fontSize: 16,
                                    fontVariant: 'Regular'
                                }}>Fotoğraf</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={{
                                width: '32%',
                                height: 90,
                                backgroundColor: '#EC8787',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: 6,
                                marginRight: 10,
                            }}>
                                <VideoSvg height={70} width={70} style={{ marginBottom: -12, marginTop: -10 }} />
                                <Text style={{
                                    color: '#fff',
                                    fontFamily: 'Nunito Sans',
                                    fontSize: 16,
                                    fontVariant: 'Regular'
                                }}>Video</Text>
                            </TouchableOpacity>

                        </View>

                    </View>
                </View>
            </View>
        </>
    )
}

export default IcerikGonder