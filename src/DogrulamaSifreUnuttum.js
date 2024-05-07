import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'
import GeriSvg from '../svg/GeriSvg'

const DogrulamaSifreUnuttum = () => {
    const navigation = useNavigation();
    const [code, setCode] = useState(Array(4).fill(''));

    const handleChangeText = (text, index) => {
        const newCode = [...code];
        newCode[index] = text;

        if (text && index < 3) {
            // Otomatik olarak bir sonraki kutuya geç
            this['input' + (index + 1)].focus();
        }

        setCode(newCode);
    };

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

                    <TouchableOpacity onPress={() => handleMenuPress('SifreUnuttum')}>
                        <GeriSvg height={30} width={30} fiil={'#000'} />
                    </TouchableOpacity>

                    <Text style={{
                        color: '#000',
                        fontFamily: 'Poppins',
                        fontSize: 27,
                        fontWeight: 'medium',
                        marginTop: 37
                    }}>Doğrulama işlemi</Text>

                    <Text style={{
                        color: '#878787',
                        fontSize: 16,
                        fontFamily: 'Poppins',
                        fontWeight: 'light',
                    }}>
                        SMS ile Gelen Kodu Girin
                    </Text>

                    <View style={{ width: '100%' }}>
                        <View style={{ marginTop: 85, flexDirection: 'row', marginLeft: 'auto', marginRight: 'auto', left: -13 }}>
                            {code.map((_, i) => (
                                <TextInput
                                    key={i}
                                    ref={ref => (this['input' + i] = ref)}
                                    onChangeText={text => handleChangeText(text, i)}
                                    value={code[i]}
                                    style={{ width: 80, height: 70, borderWidth: 1, borderColor: 'gray', textAlign: 'center', borderRadius: 12, marginLeft: 12, color: '#000', fontSize: 27, fontWeight: 'medium' }}
                                    maxLength={1}
                                    keyboardType="numeric"
                                />
                            ))}
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{
                                color: '#878787',
                                marginTop: 15,
                                fontFamily: 'Poppins',
                                fontSize: 16,
                                paddingTop: 0
                            }}>Kodu Yeniden Gönder</Text>
                            <Text style={{
                                color: '#8CB75E',
                                marginTop: 15,
                                fontFamily: 'Poppins',
                                fontSize: 16,
                                paddingTop: 0,
                                marginLeft: 'auto',
                            }}> 01.50 </Text>
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => handleMenuPress('YeniParolaOlustur')}>
                        <View style={{
                            marginTop: 425,
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
                                Onayla
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
}

export default DogrulamaSifreUnuttum