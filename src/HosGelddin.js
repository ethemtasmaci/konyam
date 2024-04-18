import { View, Text, Image } from 'react-native'
import React from 'react'
import CikisSvg from '../svg/CikisSvg'

const HosGelddin = () => {
    return (
        <>
            <View style={{
                width: '93%',
                height: 100,
                marginLeft: 'auto',
                marginRight: 'auto'
            }}>
                <View style={{
                    flexDirection: 'row'
                }}>
                    <Text style={{
                        color: '#000',
                        fontFamily: 'Nunito Sans',
                        fontSize: 18,
                    }}>Hoş Geldin, <Text style={{ color: '#8CB75E', fontWeight: '600' }}>Ahmet Gökhan</Text></Text>
                    <CikisSvg style={{ marginLeft: 'auto', right: -45, marginTop: 5 }} height={15} width={15} />
                    <Text style={{
                        color: '#9B9B9B',
                        marginTop: 2,
                        marginLeft: 'auto',
                        right: 10
                    }}>Çıkış</Text>
                </View>
                <View style={{
                    width: 3,
                    height: 58,
                    backgroundColor: '#8CB75E',
                    marginTop: 5
                }} />
                <View style={{
                    width: '100%',
                    height: 58,
                    backgroundColor: '#F6F6F6',
                    borderRadius: 6,
                    flexDirection: 'row'
                }}>
                    <View style={{
                        flexDirection: 'row',
                        top: -47,
                        left: 18,
                    }}>
                        <Image style={{}} source={require("../img/rutbe.png")} />
                        <View style={{
                            left: 12,
                        }}>
                            <Text style={{
                                fontFamily: 'Nunito Sans',
                                fontSize: 13,
                                fontWeight: 'light'
                            }}>Rütbe</Text>
                            <Text style={{
                                fontFamily: 'Nunito Sans',
                                fontSize: 16,
                                fontWeight: '700'
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
                        <Image style={{}} source={require("../img/puan.png")} />
                        <View style={{
                            left: 12,
                        }}>
                            <Text style={{
                                fontFamily: 'Nunito Sans',
                                fontSize: 13,
                                fontWeight: 'light'
                            }}>Puan</Text>
                            <Text style={{
                                fontFamily: 'Nunito Sans',
                                fontSize: 16,
                                fontWeight: '700'
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
                        <Image style={{}} source={require("../img/icerik.png")} />
                        <View style={{
                            left: 12,
                        }}>
                            <Text style={{
                                fontFamily: 'Nunito Sans',
                                fontSize: 13,
                                fontWeight: 'light'
                            }}>İçerikleriniz</Text>
                            <Text style={{
                                fontFamily: 'Nunito Sans',
                                fontSize: 16,
                                fontWeight: '700'
                            }}>125 adet</Text>
                        </View>
                    </View>

                </View>
            </View>
        </>
    )
}

export default HosGelddin