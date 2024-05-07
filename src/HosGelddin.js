import { View, Text, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React from 'react'

import CikisSvg from '../svg/CikisSvg'
import RutbeSvg from '../svg/RutbeSvg';
import PuanSvg from '../svg/PuanSvg';
import IceriklerinisSvg from '../svg/IceriklerinisSvg';
import ReklamVerinSvg from '../svg/ReklamVerinSvg';

const HosGeldin = () => {
    const navigation = useNavigation();

    const handleMenuPress = (screenName) => {
        navigation.navigate(screenName); // İlgili sayfaya yönlendir
    };
    return (
        <>
            <View style={{
                width: '100%',
                height: 100,
                backgroundColor: '#F6F6F6',
                left: 10,
                marginTop: -10,
                marginBottom: 3
            }}>
                <View style={{
                    width: '95%',
                    backgroundColor: '#fff',
                    flexDirection: 'row',
                }}>
                    <Text style={{
                        color: '#000',
                        fontFamily: 'Nunito Sans',
                        fontSize: 18,
                    }}>Hoş Geldin, <Text style={{ color: '#8CB75E', fontWeight: '600' }}>Ahmet Gökhan</Text></Text>
                    <CikisSvg style={{ marginLeft: 'auto', right: -45, marginTop: 5 }} height={15} width={15} />
                    <TouchableOpacity onPress={() => handleMenuPress('AnasayfaK')} style={{
                        marginTop: 2,
                        marginLeft: 'auto',
                    }}>
                        <Text style={{
                            color: '#9B9B9B',
                            right: 5
                        }}>Çıkış</Text>
                    </TouchableOpacity>
                </View>
                <View style={{
                    width: '100%',
                    height: 10,
                    backgroundColor: '#fff'
                }} />
                <View style={{
                    width: 3,
                    height: 58,
                    backgroundColor: '#8CB75E',
                    borderBottomLeftRadius: 12,
                    borderTopLeftRadius: 12
                }} />
                <View style={{
                    width: '95%',
                    height: 58,
                    backgroundColor: '#fff',
                    borderRadius: 6,
                    flexDirection: 'row'
                }}>

                    <View style={{
                        flexDirection: 'row',
                        top: -47,
                        left: 18,
                    }}>
                        <RutbeSvg />
                        <View style={{
                            left: 12,
                        }}>
                            <Text style={{
                                color: '#000',
                                fontFamily: 'Nunito Sans',
                                fontSize: 13,
                                fontWeight: 'light',
                            }}>Rütbe</Text>
                            <Text style={{
                                color: '#000',
                                fontFamily: 'Nunito Sans',
                                fontSize: 16,
                                fontWeight: '500'
                            }}>Çaylak</Text>
                        </View>
                        <View style={{
                            borderColor: '#DEDEDE',
                            borderWidth: 1,
                            height: 40,
                            left: 15,
                            marginLeft: 10
                        }} />
                    </View>


                    <View style={{
                        flexDirection: 'row',
                        top: -45,
                        left: 45,
                    }}>
                        <PuanSvg />
                        <View style={{
                            left: 12,
                        }}>
                            <Text style={{
                                color: '#000',
                                fontFamily: 'Nunito Sans',
                                fontSize: 13,
                            }}>Puan</Text>
                            <Text style={{
                                color: '#000',
                                fontFamily: 'Nunito Sans',
                                fontSize: 16,
                                fontWeight: '500'
                            }}>1.320</Text>
                        </View>
                        <View style={{
                            borderColor: '#DEDEDE',
                            borderWidth: 1,
                            height: 40,
                            left: 15,
                            marginLeft: 10
                        }} />
                    </View>

                    <View style={{
                        flexDirection: 'row',
                        top: -45,
                        left: 75,
                    }}>
                        <IceriklerinisSvg />
                        <View style={{
                            left: 10,
                        }}>
                            <Text style={{
                                color: '#000',
                                fontFamily: 'Nunito Sans',
                                fontSize: 13,
                            }}>İçerikleriniz</Text>
                            <Text style={{
                                color: '#000',
                                fontFamily: 'Nunito Sans',
                                fontSize: 16,
                                fontWeight: '500'
                            }}>125 adet</Text>
                        </View>
                    </View>

                </View>
            </View>
        </>
    )
}

export default HosGeldin