import { View, Text } from 'react-native'
import React from 'react'
import SesliMesajSvg from '../svg/SesliMesajSvg'
import DinleSvg from '../svg/DinleSvg'
import VideoSvg from '../svg/VideoSvg'
import GorselSvg from '../svg/GorselSvg'
import GorSvg from '../svg/GorSvg'

const ListGorunumu = () => {
    return (
        <>
            <View style={{
                marginTop: 15,
                width: '100%',
                height: 225,
                backgroundColor: '#FFFFFF',
                borderWidth: 1,
                borderColor: '#E9E9E9',
                borderRadius: 11,
                marginLeft: 'auto',
                marginRight: 'auto'
            }}>

                <View style={{
                    marginTop: 10,
                    left: 15,
                    flexDirection: 'row'
                }}>
                    <SesliMesajSvg height={60} width={60} />

                    <View style={{
                        marginLeft: 10
                    }}>
                        <Text style={{
                            fontFamily: 'Nunito Sans',
                            fontSize: 15,
                            color: '#000',
                            fontWeight: '600',
                            width: '70%'
                        }}>
                            Hırsızlık
                        </Text>
                        <Text style={{
                            fontFamily: 'Nunito Sans',
                            fontSize: 13,
                            color: '#000',
                            fontWeight: '200',
                            width: '70%'
                        }}>
                            Akçeşme Mah. Garaj Cad. No: 5
                            Karatay/KONYA
                        </Text>
                    </View>

                    <View style={{
                        width: 60,
                        height: 25,
                        backgroundColor: '#AAD879',
                        borderRadius: 12,
                        right: 45,
                        top: 16,
                        flexDirection: 'row'
                    }}>
                        <DinleSvg height={12} width={12} style={{
                            marginLeft: 8,
                            marginRight: 5,
                            marginTop: 6
                        }} />
                        <Text style={{ color: '#fff', marginTop: 2, fontSize: 13, fontFamily: 'Nunito Sans' }}>Dinle</Text>
                    </View>

                </View>

                <View style={{
                    marginTop: 10,
                    left: 15,
                    flexDirection: 'row'
                }}>
                    <VideoSvg height={60} width={60} />

                    <View style={{
                        marginLeft: 10
                    }}>
                        <Text style={{
                            fontFamily: 'Nunito Sans',
                            fontSize: 15,
                            color: '#000',
                            fontWeight: '600',
                            width: '70%'
                        }}>
                            Kavga
                        </Text>
                        <Text style={{
                            fontFamily: 'Nunito Sans',
                            fontSize: 13,
                            color: '#000',
                            fontWeight: '200',
                            width: '70%'
                        }}>
                            Akçeşme Mah. Garaj Cad. No: 5
                            Karatay/KONYA
                        </Text>
                    </View>

                    <View style={{
                        width: 60,
                        height: 25,
                        backgroundColor: '#ec8787',
                        borderRadius: 12,
                        right: 45,
                        top: 16,
                        flexDirection: 'row'
                    }}>
                        <DinleSvg height={12} width={12} style={{
                            marginLeft: 8,
                            marginRight: 5,
                            marginTop: 6
                        }} />
                        <Text style={{ color: '#fff', marginTop: 2, fontSize: 13, fontFamily: 'Nunito Sans' }}>İzle</Text>
                    </View>

                </View>

                <View style={{
                    marginTop: 10,
                    left: 15,
                    flexDirection: 'row'
                }}>
                    <GorselSvg height={60} width={60} />

                    <View style={{
                        marginLeft: 10
                    }}>
                        <Text style={{
                            fontFamily: 'Nunito Sans',
                            fontSize: 15,
                            color: '#000',
                            fontWeight: '600',
                            width: '70%'
                        }}>
                            Trafik Kazası
                        </Text>
                        <Text style={{
                            fontFamily: 'Nunito Sans',
                            fontSize: 13,
                            color: '#000',
                            fontWeight: '200',
                            width: '70%'
                        }}>
                            Akçeşme Mah. Garaj Cad. No: 5
                            Karatay/KONYA
                        </Text>
                    </View>

                    <View style={{
                        width: 60,
                        height: 25,
                        backgroundColor: '#68bed2',
                        borderRadius: 12,
                        right: 45,
                        top: 16,
                        flexDirection: 'row'
                    }}>
                        <GorSvg height={12} width={12} style={{
                            marginLeft: 8,
                            marginRight: 5,
                            marginTop: 6
                        }} />
                        <Text style={{ color: '#fff', marginTop: 2, fontSize: 13, fontFamily: 'Nunito Sans' }}>Gör</Text>
                    </View>

                </View>


            </View>
        </>
    )
}

export default ListGorunumu