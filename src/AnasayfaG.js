import { View, Text, VirtualizedList, StatusBar, Image } from 'react-native'
import React from 'react'

import UstMenu from '../components/UstMenu'
import InstaStory from '../components/InstaStory'
import Kurlar from '../components/Kurlar'
import GirisPanel from '../components/GirisPanel'
import HaritaSvg from '../svg/HaritaSvg'
import ListSvg from '../svg/ListSvg'
import HaritalarResim from '../components/HaritalarResim'
import AltMenu from '../components/AltMenu'
import HosGelddin from './HosGelddin'

const AnasayfaG = () => {
    return (
        <>
            <StatusBar backgroundColor="transparent" translucent={true} />
            <View>

                <UstMenu />

                <InstaStory />

                <Kurlar />

                <HosGelddin />

                <View style={{
                    flexDirection: 'row',
                    width: '98%',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    height: 44,
                    backgroundColor: '#F3F3F3',
                    borderRadius: 6,
                    paddingTop: 4,
                }}>
                    <View style={{
                        backgroundColor: '#8CB75E',
                        height: 35,
                        width: '45%',
                        borderRadius: 3,
                        marginLeft: 13,
                        marginRight: 12,
                        flexDirection: 'row'
                    }}>
                        <HaritaSvg height={22} width={22} fill={'#fff'} style={{
                            margin: 6,
                            marginLeft: 20
                        }} />
                        <Text style={{
                            color: '#fff',
                            marginTop: 6,
                            fontFamily: 'Nunito Sans',
                            fontSize: 15,
                            fontVariant: 'Regular'
                        }}>Harita Görünümü</Text>
                    </View>
                    <View style={{
                        width: '45%',
                        height: 35,
                        backgroundColor: '#F3F3F3',
                        borderRadius: 3,
                        flexDirection: 'row'
                    }}>
                        <ListSvg height={22} width={22} style={{
                            margin: 6,
                            marginLeft: 20
                        }} />
                        <Text style={{
                            color: '#9f9f9f',
                            marginTop: 6,
                            fontFamily: 'Nunito Sans',
                            fontSize: 15,
                            fontVariant: 'Regular'
                        }}>Liste Görünümü</Text>
                    </View>
                </View>

                {/* <Haritalar /> */}

                <HaritalarResim />

                <AltMenu />

            </View>
        </>
    )
}

export default AnasayfaG