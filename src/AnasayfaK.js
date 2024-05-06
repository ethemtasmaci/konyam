import { View, Text, VirtualizedList, StatusBar, Image, TouchableOpacity } from 'react-native'
import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import React, { useRef, useState } from 'react';

import UstMenu from '../components/UstMenu'
import InstaStory from '../components/InstaStory'
import Kurlar from '../components/Kurlar'
import GirisPanel from '../components/GirisPanel'
import HaritaSvg from '../svg/HaritaSvg'
import ListSvg from '../svg/ListSvg'
import HaritalarResim from '../components/HaritalarResim'
import ListGorunumu from '../components/ListGorunumu'
import AnasayfaSvg from '../svg/AnasayfaSvg'
import HaberSvg from '../svg/HaberSvg'
import KullaniciSvg from '../svg/KullaniciSvg'
import AyarlarSvg from '../svg/AyarlarSvg'
import GonderSvg from '../svg/GonderSvg'

const AnasayfaK = () => {
  const [secilenGorunum, setSecilenGorunum] = useState('Harita');
  const bottomSheetModalRef = useRef(null);

  const handlePresentModalPress = () => {
    bottomSheetModalRef.current.present();
  };
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



        {/* menu kısmı */}
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

            <BottomSheetModalProvider>

              <BottomSheetModal
                ref={bottomSheetModalRef}
                snapPoints={['25%', '50%', '90%']}
              >
                <View>
                  <Text>Your content here</Text>
                </View>
              </BottomSheetModal>

              <TouchableOpacity style={{ left: 100, top: -50 }} onPress={handlePresentModalPress}>
                <GonderSvg />
              </TouchableOpacity>
              
            </BottomSheetModalProvider>
            <KullaniciSvg height={30} width={30} fill={'#B9B9B9'} style={{ left: 90 + 30 }} />

            <AyarlarSvg height={30} width={30} style={{ left: 110 + 55 }} />

          </View>

        </View>

      </View>
    </>
  )
}

export default AnasayfaK