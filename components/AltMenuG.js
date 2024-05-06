import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';

import AnasayfaSvg from '../svg/AnasayfaSvg'
import HaberSvg from '../svg/HaberSvg'
import KullaniciSvg from '../svg/KullaniciSvg'
import AyarlarSvg from '../svg/AyarlarSvg'
import GonderSvg from '../svg/GonderSvg'

const AltMenuG = () => {
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
                    backgroundColor: '#F5F5F5',
                    borderRadius: 10,
                    flexDirection: 'row',
                    paddingTop: 20
                }}>

                    <AnasayfaSvg height={30} width={30} style={{ left: 23 }} />

                    <HaberSvg height={30} width={30} style={{ left: 23 + 50 }} />

                    <TouchableOpacity style={{ left: 100, top:-50 }} onPress={() => handleMenuPress('IcerikGonder')}>
                        <GonderSvg />
                    </TouchableOpacity>

                    <KullaniciSvg height={30} width={30} fill={'#B9B9B9'} style={{ left: 90 + 28 }} />

                    <AyarlarSvg height={30} width={30} style={{ left: 110 + 45 }} />

                </View>

            </View>
        </>
    )
}

export default AltMenuG