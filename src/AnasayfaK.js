import { View, Text, VirtualizedList, StatusBar, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react';

import UstMenu from '../components/UstMenu'
import InstaStory from '../components/InstaStory'
import Kurlar from '../components/Kurlar'
import GirisPanel from '../components/GirisPanel'
import HaritaSvg from '../svg/HaritaSvg'
import ListSvg from '../svg/ListSvg'
import Haritalar from '../components/Haritalar'
import HaritalarResim from '../components/HaritalarResim'
import AltMenu from '../components/AltMenu'
import ListGorunumu from '../components/ListGorunumu'

const AnasayfaK = () => {
  const [secilenGorunum, setSecilenGorunum] = useState('Harita');
  return (
    <>
      <StatusBar backgroundColor="transparent" translucent={true} />
      <View>

        <UstMenu />

        <InstaStory />

        <Kurlar />

        <GirisPanel />

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
          {/* Harita Görünümü */}
          <TouchableOpacity style={{
            height: 35,
            width: '45%',
            marginLeft: 13,
            marginRight: 12,
          }} onPress={() => setSecilenGorunum('Harita')}>
            <View style={{
              backgroundColor: secilenGorunum === 'Harita' ? '#8CB75E' : '#F3F3F3',
              borderRadius: 3,
              flexDirection: 'row',
              alignItems: 'center'
            }}>
              <HaritaSvg height={22} width={22} fill={secilenGorunum === 'Harita' ? '#fff' : '#9f9f9f'} style={{
                margin: 6,
                marginLeft: 20
              }} />
              <Text style={{
                color: secilenGorunum === 'Harita' ? '#fff' : '#9f9f9f',
                marginTop: -2,
                fontFamily: 'Nunito Sans',
                fontSize: 15,
                fontVariant: 'Regular'
              }}>Harita Görünümü</Text>
            </View>
          </TouchableOpacity>

          {/* Liste Görünümü */}
          <TouchableOpacity style={{
            width: '45%',
            height: 35,
          }} onPress={() => setSecilenGorunum('Liste')}>
            <View style={{
              backgroundColor: secilenGorunum === 'Liste' ? '#8CB75E' : '#F3F3F3',
              flexDirection: 'row',
              alignItems: 'center',
              borderRadius: 3,
            }}>
              <ListSvg height={22} width={22} fill={secilenGorunum === 'Liste' ? '#fff' : '#9f9f9f'} style={{
                margin: 6,
                marginTop: 6,
                marginLeft: 20
              }} />
              <Text style={{
                color: secilenGorunum === 'Liste' ? '#fff' : '#9f9f9f',
                fontSize: 15,
                fontFamily: 'Nunito Sans',
                fontVariant: 'Regular',
              }}>Liste Görünümü</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Alt alan - Seçilen görünüme göre içeriğin render edilmesi */}
        {secilenGorunum === 'Harita' ? <HaritalarResim /> : <ListGorunumu />}

        <AltMenu />

      </View>
    </>
  )
}

export default AnasayfaK