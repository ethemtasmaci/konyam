import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'
import { RadioButton } from 'react-native-paper';


import GeriSvg from '../svg/GeriSvg'
import AnahtarSvg from '../svg/AnahtarSvg';
import GozSvg from '../svg/GozSvg';
import TikSvg from '../svg/TikSvg';

const YeniParolaOlustur = () => {
    const [value, setValue] = useState('');
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

                    <TouchableOpacity onPress={() => handleMenuPress('DogrulamaSifreUnuttum')}>
                        <GeriSvg height={30} width={30} fiil={'#000'} />
                    </TouchableOpacity>

                    <Text style={{
                        color: '#000',
                        fontFamily: 'Poppins',
                        fontSize: 27,
                        fontWeight: 'medium',
                        marginTop: 37,
                    }}>Yeni Parola Oluştur</Text>

                    <Text style={{
                        color: '#878787',
                        fontSize: 16,
                        fontFamily: 'Poppins',
                        fontWeight: 'light',
                    }}>
                        Parolanızı belirleyin
                    </Text>

                    <View>
                        <Text style={{
                            color: '#000',
                            top: 47,
                            fontFamily: 'Poppins',
                            fontSize: 16,
                            paddingTop: 0
                        }}>Parolanız</Text>
                        <View style={{ width: '100%', height: 50, top: 60, borderRadius: 8, borderWidth: 2, borderColor: '#C3C3C3', flexDirection: 'row' }}>
                            <AnahtarSvg fill={'#000'} height={25} width={25} style={{ marginHorizontal: 10, marginTop: 10, left: 5 }} />
                            <TextInput style={{
                                flex: 1,
                                color: '#000',
                                paddingHorizontal: 10
                            }}
                                placeholderTextColor="#000"
                                placeholder='*********'
                            />
                            <GozSvg fill={'#D2D2D2'} height={25} width={25} style={{ marginHorizontal: 10, marginTop: 10, right: 5 }} />
                        </View>
                    </View>

                    <View>
                        <Text style={{
                            color: '#000',
                            top: 87,
                            fontFamily: 'Poppins',
                            fontSize: 16,
                            paddingTop: 0
                        }}>Parola Tekrar</Text>
                        <View style={{ width: '100%', height: 50, top: 97, borderRadius: 8, borderWidth: 2, borderColor: '#C3C3C3', flexDirection: 'row' }}>
                            <AnahtarSvg fill={'#000'} height={25} width={25} style={{ marginHorizontal: 10, marginTop: 10, left: 5 }} />
                            <TextInput style={{
                                flex: 1,
                                color: '#000',
                                paddingHorizontal: 10
                            }}
                                placeholderTextColor="#000"
                                placeholder='*********'
                            />
                            <GozSvg fill={'#D2D2D2'} height={25} width={25} style={{ marginHorizontal: 10, marginTop: 10, right: 5 }} />
                        </View>
                    </View>

                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        top: 125
                    }}>
                        <TikSvg style={{ marginRight: 10 }} height={17} width={17} />
                        <Text style={{ color: '#000' }}>Şifreniz 8-16 karakter uzunluğunda olmalıdır.</Text>
                    </View>

                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        top: 130
                    }}>
                        <TikSvg style={{ marginRight: 10 }} height={17} width={17} />
                        <Text style={{ color: '#000' }}>Şifrenizde en az 1 harf ve 1 rakam yer almalıdır.</Text>
                    </View>

                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        top: 135,
                        marginBottom: 400
                    }}>
                        <TikSvg style={{ marginRight: 10 }} height={17} width={17} />
                        <Text style={{ color: '#000' }}>Şifrenizde en az bir özel karakter olmalıdır.</Text>
                    </View>

                    <TouchableOpacity onPress={() => handleMenuPress('ParolaUnuttumSon')}>
                        <View style={{
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
                                Kaydı Tamamla
                            </Text>
                        </View>
                    </TouchableOpacity>

                </View>
            </View>
        </>
    )
}

export default YeniParolaOlustur