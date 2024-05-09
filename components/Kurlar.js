import { View, Text, Image } from 'react-native'
import React from 'react'

import DolarSvg from '../svg/DolarSvg'
import EuroSvg from '../svg/EuroSvg'
import AltinSvg from '../svg/AltinSvg'
import BorsaSvg from '../svg/BorsaSvg'

const Kurlar = () => {
    return (
        <View style={{
            width: '100%',
            height: 165,
            marginTop: -20,
            backgroundColor: '#FFF',
        }}>

            <View style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                left: 3
            }}>


                <View style={{
                    marginTop: 20,
                    width: '23%',
                    height: 122,
                    backgroundColor: '#fff',
                    borderWidth: 0.5,
                    borderColor: '#F6F6F6',
                    marginRight: 6
                }}>
                    <View style={{
                        borderTopLeftRadius: 6,
                        borderTopRightRadius: 6,
                        width: '100%',
                        height: 3,
                        backgroundColor: '#8CB75E'
                    }} />

                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        top: 10,
                        marginBottom: 3
                    }}>
                        <DolarSvg height={35} width={35} />
                    </View>

                    <Text style={{
                        color: '#000',
                        fontSize: 11,
                        fontFamily: 'Poppins',
                        marginTop: 12,
                        textAlign: 'center'
                    }}> DOLAR </Text>

                    <Text style={{
                        color: '#000',
                        fontSize: 18,
                        fontFamily: 'Poppins',
                        textAlign: 'center'
                    }}> 30.50 </Text>

                    <Text style={{
                        color: '#000',
                        fontSize: 11,
                        fontFamily: 'Poppins',

                        textAlign: 'center'
                    }}> TÜRK LİRASI </Text>

                </View>


                <View style={{
                    marginTop: 20,
                    width: '23%',
                    height: 122,
                    borderWidth: 0.5,
                    borderColor: '#F6F6F6',
                    backgroundColor: '#fff',
                    marginRight: 6
                }}>
                    <View style={{
                        borderTopLeftRadius: 6,
                        borderTopRightRadius: 6,
                        width: '100%',
                        height: 3,
                        backgroundColor: '#D97070'
                    }} />
                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        top: 10,
                        marginBottom: 3
                    }}>
                        <EuroSvg height={35} width={35} />
                    </View>

                    <Text style={{
                        color: '#000',
                        fontSize: 11,
                        fontFamily: 'Poppins',

                        marginTop: 12,
                        textAlign: 'center'
                    }}> EURO </Text>

                    <Text style={{
                        color: '#000',
                        fontSize: 18,
                        fontFamily: 'Poppins',

                        textAlign: 'center'
                    }}> 30.50 </Text>

                    <Text style={{
                        color: '#000',
                        fontSize: 11,
                        fontFamily: 'Poppins',

                        textAlign: 'center'
                    }}> TÜRK LİRASI </Text>

                </View>

                <View style={{
                    marginTop: 20,
                    width: '23%',
                    height: 122,
                    borderWidth: 0.5,
                    borderColor: '#F6F6F6',
                    backgroundColor: '#fff',
                    marginRight: 6
                }}>
                    <View style={{
                        borderTopLeftRadius: 6,
                        borderTopRightRadius: 6,
                        width: '100%',
                        height: 3,
                        backgroundColor: '#FFBC57'
                    }} />
                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        top: 10,
                        marginBottom: 3
                    }}>
                        <AltinSvg height={35} width={35} />
                    </View>

                    <Text style={{
                        color: '#000',
                        fontSize: 11,
                        fontFamily: 'Poppins',

                        marginTop: 12,
                        textAlign: 'center'
                    }}> GRAM ALTIN </Text>

                    <Text style={{
                        color: '#000',
                        fontSize: 18,
                        fontFamily: 'Poppins',

                        textAlign: 'center'
                    }}> 1.193,43 </Text>

                    <Text style={{
                        color: '#000',
                        fontSize: 11,
                        fontFamily: 'Poppins',

                        textAlign: 'center'
                    }}> TÜRK LİRASI </Text>

                </View>

                <View style={{
                    marginTop: 20,
                    width: '23%',
                    height: 122,
                    borderWidth: 0.5,
                    borderColor: '#F6F6F6',
                    backgroundColor: '#fff',
                    marginRight: 6
                }}>
                    <View style={{
                        borderTopLeftRadius: 6,
                        borderTopRightRadius: 6,
                        width: '100%',
                        height: 3,
                        backgroundColor: '#5EA5B7'
                    }} />
                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        top: 10,
                        marginBottom: 3
                    }}>
                        <BorsaSvg height={35} width={35} />
                    </View>

                    <Text style={{
                        color: '#000',
                        fontSize: 11,
                        fontFamily: 'Poppins',

                        marginTop: 12,
                        textAlign: 'center'
                    }}> BIST100 </Text>

                    <Text style={{
                        color: '#000',
                        fontSize: 18,
                        fontFamily: 'Poppins',

                        textAlign: 'center'
                    }}> 8.665,68 </Text>

                    <Text style={{
                        color: '#000',
                        fontSize: 11,
                        fontFamily: 'Poppins',

                        textAlign: 'center'
                    }}> TÜRK LİRASI </Text>

                </View>

            </View>
        </View>
    )
}

export default Kurlar