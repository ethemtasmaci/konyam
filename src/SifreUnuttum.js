import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React from 'react'

import GeriSvg from '../svg/GeriSvg'
import TelefonSvg from '../svg/TelefonSvg'

const SifreUnuttum = () => {
    const navigation = useNavigation();

    const handleMenuPress = (screenName) => {
        navigation.navigate(screenName); // İlgili sayfaya yönlendir
    };
    return (
        <>
            <View style={{
                width: '100%',
                height: '100%',
                backgroundColor: '#fff'
            }}>
                <View style={{
                    width: '85%',
                    left: 25,
                    right: 25,
                    top: 50
                }}>

                    <TouchableOpacity onPress={() => handleMenuPress('GirisYap')}>
                        <GeriSvg height={30} width={30} fiil={'#000'} />
                    </TouchableOpacity>

                    <Text style={{
                        color: '#000',
                        fontFamily: 'Poppins',
                        fontSize: 27,
                        fontWeight: 'medium',
                        marginTop: 37
                    }}>Parolamı Unuttum</Text>

                    <Text style={{
                        color: '#000',
                        fontSize: 16,
                        fontFamily: 'Poppins',
                        fontWeight: 'light',
                    }}>
                        Bilgilerinizi girin
                    </Text>

                    <View>
                        <Text style={{
                            color: '#000',
                            top: 70,
                            fontFamily: 'Poppins',
                            fontSize: 16,
                            paddingTop: 0
                        }}>Telefon Numaranız</Text>
                        <View style={{ width: '100%', height: 50, top: 85, borderRadius: 8, borderWidth: 2, borderColor: '#D8D8D8', flexDirection: 'row' }}>
                            <TelefonSvg fill={'#000'} height={25} width={25} style={{ marginHorizontal: 10, marginTop: 10, left: 5 }} />
                            <TextInput style={{
                                flex: 1,
                                color: '#000',
                                paddingHorizontal: 10
                            }}
                                placeholderTextColor="#000"
                                placeholder='0505 505 5005'
                            />
                        </View>
                    </View>

                    <View>
                        <Text style={{
                            color: '#878787',
                            top: 110,
                            fontFamily: 'Nunito Sans',
                            fontSize: 14,
                            textAlign: 'center'
                        }}>
                            * Bir sonraki adımda telefon numaranıza <Text style={{ color: '#8CB75E' }}>onay mesajı</Text> gönderileceği için <Text style={{ color: '#8CB75E' }}>geçerli </Text> bir telefon numarası girmeniz gerekmektedir.
                        </Text>
                    </View>

                    <TouchableOpacity onPress={() => handleMenuPress('DogrulamaSifreUnuttum')}>
                        <View style={{
                            marginTop: 484,
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
                                İleri
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
}

export default SifreUnuttum