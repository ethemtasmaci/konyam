import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';

import MenuSvg from '../svg/MenuSvg'
import YManamenu from './YManamenu';
import YMfaydalisayfalar from './YMfaydalisayfalar';

const YanMenu = () => {
    const [selectedMenu, setSelectedMenu] = useState('AnaMenu');

    const navigation = useNavigation();

    const handleMenuPress = (screenName) => {
        navigation.navigate(screenName); // İlgili sayfaya yönlendir
    };
    return (
        <>
            <View style={{ width: '100%', height: '100%' }}>
                <View style={{
                    width: '100%',
                    height: 110,
                    backgroundColor: '#fff',
                    flexDirection: 'row',
                    paddingTop: 50,
                    paddingLeft: 20,
                }}>
                    <MenuSvg width={25} height={25} fill={'#000'} />
                    <Text style={{
                        color: '#000',
                        fontSize: 18,
                        fontFamily: 'Nunito Sans',
                        fontWeight: 'light',
                        marginLeft: 20
                    }}>Menü</Text>
                    <TouchableOpacity style={{
                        marginLeft: 'auto',
                    }} onPress={() => handleMenuPress('AnasayfaK')}>
                        <Text style={{
                            width: 33,
                            height: 33,
                            backgroundColor: '#727272',
                            borderRadius: 50,
                            textAlign: 'center',
                            color: '#fff',
                            fontSize: 16,
                            paddingTop: 5,
                            right: 25
                        }}>X</Text>
                    </TouchableOpacity>
                </View>

                {/* ana menüye tıklanınca gelecek olan components
                <YManamenu />

                faydalı sayfalara tıklanınca gelecek olan components
                <YMfaydalisayfalar /> */}

                <View style={{
                    flexDirection: 'column',
                    flex: 1
                }}>
                    <View style={{
                        flexDirection: 'row',
                        width: '100%',
                        height: 68
                    }}>
                        <TouchableOpacity onPress={() => setSelectedMenu('AnaMenu')}>
                            <View style={{
                                backgroundColor: selectedMenu === 'AnaMenu' ? '#EEEEEE' : '#F7F7F7',
                                width: 210,
                                height: 65,
                                paddingTop: 20
                            }}>
                                <Text style={{
                                    color: '#000',
                                    textAlign: 'center',
                                    fontFamily: 'Nunito Sans',
                                    fontSize: 18,
                                    fontWeight: 'regular',
                                }}>Ana Menü</Text>
                            </View>
                            <View style={{ width: 210, height: 3, backgroundColor: selectedMenu === 'AnaMenu' ? '#88BF41' : '#F7F7F7' }} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setSelectedMenu('FaydaliSayfalar')}>
                            <View style={{
                                backgroundColor: selectedMenu === 'FaydaliSayfalar' ? '#EEEEEE' : '#F7F7F7',
                                width: 210,
                                height: 65,
                                paddingTop: 20
                            }}>
                                <Text style={{
                                    color: '#000',
                                    textAlign: 'center',
                                    fontFamily: 'Nunito Sans',
                                    fontSize: 18,
                                    fontWeight: 'regular',
                                }}>Faydalı Sayfalar</Text>
                            </View>
                            <View style={{ width: 210, height: 3, backgroundColor: selectedMenu === 'FaydaliSayfalar' ? '#88BF41' : '#F7F7F7' }} />
                        </TouchableOpacity>
                    </View>

                    {/* Seçilen menüye göre ilgili bileşeni render et */}
                    {selectedMenu === 'AnaMenu' ? <YManamenu /> : null}
                    {selectedMenu === 'FaydaliSayfalar' ? <YMfaydalisayfalar /> : null}
                </View>

            </View>
        </>
    )
}

export default YanMenu