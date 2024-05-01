import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'
import { RadioButton } from 'react-native-paper';


import GeriSvg from '../svg/GeriSvg'
import AnahtarSvg from '../svg/AnahtarSvg';
import GozSvg from '../svg/GozSvg';
import TikSvg from '../svg/TikSvg';

const Parola = () => {
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

                    <TouchableOpacity onPress={() => handleMenuPress('KisiselBilgiler')}>
                        <GeriSvg height={30} width={30} fiil={'#000'} />
                    </TouchableOpacity>

                    <Text style={{
                        color: '#000',
                        fontFamily: 'Poppins',
                        fontSize: 27,
                        fontWeight: 'medium',
                        marginTop: 37,
                    }}>Parolanız</Text>

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
                        <View style={{ width: '100%', height: 50, top: 67, borderRadius: 8, borderWidth: 2, borderColor: '#C3C3C3', flexDirection: 'row' }}>
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
                        }}>Parola Tekrarı</Text>
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
                        <Text style={{ color: '#878787' }} >Şifreniz 8-16 karakter uzunluğunda olmalıdır.</Text>
                    </View>

                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        top: 130
                    }}>
                        <TikSvg style={{ marginRight: 10 }} height={17} width={17} />
                        <Text style={{ color: '#878787' }} >Şifrenizde en az 1 harf ve 1 rakam yer almalıdır.</Text>
                    </View>

                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        top: 135
                    }}>
                        <TikSvg style={{ marginRight: 10 }} height={17} width={17} />
                        <Text style={{ color: '#878787' }} >Şifrenizde en az bir özel karakter olmalıdır.</Text>
                    </View>

                    <View>
                        <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
                            <View style={{ marginTop: 340, flexDirection: 'row', width: '80%' }}>
                                <RadioButton.Item value="Onayli" color="#8CB75E" style={{ marginLeft: -15, marginRight: -15 }} />
                                <Text style={{
                                    color: '#878787',
                                    fontSize: 14,
                                    fontFamily: 'Nunito Sans',
                                    marginTop: 10
                                }}><Text style={{ color: '#8CB75E' }}>Kullanım koşulları</Text> ve <Text style={{ color: '#8CB75E' }}>üyelik sözleşmesini</Text> okudum,
                                    kabul ediyorum.</Text>
                            </View>
                        </RadioButton.Group>

                    </View>

                    <TouchableOpacity onPress={() => handleMenuPress('KayitOlSon')}>
                        <View style={{
                            marginTop: 30,
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

export default Parola