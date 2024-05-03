import { View, Text, VirtualizedList, StatusBar, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react';

import UstMenu from '../components/UstMenu'
import InstaStory from '../components/InstaStory'
import Kurlar from '../components/Kurlar'
import GirisPanel from '../components/GirisPanel'
import HaritaSvg from '../svg/HaritaSvg'
import ListSvg from '../svg/ListSvg'
import HaritalarResim from '../components/HaritalarResim'
import ListGorunumu from '../components/ListGorunumu'
import AltMenuK from '../components/AltMenuK';

const AnasayfaK = () => {
  const [secilenGorunum, setSecilenGorunum] = useState('Harita');
  return (
    <>
      <StatusBar backgroundColor="transparent" translucent={true} />
      <View style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#fff'
      }}>

        <UstMenu />

        <InstaStory />

        <Kurlar />

        <GirisPanel />

        <View style={{
          flexDirection: 'row',
          width: '95%',
          marginLeft: 'auto',
          marginRight: 'auto',
          height: 44,
          backgroundColor: '#fff',
          borderColor: '#F5F5F5',
          borderWidth: 1,
          borderRadius: 6,
          paddingTop: 4,
        }}>
          {/* Harita Görünümü */}
          <TouchableOpacity style={{
            height: 35,
            width: '45%',
            marginLeft: 13,
            marginRight: 8,
          }} onPress={() => setSecilenGorunum('Harita')}>
            <View style={{
              backgroundColor: secilenGorunum === 'Harita' ? '#8CB75E' : '#fff',
              borderRadius: 3,
              flexDirection: 'row',
              alignItems: 'center'
            }}>
              <HaritaSvg height={22} width={22} fill={secilenGorunum === 'Harita' ? '#fff' : '#9f9f9f'} style={{
                margin: 6,
                marginLeft: 10
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
              backgroundColor: secilenGorunum === 'Liste' ? '#8CB75E' : '#fff',
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

        <AltMenuK />

      </View>
    </>
  )
}

export default AnasayfaK