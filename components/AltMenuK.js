import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';

import AnasayfaSvg from '../svg/AnasayfaSvg'
import HaberSvg from '../svg/HaberSvg'
import KullaniciSvg from '../svg/KullaniciSvg'
import AyarlarSvg from '../svg/AyarlarSvg'
import GonderSvg from '../svg/GonderSvg'

const AltMenuK = () => {
    const navigation = useNavigation();

    const handleMenuPress = (screenName) => {
        navigation.navigate(screenName); // İlgili sayfaya yönlendir
    };
    return (
        <>
            <View style={{
                width: '97%',
                height: 120,
            }}>
                <View style={{
                    left: 6,
                    marginTop: 40,
                    width: '100%',
                    height: '62%',
                    backgroundColor: '#fff',
                    borderRadius: 10,
                    flexDirection: 'row',
                    paddingTop: 20
                }}>

                    <AnasayfaSvg height={30} width={30} style={{ left: 23 }} />

                    <HaberSvg height={30} width={30} style={{ left: 23 + 50 }} />

                    <TouchableOpacity onPress={() => handleMenuPress('Uyari')}>
                        <LinearGradient
                            colors={['#C1F18E', '#C1F18E']}
                            style={{
                                borderRadius: 50,
                                width: 80,
                                height: 80,
                                left: 73 + 25,
                                top: -55
                            }}>
                            {/* İçerik buraya gelecek */}
                            <GonderSvg height={50} width={50} style={{
                                marginLeft: 'auto',
                                marginRight: 'auto',
                                marginTop: 18
                            }} />
                        </LinearGradient>
                    </TouchableOpacity>

                    <KullaniciSvg height={30} width={30} style={{ left: 90 + 25 }} />

                    <AyarlarSvg height={30} width={30} style={{ left: 110 + 60 }} />

                </View>

            </View>
        </>
    )
}

export default AltMenuK