import { View, Text, Button, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import BottomSheet from '@gorhom/bottom-sheet';
import React, { useRef } from 'react';

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

    // Bottom Sheet ref
    const bottomSheetRef = useRef(null);

    // Open bottom sheet
    const openBottomSheet = () => {
        bottomSheetRef.current?.expand();
    };

    // Close bottom sheet
    const closeBottomSheet = () => {
        bottomSheetRef.current?.close();
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

                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Button title="Open Bottom Sheet" onPress={openBottomSheet} />
                        <BottomSheet
                            ref={bottomSheetRef}
                            index={1}
                            snapPoints={[200, 400]}
                            animateOnMount={true}
                        >
                            <View style={{ backgroundColor: 'white', padding: 16 }}>
                                <Text>Bottom Sheet Content</Text>
                                <Button title="Close" onPress={closeBottomSheet} />
                            </View>
                        </BottomSheet>
                    </View>

                    <TouchableOpacity style={{ left: 100, top: -50 }} onPress={() => handleMenuPress('Uyari')}>
                        <GonderSvg />
                    </TouchableOpacity>

                    <KullaniciSvg height={30} width={30} fill={'#B9B9B9'} style={{ left: 90 + 2 }} />

                    <AyarlarSvg height={30} width={30} style={{ left: 110 + 45 }} />

                </View>

            </View>
        </>
    )
}

export default AltMenuK